// Función para hacer scroll suave hacia una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to top button
//Get the button:
mybutton = document.getElementById("myBtn");

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