// Exercício 3
// Cria um component  (Utilizando React) com:
// Um título: "Gerador de Nomes"
// Um botão com o conteúdo "Gerar"
// Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"
// Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório.
// Os nomes devem ser compostos por um nome e um adjetivo.


import React, { useState } from "react";
import styles from "../styles/Atividade3.module.css"

const nomes= [
    "Joao",
    "Maria",
    "Ines",
    "Carlos",
    "Mateus",
    "Evelyn"
]
const sobrenomes = [
    "Ferreira",
    "Moreno",
    "Alegre",
    "Silva",
    "Da Hora",
    "Souza"
]
export const Atividade3 = () => {
const [nome, setNome] = useState("Clique em Gerar")
const [sobrenome, setSobrenome] = useState("")


const gerarNomes = () => {
    setNome(nomes[Math.floor(Math.random()*nomes.length)])
    setSobrenome(sobrenomes[Math.floor(Math.random()*sobrenomes.length)])
}


  return (
    <div className={styles["buttons-container"]}>
        <button onClick={()=>  gerarNomes()}> Gerar </button>
        <p>{nome} {sobrenome}</p>
    </div>
  )
}

