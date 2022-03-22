

import React from "react"
import { InputsContainer } from "./styled"
import axios from 'axios'

import { TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import { Button } from "@mui/material"

import {login} from "../../services/user"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const [form, onChange, clear] = useForm({email : "", password: ""})
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        console.log(form)
        login(form, clear, navigate)
        event.preventDefault()  // Qual a função aqui ?
        

    }

    // const login = () => {
    //   axios.post(`${BASE_URL}/user/login`, form)
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.token) //Eu preciso entender melhor
    //     clear ()
    //   }).catch((error) => alert(error)
    //   )
    // }
return (
  
      
   <InputsContainer>
   <form onSubmit={onSubmitForm} >
    <TextField 
      name ={"email"}
      value ={form.email}
      onChange ={onChange}
      label = {"Email"}
      variant ={"outlined"}
      fullWidth
      margin ={"normal"}
      required
      type ={ "email"}
      color ={"primary"}
    />


<TextField 
      name ={"password"}
      value ={form.password}
      onChange ={onChange}
      label = {"Senha"}
      variant ={"outlined"}
      fullWidth
      margin ={"normal"}
      required
      type ={ "password"}
    
    />

    <Button 
    type = {"submit"}
    fullWidth
     variant ={"contained"}
     color = {"primary"}
     margin ={"normal"}
     >Clique aqui</Button>

   </form>
   
   </InputsContainer>

   



)

}

export default LoginForm