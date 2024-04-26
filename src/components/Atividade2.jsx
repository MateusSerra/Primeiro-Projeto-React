// Exercício 2
// Cria um component  (Utilizando React) com:
// Um título: "Gerador de Números"
// Um botão com o conteúdo "Gerar"
// Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"

// Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório.

import React, { useState } from "react";
import styles from "../styles/Atividade2.module.css"


export const Atividade2 = () => {
  const [numero, setNumero] = useState("");
  let [word, setWord] = useState("Click para gerar número aleatório.")
  const gerarNumero = () => {

    setNumero(Math.floor(Math.random(5) * 32)+1)
    setWord(word="")
   
  }
 function Amor(){
    if(word !== "Click para gerar um número aleatório." && numero !== ""){
      return `Número gerado é ${numero}.`
    }
  }

  return (
    <div className={styles["button-container"]}>
      <button onClick={()=> gerarNumero()}>Gerar</button>
      <p>{word}{Amor()}</p>
    </div>
  );
};
