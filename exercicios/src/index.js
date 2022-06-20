//imports para o react funcionar 
import React from "react";
import ReactDom from "react-dom";

//importe dos componentes (os componentes sao usados assim =  <nomeComponente/>)
//componentes comecam com letra maiuscula 
import Primeiro from "./componentes/primeiro"
import Saudacao from "./componentes/bomdia"

const Elem = <h1>react 2</h1>

//funcao que renderiza os elementos na unica div root do html 
ReactDom.render(
    <>
        <Primeiro/>
        <Saudacao nome="carlos" idade={10}/>
    </>,
    document.getElementById("root"))
