const custWrapper1 = document.querySelector("#wrapperCust1");
const custFileName1 = document.querySelector("#file-nameCust1");
const custDefaultBtn1 = document.querySelector("#default-btnCust1");
const customBtn31 = document.querySelector("#custom-btnCust1");
const custCancelBtnCust1 = document.querySelector("#cancel-btn1Cust i");
const custFrontImg = document.querySelector("#nicFrontImg");
let custRegExp3 = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

const custWrapper2 = document.querySelector("#wrapperCust2");
const custFileName2 = document.querySelector("#file-nameCust2");
const custDefaultBtn2 = document.querySelector("#default-btnCust2");
const custCustomBtn2 = document.querySelector("#custom-btnCust2");
const custCancelBtn2 = document.querySelector("#cancel-btnCust2 i");
const custBackImg = document.querySelector("#nicBack-image");
let custRegExp2 = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;


function defaultBtnCustActive1() {
    custDefaultBtn1.click();
}

function defaultBtnCustActive2() {
    custDefaultBtn2.click();
}
custDefaultBtn2.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            custBackImg.src = result;
            custWrapper2.classList.add("active");
        };
        custCancelBtn2.addEventListener("click", function () {
            custBackImg.src = "";
            custWrapper2.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(custRegExp2);
        custFileName2.textContent = valueStore;
    }
});

custDefaultBtn1.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            custFrontImg.src = result;
            custWrapper1.classList.add("active");
        };
        custCancelBtnCust1.addEventListener("click", function () {
            custFrontImg.src = "";
            custWrapper1.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(custRegExp3);
        custFileName1.textContent = valueStore;
    }
});
