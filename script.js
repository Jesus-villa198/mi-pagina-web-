/*==================================

        BOTÓN VOLVER ARRIBA

===================================*/



const btn = document.getElementById("arriba");



window.addEventListener("scroll", () => {



    if (window.scrollY > 300) {



        btn.style.display = "block";



    } else {



        btn.style.display = "none";



    }



});



btn.onclick = () => {



    window.scrollTo({



        top:0,



        behavior:"smooth"



    });



};



/*==================================

        HEADER

===================================*/



const header = document.querySelector("header");



window.addEventListener("scroll",()=>{



    if(window.scrollY>50){



        header.style.background="rgba(20,20,20,.95)";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";



    }else{



        header.style.background="rgba(0,0,0,.45)";

        header.style.boxShadow="none";



    }



});



/*==================================

    APARICIÓN DE SECCIONES

===================================*/



const elementos=document.querySelectorAll("section");



const mostrar=()=>{



elementos.forEach(el=>{



const top=el.getBoundingClientRect().top;



if(top<window.innerHeight-120){



el.style.opacity="1";

el.style.transform="translateY(0)";



}



});



};



elementos.forEach(el=>{



el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="all .8s ease";



});



window.addEventListener("scroll",mostrar);



mostrar();



/*==================================

    CONTADORES

===================================*/



const numeros=document.querySelectorAll(".premio h1");



let iniciado=false;



window.addEventListener("scroll",()=>{



const premios=document.querySelector(".premios");



if(!premios) return;



const posicion=premios.getBoundingClientRect().top;



if(posicion<400 && !iniciado){



iniciado=true;



numeros.forEach(numero=>{



const texto=numero.innerText;



const valor=parseInt(texto);



if(isNaN(valor)) return;



let inicio=0;



const intervalo=setInterval(()=>{



inicio++;



numero.innerText=inicio+"+";



if(inicio>=valor){



clearInterval(intervalo);



}



},70);



});



}



});



/*==================================

        TARJETAS

===================================*/



const cards=document.querySelectorAll(".card");



cards.forEach(card=>{



card.addEventListener("mousemove",(e)=>{



const x=e.offsetX;

const y=e.offsetY;



card.style.transform=`

rotateX(${-(y-150)/18}deg)

rotateY(${(x-150)/18}deg)

scale(1.05)

`;



});



card.addEventListener("mouseleave",()=>{



card.style.transform="rotateX(0) rotateY(0) scale(1)";



});



});



/*==================================

        GALERÍA

===================================*/



const imagenes=document.querySelectorAll(".grid-galeria img");



imagenes.forEach(img=>{



img.addEventListener("click",()=>{



const fondo=document.createElement("div");



fondo.style.position="fixed";

fondo.style.left="0";

fondo.style.top="0";

fondo.style.width="100%";

fondo.style.height="100%";

fondo.style.background="rgba(0,0,0,.9)";

fondo.style.display="flex";

fondo.style.justifyContent="center";

fondo.style.alignItems="center";

fondo.style.zIndex="9999";



const foto=document.createElement("img");



foto.src=img.src;



foto.style.maxWidth="85%";

foto.style.maxHeight="85%";

foto.style.borderRadius="20px";

foto.style.boxShadow="0 0 40px #d4af37";



fondo.appendChild(foto);



document.body.appendChild(fondo);



fondo.onclick=()=>{



document.body.removeChild(fondo);



}



});



});



/*==================================

    EFECTO HERO

===================================*/



const hero=document.querySelector(".hero-img img");



if(hero){



document.addEventListener("mousemove",(e)=>{



const x=(window.innerWidth/2-e.clientX)/70;



const y=(window.innerHeight/2-e.clientY)/70;



hero.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;



});



}



/*==================================

    MENSAJE

===================================*/



console.log("MarsVerse cargado correctamente.");