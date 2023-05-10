const btn = document.getElementById("menu-btn");

function navToggle() {
  //   console.log(1);
  btn.classList.toggle("open");
}

btn.addEventListener("click", navToggle);
