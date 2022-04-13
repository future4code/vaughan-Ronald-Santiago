import React from "react";
import axios from "axios";
import { autorizacao } from "../autenticacao/autorizacao";

class Lista extends React.Component {
  state = {
    lista: []
  };

  componentDidMount() {
    this.pegarLista();
  }

  pegarLista = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, body, autorizacao)
      .then((res) => {
        // console.log(res.data);
        this.setState({ lista: res.data });
      })
      .catch((error) => {
        alert("Ocorreu erro, tente novamente");
        // console.log(error.data);
      });
  };
  
  
  deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ronald-santiago"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

  render() {
    
    
    return <div></div>;
  }
}

export default Lista;
