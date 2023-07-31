function welcome(){
    alert ("ברוכים הבאים");
    console.log("welcome to the site");
}

function welcome2() {
    const userName = document.getElementById("userName").value;
    alert ("ברוך הבא ל" + userName);
}

function multi50() {
    const n = document.getElementById("num1").value;

    alert(n * 50);
}

function multi() {
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;

    document.getElementById("output1").innerHTML += num2 *num3;
}

function changeColor() {
    const color = document.getElementById("myColor").value;

    document.body.style.backgroundColor = color;
}

function sum() {
    const num4 = +document.getElementById("num4").value;
    const num5 = +document.getElementById("num5").value;

     document.getElementById("output2").innerHTML += num4 + num5;
}

function sum2() {
    const n6 = +document.getElementById("num6").value;
    const n7 = +document.getElementById("num7").value;
    const res = n6 + n7;
    
    document.getElementById("output3").innerHTML = n6 + " + " + n7+  " = " + res;
}