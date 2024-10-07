// console.log("Started execution");

// function myfunc()
// {
//     console.log("this is a function");
// }

// myfunc();

// console.log("execution ends here");

// function myProduct()
// {
//     //product
// }

// myProduct(payment);

// function payment()
// {
//     //payment
// }

// payment(message);

// function message(){
//     //message
// }

// //callback function ex

// function myfunc()
// {
//     console.log("myfunc executed");
// }

// function hello(call)
// {
//     console.log("hello executed");
//     call();
// }

// hello(myfunc);



// //synchronous behaviour of js

// console.log("for loop starting");

// for(let i=0;i<1000;i++)
// {
//     console.log("for loop running");
// }
// console.log("foor loop ending");

//set interval (executes after a specified delay)

// function setTimeout()
// {

// }

// var set=function setTimeout()
// {

// }

    // console.log("execution started");


    // setTimeout(() => {
    //     console.log("set timeout function")//global execution
    // }, 2000);

    // for(let i=0;i<1000;i++)
    // {
    //     console.log("loop running");
    // }
    // console.log("execution ends");
    // function first()
    // {
    //     console.log("this is first func");
    // }

    // first();

//js executes on browser which contains web api's which has two asyncronous funcs settimeout and setinterval 
//which helps in asyncrounous behaviour of js

//js execution contains two stacks-
//call stack and main stack

//all the current executing code executes in main stack 
//all the remaining call back function which needs to be executed later is put in call stack
//for example settimeout is put into it till delay is over

//there is a intermediator in between these two stacks that is event loop which helps in
//manuvering between the code between call and main stack

//settimeout function only executes till the loop and other funcs fully executes , till then
//call stack will not pass the settimeout to main stack even if it takes more time 
//it will wait till in call stack   


// console.log("start");
// var a=setTimeout(() => {
//     console.log("settimeout working");
// }, 1000);
// clearTimeout(a);//stops working of settimeout func
// console.log("ending");

// console.log("start");   
// var a=setInterval(() => {
//     console.log("set time interval working");
// });
// clearInterval(a);//stops working of settimeout func
// console.log("ending");

let count=0;
let interval=setInterval(() => {
    console.log("hello");
    count++;

    if(count==3)
    {
        clearInterval(interval);
    }
}, 1000);

