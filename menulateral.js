let botonlateral=document.getElementById("menu-toggle");

botonlateral.addEventListener("click",desplegarmenu);

function desplegarmenu(){
    console.log("hola");

    let contenidomenu=document.getElementById("wrapper");
    contenidomenu.classList.toggle("toggled");
}