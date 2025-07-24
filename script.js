const input = document.getElementById("input-box")
const listt = document.getElementById("listcontainer")
function addTask() {
 if (input.value === '') {
  alert("Please add your task");
 }
 else {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  listt.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span)
 }
 input.value = '';
savedata();
}




listt.addEventListener("click",function(e){
 if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
  savedata();
}
 else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
savedata();
 }
},false);

function savedata(){
 localStorage.setItem("data",listcontainer.innerHTML);
}
function showlist(){
 listcontainer.innerHTML=localStorage.getItem("data");
}
showlist()