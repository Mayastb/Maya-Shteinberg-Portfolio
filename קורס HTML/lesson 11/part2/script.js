let counter= 1
let counter2 = 1

function task1() {
    document.getElementById("btn").innerHTML= ++counter;
}

function task2() {
    document.getElementById("answer1").value;

    if (answer1 = "צהוב") {
        document.getElementById("output1").innerHTML= "נכון";
    } else {
        document.getElementById("output1").innerHTML = "לא נכון";
    }
}

function task3() {
   const city= document.getElementById("city").value;

    if (city == "קרית ארבע") {
        document.getElementById("output2").innerHTML = "תכלס";
        document.getElementById("city").style.border = "3px solid green";
    } else {
        document.getElementById("output2").innerHTML = "לא נכון";
        document.getElementById("city").style.border = "3px solid red";
    }
}
function task4_b() {
    document.getElementById("img1").style.display = 'block';
    document.getElementById("img2").style.display = 'none';
}

function task5() {
    counter2++;
    const font = counter2*10;
    const color = counter2 *40;

    document.getElementById("btn2").innerHTML = counter2;
    document.getElementById("btn2").style.fontsize = `${font}px`;
    document.getElementById("btn2").style.backgroundColor= `hsl(${color} 100% 38%)`;
}