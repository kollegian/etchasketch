const par=document.querySelector("#container");
//creates the 16*16 grid
for (let i=0; i<16*16; i++){
    const div=document.createElement("div");
    div.setAttribute("id","items");
    par.style.display="grid";
    par.appendChild(div);
    
}
const item=document.querySelectorAll("#items");
for(let i=0;i<item.length; i++){
    item[i].addEventListener("mouseenter",()=>
    item[i].style.backgroundColor="red");
}

                                                    
