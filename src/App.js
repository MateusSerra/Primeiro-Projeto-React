import React from "react";
import { Atividade1 } from "./components/Atividade1";
import { Atividade2 } from "./components/Atividade2";
import { Atividade3 } from "./components/Atividade3";




function App() {
  return (
    <div className="App">
      <div>
        <h1>Esse é meu primeiro projeto em react</h1>
      </div>

      <Atividade1 />
      <Atividade2 />
      <Atividade3 />

      <div>
        <h6>Projeto feito por Mateus Serra</h6>
      </div>
    </div>
  );
}

export default App;
