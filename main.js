let ubicacionPrincipal = window.pageYOffset;


  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual;

})

//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[o];
let semaforo = true;

document.querySelectorAll(".logo")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
})

