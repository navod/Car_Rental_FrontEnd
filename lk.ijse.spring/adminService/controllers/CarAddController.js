
const wrapper = document.querySelector("#wrapper1");
const fileName = document.querySelector("#file-name1");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("#add-image");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

const wrapper2 = document.querySelector("#wrapper2");
const fileName2 = document.querySelector("#file-name2");
const defaultBtn2 = document.querySelector("#default-btn2");
const customBtn2 = document.querySelector("#custom-btn2");
const cancelBtn2 = document.querySelector("#cancel-btn2 i");
const img2 = document.querySelector("#add-image2");
let regExp2 = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

const wrapper3 = document.querySelector("#wrapper3");
const fileName3 = document.querySelector("#file-name3");
const defaultBtn3 = document.querySelector("#default-btn3");
const customBtn3 = document.querySelector("#custom-btn3");
const cancelBtn3 = document.querySelector("#cancel-btn3 i");
const img3 = document.querySelector("#add-image3");
let regExp3 = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

const wrapper4 = document.querySelector("#wrapper4");
const fileName4 = document.querySelector("#file-name4");
const defaultBtn4 = document.querySelector("#default-btn4");
const customBtn4 = document.querySelector("#custom-btn4");
const cancelBtn4 = document.querySelector("#cancel-btn4 i");
const img4 = document.querySelector("#add-image4");
let regExp4 = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;


function defaultBtnActive2() {
    defaultBtn2.click();
}

function defaultBtnActive() {
    defaultBtn.click();
}

function defaultBtnActive3() {
    defaultBtn3.click();
}

function defaultBtnActive4() {
    defaultBtn4.click();
}

defaultBtn4.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img4.src = result;
            wrapper4.classList.add("active");
        };
        cancelBtn4.addEventListener("click", function () {
            img4.src = "";
            wrapper4.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp4);
        fileName4.textContent = valueStore;
    }
});

defaultBtn3.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img3.src = result;
            wrapper3.classList.add("active");
        };
        cancelBtn3.addEventListener("click", function () {
            img3.src = "";
            wrapper3.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp3);
        fileName3.textContent = valueStore;
    }
});

defaultBtn2.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img2.src = result;
            wrapper2.classList.add("active");
        };
        cancelBtn2.addEventListener("click", function () {
            img2.src = "";
            wrapper2.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp2);
        fileName2.textContent = valueStore;
    }
});

defaultBtn.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        };
        cancelBtn.addEventListener("click", function () {
            img.src = "";
            wrapper.classList.remove("active");
        });
        reader.readAsDataURL(file);
    }
    if (this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});
