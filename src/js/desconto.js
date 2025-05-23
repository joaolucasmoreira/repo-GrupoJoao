document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  if (!form) return;

  form.addEventListener('submit', calculateDiscount);
});

function calculateDiscount(e) {
  e.preventDefault();
  const price = parseFloat(document.getElementById('preco-unitario').value) || 0;
  const qty   = parseInt  (document.getElementById('quantidade').value)     || 0;
  const disc  = parseFloat(document.getElementById('desconto').value)       || 0;

  const total = price * qty * (1 - disc / 100);
  const formatted = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById('result-desconto')
          .innerHTML = `<span>Valor com desconto: ${formatted}</span>`;
}
