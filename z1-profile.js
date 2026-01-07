const modal = document.getElementById("modal");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");

const openDrawerBtn = document.getElementById("openDrawerBtn");
const closeDrawer = document.getElementById("closeDrawer");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

openDrawerBtn.addEventListener("click", () => {
  drawer.classList.add("active");
  overlay.classList.add("active");
});

function closeAll() {
  modal.classList.remove("active");
  drawer.classList.remove("active");
  overlay.classList.remove("active");
}

closeModal.addEventListener("click", closeAll);
closeDrawer.addEventListener("click", closeAll);
overlay.addEventListener("click", closeAll);
