// common.js
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
});
