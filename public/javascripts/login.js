//Create references to the dropdown's Date
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

//Months are always the same
(function populateMonths(){
    for(let i = 1; i <= 12; i++){
        const option = document.createElement('option');
        option.textContent = "Tháng " + i;
        monthSelect.appendChild(option);
    }
    monthSelect.value = "Tháng 1";
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === 'Tháng 1' || month === 'Tháng 3' || 
    month === 'Tháng 5' || month === 'Tháng 7' || month === 'Tháng 8' 
    || month === 'Tháng 10' || month === 'Tháng 12') {
        dayNum = 31;
    } else if(month === 'Tháng 4' || month === 'Tháng 6' 
    || month === 'Tháng 9' || month === 'Tháng 11') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}


// Show hide user_pass
function showPass() {
    var x = document.getElementById("re_password");
    var y = document.getElementById("show");
    var z = document.getElementById("hide");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";

    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function showPass2() {
    var x = document.getElementById("re_password2");
    var y = document.getElementById("show2");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";

    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

function showPass3() {
    var x = document.getElementById("log_password");
    var y = document.getElementById("show3");
    var z = document.getElementById("hide3");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";

    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

//Change form
function toogleForm(){
    document.querySelectorAll('.form-wrapper form').forEach((form)=>{
        form.classList.toggle('hide')
    })
    document.querySelectorAll('.title').forEach(btn => {
        btn.classList.toggle('active')
    })
}

const btnRegister = document.querySelector('.btn_regis')
const btnLogin = document.querySelector('.btn_login')

btnRegister.onclick = ()=>{
    toogleForm()
}
btnLogin.onclick = ()=>{
    toogleForm()
}

//Email
const pass = document.getElementById("re_password");
const cpass = document.getElementById("re_password");
const submit = document.querySelector(".button");
submit.addEventListener('submit', function() {
    console.log(pass.value);
    if(pass.value !== cpass.value){
        document.querySelector('.form_control').classList.remove('error');
    }
})
