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
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    scrollToSection('top');
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    let menuIconBars = document.querySelector("#myTopnav .fa-bars");
    let menuIconTimes = document.querySelector("#myTopnav .fa-times");

    if (menuIconBars.className === "fa fa-bars") {
        menuIconBars.className += " no-display";
        menuIconTimes.className = "fa fa-times";
    } else {
        menuIconBars.className = "fa fa-bars";
        menuIconTimes.className += " no-display";
    }

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
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
    myFunction();
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
