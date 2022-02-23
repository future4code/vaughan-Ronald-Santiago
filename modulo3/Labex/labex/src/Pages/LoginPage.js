import axios from 'axios'
import{ urlBase} from '../constantes/url'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
 
`   




 export const LoginPage = () => {
  const navigate = useNavigate()  

  const goVoltar = () =>{
      navigate("/")
  }


  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")

  

  const loginAdmin = (event) => { // Pq precisei aqui de uma função de evento ?
    event.preventDefault()        
     const body ={
         email: email,
         password: password
     };

     axios.post(`${urlBase}/login`, body)
     .then((response)=>{
         console.log("Deu certo", response.data.token)
         window.localStorage.setItem("Token", response.data.token)
         navigate("/admin")

 
     }).catch((error) =>{
         console.log("Deu login errado", error.response.data )

     })

  }

  const onChangeEmail = (event) =>{
    setEmail(event.target.value)


  }

  const onChangePassword = (event) =>{
    setPassword(event.target.value)


  }


return(
   <div>
     <form onSubmit={loginAdmin} >
  <input 
   placeholder='email'
   type = 'email'
   value ={email}
   onChange ={onChangeEmail}

  />

<input 
placeholder='senha'
type='password'
value ={password}
onChange={onChangePassword}

/>
 
<Button type ={"submit"}>Enviar</Button> 

<Button onClick ={goVoltar}> Voltar</Button>

</form>
   </div>


)

}

