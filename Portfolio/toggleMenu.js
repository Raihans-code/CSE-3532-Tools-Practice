function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.querySelector('[aria-controls="mobile-menu"]');
  const isHidden = menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  btn.setAttribute("aria-expanded", isHidden);
}
document.getElementById('year').textContent = new Date().getFullYear();