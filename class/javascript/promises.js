//represents the future events.technically they are objects.by default they remain in pending 
//state.
//it has three states- pending,fulfill,rejected

//accepts two callbacks-resolve and reject


//1.1 pending state
// let n=new Promise((resolve,reject)=>{
  
// });
// console.log(n);

// //1.2 moves to other state when then and catch condn are put
// let like =true;

// let p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if(like) {
//             resolve("yeah , good");
//         }
//         else{
//             reject("naah, you are shitt");
//         }
//     }, 2000);
// });

// console.log(p);

// //2.1  consuming promises
// p.then((value)=>{
//     console.log(`message is : ${value}`);
// },(err)=>{
//     console.log(`message is : ${err}`);
// });

// //2.2 another method of consuming promises
// p.then((value)=>{
//     console.log(`message is : ${value}`);
// })
// .catch((err)=>{
//     console.log(`message is : ${err}`);
// });


//promise chaining

let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 1 resolved");
    },2000);
});

p1.then((value)=>{
    console.log(value);
    let p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise 2 resolved");
        },2000);
    });
    return p2;
    
}
).then((value)=>{
    console.log("done");
    return 2;
}).then((value)=>{
    console.log("ok now done!!!");
});


//
function maggi(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let dukankhulihai=true;
            if(dukankhulihai)
            {
                resolve("maggi mil gayi");
            }
            else{
                reject("maggi ni milli");
            }
        }, 2000);
    });
}

maggi().then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);
});



//////////////////////////////////

//promises are future events, technically they are object
//3 states - pending, rejected, fulfilled
//By default promises are in pending state
//It change it state as per the request

//syntax
//let p = new Promise();

// let like = true;
// //By default it has 2 callbacks - resolve,reject
// let p = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         if(like) {
//             resolve("yeah, she like you");
//         }
//         else {
//             reject("Naaah! You're shitt");
//         }
//     })
// },2000);

// console.log(p);

// // consuming promises : then
// p.then((value)=> {
//     console.log(Message: ${value});
// },(err)=> {
//     console.log(Message: ${value});
// });

// // consuming promises: then-catch
// p.then((value)=> {
//     console.log(Message: ${value});
// })
// .catch((err)=> {
//     console.log(Message: ${err});
// });

// //until .then is not used the promise remain in pending state.
// //after the is used it change state as per the command.

// //promise chaining

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     }, 200);
// })

// p1.then((value) => {
//     console.log(value);   
//     let p2 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Promise 2 resolved");
//         }, 200);
//     });
//     return p2;
// }).then((value) => {//from here on then are for promise 2.
//     console.log("Done!");
//     console.log(value);
// }).then((value)=> {
//     console.log("Ok Now Done!");
// })

// function MaggiLekarAao() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let dukaanKhuliHai = true;
//             if(dukaanKhuliHai) {
//                 resolve("Maggi milgyi");
//             }
//             else {
//                 reject("Maggi nhi milli");
//             }
//         }, 2000);
//     })
// }

// MaggiLekarAao().then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })




