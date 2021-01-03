let defaultEmail;
$('#loginBtn').click(function () {
     defaultEmail = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        method:'post',
        url:'http://localhost:8080/carRent/api/v1/customer/login',
        contentType:'application/json',
        data: JSON.stringify({
            "email": defaultEmail,
            "password": password
        }),
        success: function (resp) {
            if(resp.data === "Customer"){
                passValue();
                window.location.href = "../CustomerServie/DashBoard/customerDashBoard.html";
            }
            if(resp.data === 'Admin'){
                window.location.href = "../dashboard.html";
            }
            if(resp.data === 'Driver'){
                passValue();
                window.location.href = "../DriverService/driver.html";
            }
        }
    });
});

function passValue() {
    let email = $('#email').val();
    localStorage.setItem("textEmail",email);
    return false;
}

