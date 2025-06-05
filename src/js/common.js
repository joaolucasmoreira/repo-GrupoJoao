// common.js
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuFisica = document.getElementById("menu-fisica");
  const menuSelect = document.getElementById("menu-select");
  if (!menuFisica || !menuSelect) return;
  const rect = menuFisica.getBoundingClientRect();

  menuFisica.addEventListener("click", (e) => {
    e.preventDefault();
    if (getComputedStyle(menuSelect).display === "none") {
      menuSelect.classList.remove("escondido");
      menuSelect.classList.add("visivel");
      menuSelect.style.position = "absolute";
      menuSelect.style.top = rect.bottom + 30 + "px";
      menuSelect.style.left = rect.left - 42 + "px";
    } else {
      menuSelect.classList.remove("visivel");
      menuSelect.classList.add("escondido");
    }
  });

  document.addEventListener("click", function (e) {
    if (!menuSelect.contains(e.target) && !menuFisica.contains(e.target)) {
      menuSelect.classList.remove("visivel");
      menuSelect.classList.add("escondido");
    }
  });
});
