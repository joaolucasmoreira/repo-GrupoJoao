document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    if (!form) return;

    form.addEventListener('submit', calculateGas);
});

function calculateGas(e) {
    e.preventDefault();
    const dist = parseFloat(document.getElementById('distancia').value) || 0;
    const cons = parseInt(document.getElementById('consumo-vaiculo').value) || 0;
    const preGas = parseFloat(document.getElementById('preco-combustivel').value) || 0;

    const total = dist * cons * preGas;
    const formatted = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById('result-combustivel')
        .innerHTML = `<span>O valor do combustível é: ${formatted}</span>`;
}
