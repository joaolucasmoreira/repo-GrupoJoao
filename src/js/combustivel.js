document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    if (!form) return;

    form.addEventListener('submit', calculateGas);
})

function calculateGas(e) {
    const distanc = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo-veiculo').value);
    const preco = parseFloat(document.getElementById('preco-combustivel').value);

}