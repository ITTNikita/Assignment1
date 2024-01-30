let task=document.getElementById("inputTask");
let listOfTask=document.querySelector(".listOfTask");
let addTask=document.getElementById("addtask");
addTask.addEventListener("click",()=>{
    if(task.value=="")
    {
       // confirm("do you want to add the task");
        alert("input field is empty");
        var toadd=confirm("do you want to add the task")
        
        if(toadd)
       {
         let x=prompt("enter the task");
        
        task.value=x;
        let list=document.createElement("li");
        list.innerHTML=`${task.value}`;
        listOfTask.appendChild(list);
        task.value=""
        }
    }
    else{
        let list=document.createElement("li");
        list.innerHTML = `${task.value} <button class="edit">Edit</button><button class="delete">Delete</button>`;

        
   
        listOfTask.appendChild(list);
        task.value=""
        list.querySelector(".delete").addEventListener("click",()=>{
            console.log("delete")
            list.remove();

        })
        list.querySelector(".edit").addEventListener("click",()=>{
            console.log("ei")
            let newTask = prompt("Enter the new task");
            if (newTask !== null) {
              list.firstChild.nodeValue = newTask;}
        })
        list.querySelector(".edit").addEventListener("mouseover", () => {
           
            list.style.backgroundColor = "red"; 
          });
          list.querySelector(".delete").addEventListener("mouseout", () => {
           
            list.style.backgroundColor = "yellow"; 
          });
    }
})
