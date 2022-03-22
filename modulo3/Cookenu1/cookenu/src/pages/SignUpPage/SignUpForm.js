import React from "react"
import { InputsContainer, LoginFormContainer, SignUpFormContainer } from "../SignUpPage/styled"
import { TextField } from "@mui/material"
import Button from '@mui/material/Button'
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { signUp } from "../../services/user"

const SignUpForm = ({setRightButtonText}) =>      { 
    console.log({setRightButtonText})
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, navigate, setRightButtonText)
        

    }

    return (

        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        value={form.name}
                        name={'name'}
                        onChange={onChange}
                        label={'Nome'}
                        // variant={'outilined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}

                    />

                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        // variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}

                    />

                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Senha'}
                        // variant={'outlined'}
                        type='password'
                        fullWidth
                        required
                        margin={'normal'}

                    />
                </InputsContainer>
                <Button  
                       
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth


                >
                    Fazer Cadastro  </Button>




            </SignUpFormContainer>



        </form>
    )


}

export default SignUpForm