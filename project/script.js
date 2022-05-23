let input = document.getElementById("mainCalc");
let numberMeter = document.getElementById("numberMeter");
let meters = document.getElementById("meters");
let secondNum = document.getElementById("secondNum");
let feetNumber = document.getElementById("feetNumber");
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
            input.value = ""
        } else {
            numberMeter.textContent = newInput
            secondNum.textContent = newInput

            numberMeter.textContent = (newInput * 3.28084).toFixed(3)
            secondNum.textContent = (newInput * 0.3048).toFixed(3)
        }
    }
})