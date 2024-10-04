//single button event
/*var btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function()
{
    alert("button pressed");
}*/

//events on multiple same elements
/*var btn=document.querySelectorAll("button");
console.dir(btn);
for(item of btn)
{
    item.onclick=myfunc;
    item.onmouseenter=function cursor()
    {
        console.log("hello");
    }
}*/

function myfunc()
{
    //alert("btn pressed");
    console.log("btn was pressed");
}
function cursor()
{
    //alert("hello");
    console.log("btn clicked");
}

//applying multiple same type of events on same elements 
//here same event can't take different values of different funcs hence event listeners are used

/*for(item of btn)
    {
        item.onclick=myfunc;
        item.onclick=cursor;
    }
*/
//event listeners
//event listener is a object of js which takes two parameters one is type of event to be triggered 
// and other is function to be called when event is started.
var btns=document.querySelectorAll("button");
for(btn of btns)
{
    btn.addEventListener('click',myfunc);
    btn.addEventListener('click',cursor);
}

var par=document.querySelector("p");
par.addEventListener('mouseenter',new12)

function new12()
{
    console.log("paragraph is visited.....");
}

