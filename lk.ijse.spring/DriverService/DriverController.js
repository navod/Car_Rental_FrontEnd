let defaultDriverId;

function getLastId() {
    $.ajax({
        method: 'get',
        url: "http://localhost:8080/carRent/api/v1/driver/getLastId",
        dataType: 'json',
        success: function (resp) {
            defaultDriverId = resp.data;
        }
    });
}

getLastId();

$('#saveDriver').click(function () {
    let driverId = defaultDriverId;
    let driverName = $('#driverName').val();
    let driverAddress = $('#driverAddress').val();
    let driverEmail = $('#driverEmail').val();
    let driverPassword = $('#driverPassword').val();
    let driverContact = $('#driverContact').val();
    let driverNIC = $('#driverNIC').val();


    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/driver/addDrivers',
        contentType: 'application/json',
        data: JSON.stringify({
            "driverId": driverId,
            "driverName": driverName,
            "driverAddress": driverAddress,
            "driverNIC": driverNIC,
            "driverEmail": driverEmail,
            "driverContact": driverContact,
            "driverPassword": driverPassword
        }),
        success: function (resp) {
            getLastId();
            loadDriverDetail();
            clearDrivers();
            console.log(resp);
            $('.toast').toast('show');
        },
        error: function (resp) {
            $('#error').toast('show');
        }
    });
    // checkEmail(custEmail);

});

let updateDriverId;
loadDriverDetail();
function loadDriverDetail() {
    $('#driversDetail').empty();
    $.ajax({
        method: 'get',
        url: 'http://localhost:8080/carRent/api/v1/driver/loadAllDrivers',

        success: function (resp) {
            let data = resp.data;
            for (let i in data) {
                let driverId = data[i].driverId;
                let driverName = data[i].driverName;
                let driverNIC = data[i].driverNIC;
                let driverContact = data[i].driverContact;
                let driverAddress = data[i].driverAddress;
                let driverEmail = data[i].driverEmail;
                let states = data[i].states;
                let row = `<tr><td>${driverId}</td><td>${driverName}</td><td>${driverNIC}</td><td>${driverContact}</td><td>${driverAddress}</td><td>${driverEmail}</td></td><td>${states}</td></tr>`;
                $('#driversDetail').append(row);
            }
        }
    });
}

$('#updateDriver').click(function () {

    let driverName = $('#updateDriverName').val();
    let driverAddress = $('#updateDriverAddress').val();
    let driverEmail = $('#updateDriverEmail').val();
    let driverPassword = $('#updateDriverPassword').val();
    let driverContact = $('#updateDriverContact').val();
    let driverNIC = $('#updateDriverNIC').val();

    $.ajax({
        method: 'put',
        url: 'http://localhost:8080/carRent/api/v1/driver/updateDriver',
        contentType: 'application/json',
        data: JSON.stringify({
            "driverId": updateDriverId,
            "driverName": driverName,
            "driverAddress": driverAddress,
            "driverNIC": driverNIC,
            "driverEmail": driverEmail,
            "driverContact": driverContact,
            "driverPassword": driverPassword
        }),
        success: function (resp) {
            console.log(resp);
            getLastId();
            loadDriverDetail();
            clearDrivers();
            $('.toast').toast('show');
        },
        error: function (resp) {
            console.log(resp);
            $('#error').toast('show');
        }
    });

});


$("#updateDriverContact").keyup(function (event) {
    if (event.keyCode === 13) {

        let contact = $('#updateDriverContact').val();
        $.ajax({
            method: "post",
            url: 'http://localhost:8080/carRent/api/v1/driver/driverDetail',
            contentType: 'application/json',
            data: JSON.stringify({
                "driverContact": contact
            }),
            success: function (resp) {
                let data = resp.data;
                for (let i in data){
                    updateDriverId = data[i].driverId;
                    $('#updateDriverName').val(data[i].driverName);
                    $('#updateDriverAddress').val(data[i].driverAddress);
                    $('#updateDriverEmail').val(data[i].driverEmail);
                    $('#updateDriverPassword').val(data[i].driverPassword);
                    $('#updateDriverNIC').val(data[i].driverNIC);
                }
            }
        });

    }

});

$('#deleteDriver').click(function () {
    if(confirm("Are you sure delete?")){
        $.ajax({
            method: "delete",
            url: 'http://localhost:8080/carRent/api/v1/driver/deleteDrivers',
            contentType: 'application/json',
            data: JSON.stringify({
                "driverId": updateDriverId,
                "driverEmail": $('#updateDriverEmail').val()
            }),
            success: function (resp) {
                console.log(resp);
                loadDriverDetail();
                clearDrivers();
                getLastId();
            }
        });
    }
});

function clearDrivers() {
    $('#updateDriverName').val("");
    $('#updateDriverAddress').val("");
    $('#updateDriverEmail').val("");
    $('#updateDriverPassword').val("");
    $('#updateDriverNIC').val("");
    $('#driverName').val("");
    $('#driverAddress').val("");
    $('#driverEmail').val("");
    $('#driverPassword').val("");
    $('#driverContact').val("");
    $('#driverNIC').val("");
}

let driverDetailId;
function loadDriverDetailsByEmail() {
    $('#driverName').empty();
    let email = localStorage.getItem("textEmail");
    console.log(email);
    $.ajax({
        url:'http://localhost:8080/carRent/api/v1/driver/getDriverDetailByEmail',
        method:'post',
        contentType:'application/json',
        data: JSON.stringify({
            "driverEmail":email
        }),
        success:function (resp) {
            for (let i in resp.data){
                let driverName = resp.data[i].driverName;
                driverDetailId = resp.data[i].driverId;

                $('#driverName').append(driverName);
                $('#driverId').append(driverDetailId);

                loadDriverRequestDetail();

            }
        }
    });
}
function loadDriverRequestDetail(){
    $('#driverDetail').empty();
    console.log(driverDetailId);
    $.ajax({
        method:'post',
        url:'http://localhost:8080/carRent/api/v1/reqOrder/getDriverAllRequests',
        contentType:'application/json',
        data: JSON.stringify({
            "driver" : driverDetailId
        }),
        success: function (resp) {
            for (let i in resp.data){
                let reqId = resp.data[i].reqId;
                let customerName = resp.data[i].customerName;
                let contact = resp.data[i].contact;
                let carType = resp.data[i].carType;
                let carModel = resp.data[i].carModel;
                let pickUpDate = resp.data[i].pickUpDate;
                let returnDate = resp.data[i].returnDate;
                let location = resp.data[i].driverName;
                let time = resp.data[i].reason;

            let row =`<tr><td>${reqId}</td><td>${customerName}</td><td>${contact}</td><td>${carType}</td><td>${carModel}</td><td>${pickUpDate}</td><td>${returnDate}</td><td>${location}</td><td>${time}</td></tr>`;
            $('#driverDetail').append(row);
            }
        }
    })
}
