let prevPos = 0;
let maxPos = 97;
let step = 97/10;
let temp = 0;
let blue_value = 0;
let green_value = 0;
let red_value = 0;
let yellow_value = 0;
let new_value_blue = 0;
let new_value_green = 0;
let new_value_red = 0;
let new_value_yellow = 0;

function isWinner() {
    alert("There is already a winner, press reset to play again.");
}

function blue() {
    if (blue_value < maxPos && green_value < maxPos && red_value < maxPos && yellow_value < maxPos) {
        blue_value += step;
        temp = blue_value.toString();
        console.log(temp + "%");
        bluebutton.style.marginLeft = temp + "%";
        prevPos += step;

        new_value_blue++;
        valuebox_blue.innerHTML = new_value_blue;
        if (new_value_blue === 10) {
            valuebox_blue.style.color = "red";
        }
    } else {
        isWinner();
    }
}

function green() {
    if (blue_value < maxPos && green_value < maxPos && red_value < maxPos && yellow_value < maxPos) {
        green_value += step;
        temp = green_value.toString();
        console.log(temp + "%");
        greenbutton.style.marginLeft = temp + "%";
        prevPos += step;

        new_value_green++;
        valuebox_green.innerHTML = new_value_green;
        if (new_value_green === 10) {
            valuebox_green.style.color = "red";
        }
    } else {
        isWinner();
    }
}

function red() {
    if (blue_value < maxPos && green_value < maxPos && red_value < maxPos && yellow_value < maxPos) {
        red_value += step;
        temp = red_value.toString();
        console.log(temp + "%");
        redbutton.style.marginLeft = temp + "%";
        prevPos += step;

        new_value_red++;
        valuebox_red.innerHTML = new_value_red;
        if (new_value_red === 10) {
            valuebox_red.style.color = "red";
        }
    } else {
        isWinner();
    }
}

function yellow() {
    if (blue_value < maxPos && green_value < maxPos && red_value < maxPos && yellow_value < maxPos) {
        yellow_value += step;
        temp = yellow_value.toString();
        console.log(temp + "%");
        yellowbutton.style.marginLeft = temp + "%";
        prevPos += step;

        new_value_yellow++;
        valuebox_yellow.innerHTML = new_value_yellow;
        if (new_value_yellow === 10) {
            valuebox_yellow.style.color = "red";
        }
    } else {
        isWinner();
    }
}

function reset() {
    bluebutton.style.marginLeft = "-29px";
    greenbutton.style.marginLeft = "-29px";
    redbutton.style.marginLeft = "-29px";
    yellowbutton.style.marginLeft = "-29px";
    valuebox_blue.innerHTML = "0";
    valuebox_green.innerHTML = "0";
    valuebox_red.innerHTML = "0";
    valuebox_yellow.innerHTML = "0";
    valuebox_blue.style.color = "black";
    valuebox_green.style.color = "black";
    valuebox_red.style.color = "black";
    valuebox_yellow.style.color = "black";
    new_value_blue = 0;
    new_value_green = 0;
    new_value_red = 0;
    new_value_yellow = 0;
    blue_value = 0;
    green_value = 0;
    red_value = 0;
    yellow_value = 0;
}

const bluebutton = document.getElementById("blue")
const greenbutton = document.getElementById("green")
const redbutton = document.getElementById("red")
const yellowbutton = document.getElementById("yellow")

const valuebox_blue = document.getElementById("valuebox_blue");
const valuebox_green = document.getElementById("valuebox_green");
const valuebox_red = document.getElementById("valuebox_red");
const valuebox_yellow = document.getElementById("valuebox_yellow");