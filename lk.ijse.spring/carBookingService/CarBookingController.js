let carId;
let item;
let driver;
let car;
// let customer = localStorage.getItem('customer');


let carRequestId;
getLastRequestId();

$('#carType').on('change', function () {
    $('#comboCarModel').empty();
    let carType = $(this).val();

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/car/getCarModel',
        contentType: 'application/json',
        data: JSON.stringify({
            carType: carType
        }),
        success: function (resp) {
            let data = resp.data;
            console.log(data);
            for (let i in data) {
                $('#comboCarModel').append(`<option>select car model</option><option>${resp.data[i]}</option>`);
            }
        }
    });
});

$('#comboCarModel').on('change', function () {
    $('#carView').empty();
    let carModel = $(this).val();
    console.log(carModel);

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/car/getCarDetail',
        contentType: 'application/json',
        data: JSON.stringify({
            carModel: carModel
        }),
        success: function (resp) {
            car = resp.data;
            for (let i in resp.data) {
                carId = resp.data[i].carId;
                let carType = resp.data[i].carType;
                let carModel1 = resp.data[i].carModel;
                let color = resp.data[i].color;
                let fuelType = resp.data[i].fuelType;
                let Transmission = resp.data[i].transmissionType;
                let monthlyRateKm = resp.data[i].monthlyKm;
                let monthlyRateRs = resp.data[i].monthlyRateRs;
                let dailyRateKm = resp.data[i].dailyKm;
                let dailyRateRs = resp.data[i].dailyRatePerRs;
                let addtional = resp.data[i].additionalKmPrice;
                let duration = resp.data[i].carDuration;
                let states = resp.data[i].states;

                let cardetail = `<div  id= "carDiv" class="row align-items-end mt-4 p-2">
                <div  class="car-rental-card col-xl-8 col-lg-8 col-md-6 col-sm-12">
                    <div class="image-container">
                        <img alt="London"
                             onclick="void(0);"
                             src="https://r-cf.bstatic.com/xdata/images/city/360x240/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o=">
                    </div>
                    <div class="info-container">
                        <a class="header" href="javascript:void(0);">
                            <h2 class="title d-inline-block" id="carModel">${carModel1}</h2>
                            <h4 style="text-align: right; display: inline-block">${carId}</h4>
                        </a>

                        <div class="col-12" style="font-size: 14px">
                            <div class="row">
                                <div>| Color</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div id="color">${color}</div>

                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>| Transmission type</div>
                                &nbsp;
                                &nbsp;

                                <div id="transmissionType">${Transmission}</div>

                            </div>
                        </div>
                        <hr>
                        <div class="col-12" style="font-size: 14px">
                            <div class="row">
                                <div>| carType</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div id="carTypeD">${carType}</div>

                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>| fuelType</div>
                                &nbsp;
                                &nbsp;

                                <div>${fuelType}</div>

                            </div>
                        </div>
                        <hr>
                        <div class="col-12" style="font-size: 14px">
                            <div class="row">
                                <div>| monthlyRate(Km)</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>${monthlyRateKm}</div>

                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>| monthlyRate(Rs)</div>
                                &nbsp;
                                &nbsp;

                                <div>${monthlyRateRs}</div>

                            </div>
                        </div>
                        <hr>
                        <div class="col-12" style="font-size: 14px">
                            <div class="row">
                                <div>| daily rate(Km)</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>${dailyRateKm}</div>

                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>| daily rate(Rs)</div>
                                &nbsp;
                                &nbsp;

                                <div>${dailyRateRs}</div>

                            </div>
                        </div>
                        <hr>
                        <div class="col-12" style="font-size: 14px">
                            <div class="row">
                                <div>| additional fee for(km)</div>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <div>${addtional}</div>
                            </div>
                        </div>
                        <hr>

                    </div>

                </div>

            </div>`;

                $('#carView').append(cardetail);
            }
        }
    });
});

let customer = localStorage.getItem("customerId");
let condition;

$('#inlineRadio1').click(function () {
    $('#driverWindow').empty();
    condition = $('input[name="inlineRadioOptions"]:checked').val();

    $.ajax({
        method: 'get',
        url: 'http://localhost:8080/carRent/api/v1/driver/loadAllDriverId',
        success: function (resp) {
            let array = resp.data;

            item = array[Math.floor(Math.random() * array.length)];

            $.ajax({
                url: 'http://localhost:8080/carRent/api/v1/driver/getDriverRequest',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "driverId": item
                }),
                success: function (resp) {
                    driver = resp.data;
                    if (resp.data === null) {
                        alert("No available drivers");
                    }
                    for (let i in resp.data) {
                        let driverName = resp.data[i].driverName;
                        let contact = resp.data[i].driverContact;

                        let driverDetail = `<div class="row no-gutters">
                        <div class="col-md-4">
                            <i class="fas fa-user-shield m-4" style="font-size: 110px;"></i>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body pl-xl-5">
                                <h5 class="card-title">${driverName}</h5>
                                <p class="card-text">Contact : ${contact}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                             
                            </div>
                        </div>
                        <div class="row align-items-center mt-4 col-12">
                            <div class="col-lg-6 col-xl-6 sm-12">
                                <label for="pickUpTime">Pick up Time</label>
                                <input class="form-control" id="pickUpTime" type="time">
                            </div>
                            <div class="col-lg-6 col-xl-6 sm-12">
                                <label for="pickUpLocation">pick up location</label>
                                <input class="form-control" id="pickUpLocation" placeholder="Put your address" type="search">
                            </div>
                        </div>
                    </div>`;

                        $('#driverWindow').append(driverDetail);

                    }
                },
                error: function (resp) {
                }
            });

        }

    });


});

$('#inlineRadio2').click(function () {
    $('#driverWindow').empty();
    condition = $('input[name="inlineRadioOptions"]:checked').val();
    console.log(condition);
});

$('#submitRequirement').click(function () {
    getLastRequestId();
    let carId = $('#carBookId').val();
    let pickUpDate = $('#PickupDate').val();
    let returnDate = $('#returnDate').val();
    let pickUpTime = $('#pickUpTime').val();
    let pickUpLocation = $('#pickUpLocation').val();
    let reason = $('#reason').val();
    let damageFee = Number($('#damagedFee').val());


    if (condition === "No") {
        $.ajax({
            method: 'post',
            url: 'http://localhost:8080/carRent/api/v1/request/sendRequest',
            contentType: 'application/json',
            data: JSON.stringify({
                "reqId": carRequestId,
                "pickUpDate": pickUpDate,
                "returnDate": returnDate,
                "pickUpTime": "no",
                "pickUpLocation": "no",
                "reason": reason,
                "damageFee": damageFee,
                "driver": null,
                "car": carId,
                "customer": customer
            }),
            success: function (resp) {
                console.log(resp);
                location.reload(true);
            }
        });
    }
    if (condition === 'yes') {

        $.ajax({
            method: 'post',
            url: 'http://localhost:8080/carRent/api/v1/reqOrder/sendOrders',
            contentType: 'application/json',
            data: JSON.stringify({
                "reqId": carRequestId,
                "pickUpDate": pickUpDate,
                "returnDate": returnDate,
                "pickUpTime": pickUpTime,
                "pickUpLocation": pickUpLocation,
                "reason": reason,
                "damageFee": damageFee,
                "driver": item,
                "car": carId,
                "customer": customer
            }),
            success: function (resp) {
                console.log(resp);
                location.reload(true);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
});

function getLastRequestId() {
    $.ajax({
        method: 'get',
        url: "http://localhost:8080/carRent/api/v1/reqOrder/getLastId",
        dataType: 'json',
        success: function (resp) {
            carRequestId = resp.data;
        }
    });
}

let reqBookId;
$('#navReqAccessArea').click(function () {
    $('#carBookingAccept').empty();
    $.ajax({
        url: 'http://localhost:8080/carRent/api/v1/reqOrder/getAllRequests',
        method: 'get',
        success: function (resp) {
            for (let i in resp.data) {
                reqBookId = resp.data[i].reqId;
                let carModel = resp.data[i].carModel;
                let carType = resp.data[i].carType;
                let contact = resp.data[i].contact;
                let customerName = resp.data[i].customerName;
                let driverName = resp.data[i].driverName;
                let pickUpDate = resp.data[i].pickUpDate;
                let returnDate = resp.data[i].returnDate;
                let bookReason = resp.data[i].reason;

                let carBookDetail = `<div class="card-body">
                <h5 class="card-title">${bookReason}</h5>
                <div class="row">
                    <div class="col-xl-1 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">${carType}</p>
                    </div>
                    <div class="col-xl-1 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">${carModel}</p>
                    </div>
                    <div class="col-xl-1 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">${customerName}</p>
                    </div>
                    <div class="col-xl-2 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">${contact}</p>
                    </div>
                    <div class="col-xl-2 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">Return date : ${returnDate}</p>
                    </div>
                    <div class="col-xl-3 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">Booked Date : ${pickUpDate}</p>
                    </div>
                    <div class="col-xl-2 col-md-3 col-lg-3 col-sm-12">
                        <p class="card-text">Driver : ${driverName}</p>
                    </div>
                </div>
                <a class="btn btn-primary mt-2" href="#" onclick="acceptBooking()">Accept</a>
                <a class="btn btn-primary mt-2" href="#" onclick="returnBooking()">Return</a>
            </div>`;

                $('#carBookingAccept').append(carBookDetail);
            }
        }
    });
});

function acceptBooking() {
    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/reqOrder/bookOrders',
        contentType: 'application/json',
        data: JSON.stringify({
            "reqId": reqBookId,
        }),
        success: function (resp) {
            location.reload(true);
        }
    })
}

function loadAllCustomersRequset() {
    let requests = $('#customerRequests').empty();

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/reqOrder/getCustomerBookCondition',
        contentType: 'application/json',
        data: JSON.stringify({
            "customer": customer
        }),
        success: function (resp) {
            for (let i in resp.data){
                let reason = resp.data[i].reason;
                let reqId = resp.data[i].reqId;
                let pickUpDate = resp.data[i].pickUpDate;
                if(reason === 'Booked'){
                    let success = `<div class="card text-white bg-success col-12 m-3">
        <div class="card-header">Requet Id: ${reqId} requstDate : ${pickUpDate}</div>
        <div class="card-body">
            <h5 class="card-title">Success</h5>
        </div>
    </div>`;
                    requests.append(success);
                }
                if(reason === 'Pending'){
                    let error = ` <div class="card text-white bg-warning col-12 m-3">
        <div class="card-header">Requet Id: ${reqId} requstDate: ${pickUpDate}</div>
        <div class="card-body">
            <h5 class="card-title">Your Request pending!!!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eos excepturi incidunt ipsa numquam ratione sapiente. Accusantium amet est, explicabo iste iusto maxime, nihil placeat quis saepe tempora totam, velit.</p>
        </div>
    </div>`;
                    requests.append(error);
                }
            }
        }
    })

}

$('#requestDetails').click(function () {
    window.location.href='../ViewCustomerRequirement.html';
});

