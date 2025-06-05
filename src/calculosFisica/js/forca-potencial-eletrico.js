btnCalculoForca.addEventListener("click", (e) => { 
    e.preventDefault()
    const k = 8.987000000;
    const Q1 = document.getElementById("input-carga-1").value;
    const Q2 = document.getElementById("input-carga-2").value;
    const D = document.getElementById("input-distancia").value;

    const forcaEletrica = (k * Q1 * Q2)/D*D;
    const forcaEletricaFormatada = forcaEletrica.toFixed(2);
    const potencialEletrico = (k * Q1 * Q2)/D; 
    const potencialEletricoFormatado = potencialEletrico.toFixed(2);      

    if (forcaEletrica < 0) {
        forcaEletrica = forcaEletrica * -1
    };
    
    const resultado = document.getElementById("result-desconto").innerHTML = `<span>A força elétrica é ${forcaEletricaFormatada} e a energia potencial elétrica é ${potencialEletricoFormatado}</span>`    
})