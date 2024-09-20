/*stores complex data*/
/*key value pair*/
/* 2 methods of creating objects-constructor or literal*/


/* constructor method*/

/* var obj=Object(value)
obj.name="siddharth"
console.log(obj)*/

/*literals method

var user=
{name="siddharth"
class="FEE"
Roll no=25
}*/

/*console.log(user.name)*/

// constructor method
const obj= new Object();
obj.name="Siddharth";
console.log(obj);
console.log(obj.name);
console.log(typeof obj)

// literals method

const users={
    name:"siddharth",
    age:18,
    'full name':"sidddharth jain",// multiword keyword to be given in quotes
    subject:"fee",
    cgpa:9.80
};

console.log(typeof users)
console.log(users.age)// 1
console.log(users['age'])// 2

// for multiword key , 2nd method is used
console.log(users['full name'])

//updating objects value

users.name="Mohit";
console.log(users);

// objects inside a object
const hosts={
    host1:{
        name:"Siddharth",
        age:19
    },
    host2:{
        name:"Shubham",
        age:23
    },
};
console.log(hosts.host1.age)

const students={
    stud1:{
        name:{
            fname:"Sid",
            lname:"Jain"
        },
        age:25
    },
    stud2:{
        name:{
            fname:"Shubham",
            lname:"Jain"
        },
        age:34
    },

};

const arr=[stud1={name:"Sid",age:25},stud2={name:"Shubham",age:34},stud3={name:"Vanshika",age:23}];
console.log(arr[0].name);

//merging two objects
let obj1={name1:"yash",age:25}
let obj2={name2:"sid",age:18}
let obj3={...obj1,...obj2}
console.log(obj3)

let obj4= Object.assign(obj1,obj2)
console.log(obj4)