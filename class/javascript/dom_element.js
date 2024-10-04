//creating element using javascript

var h1=document.createElement("h1");
console.dir(h1);
h1.innerText="dom elements";
console.log(h1);
var body=document.querySelector('body');
body.appendChild(h1);
h1.append(" learning js");
var btn=document.createElement("button");
btn.innerText="click me";

btn.setAttribute("class","hello");
btn.setAttribute("type","submit");
body.appendChild(btn);

//by default append func adds to the last
// for adding before we use prepend

body.prepend(h1);

//body.remove();--it is body variable here not html tag
