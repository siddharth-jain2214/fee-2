var form=document.querySelector("form");
form.addEventListener('submit',myfunc)
function myfunc(event)
{
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    event.preventDefault();//prevents action of form to nextpage
    console.log("form submitted....");
    
    var p=document.querySelector('p');
    p.innerText=inp.value
    
}

