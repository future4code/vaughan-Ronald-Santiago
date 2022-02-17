import axios from 'axios'
import{ urlBase} from '../constantes/url'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`   




 export const LoginPage = () => {
  const navigate = useNavigate()

  const goVoltar = () =>{
      navigate("/")
  }


  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")

  

  const loginAdmin = () => {
     const body ={
         email: email,
         password: password
     };

     axios.post(`${urlBase}/login`, body)
     .then((response)=>{
         console.log("Deu certo", response.data.token)
         window.localStorage.setItem("Token", response.data.token)
         navigate("/")


     }).catch((error) =>{
         console.log("Deu errado",error.response.data )

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

<Button onClick ={loginAdmin}>Enviar</Button> 

<Button onClick ={goVoltar}> Voltar</Button>
   </div>


)

}

