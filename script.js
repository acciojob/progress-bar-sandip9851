//your JS code here. If required.
const circle = document.querySelectorAll(".circle");
const nxtBtn = document.querySelector("#nxt");
const prvBtn = document.querySelector("#pre");

nxtBtn.addEventListener("click",addclass);

let index = 0;
function addclass() {
	//nxtBtn.preventDefault();
	if (index < circle.length) {
    circle[index].classList.add("active");
    index++;
  }
	if (index === circle.length) {
    nxtBtn.disabled = true;
  }
	if (index > 0) {
    prvBtn.disabled = false;
  }
	
}
prvBtn.addEventListener("click",removeClass);
function removeClass() {
	//prvBtn.preventDefault();
	if (index > 0) {
    index--;
    circle[index].classList.remove("active");
  }
	if (index === 0) {
    prvBtn.disabled = true;
  }
	if (index < circle.length) {
    nxtBtn.disabled = false;
  }
	
}