import React, { Component } from 'react';
import './Botoes.css'

class BotoesTeste extends Component{
    render(){
        return(
            <button onClick={()=>{this.props.handleclick(this.props.label)}}>
                {this.props.label}
            </button>
        )
    }
}

class Mylabel extends Component{
    render(){
        return(
            <span>
                Clique em um dos botões para receber a mensagem escrita nele:
                <br/>
                {this.props.text}
            </span>
        )
    }
}

class Botoes extends Component{
    constructor(props){
        super(props)

        this.state = {
            labelText:''
        }
    }

    setLabelText = (labelText) => {this.setState({labelText})}

    render(){
        return(
            <div className="Botoes">
                <Mylabel text = {this.state.labelText}/>
                <br/>
                <BotoesTeste handleclick = {this.setLabelText} label = "Bom Dia!"/>
                <BotoesTeste handleclick = {this.setLabelText} label = "Boa Tarde!"/>
                <BotoesTeste handleclick = {this.setLabelText} label = "Boa Noite!"/>
                <BotoesTeste handleclick = {this.setLabelText} label = "Boa Madrugada!"/>
            </div>
        )
    }
}

export default Botoes 