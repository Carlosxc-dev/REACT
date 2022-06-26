import React, {Component} from "react";

export default class Saudacao extends Component{


    state = {
        tipo : this.props.tipo,
        nome : this.props.nome
    }

    // constructor(props){
    //     super(props)

    //     // this.setNome = this.setNome.bind(this)
    //     // this.setTipo = this.setTipo.bind(this)

    // }
    
    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }
    
    render(){
        const {tipo, nome} = this.state
        return (
        <div>
            <h1>{tipo} {nome}</h1>
            <hr />
            <input type="text" placeholder="tipo..." 
            value={tipo} onChange={e => this.setTipo(e)}/>
            <input type="text" placeholder="nome..." 
            value={nome} onChange={e => this.setNome(e)}/>
        </div>
        )
    }
}