import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import {BASE_URL} from '../../constants/urls'

const AddRecipeForm = () => {
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    // const createRecipe = () => {
    //     axios.post(`${BASE_URL}`)
    // }
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        // createRecipe(form, clear)
    }
    return (
        <form onSubmit={onSubmitForm}>
          <AddRecipeFormContainer>
              <InputsContainer>
              <TextField
               name ={"title"}
               value={form.title}
               onChange={onChange}
               label={'título'}
               variant={'outlined'}
               fullWidth
               required
               autoFocus
               margin={'normal'} 
              
              
              />

<TextField
               name ={"description"}
               value={form.description}
               onChange={onChange}
               label={'Título'}
               fullWidth
               required
               autoFocus
               margin={'normal'} 
              
              
              />
              
              <TextField
               name ={"image"}
               value={form.image}
               onChange={onChange}
               label={'Foto'}
               fullWidth
               required
               autoFocus
               margin={'normal'} 
              
              
              />

              <Button 
              color ={'primary'}
              variant={'contained'}
              type={'submit'}
              fullWidth
              >
                  Clique AQUI


              </Button>
              
              
              
              </InputsContainer>



          </AddRecipeFormContainer>


        </form>


    )

}

export default AddRecipeForm