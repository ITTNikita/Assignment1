let state = document.getElementById("isfriend");
let btn = document.getElementById("add");
let check=0;
console.log("hi ")
btn.addEventListener("click", function () {
    console.log("122")
    if(check===0){
    state.innerHTML = "FRIEND";
    state.style.color="green";
    btn.innerHTML="Remove Friend"; 

    check=1;
    }
    else{
        check=0;
        state.innerHTML="STRANGER";
        state.style.color="red";
        btn.innerHTML="Add Friend"; 
    }
});
function mOver(obj){
    obj.innerHTML="Add";
    obj.style.color="green"
}
function mOut(obj){
    obj.innerHTML="Add Friend";
    obj.style.color="red"
}
let state1 = document.getElementById("isfriend1");
let btn1 = document.getElementById("add1");

let check1=0;
console.log("hi ")
btn1.addEventListener("click", function () {
    console.log("122")
    if(check1===0){
    state1.innerHTML = "FRIEND";
    state1.style.color="green";
    btn1.innerHTML="Remove Friend";
    alert("Friend added successfully") ;

    check1=1;
    }
    else{
        check1=0;
        state1.innerHTML="STRANGER";
        state1.style.color="red";
        btn1.innerHTML="Add Friend"; 
        alert("Friend request removed")
    }
});
function mOver1(obj){
    obj.innerHTML="Add";
    obj.style.color="green"
}
function mOut1(obj){
    obj.innerHTML="Add Friend";
    obj.style.color="red"
}

let state2 = document.getElementById("isfriend2");
let btn2 = document.getElementById("add2");

let check2=0;
console.log("hi ")
btn2.addEventListener("click", function () {
    console.log("122")
    if(check2===0){
    state2.innerHTML = "FRIEND";
    state2.style.color="green";
    btn2.innerHTML="Remove Friend"; 

    check2=1;
    }
    else{
        check2=0;
        state2.innerHTML="STRANGER";
        state2.style.color="red";
        btn2.innerHTML="Add Friend"; 
    }
});
function mOver2(obj){
    obj.innerHTML="Add";
    obj.style.color="green"
}
function mOut2(obj){
    obj.innerHTML="Add Friend";
    obj.style.color="red"
}

let detail=document.createElement('div');
