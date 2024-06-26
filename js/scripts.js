let currentPath = window.location.href;

let activeLinkId = currentPath.substring(currentPath.indexOf('#') + 1);

const aInicio = document.getElementById('ainicio');
const aNosotros = document.getElementById('anosotros');
const aContacto = document.getElementById('acontacto');

let myMenu = [
    aInicio,
    aContacto,
    aNosotros
];

const inicio = document.getElementById('inicio');
const nosotros = document.getElementById('nosotros');
const contacto = document.getElementById("contacto");

let myTopnav = document.querySelector('#myTopnav');

const firstAnchor = document.querySelector('#myTopnav a:first-child');

let menuIconBars = document.querySelector("#myTopnav .fa-bars");

let menuIconTimes = document.querySelector("#myTopnav .fa-times");

window.addEventListener('load', () => {
    setAnio();
    setActiveClassOnScroll();
});

function setAnio() {
    let copyright = document.querySelector('#copyright');
    let fecha = new Date();
    let anio = fecha.getFullYear();
    copyright.textContent = anio;
}



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
    if (firstAnchor.innerHTML !== '&nbsp;') {
        firstAnchor.innerHTML = '&nbsp;';
    } else {
        setActiveClassOnScroll();
    }

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

// btn3.addEventListener('click', () => {
//     // myFunction();
//     modalQR.style.display = 'block';
// });

// btn4.addEventListener('click', () => {
//     // myFunction();
//     modalQR.style.display = 'block';
// });

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

function changeUrlWhitoutRefresh(section) {
    if (currentPath.indexOf('#')) {
        const nuevoURL = `${currentPath.slice(currentPath.indexOf('#'), 1)}#${section}`;
        history.pushState({}, '', nuevoURL);
    }
}

function setActiveClassOnScroll() {
    const scrollPosition = window.scrollY;

    // const rectInicio = inicio.getBoundingClientRect();
    const rectNosotros = nosotros.getBoundingClientRect();
    const rectContacto = contacto.getBoundingClientRect();

    // const posicionInicio = rectInicio.top + window.scrollY;
    const posicionNosotros = rectNosotros.top + window.scrollY;
    const posicionContacto = rectContacto.top + window.scrollY;


    if (scrollPosition >= posicionContacto && scrollPosition < posicionNosotros) {
        colocarClaseActiva(aContacto);
    } else if (scrollPosition >= posicionNosotros) {
        colocarClaseActiva(aNosotros);
    } else {
        colocarClaseActiva(aInicio);
    }

    let scrollHeight = document.documentElement.scrollHeight;
    let scrollPosition1 = window.innerHeight + window.scrollY;
    if ((scrollHeight - scrollPosition1) / scrollHeight === 0) {
        // alert("¡Has llegado al final de la página!");
        colocarClaseActiva(aNosotros);
    }
}

window.addEventListener('scroll', setActiveClassOnScroll);

function colocarClaseActiva(elem = '') {

    let elItem = elem;

    for (let item of myMenu) {
        item.classList.remove('active');
    }

    if (!elem) {

        for (let item of myMenu) {

            item = item.textContent.toLowerCase();

            if (activeLinkId === item) {
                elItem = document.getElementById(`a${item}`);
            } else {
                elItem = aInicio;
            }

        }

    }

    elItem.classList.add('active');
    firstAnchor.textContent = elItem.textContent.toUpperCase();
    document.title = `${firstAnchor.textContent.charAt(0).toUpperCase()}${firstAnchor.textContent.substring(1).toLowerCase()} - Complejo La Barranca`;
    changeUrlWhitoutRefresh(firstAnchor.textContent.toLowerCase());
}