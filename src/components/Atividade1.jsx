// EXERCICIOS PARA AGORA
// Exercício 1
// Cria um component (Utilizando React) com:
// Um parágrafo com o conteúdo 0
// Um botão com o conteúdo "Incrementar"

// Faz com que ao clicar no botão, o valor presente no parágrafo seja incrementado em uma unidade.

import React, {useEffect, useState} from "react";
import styles from "../styles/Atividade1.module.css"



export const Atividade1 = () => {
const [numero, setNumero] = useState(0)

//  const incrementarEDecrementar = (diferença) => {
//  setNumero(numero + diferença)
//  }

 const incrementar = (props) => {
    setNumero(numero + props)
 }
 const decrementar = (props) => {
    setNumero(numero - props)
 }

  return (
    <div className={styles["buttons-container"]}>
      <p>{numero}</p>
      <button onClick={() => decrementar(2)}> Decrementar </button>
      <button onClick={() => incrementar(2)}> Incrementar </button>
    </div>
  );
};


