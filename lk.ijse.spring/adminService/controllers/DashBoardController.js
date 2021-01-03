let dashBoardSection = document.getElementById('dashBoard-controller');
let viewCustomersSection = document.getElementById('customerViewDashBoard');
let customerCreateSection = document.getElementById('customerCreateForm');
let carCreateSession = document.getElementById('carAddForm');
let carViewSection = document.getElementById('carViewForm');
let driverViewSection = document.getElementById('driverViewForm');
let driverAddSection = document.getElementById('addDriverForm');
let driverManageSection = document.getElementById('manageDriverForm');
let getRequestSection = document.getElementById('orderPlacedAreaForm');
let billFormSection = document.getElementById('billFormSection');
let carManageSection = document.getElementById('carManageForm');

let navDashBoard = document.getElementById('dashBoardNav');
let navViewCustomer = document.getElementById('viewCustomersNav');
let navCreateCustomer = document.getElementById('navCreateCustomer');
let nacCarAdd = document.getElementById('carAddNav');
let navCarView = document.getElementById('navCarView');
let navViewDriver = document.getElementById('navViewDriver');
let navAddDriver = document.getElementById('navAddDriver');
let navManageDriver = document.getElementById('navManageDrivers');
let navReqAccessArea = document.getElementById('navReqAccessArea');
let navPurchaseArea = document.getElementById('navPurchase');
let navManageCars = document.getElementById('navManageCars');

navDashBoard.addEventListener("click", function () {
    dashBoardSection.style.display = "inherit";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display = 'none';
    carCreateSession.style.display = 'none';
    carViewSection.style.display = 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});

navViewCustomer.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'inherit';
    customerCreateSection.style.display='none';
    carCreateSession.style.display='none';
    carViewSection.style.display='none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});

navCreateCustomer.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'inherit';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});

nacCarAdd.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'inherit';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});
navCarView.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'inherit';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});
navViewDriver.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'inherit';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});
navAddDriver.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'inherit';
    driverManageSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});
navManageDriver.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    driverManageSection.style.display= 'inherit';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'none';
});

navReqAccessArea.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    billFormSection.style.display= 'none';
    getRequestSection.style.display= 'inherit';
    carManageSection.style.display= 'none';
});

navPurchaseArea.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'inherit';
    carManageSection.style.display= 'none';

});

navManageCars.addEventListener("click", function () {
    dashBoardSection.style.display = "none";
    viewCustomersSection.style.display = 'none';
    customerCreateSection.style.display= 'none';
    carCreateSession.style.display= 'none';
    carViewSection.style.display= 'none';
    driverViewSection.style.display= 'none';
    driverAddSection.style.display= 'none';
    getRequestSection.style.display= 'none';
    billFormSection.style.display= 'none';
    carManageSection.style.display= 'inherit';

});

