var body=document.querySelector("body");

var h1=document.createElement("h1");
h1.innerText="siddharth jain";
body.appendChild(h1);

var summary=document.createElement("h3");
summary.innerText="Summary:";
body.appendChild(summary);
summary.style.display='inline';

var data=document.createElement("span");
data.innerText="i am siddharth jain";
body.appendChild(data);

var image=document.createElement("img");
image.setAttribute("src","https://images.unsplash.com/photo-1726501615020-c191eb696705?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
image.style.height='500px';
image.style.width='500px';
image.style.display='block';
body.appendChild(image);

var edu=document.createElement("h1");
edu.innerText=" Education";
body.appendChild(edu);

var loe=document.createElement("ul");

body.appendChild(loe);

var li1=document.createElement("li");
li1.innerText="10th pass";
loe.appendChild(li1);

var li2=document.createElement("li");
li2.innerText="12th pass";
loe.appendChild(li2); 

var li3=document.createElement("li");
li3.innerText="btech pass";
loe.appendChild(li3); 

var skills=document.createElement("h1")
skills.innerText='Skills';
body.appendChild(skills)

var skillslist=document.createElement("ul");

body.appendChild(skillslist);

var li4=document.createElement("li");
li4.innerText="Programming Languages: Python,C";
skillslist.appendChild(li4);

var li5=document.createElement("li");
li5.innerText="Front End: HTML,CSS,JS";
skillslist.appendChild(li5);

var li6=document.createElement("li");
li6.innerText="Others: Git,Sql";
skillslist.appendChild(li6);


var hobbies=document.createElement("h1")
hobbies.innerText='Hobbies';
body.appendChild(hobbies)

var hobblist=document.createElement("ul");

body.appendChild(hobblist);

var li7=document.createElement("li");
li7.innerText="Reading books";
hobblist.appendChild(li7);

var li8=document.createElement("li");
li8.innerText="Listening Music";
hobblist.appendChild(li8);

var li9=document.createElement("li");
li9.innerText="Watching cricket";
hobblist.appendChild(li9);


var contacts=document.createElement("h1")
contacts.innerText='Contacts';
body.appendChild(contacts)

var contlist=document.createElement("ul");

body.appendChild(contlist);

var li10=document.createElement("li");
li10.innerText="Email: abc@gmail.com";
contlist.appendChild(li10);

var li11=document.createElement("li");
li11.innerText="Mobile No. 1234567890";
contlist.appendChild(li11);

var li12=document.createElement("li");
li12.innerText="linkedin";
contlist.appendChild(li12);



