/*
WORKING COPY
--------------------------------------------------------------
Reference
-----------
http://www.w3schools.com/js/tryit.asp?filename=tryjs_win_inner
http://www.w3schools.com/js/js_window.asp
 //#########################################################################

 File Name: browser.js
 -------------------------------------------------------------------
 Function(s): browserSize
              browserCheckType
 -------------------------------------------------------------------
 Displays the entire width and height of the browsers screen and details about the browser
 */
//#########################################################################
//Global Variables



//#########################################################################
function browserSize() {
    var width, height, size;

    width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    size = document.getElementById( "size" );
    size.innerHTML = "Browser Size (Initial Page Load)" +
        "<br>----------------------------------------<br>" +
        "            Width:  " + width + "px<br>" +
        "            Height:  " + height + "px<br>" +
        "----------------------------------------<br><hr>";
}
addEventListener( "DOMContentLoaded" , browserSize , false ) ;

//#########################################################################
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
        panel.innerHTML += "<br><br>This is a Modern DOM Browser<hr>" ;
    }
}
addEventListener( "DOMContentLoaded" , browserCheckType , false ) ;