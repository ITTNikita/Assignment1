

let card=document.getElementById("card");
let Img = document.createElement("img");
Img.id="img";

Img.src = "https://th.bing.com/th/id/OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI?rs=1&pid=ImgDetMain";
 // Set the path to your image

 Img.width = 300;
 Img.height = 200;

  // Append the img to the body of the HTML document

  card.appendChild(Img);
    let content=document.createElement('div');
    content.className="content";
  let heading=document.createElement('h3');
 let para=document.createElement("p");
 let button=document.createAttribute("button");
 button.className="more-info-button";

 button.innerHTML="more info";
//heading.innerHTML="keep smiling";
  para.innerHTML="It’s easy to think nature will always be with us. But even in my lifetime, <br>birds like starlings and house sparrows have declined so much they’re now listed as endangered.";
  
  content.appendChild(heading);
  content.appendChild(para)
  card.appendChild(content);
  card.addEventListener("mouseenter",function(){
    card.style.height = "400px";
  })
  card.addEventListener("mouseleave",function(){
    card.style.height = "200px";
  })
  card.addEventListener("mouseover",function(){
    card.style.background="grey"
  })
  card.addEventListener("mouseout",function(){
    card.style.background="yellow"
  })
  para.addEventListener("mouseover",function(){
    para.style.background="	#9f6060"
  })
  card.appendChild(button)
  


  