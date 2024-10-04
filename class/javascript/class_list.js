//set the attribute can't be assigned to multiple classes at once , classlist can be used 
//in its place for multiple classes.

var newh1=document.querySelector("h1");
console.dir('h1');
console.dir(newh1);
console.dir(newh1.classList);//returns total no of classes to an element


newh1.classList.add("green");//give class name to an element
console.dir(newh1.classList[1]);


newh1.classList.remove("green");
console.log(newh1.classList);

console.log(newh1.classList.contains("green"));

//toggle if there is class present of that name it removes , if not presents it adds
newh1.classList.toggle("black");//adds class black as it is not present 
newh1.classList.toggle("iron");//removes class iron as it is present