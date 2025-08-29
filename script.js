const btn = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});