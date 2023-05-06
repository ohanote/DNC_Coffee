const aboutBtn = document.getElementById("aboutBtn");
const closeBtn = document.getElementById("closeModal");
const dialog = document.getElementById("modal");

function modalClick() {
  if (dialog.style.display == "flex") {
    dialog.style.display = "none";
  } else {
    dialog.style.display = "flex";
  }
}

aboutBtn.addEventListener("click", modalClick);
