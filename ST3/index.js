// function calculate(){
//     var w = document.getElementById("weight").value;
//     var mercury = w*0.38;
//     var venus = w*0.91;
//     var moon = w*0.166;
//     var mars = w*0.38;
//     var jupiter = w*2.34;
//     var saturn = w*1.06;
//     var uranus = w*0.92;
//     var neptune = w*1.14;
//     var pluto = w*0.06;

//     document.getElementById("mw").innerHTML = mercury;
//     document.getElementById("vw").innerHTML = venus;
//     document.getElementById("mow").innerHTML = moon;
//     document.getElementById("maw").innerHTML = mars;
//     document.getElementById("jw").innerHTML = jupiter;
//     document.getElementById("sw").innerHTML = saturn;
//     document.getElementById("uw").innerHTML = uranus;
//     document.getElementById("nw").innerHTML = neptune;
//     document.getElementById("pw").innerHTML = pluto;

// }

function calculateMercury(){
    var w = document.getElementById("weight").value;
    var mercury = w*0.38 + " kg";
    document.getElementById("mw").innerHTML = mercury;
}

function calculateVenus(){
    var w = document.getElementById("weight").value;
    var venus = w*0.91 + " kg";
    document.getElementById("vw").innerHTML = venus;
}

function calculateMoon(){
    var w = document.getElementById("weight").value;
    var moon = w*0.166 + " kg";
    document.getElementById("mow").innerHTML = moon;
}

function calculateMars(){
    var w = document.getElementById("weight").value;
    var mars = w*0.38 + " kg";
    document.getElementById("maw").innerHTML = mars;
}

function calculateJupiter(){
    var w = document.getElementById("weight").value;
    var jupiter = w*2.34 + " kg";
    document.getElementById("jw").innerHTML = jupiter;
}

function calculateSaturn(){
    var w = document.getElementById("weight").value;
    var saturn = w*1.06 + " kg";
    document.getElementById("sw").innerHTML = saturn;
}

function calculateUranus(){
    var w = document.getElementById("weight").value;
    var uranus = w*0.92 + " kg";
    document.getElementById("uw").innerHTML = uranus;
}

function calculateNeptune(){
    var w = document.getElementById("weight").value;
    var neptune = w*1.14 + " kg";
    document.getElementById("nw").innerHTML = neptune;
}

function calculatePluto(){
    var w = document.getElementById("weight").value;
    var pluto = w*0.06 + " kg";
    document.getElementById("pw").innerHTML = pluto;
}