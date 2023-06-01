function welcome() {
    alert ("welcome");
    console.log ("welcome");
}

function welcome2() {
    const userName = document.getElementById("userName").value;
    alert ("hello" + " " + userName);
}

function multi50() {
    const n = document.getElementById("num1").value;
    alert (n * 50);
}

function multi() {
    const n2 = document.getElementById("num2").value;
    const n3 = document.getElementById("num3").value;

    alert (n2 * n3);
}

function changeColor() {
    const color = document.getElementById("myColor").value;

    document.body.style.backgroundColor = color;
}


function sum() {
    const n4 = +document.getElementById("num4").value;
    const n5 = +document.getElementById("num5").value;

    document.getElementById("output2").innerHTML = n4 + n5;
    
}

function sum2() {
    const n6 = +document.getElementById("num6").value;
    const n7 = +document.getElementById("num7").value;

    document.getElementById("output3").innerHTML = num6 + "+" + num7 + "=" + n6 + n7;
}
