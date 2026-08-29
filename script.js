/* =====================================================

   MENÚ

===================================================== */



function toggleMenu() {



    const nav = document.getElementById("nav");



    nav.classList.toggle("active");



}





/* =====================================================

   FRASES MOTIVACIONALES

===================================================== */



const frases = [



    "No necesitas tener todo resuelto. Solo necesitas comenzar.",



    "Tu proceso no tiene que parecerse al de nadie más.",



    "La disciplina te ayuda a continuar cuando la motivación desaparece.",



    "Cada pequeño avance cuenta.",



    "No permitas que un mal día te haga pensar que tienes una mala vida.",



    "Lo que hoy parece difícil puede convertirse mañana en una de tus mayores fortalezas.",



    "Cree en la persona que estás construyendo.",



    "Tus sueños también necesitan de tu constancia.",



    "No estás empezando desde cero. Estás comenzando desde la experiencia.",



    "Tu futuro necesita que no abandones tu presente."



];





function mostrarFrase() {



    const elemento = document.getElementById("frase");



    const indice =

        Math.floor(Math.random() * frases.length);



    elemento.style.opacity = "0";



    setTimeout(() => {



        elemento.textContent =

            "“" + frases[indice] + "”";



        elemento.style.opacity = "1";



    }, 250);



}





/* =====================================================

   MENSAJES DE PROPÓSITO

===================================================== */



const mensajes = [



    "Tu propósito puede cambiar y crecer contigo.",



    "No necesitas conocer todo el camino para dar el primer paso.",



    "Aquello que te inspira puede convertirse en aquello que construyes.",



    "Tu vida no necesita ser perfecta para tener propósito.",



    "Pregúntate qué clase de persona quieres ser mientras persigues tus metas.",



    "El propósito aparece muchas veces cuando conectamos nuestros valores con nuestras acciones."



];





function nuevoMensaje() {



    const elemento =

        document.getElementById("purpose-message");



    const indice =

        Math.floor(Math.random() * mensajes.length);



    elemento.style.opacity = "0";



    setTimeout(() => {



        elemento.textContent =

            mensajes[indice];



        elemento.style.opacity = "1";



    }, 250);



}





/* =====================================================

   NEWSLETTER

===================================================== */



function suscribirse(event) {



    event.preventDefault();



    const email =

        document.getElementById("email");



    const mensaje =

        document.getElementById("subscription-message");



    if (email.value.trim() !== "") {



        mensaje.textContent =

            "✦ Gracias por formar parte de IMPULSO. Sigue creyendo en ti.";



        email.value = "";



    }



}





/* =====================================================

   ANIMACIÓN AL HACER SCROLL

===================================================== */



const elementos =

    document.querySelectorAll(

        ".message-card, .habit, .stats div"

    );





const observer =

    new IntersectionObserver(

        (entries) => {



            entries.forEach(entry => {



                if (entry.isIntersecting) {



                    entry.target.style.opacity = "1";

                    entry.target.style.transform =

                        "translateY(0)";



                }



            });



        },

        {

            threshold: 0.15

        }

    );





elementos.forEach(elemento => {



    elemento.style.opacity = "0";



    elemento.style.transform =

        "translateY(30px)";



    elemento.style.transition =

        "opacity 0.7s ease, transform 0.7s ease";



    observer.observe(elemento);



});