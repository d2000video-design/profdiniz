function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("open");
  });
});
