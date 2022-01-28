import axios from 'axios';
import React from 'react';
import Cadastro from './components/Cadastro';
import ListadeMusicas from './components/ListadeMusicas';

export default class App extends React.Component{

  state = {
    tela : "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <Lista irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () =>{
    this.setState({tela: "cadastro"})
  }

  irParaLista = () => {
    this.setState({tela: "lista"})
  }


  render(){
    return(
     <div>

       <Cadastro/>
       <ListadeMusicas/>
     </div>


    )

  }

}
