let str='Siddharth Jain'
str[3]='t'
console.log(str) /*does not change the string*/


let new1="       Siddharth"
console.log(new1.trim) /*trims the whitespaces from forward and backward of string*/

let msg='fool' 
console.log(msg.repeat(100))/*repeat the string for a n number of times*/
console.log(msg.toUpperCase())/*converts string to uppercase*/
console.log(msg.indexOf("s"))/*checks the index of a element in string*/
/*chaining of functions*/
console.log(new1.toUpperCase(new1.trim()));


console.log(str.replace('S','f'))/*replaces the elemnet with another*/


let fname="siddharth"
let lname="jain"

console.log("Mr."+" "+fname+" "+lname)
console.log("Mr. ${fname} ${lname}")