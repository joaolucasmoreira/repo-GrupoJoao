  function calcular() {
      let U = parseFloat(document.getElementById("tensao").value);
      let I = parseFloat(document.getElementById("corrente").value);
      let R = parseFloat(document.getElementById("resistencia").value);
      resultado = document.getElementById("result-Ohm");

      resultado.innerHTML = ``

      // Cálculo da Lei de Ohm
      if (!isNaN(U) && !isNaN(I)) {
        R = U / I;
        resultado.innerHTML += `<span>Resistência ${R.toFixed(2)} (Ω)</span><br>`;
      } 

      else if (!isNaN(U) && !isNaN(R)) {
        I = U / R;
        resultado.innerHTML += `<span>Corrente ${I.toFixed(2)} (A)</span><br>`;  
      } 

      else if (!isNaN(I) && !isNaN(R)) {
        U = R * I;
        resultado.innerHTML += `<span>Tensão ${U.toFixed(2)} (V)</span><br>`;
      }

      // Potência
      if (!isNaN(U) && !isNaN(I)) {
        let P = U * I;
        resultado.innerHTML += `<span>Potência ${P.toFixed(2)} (W)</span>`;
      }
    }