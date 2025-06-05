document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  if (!form) return;

  form.addEventListener('submit', calcularForca);
});

function calcularForca(e) {
  e.preventDefault();
  const massa = parseFloat(document.getElementById('massa').value) || 0;
  const aceleracao = parseFloat(document.getElementById('aceleracao').value) || 0;

  const forca = massa * aceleracao;

  document.getElementById('result-forca').innerHTML = `
    <span>Força resultante: ${forca.toFixed(2)} N</span>
  `;
}
