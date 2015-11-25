/*
 File Name: window.js
 -------------------------------------------------------------------
 Function: window
 -------------------------------------------------------------------
 Displays the entire width and height of the browsers screen > aka the resolution
 Also displays the color capacity of the browser

 DOM Top Level: window
 Child: screen
 */

//GLOBAL ELEMENTS



//-----------------------------------
function browserSize() {
    var width, height, size;

    width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    size = document.getElementById("size");
    size.innerHTML = "Browser inner window width: " + width + ", height: " + height + ". <hr>";
}
addEventListener( "DOMContentLoaded" , browserSize , false ) ;

//-------------------------------------------
function browserCheckType()
{
    var panel = document.getElementById( "panel" ) ;
    panel.innerHTML = "<br>Browser: " + navigator.appName ;
    panel.innerHTML += "<br>Code Name: " + navigator.appCodeName ;
    panel.innerHTML += "<br>Version: " + navigator.appVersion ;
    panel.innerHTML += "<br>Platform: " + navigator.platform ;
    panel.innerHTML += "<br>User Agent: " + navigator.userAgent ;
    if( document.addEventListener )
    {
    panel.innerHTML += "<br><br>This is a Modern DOM Browser" ;
    }
}
addEventListener( "DOMContentLoaded" , browserCheckType , false ) ;