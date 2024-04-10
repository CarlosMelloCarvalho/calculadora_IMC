import React, { useState } from 'react';
import styles from "../FormularioIMC/FormularioIMC.module.css"


const FormularioIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // converte cm para metros
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc.toFixed(2));

    if (imc < 18.5) setClassificacao('Abaixo do peso');
    else if (imc >= 18.5 && imc <= 24.9) setClassificacao('Peso normal');
    else if (imc >= 25 && imc <= 29.9) setClassificacao('Sobrepeso');
    else if (imc >= 30 && imc <= 34.9) setClassificacao('Obesidade');
    else if (imc >= 35 && imc <= 39.9) setClassificacao('Obesidade grave');
    else setClassificacao('Obesidade mórbida');
  };

  return (
  
      <div className={styles.FormularioIMC}>
        <h2>Calculadora de IMC</h2>
        <label>
          Altura (cm):
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <br />
        <label>
          Peso (kg):
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
        <button onClick={calcularIMC}>Calcular IMC</button>
        {resultado && (
          <div>
            <p>Seu IMC é: {resultado}</p>
            <p>Classificação: {classificacao}</p>
          </div>
        )}
      </div>
  
  );
};

export default FormularioIMC;