//your JS code here. If required.
const circle = document.querySelectorAll(".circle");
const nxtBtn = document.querySelector("#nxt");
const prvBtn = document.querySelector("#pre");

nxtBtn.addEventListener("click",addclass);

let index = 0;
function addclass() {
	nxtBtn.preventDefault();
	circle[index].className = "active";
	index++;
	if(index<0){
		index = 0;
		}
	
}
prvBtn.addEventListener("click",removeClass);
function removeClass() {
	prvBtn.preventDefault();
	circle[--index].className = "circle;
		if(index<0){
		index = 0;
		}
}