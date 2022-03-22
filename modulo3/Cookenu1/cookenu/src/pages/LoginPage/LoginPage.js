// import React from "react"
// import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
// import logo from "../../assets/logo.png"
// import Button from '@mui/material/Button'
// import LoginForm from "./LoginForm"
// import { useNavigate} from 'react-router-dom'
// import {goToSignUp} from "../../routes/coordinator"
// // import useUnprotectedPage from '../../hooks/useUnprotectedPage';

// const LoginPage = () => {

//     const navigate = useNavigate()

//     return(
//        <ScreenContainer>
//        <LogoImage src={logo} />
//        <LoginForm  />
//        <SignUpButtonContainer>
//        <Button
//        onClick ={() => goToSignUp(navigate)} 
//        type = {"submit"}
//        fullWidth
//        variant = { "text"}
//        color ={"primary"}
       
       
       
//        />
//        Não possui conta ? Cadastre-se

//        </SignUpButtonContainer>


//        </ScreenContainer>


//     )
// }

// export default LoginPage

// <LogoImage src={logo} />
// <LoginForm setRightButtonText={setRightButtonText}/>
// <SignUpButtonContainer>
//     <Button
//         onClick={() => goToSignUp(history)}
//         type={"submit"}
//         fullWidth
//         variant={"text"}
//         color={"primary"}
//     >
//         Não possui conta? Cadastre-se
//         </Button>
// </SignUpButtonContainer>
// </ScreenContainer>
// )
// }

// export default LoginPage

import React from "react"
import { InputsContainer, LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled"
import logo from '../../assets/logo.png'
import { TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import { Button } from "@mui/material"
import LoginForm from "./LoginForm"
import { useNavigate } from "react-router-dom"
import { goToSignUp } from "../../routes/coordinator"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"
import { login } from "../../services/user"

const LoginPage = ({setRightButtonText}) => {
    useUnProtectedPage()
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({email : "", password: ""})

    const onSubmitForm = (event) => {
        
        event.preventDefault()
        login(form, navigate, setRightButtonText)

    }
return (
   <ScreenContainer>
       <LogoImage src ={logo}/>
       <LoginForm />
   {/* <InputsContainer>
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
    
    /> */}
{/* 
    <Button 
    type = {"submit"}
    fullWidth
     variant ={"contained"}
     color = {"primary"}
     margin ={"normal"}
     >Clique aqui</Button>

   </form>
   
   </InputsContainer> */}

   <SignUpButtonContainer>
    <Button
    onClick = {() => goToSignUp(navigate)}
        type = {"submit"}
        fullWidth
         variant ={"contained"}
         color = {"primary"}
         margin ={"normal"}
    
    >
        Não possui conta ? Cadastre-se

    </Button>

   </SignUpButtonContainer>

   </ScreenContainer>


)

}

export default LoginPage