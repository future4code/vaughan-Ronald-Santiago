import react from "react";
import axios from "axios";
import React from "react";
import autorizacao from 'componentes/'

class Cadastro extends React.Component {
    state ={
        name: "",
        email: " "
    };

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    };

    onChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    onClickUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
            name: this.state.name,
            email: this.state.email
        };

        axios
        .post(url, body, autorizacao)
        .then(() => {
            alert("Usuario criado !")
        })
        .catch((error) => {
            alert("Ocorreu erro");
            console.log(error)
        });
    }

    render(){
        console.log("nome", this.state.name)
        console.log("email", this.state.email)
        console.log("props", this.state.tela)

        return(

           <>

           <h1> PROGRAMA DE API </h1>
           <input
           placeholder="Nome"
           type ="text"
           value={this.state.name}
           onChange={this.onChangeName}
           
           />

<input
           placeholder="Email"
           type ="text"
           value={this.state.email}
           onChange={this.onChangeEmail}
           
           />

           <button onClick={this.onClickUsuario}>Criar Usuário</button>
           
           </>
        )

    }
}

export default Cadastro