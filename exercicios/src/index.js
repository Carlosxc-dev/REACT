//imports para o react funcionar 
import React from "react";
import ReactDom from "react-dom";

//importe dos componentes (os componentes sao usados assim =  <nomeComponente/>)
//componentes comecam com letra maiuscula 
import Primeiro from "./componentes/primeiro"
import Commprimento from "./componentes/bomdia"
import multi from "./componentes/multiplos"
import Saudacao from "./componentes/saudacao"
import Pai from "./componentes/pai"


const Elem = <h1>react 2</h1>

//funcao que renderiza os elementos na unica div root do html 
ReactDom.render(
    <>
        <Primeiro/>
        <Commprimento nome="ana" idade={10}/>
        <multi.Boanoite nome="bia" idade={26}/>
        <multi.Boatarde nome="luana" idade={17}/>
        <Saudacao tipo="bom dia" nome="luana"/>
        <Pai nome="paulo" sobrenome= "silva"/>
    </>,
    document.getElementById("root"))

