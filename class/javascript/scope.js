/* there are 4 types of scope
global
function
block
lexical*/

//global scope

let a=5;
var b=40;
const c=2;

function myfunc()
{
    console.log(a);
    console.log(b);
    console.log(c);
}
myfunc();
console.log(a);
console.log(b);
console.log(c);


//functional scope

let sum=20;
let ab=34;
function myfun(a,b)
{
    let c=a*b;
    console.log(c);
    console.log(ab);
}
myfun(8,3);

console.log(ab);

//block scope
{
    var qw=34;
    var b=45;
    var qe=23;

}


