import React from "react"

class MensagemEnviada extends React.Component{
    state = {
        InputNome:'',
        InputMensagem:''
    }

    onChangeInputNome = (event) => {
        this.setState({InputNome: event.target.value})

    }

    onChangeInputMensagem = (event) => {
        this.setState({InputMensagem: event.target.value})
    }

    render(){
      return (
          <div>
           <input value={this.state.InputNome} onChange={this.onChangeInputNome} placeholder="Nome"></input>
           <input value={this.state.InputMensagem} onChange={this.onChangeInputMensagem} placeholder="Nome"></input>

           <button> Envio</button>
          </div>
      )

    }
}

export default MensagemEnviada