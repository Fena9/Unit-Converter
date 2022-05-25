let input = document.getElementById("mainCalc");
let numberMeter = document.getElementById("numberMeter");
let meters = document.getElementById("meters");
let secondNum = document.getElementById("secondNum");
let feetNumber = document.getElementById("feetNumber");
let volumeNum = document.getElementById("volumeNum");
let liters = document.getElementById("liters");
let gallonsNum = document.getElementById("gallonsNum");
let gallons = document.getElementById("gallons");
let kilogramsNum = document.getElementById("kilogramsNum");
let kilograms = document.getElementById("kilograms");
let poundsNum = document.getElementById("poundsNum");
let pounds = document.getElementById("pounds");
let clear = document.getElementById("clear");
console.log(input)

window.addEventListener("load", function() {
    input.focus();
    console.log("fena")
});

input.addEventListener("keypress", function(e) {
    let newInput = input.value
    console.log(e)

    if (e.key === "Enter") {

        if (newInput <= 0) {
            alert("Enter a number greater than zero")
            input.value = "";
        } else {
            numberMeter.textContent = newInput;
            secondNum.textContent = newInput;
            volumeNum.textContent = newInput;
            gallonsNum.textContent = newInput;
            kilogramsNum.textContent = newInput;
            poundsNum.textContent = newInput;


            meters.textContent = (newInput * 3.28084).toFixed(1);
            feetNumber.textContent = (newInput * 0.3048).toFixed(1);

            liters.textContent = (newInput * 0.264172).toFixed(1);
            gallons.textContent = (newInput * 3.78541).toFixed(1);

            kilograms.textContent = (newInput * 0.45359237).toFixed(1);
            pounds.textContent = (newInput * 2.20462262).toFixed(1);
        }
    }
});

function refresh() {
    input.value = "";
    numberMeter.textContent = "0";
    meters.textContent = "0.0";
    secondNum.textContent = "0";
    feetNumber.textContent = "0.0";
    volumeNum.textContent = "0";
    liters.textContent = "0.0";
    gallonsNum.textContent = "0";
    gallons.textContent = "0.0";
    kilogramsNum.textContent = "0";
    kilograms.textContent = "0.0";
    poundsNum.textContent = "0";
    pounds.textContent = "0.0";
}