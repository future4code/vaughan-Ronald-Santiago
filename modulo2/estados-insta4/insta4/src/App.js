
import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
   state = {
   


     pessoas: [
        {
          nomeUsuario: 'Ronald',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost:'https://s5.static.brasilescola.uol.com.br/be/2021/10/lobo.jpg'
        },

        {
          nomeUsuario: 'Falcão',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },

        {
          nomeUsuario: 'Tartaruga',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://cdn.diferenca.com/imagens/tartaruga-cagado-e-jabuti-og.jpg'
        }




     ],

     valorInput: '',
     valorInputFoto: '',
     valorPost: ''
   };
    

    

   adiciona = () =>
{
  const novoPost = {
    nome: this.state.valorInput,

    fotoUsua: this.state.valorInputFoto ,

    fotoPost: this.state.valorPost

    
  };

  const novoPessoas = [...this.state.pessoas, novoPost]

  this.setState({ pessoas: novoPessoas });
};

onChangeInputPessoa = (event) => {
    
  this.setState({valorInput: event.target.value})

}

onChangeInputFoto = (event) => {
    
  this.setState({valorInputFoto: event.target.value})

}

onChangeInputPost = (event) => {
    
  this.setState({valorPost: event.target.value})

}


  render() {

    const listaComponente = this.state.pessoas.map((pessoa) =>  {
    return (
      

      <MainContainer>
      <Post
       nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario} 
        fotoPost={pessoa.fotoPost}
   />
   </MainContainer>
   
    );
    });

    return(
      <MainContainer > 
        <input
        value={this.state.onChangeInputPessoa}
        onChange = {this.onChangeInputPessoa}
        placeholder='Name'
        />

        <input
         value={this.state.onChangeInputFoto}
         onChange = {this.onChangeInputFoto}
         placeholder='Foto'


        />
        <input
         value={this.state.onChangeInputPost}
         onChange = {this.onChangeInputPost}
         placeholder='Post'


        />
        <button onClick={this.adiciona}>Adicionar</button>
      
         

       
        {listaComponente}
        {SecaoComentario}

        
        
        </MainContainer>
    
      );
    
  }
}

export default App;
