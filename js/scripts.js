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