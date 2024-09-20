console.log(1+2);//3
console.log(1+'2');//12
console.log(5-'2')//3
console.log(10+'a')//10A
console.log(10-'a')//NaN
console.log(10+'2'-'a')//nan
console.log(typeof(1+'2'));//string
console.log(10+'0'+'1');//1001


//string to number
//m1

let a='20';
console.log(typeof a);
let c=Number(a);//constructor number is called
console.log(typeof c);
let d=parseInt(a);
console.log(typeof d);