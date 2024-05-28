const circle = document.querySelectorAll(".circle");
const nxtBtn = document.querySelector("#next");
const prvBtn = document.querySelector("#prev");

nxtBtn.addEventListener("click", addClass);
prvBtn.addEventListener("click", removeClass);

let index = 1;
function addClass() {
  if (index < circle.length) {
    circle[index].classList.add("active");
    index++;
  }

  prvBtn.disabled = false;

  if (index === circle.length) {
    nxtBtn.disabled = true;
  }
}

function removeClass() {
  if (index > 0) {
    index--;
    circle[index].classList.remove("active");
  }

  nxtBtn.disabled = false;

  if (index === 0) {
    prvBtn.disabled = true;
  }
}