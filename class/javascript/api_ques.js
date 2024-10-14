let url = "https://swapi.dev/api/people/1";

let container = document.querySelector(".container");
fetch(url)
  .then((data) => data.json())//converts unreadable data (json data) to normal object form
  .then((data) => {
     console.log(data);
     console.log(data.name);
  });
async function getData() {
  let data = await fetch(url);
  let result = await data.json();
  //   console.log(resultData);
  showData(result);
}
getData();
function showData(data) {
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = `<div class="name">${data.name}</div>
    <div class="gender">${data.gender}</div>
    <div class="height">${data.height}</div>`;
  container.append(div);
}