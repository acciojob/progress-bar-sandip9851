//your JS code here. If required.
const circle = document.querySelectorAll(".circle");
const nxtBtn = document.querySelector("#nxt");
const prvBtn = document.querySelector("#pre");

nxtBtn.addEventListener("click",addclass);

let index = 0;
function addclass() {
	circle[index].className = "active";
	index++;
	
}
prvBtn.addEventListener("click",removeClass);
function removeClass() {
	circle[--index].className = "circle";
}