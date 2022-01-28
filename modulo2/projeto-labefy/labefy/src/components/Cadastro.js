import React from "react"
import axios from "axios"

export default class Cadastro extends React.Component{
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value }) 
    }

    cadastroMusica = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {name:this.state.nome}                               //Sempre que ter name que nem da documentação
        const auth = {headers:{Authorization:"RONALD-SANTIAGO-VAUGHAN"}}
        axios.post(url, body, auth)
        .then((res) => {
            alert("Sua playlist foi criada !")
        })
        .catch((err) =>{
            console.log(err.response)
        })
    
    }



    render(){
        return(
            <div>
            <h1>Playlist Surreal</h1>
            <h2>Cadastro</h2>

            <input 
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.handleNome}

            
            />

            <button onClick={this.cadastroMusica}>Cadastre</button>




            </div>
        )
    }
}