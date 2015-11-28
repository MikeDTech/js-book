/* WORKING COPY
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
// GLOBAL VARIABLES >>           I THINK VARIABLE NAME FOR GLOBAL IS ALL CAPS\
                                //scope means area that var or object is defined for i.e local vs global variables.
//var ALL_CAPS="Not Sure";


//#########################################################################
// FUNCTIONS
function doc() {

    // Arrays use index numbers to access it's elements >  arrList[0] | they start with [
    //var arrNames = [


    // Array Objects use names to access it's members >  arrObject.first.Name | start with {
    // var arrObject = {firstName:"John", lastName:"Doe", age:46};

    var panel, arrList, i, str, strUpper, strLower, strSub, strCap, strFormat ;


    panel = document.getElementById( "panel" ) ;

    arrList = [
        pagettitle = "My Page",
        baseURI = location.protocol,
        varFilename = location.pathname,
        mydomain = location.host,
        varurl = location.pathname,
        referrer = location.href
    ];


    //arrList.length --> total number of values in an array
    for ( i = 0 ; i < arrList.length ; i++ )
    {
        str = arrList[i];
        strLower = str.toLowerCase();
        strSub = strLower.substring(1); //gets from right after the first character

        strUpper = str.toUpperCase();
        strCap = strUpper.substring(0, 1); //gets and print first character

        strFormat = strCap + strSub ;

        panel.innerHTML += strFormat + ": " + str.value + "<br><hr>";
       // panel.innerHTML += arrList[i] + ": " + arrList[i] ; // print name of arrList varriable
       // panel.innerHTML += document + "." + arrList[i] + " <br>";


    }


}
addEventListener( "DOMContentLoaded" , doc , false ) ;




  /*
    var i=0;
    var item = arrList[i];
    toString(item);
    //var numItems = arrList.length; // Gets the number of values in an array | always returns 1 higher than the largest index value

    panel.innerHTML = item;


}
addEventListener( "DOMContentLoaded" , doc , false ) ;

/*var test = document + '.' + arrList[3];
panel.innerHTML = test;
for ( var i=0; i < arrList.length; i++ )
{

    var title1 = document + '.' + arrList[i] ;
    var title1 =  panel.innerHTML =+ '.' + arrList[i];
}
panel.innerHTML = title1;
var test22v = arrList[2];
var test22 = document;
test22 = test22 + '.';
test22 = test22 + test22v;        var test2v = arrList[2];
panel.innerHTML += document.test2v;




}
addEventListener( "DOMContentLoaded" , doc , false ) ; */
