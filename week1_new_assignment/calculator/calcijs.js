let inputbtn=document.getElementById("input");
let btn=document.querySelectorAll("button");

let x='';
let arr=Array.from(btn);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            x=eval(x);
            inputbtn.value=x;
        }
        else if(e.target.innerHTML=='AC')
        {
            x = '';
            inputbtn.value = x;
        }
        else if(e.target.innerHTML=='DEL'){
            x = x.slice(0, -1); 
            inputbtn.value = x;
        }
        else{
        x+=e.target.innerHTML;
        inputbtn.value=x;
        }
    })
})
