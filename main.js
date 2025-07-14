const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value=display.value.slice(0,-1);
}
function calculate() {
    try {
        if (display.value === "") return;
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}
function squareRoot(){
    try {
        if (display.value === "") return;
        display.value = Math.sqrt(parseFloat(display.value));
    } catch (error) {
        display.value = "Error";
    }
}
function square(){
    try {
        if (display.value === "") return;
        display.value = Math.pow(parseFloat(display.value),2);
    } catch (error) {
        display.value = "Error";
    }
}
function appendPercentage(){
    try {
        if (display.value === "") return;
        display.value = parseFloat(display.value)/100;
    } catch (error) {
        display.value = "Error";
    }
}