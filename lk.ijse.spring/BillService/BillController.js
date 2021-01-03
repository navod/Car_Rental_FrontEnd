let dateDiff;
let requestBillId;
let d = new Date();
let strDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();


$('#billCustContact').keyup(function (event) {
    $('#customerOrders').empty();
    let billContact = $('#billCustContact').val();
    if (event.keyCode === 13) {

        $.ajax({
            url: 'http://localhost:8080/carRent/api/v1/reqOrder/getCustomerContact',
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify({
                "contact": billContact
            }),
            success: function (resp) {
                if (resp.data === null) {
                    alert("no customer records");
                } else {
                    let condition = resp.data;
                    for (let i in resp.data) {
                        requestBillId = resp.data[i].reqId;
                        $('#customerOrders').append(`<option>Select</option><option>${resp.data[i].reqId}</option>`);
                        $('#customerOrders').on('change', function () {
                            $('#billCustEmail').val(resp.data[i].custEmail);
                            $('#billCustNIC').val(resp.data[i].custNIC);
                            $('#billCustName').val(resp.data[i].custName);
                            $('#billCarId').val(resp.data[i].carId);
                            $('#billCarModel').val(resp.data[i].carModel);
                            $('#billCarMonthlyFee').val(resp.data[i].monthlyFee);
                            $('#billCarDailyFee').val(resp.data[i].dailyFee);
                            $('#billCarType').val(resp.data[i].carType);
                            $('#carAdditionalFee').val(resp.data[i].additionalKmFee);
                            $('#billDamageFee').val(resp.data[i].damageFee);
                            $('#billLastDuration').val(resp.data[i].carDuration);
                            $('#billPickUpDate').val(resp.data[i].pickUpDate);
                            $('#billReturnDate').val(resp.data[i].returnDate);
                            $('#billDailyFeeKm').val(resp.data[i].dailyKm);
                            $('#billMonthlyFeeKm').val(resp.data[i].monthlyKm);
                            dateDiff = resp.data[i].dateDiff;
                            calculateTotal();
                        });
                    }
                }
            }
        });
    }
});

function calculateTotal() {

    $('#billLastDuration2').keyup(function () {
        let calcDuration = Number($('#billLastDuration2').val()) - Number($('#billLastDuration').val());
        //150                               //100
        if (dateDiff >= 31 || dateDiff >= 30) {
            if (calcDuration > $('#billMonthlyFeeKm').val()) {
                let monthlyFeeRS = Number($('#billCarMonthlyFee').val());
                let monthlyFeeKm = Number($('#billMonthlyFeeKm').val());

                $('#totalFee').val((monthlyFeeKm * monthlyFeeRS) + Number($('#calculateAdditonalFee').val()) + Number($('#billDamageFee').val()));


            } else {
                $('#calculateAdditonalFee').val("");
                let monthlyFeeRS = Number($('#billCarMonthlyFee').val());
                let monthlyFeeKm = Number($('#billMonthlyFeeKm').val());
                $('#totalFee').val($('#billDamageFee').val(monthlyFeeRS * monthlyFeeKm));

            }
        } else {
            if (calcDuration > $('#billDailyFeeKm').val()) {

                $('#calculateAdditonalFee').val(calcDuration * Number($('#carAdditionalFee').val()));
                let dailyFeeRs = Number($('#billCarDailyFee').val());
                let dailyFeeKm = Number($('#billDailyFeeKm').val());
                $('#totalFee').val((dailyFeeRs * dailyFeeKm) + Number($('#calculateAdditonalFee').val()) + Number($('#billDamageFee').val()));

            } else {
                $('#calculateAdditonalFee').val("");
                let dailyFeeRs = Number($('#billCarDailyFee').val());
                let dailyFeeKm = Number($('#billDailyFeeKm').val());
                $('#totalFee').val(Number($('#billDamageFee').val()) + Number(dateDiff) * dailyFeeRs);

            }
        }
    });
}

$('#billDamageFee').keyup(function () {
    let calcDuration = Number($('#billLastDuration2').val()) - Number($('#billLastDuration').val());
    //150                               //100
    if (dateDiff >= 31 || dateDiff >= 30) {
        if (calcDuration > $('#billMonthlyFeeKm').val()) {
            let monthlyFeeRS = Number($('#billCarMonthlyFee').val());
            let monthlyFeeKm = Number($('#billMonthlyFeeKm').val());

            $('#totalFee').val((monthlyFeeKm * monthlyFeeRS) + Number($('#calculateAdditonalFee').val()) + Number($('#billDamageFee').val()));


        } else {
            $('#calculateAdditonalFee').val("");
            let monthlyFeeRS = Number($('#billCarMonthlyFee').val());
            let monthlyFeeKm = Number($('#billMonthlyFeeKm').val());
            $('#totalFee').val($('#billDamageFee').val(monthlyFeeRS * monthlyFeeKm));

        }
    } else {
        if (calcDuration > $('#billDailyFeeKm').val()) {

            $('#calculateAdditonalFee').val(calcDuration * Number($('#carAdditionalFee').val()));
            let dailyFeeRs = Number($('#billCarDailyFee').val());
            let dailyFeeKm = Number($('#billDailyFeeKm').val());
            $('#totalFee').val((dailyFeeRs * Number(dateDiff)) + Number($('#calculateAdditonalFee').val()) + Number($('#billDamageFee').val()));

        } else {
            $('#calculateAdditonalFee').val("");
            let dailyFeeRs = Number($('#billCarDailyFee').val());
            let dailyFeeKm = Number($('#billDailyFeeKm').val());
            $('#totalFee').val(Number($('#billDamageFee').val()) + dailyFeeRs * Number(dateDiff));

        }
    }
});

let returnId;
$('#btnSaveBill').click(function () {
    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/purchase/placeReturnDetail',
        contentType: 'application/json',
        data: JSON.stringify({
            "pickUpdate": $('#billPickUpDate').val(),
            "returnDate": $('#billReturnDate').val(),
            "additionalKm": Number($('#calculateAdditonalFee').val()),
            "damageFee": $('#billDamageFee').val(),
            "reqId": requestBillId
        }),
        success: function (resp) {
            returnId = resp.data;
            console.log(returnId);
            $.ajax({
                method: 'post',
                url: 'http://localhost:8080/carRent/api/v1/purchase/placeBill',
                contentType: 'application/json',
                data: JSON.stringify({
                    "total": Number($('#totalFee').val()),
                    "returnId": returnId
                }),
                success: function (resp) {
                    location.reload(true);
                }
            });

        }
    });
});
