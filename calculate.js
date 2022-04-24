var resultVal;
var displayVal;
var num = 1;
function number(num) {
    result.value = result.value + num;
}

function decimal() {
    // for(let i = 0; i<result.length; i++) {
    //     if(result[i] == '.') {
    //         alert("please input decimal point just once");
    //         return;
    //     }
    // }
    result.value = result.value + '.';
}

function clearall() {
    display.value = "";
    result.value = "";
}

function outputclear() {
    result.value = "";
}

function square() {
    if(!result.value) {
        alert("please input the number");
        return;
    }
    resultVal = Math.pow(result.value, 2);
    result.value = resultVal;
}

function sqrt() {
    if(!result.value) {
        alert("please input the number");
        return;
    }
    result.value = Math.sqrt(result.value);
}

function sign(val) {
    if(!result.value) {
        display.value = display.value.substring(0, 
            display.value.length- 1);
    }
    display.value = display.value + result.value + val;
    result.value = "";
}

function swap() {
    result.value = -result.value;
}

function del() {
    result.value = result.value.substring(0, result.value.length - 1);
}

function inverse() {
    if(!result.value || result.value == 0) {
        alert("invalid number")
        return;
    }
    result.value = 1/result.value;
}


function assign() {
    if(!display.value) {
        alert("undefined");
        return;
    } else if(!result.value) {
        return;
    }
    display.value = display.value + result.value;
    resultVal = eval(display.value);
    list.value += num + "번째 계산: " + display.value + " = ";
    display.value = "";
    result.value = resultVal;
    list.value += resultVal+"\n";
    num++
}