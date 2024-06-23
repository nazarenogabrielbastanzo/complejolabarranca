const aInicio = document.getElementById('aInicio');
const aNosotros = document.getElementById('aNosotros');
const aContacto = document.getElementById('aContacto');
const inicio = document.getElementById('inicio');
const nosotros = document.getElementById('nosotros');
const contacto = document.getElementById("contacto");
let myTopnav = document.querySelector('#myTopnav');
const firstAnchor = document.querySelector('#myTopnav a:first-child');
let menuIconBars = document.querySelector("#myTopnav .fa-bars");
let menuIconTimes = document.querySelector("#myTopnav .fa-times");

let copyright = document.querySelector('#copyright');
let fecha = new Date();
let anio = fecha.getFullYear();

copyright.textContent = anio;

// Función para hacer scroll suave hacia una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myTopnav.className = 'topnav fixed';
        myTopnav.style.position = 'fixed';
    } else {
        myTopnav.className = 'topnav';
        myTopnav.style.position = 'relative';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    scrollToSection('inicio');
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction(switchNav, switchMenuIcon) {
    firstAnchor.innerHTML = '&nbsp;';

    // if (switchMenuIcon) {
    //     if (menuIconBars.className === "fa fa-bars") {
    //         menuIconBars.className += " no-display";
    //         menuIconTimes.className = "fa fa-times";
    //         firstAnchor.textContent = '';
    //     } else {
    //         menuIconBars.className = "fa fa-bars";
    //         menuIconTimes.className += " no-display";
    //     }
    // }

    switchNav ? switchTopnav() : undefined;
}

function switchTopnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className = "topnav responsive";
    } else if (x.className === 'topnav responsive') {
        x.className = "topnav";       
    } else if (x.className === 'topnav fixed') {
        x.className = 'topnav fixed responsive';
    } else {
        x.className = 'topnav fixed';
    }
}

// Get the modals
var modal = document.getElementById("myModal");
let modalQR = document.querySelector('#qrModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
let btn2 = document.getElementById('myBtn2');
let btn3 = document.querySelector('#myBtn3');
let btn4 = document.querySelector('#myBtn4');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let span2 = document.querySelector('#qrModal .close');

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.addEventListener('click', () => {
    modal.style.display = 'block';
});

btn3.addEventListener('click', () => {
    // myFunction();
    modalQR.style.display = 'block';
});

btn4.addEventListener('click', () => {
    // myFunction();
    modalQR.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
function ocultarModal() {
    modal.style.display = "none";
    modalQR.style.display = 'none';
}

span.addEventListener('click', ocultarModal);

span2.addEventListener('click', ocultarModal);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        ocultarModal();
    }

    if (event.target == modalQR) {
        ocultarModal();
    }
});

window.addEventListener('keydown', (event) => {
    // console.log(`Key pressed: ${event.key} (code: ${event.code})`);

    if (event.key === 'Escape') {
        ocultarModal();
    }
});


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const rectInicio = inicio.getBoundingClientRect();
    const rectNosotros = nosotros.getBoundingClientRect();
    const rectContacto = contacto.getBoundingClientRect();

    const posicionInicio = rectInicio.top + window.scrollY;
    const posicionNosotros = rectNosotros.top + window.scrollY;
    const posicionContacto = rectContacto.top + window.scrollY;


    if (scrollPosition >= posicionContacto && scrollPosition < posicionNosotros) {
        // Realiza la acción cuando el scroll coincide con la posición del elemento.

        firstAnchor.textContent = aContacto.textContent;

        aInicio.className = '';
        aContacto.className = 'active';
        aNosotros.className = '';
    } else if (scrollPosition >= posicionNosotros) {
        firstAnchor.textContent = aNosotros.textContent;

        aInicio.className = '';
        aContacto.className = '';
        aNosotros.className = 'active'
    } else if (scrollPosition >= posicionInicio) {
        firstAnchor.textContent = aInicio.textContent;

        aInicio.className = 'active';
        aContacto.className = '';
        aNosotros.className = '';
    } else {
        firstAnchor.textContent = 'inicio';
    }

});

function colocarClaseActiva(elem) {
    setTimeout(()=> {
        let currentPath = window.location.href;
        // console.log(currentPath);

        aInicio.className = '';
        aContacto.className = '';
        aNosotros.className = '';
        
        if (currentPath.indexOf(`#${elem.textContent}`) != -1) {
            elem.className = 'active';
            firstAnchor.innerHTML = elem.innerHTML;
        } else {
            elem.className = '';
        }
    }, 800);

}