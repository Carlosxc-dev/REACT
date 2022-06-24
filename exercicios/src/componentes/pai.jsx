import React from "react";
import Filho from "./filho";

export default props => {
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>filhos</h2>
        <ul>
            <Filho nome = "pedro" sobrenome = {props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome = "carlos" />
        </ul>

    </div>
}