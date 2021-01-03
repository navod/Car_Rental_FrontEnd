// let defaultId;
getLastCarId();

function getLastCarId() {
    $.ajax({
        method: 'get',
        url: "http://localhost:8080/carRent/api/v1/car/getLastCarId",
        dataType: 'json',
        success: function (resp) {
            $('#carID').val(resp.data);
        }
    });
}


function check() {

}

$('#btnSaveCar').click(function () {
    let carId = $('#carID').val();
    let carModel = $('#carModel').val();
    let carDailyRateRs = $('#carDailyRateRs').val();
    let carMonthlyRateRs = $('#carMonthlyRateRs').val();
    let carDailyRateKm = $('#carDailyRateKm').val();
    let carMonthlyRateKm = $('#carMonthlyRateKm').val();
    let carPricePerAdditionalKm = $('#carPricePerAdditionalKm').val();
    let carColor = $('#carColor').val();
    let fuelType = $("#comboCarFuelType option:selected").text();
    let carType = $("#carType option:selected").text();
    let transmissionType = $("#transmissionType option:selected").text();
    let carRentDuration = $("#carRentDuration").val();
    let carPassengers = $("#carAddPassengers").val();
    console.log(carPassengers);

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/car/addCars',
        contentType: 'application/json',
        data: JSON.stringify({
            "carId": carId,
            "carModel": carModel,
            "dailyKm": carDailyRateKm,
            "monthlyKm": carMonthlyRateKm,
            "monthlyRateRs": carMonthlyRateRs,
            "dailyRatePerRs": carDailyRateRs,
            "additionalKmPrice": carPricePerAdditionalKm,
            "fuelType": fuelType,
            "transmissionType": transmissionType,
            "color": carColor,
            "carType": carType,
            "carDuration": carRentDuration,
            "states":"Available",
            "passengers": carPassengers
        }),
        success: function (resp) {
            getLastCarId();
            clearAll();
            console.log(resp);
            $('.toast').toast('show');
        },
        error: function (resp) {
            $('#error').toast('show');
        }
    });

});

loadAllCars();

function loadAllCars() {
    $('#carDetails').empty();
    $.ajax({
        url: 'http://localhost:8080/carRent/api/v1/car/loadAllCars',
        success: function (resp) {
            let data = resp.data;
            for (var i in data) {
                let carId = data[i].carId;
                let carModel = data[i].carModel;
                let dailyKm = data[i].dailyKm;
                let monthlyKm = data[i].monthlyKm;
                let monthlyRateRs = data[i].monthlyRateRs;
                let dailyRatePerRs = data[i].dailyRatePerRs;
                let additionalKmPrice = data[i].additionalKmPrice;
                let fuelType = data[i].fuelType;
                let transmissionType = data[i].transmissionType;
                let color = data[i].color;
                let carType = data[i].carType;
                let carDuration = data[i].carDuration;
                let states = data[i].states;

                let row = `<tr><td>${carId}</td></td><td>${carModel}</td><td>${carType}</td><td>${fuelType}</td><td>${color}</td><td>${monthlyKm}</td><td>${dailyKm}</td><td>${monthlyRateRs}</td><td>${dailyRatePerRs}</td><td>${additionalKmPrice}</td><td>${carDuration}</td><td>${transmissionType}</td><td>${states}</td></tr>`;
                $('#carDetails').append(row);

            }
        }
    });
}

function clearAll() {
    let carModel = $('#carModel').val("");
    let carDailyRateRs = $('#carDailyRateRs').val("");
    let carMonthlyRateRs = $('#carMonthlyRateRs').val("");
    let carDailyRateKm = $('#carDailyRateKm').val("");
    let carMonthlyRateKm = $('#carMonthlyRateKm').val();
    let carPricePerAdditionalKm = $('#carPricePerAdditionalKm').val("");
    let carColor = $('#carColor').val("");
    let carRentDuration = $("#carRentDuration").val("");
    let passengers = $('#carAddPassengers').val("");
}

$('#updateCarType').on('change', function () {
    console.log('hello');
    $('#comboUpdateCarId').empty();
    let updateCarType = $(this).val();
    console.log(updateCarType);
    $('#comboUpdateCarId').append(`<option>Select car Id</option>`);
    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/car/getCarUpdateId',
        contentType: 'application/json',
        data: JSON.stringify({
            carType: updateCarType
        }),
        success: function (resp) {
            let data = resp.data;
            console.log(data);
            for (let i in data) {
                $('#comboUpdateCarId').append(`<option>${resp.data[i]}</option>`);
            }
        }
    });
});

let comboCarId;

$('#comboUpdateCarId').on('change', function () {
    $('#carView').empty();
    comboCarId = $(this).val();


    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/car/getCarDetailsById',
        contentType: 'application/json',
        data: JSON.stringify({
            carId : comboCarId
        }),
        success: function (resp) {
            car = resp.data;
            for (let i in resp.data) {
                $('#updateCarModel').val(resp.data[i].carModel);
                $('#updateCarColor').val(resp.data[i].color);
                $('#updateComboCarFuelType').val(resp.data[i].fuelType);
                $('#updateTransmissionType').val(resp.data[i].transmissionType);
                $('#updateCarMonthlyRateKm').val(resp.data[i].monthlyKm);
                $('#updateCarMonthlyRateRs').val(resp.data[i].monthlyRateRs);
                $('#updateCarDailyRateKm').val(resp.data[i].dailyKm);
                $('#updateCarDailyRateRs').val(resp.data[i].dailyRatePerRs);
                $('#updateCarPricePerAdditionalKm').val(resp.data[i].additionalKmPrice);
                $('#updateCarRentDuration').val(resp.data[i].carDuration);
                $('#updateCarAddPassengers').val(resp.data[i].passengers);
            }
        }
    });
});

$('#btnUpdateCar').click(function () {

    let carModel = $('#updateCarModel').val();
    let carDailyRateRs = $('#updateCarDailyRateRs').val();
    let carMonthlyRateRs = $('#updateCarMonthlyRateRs').val();
    let carDailyRateKm = $('#updateCarDailyRateKm').val();
    let carMonthlyRateKm = $('#updateCarMonthlyRateKm').val();
    let carPricePerAdditionalKm = $('#updateCarPricePerAdditionalKm').val();
    let carColor = $('#updateCarColor').val();
    let fuelType = $("#updateComboCarFuelType option:selected").text();
    let carType = $("#updateCarType option:selected").text();
    let transmissionType = $("#updateTransmissionType option:selected").text();
    let carRentDuration = $("#updateCarRentDuration").val();
    let carPassengers = $("#updateCarAddPassengers").val();

    $.ajax({
        method: 'put',
        url: 'http://localhost:8080/carRent/api/v1/car/updateCars',
        contentType: 'application/json',
        data: JSON.stringify({
            "carId": comboCarId,
            "carModel": carModel,
            "dailyKm": carDailyRateKm,
            "monthlyKm": carMonthlyRateKm,
            "monthlyRateRs": carMonthlyRateRs,
            "dailyRatePerRs": carDailyRateRs,
            "additionalKmPrice": carPricePerAdditionalKm,
            "fuelType": fuelType,
            "transmissionType": transmissionType,
            "color": carColor,
            "carType": carType,
            "carDuration": carRentDuration,
            "passengers": carPassengers
        }),
        success: function (resp) {
            loadAllCars();
            clearUpdateArea();
            console.log(resp);
            $('.toast').toast('show');
        },
        error: function (resp) {
            $('#error').toast('show');
        }
    });

});

function clearUpdateArea() {
    $('#updateCarModel').val("");
    $('#updateCarDailyRateRs').val("");
    $('#updateCarMonthlyRateRs').val("");
    $('#updateCarDailyRateKm').val("");
    $('#updateCarMonthlyRateKm').val("");
    $('#updateCarPricePerAdditionalKm').val("");
    $('#updateCarColor').val();
    $("#updateComboCarFuelType option:selected").empty();
    $("#updateCarType option:selected").empty();
    $("#updateTransmissionType option:selected").empty();
    $("#updateCarRentDuration").val("");
    $("#updateCarAddPassengers").val("");
}

$('#btnDeleteCar').click(function () {
    if(confirm("Are you sure delete?")){
        $.ajax({
            method: "delete",
            url: 'http://localhost:8080/carRent/api/v1/car/deleteCars',
            contentType: 'application/json',
            data: JSON.stringify({
                "carId": comboCarId,
            }),
            success: function (resp) {
                console.log(resp);
                loadAllCars();
                clearUpdateArea();
                getLastId();
            }
        });
    }
});
