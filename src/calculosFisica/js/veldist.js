function calcVel() {
    const tempo = parseFloat(document.getElementById('tempo-v').value);
    const distancia = parseFloat(document.getElementById('distancia-v').value);

    if (tempo > 0) {
        const velocidade = distancia / tempo;
        document.getElementById('result-velocidade').innerHTML = `<span>Velocidade: ${velocidade.toFixed(2)} km/h</span>`;
    } else {
        document.getElementById('result-velocidade').innerHTML = `<span>Tempo inválido</span>`;
    }
}

function calcDist() {
    const tempo = parseFloat(document.getElementById('tempo-d').value);
    const velocidade = parseFloat(document.getElementById('velocidade-d').value);

    const distancia = velocidade * tempo;
    document.getElementById('result-distancia').innerHTML = `<span>Distância: ${distancia.toFixed(2)} km</span>`;
}


document.getElementById('btn-velocidade').addEventListener('click', calcVel);
document.getElementById('btn-distancia').addEventListener('click', calcDist);
