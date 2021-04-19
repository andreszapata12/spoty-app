/*let titulo=document.getElementById("titulo");
titulo.textContent="buenas tardes";*/


window.addEventListener("scroll",cambiarcolor);

function cambiarcolor(){

    let menu=document.getElementById("menu");
    
    if(document.body.scrollTop||document.documentElement.scrollTop==0){

        menu.classList.add("bg-dark");
        menu.classList.remove("fondo2");

    }else{
        menu.classList.remove("bg-dark"); 
        menu.classList.add("fondo2");
    }
}