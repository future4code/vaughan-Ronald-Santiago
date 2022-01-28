import React from "react"
import axios from "axios"



export default class ListadeMusicas extends React.Component{
    state = {
      playlist: []

    }

    componentDidMount(){ //Ele aparece na hora que a página for montada
        this.pegarMusicas()
    }

    pegarMusicas = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    

        axios.get(url, {
            headers: {
                Authorization: "RONALD-SANTIAGO-VAUGHAN"
            }

        })
        .then((res) => {
            alert("Sucesso!")
            this.setState({playlist: res.data.result.list}) //Data é o filtro, ele vai indo um após o outro
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })
    
    }
    

    render(){
        
      const renderizarPlaylist = this.state.playlist.map((item) =>{  //Ele vai fazer um mapeamento na minha array
          return <p> {item.id}</p>      
      })
        console.log(this.state.playlist)     
        return(
            <div>
                {renderizarPlaylist}  
        {/* /Se eu chamar dentro do render um map ele não precisa do this./ */}

            </div>
        )
    }
}