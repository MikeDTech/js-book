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

//GLOBAL VARIABLES

// current window size width x height
var widthCurrentWindow = document.body.clientWidth ;
var heightCurrentWindow = document.body.clientHeight ;

// GLOBAL ELEMENTS
document.title = "Browser Window Properties";


function init()
{
//declare local function variables	
var panel, width, height, avWidth, avHeight, colors, vStatus;


// call id "panel" to display results in a div
panel = document.getElementById( "panel" );

// create page title
document.title = "Window / Screen Properties";

//screen dimensions width x height
width = window.screen.width ;
height = window.screen.height ;

// screen available width x height
avWidth = window.screen.availWidth ;
avHeight = window.screen.availHeight ;

// Range of colors a screen can display
switch( window.screen.colorDepth )
{
	
		case 8:  colors = "Low Colors  | 8-bits  | 256 colors" ;			break ;
		case 16: colors = "High Colors | 16-bits | 65,536 colors" ;			break ;
		case 24: colors = "True Colors | 24-bits | Millions of colors" ;		break ;
		case 32: colors = "Deep Colors | 32-bits | Billions of colors" ;	break ;
		default: colors = "Unknown" ;
		
		
		
} // end switch

// Write variables to display as html in the element with the id="panel" >> div in this case"

panel.innerHTML = "Screen Resolution: " + width + " x " + height + "<br>" ;

panel.innerHTML += "Available Screen Size: " + avWidth + " x " + avHeight + "<br>" ;

panel.innerHTML += "Color Capbility: " + colors + "<br>" ;

panel.innerHTML += "Available Screen Size: " + avWidth + " x " + avHeight + "<br><hr><br>";
    panel.innerHTML += "Current Screen Size: " + widthCurrentWindow + " x " + heightCurrentWindow + "<br><hr><br>" ;




} // end init function


// Event listener > controls when "init" function is called
document.addEventListener( "DOMContentLoaded", init, false );





function checkBrowser()
{
    var panel = document.getElementById( "panel" ) ;
    panel.innerHTML += "<br>Browser: " + navigator.appName ;
    panel.innerHTML += "<br>Code Name: " + navigator.appCodeName ;
    panel.innerHTML += "<br>Version: " + navigator.appVersion ;
    panel.innerHTML += "<br>Platform: " + navigator.platform ;
    panel.innerHTML += "<br>User Agent: " + navigator.userAgent ;
    if( document.addEventListener )
    {
        panel.innerHTML += "<br><br>This is a Modern DOM Browser" ;
    }
}
addEventListener( "DOMContentLoaded" , checkBrowser , false ) ;


/* http://www.w3schools.com/js/tryit.asp?filename=tryjs_win_inner
 http://www.w3schools.com/js/js_window.asp */