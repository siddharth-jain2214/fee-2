var form=document.querySelector("form");
form.addEventListener('submit',myfunc)


function myfunc(event)
{
    event.preventDefault();//prevents action of form to nextpage
    
    let inp1=document.querySelector("#name");
    console.log(inp1.value);

    let inp2=document.querySelector("#bio");
    console.log(inp2.value);

    let inp3=document.querySelector("#dp");
    console.log(inp3.value);
    
    console.log("form submitted....");
    
    let prof_img=document.querySelector("#profile_img");
    prof_img.setAttribute("src",inp3.value);

    let var1=document.querySelector("#para1");
    var1.innerText=inp1.value;

    let var2=document.querySelector("#para2");
    var2.innerText=inp2.value;
    
}