// import {emailDetail} from "../../loginService/LoginController";


let defaultId;

function getLastId() {
    $.ajax({
        method: 'get',
        url: "http://localhost:8080/carRent/api/v1/customer/getLastId",
        dataType: 'json',
        success: function (resp) {

            defaultId = resp.data;
        }
    });
}

getLastId();

$('#btnCreateAccount').click(function () {
    let custId = defaultId;
    let custName = $('#customerName').val();
    let custAddress = $('#customerAddress').val();
    let custEmail = $('#customerEmail').val();
    let custPassword = $('#customerPassword').val();
    let custconfirmPswd = $('#custConfirmPswd').val();
    let custContact = $('#customerContact').val();
    let custNIC = $('#customerNIC').val();

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/customer/createAccount',
        contentType: 'application/json',
        data: JSON.stringify({
            "customerID": custId,
            "customerName": custName,
            "customerAddress": custAddress,
            "email": custEmail,
            "password": custPassword,
            "contact": custContact,
            "nic": custNIC
        }),
        success: function (resp) {
            getLastId();
            loadAllCustomers();
            console.log(resp);
            $('.toast').toast('show');
            location.reload(true);
        },
        error: function (resp) {
            $('#error').toast('show');
        }
    });
    // checkEmail(custEmail);

});

function loadAllCustomers() {
    $('#customerDetail').empty();
    $.ajax({
        url: 'http://localhost:8080/carRent/api/v1/customer/loadAllCustomers',
        success: function (resp) {
            let data = resp.data;
            for (var i in data) {
                let customerId = data[i].customerID;
                let customerName = data[i].customerName;
                let nic = data[i].nic;
                let contact = data[i].contact;
                let customerAddress = data[i].customerAddress;
                let email = data[i].email;


                let row = `<tr><td>${customerId}</td></td><td>${customerName}</td><td>${nic}</td><td>${contact}</td><td>${customerAddress}</td><td>${email}</td></tr>`;
                $('#customerDetail').append(row);

            }
        }
    });
}

let updateId;
let dataCustomer;

function loadCustomerDetail() {
    let email = localStorage.getItem("textEmail");

    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/carRent/api/v1/customer/customerDetails',
        contentType: 'application/json',
        data: JSON.stringify({
            "email": email
        }),
        success: function (resp) {
            dataCustomer = resp.data;
            for (let i in dataCustomer) {
                updateId = dataCustomer[i].customerID;
                $('#updateUserName').val(dataCustomer[i].customerName);
                $('#updateUserAddress').val(dataCustomer[i].customerAddress);
                $('#updateUserEmail').val(dataCustomer[i].email);
                $('#updateUserPassword').val(dataCustomer[i].password);
                $('#updateUserContact').val(dataCustomer[i].contact);
                $('#updateUserNIC').val(dataCustomer[i].nic);
            }
            localStorage.setItem("customerId", updateId);
        }
    });
}
$('#updateBtn').click(function () {
    let custName = $('#updateUserName').val();
    let custAddress = $('#updateUserAddress').val();
    let custEmail =  $('#updateUserEmail').val();
    let custPassword = $('#updateUserPassword').val();
    let custContact =  $('#updateUserContact').val();
    let custNIC = $('#updateUserNIC').val();

    $.ajax({
        method: 'put',
        url: 'http://localhost:8080/carRent/api/v1/customer/updateCustomer',
        contentType: 'application/json',
        data: JSON.stringify({
            "customerID": updateId,
            "customerName": custName,
            "customerAddress": custAddress,
            "email": custEmail,
            "password": custPassword,
            "contact": custContact,
            "nic": custNIC
        }),
        success: function (resp) {
            console.log(resp);
            $('.toast').toast('show');
            loadCustomerDetail();
            loadAllCustomers();
            location.reload(true);
        },
        error: function (resp) {
            console.log(resp);
            $('#error').toast('show');
        }
    });

});


