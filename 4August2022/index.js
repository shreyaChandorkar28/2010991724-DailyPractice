function fnPro(){

let n = document.getElementById("l").value;
n = Number(n);
let sum = 0;
for(i=0;i<n;i++){
    if(i%2 == 0){
        sum = sum + i;
         document.getElementById("p1").innerHTML = i;
    }
    document.getElementById("p2").innerHTML = sum;
}
}

function fnPro2(){
    let l = document.getElementById("l").value;
    let r = document.getElementById("r").value;
    let k = document.getElementById("k").value;
    l = Number(l);
    r = Number(r);
    k = Number(k);
    let count = 0;
    for(let i = l;i<=r;i++){
        if(i%k == 0){
            count++;
        }
    }
    document.getElementById("p1").innerHTML = "The count is: " + count;
}

