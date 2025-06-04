document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  if (!form) return;

  form.addEventListener('submit', calculateTrabalhoPotencia);
});

function calculateTrabalhoPotencia(e) {
  e.preventDefault();
  const forc = parseFloat(document.getElementById('forca').value) || 0;
  const desloc   = parseInt  (document.getElementById('deslocamento').value)     || 0;
  const cos  = parseFloat(document.getElementById('cosseno').value)       || 0;

  const total = forc * desloc * cos;
  const formatted = total.toLocaleString('pt-BR', {
  });

  document.getElementById('result')
          .innerHTML = `<span>Valor final: ${formatted}</span>`;
}
