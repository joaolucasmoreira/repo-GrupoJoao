

btnCalculo.addEventListener("click", (e) => {
    e.preventDefault()
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    let calculoDoIMC = "";

    if (imc < 18.5) {
        calculoDoIMC = "abaixo do peso.";
    } else if (imc < 24.9) {
        calculoDoIMC = "com o peso normal.";
    } else if (imc < 29.9) {
        calculoDoIMC = "com sobrepeso";
    } else {
        calculoDoIMC = "com obesidade";
    }

    const resultado = document.getElementById("result-desconto").innerHTML = `<span>Seu IMC é ${imcFormatado} e você está ${calculoDoIMC}</span>`
})


