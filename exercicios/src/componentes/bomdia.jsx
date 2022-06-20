import React from "react"

//props usado como convencao
// React.fragment serve pra ele nao criar uma div no root (ver no devtools)
export default props =>
    <>
        <h1> bom dia {props.nome} idade {props.idade}</h1>
        <h2>ate breve</h2>
    </>