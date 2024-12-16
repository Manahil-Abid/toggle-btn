let btn = document.getElementById("btn");
btn.onclick = () =>{
if(document.body.style.backgroundColor == "white"){
    document.body.style.backgroundColor = "black";
    btn.innerText = "switch to white color";
    document.body.style.color = "white";
   
}
else{
    btn.innerText = "switch to black color";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
}

btn();
