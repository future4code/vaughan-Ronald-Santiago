import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeContainer, ScreenContainer } from './styled'
import AddRecipeForm from './AddRecipeForm'


const AddRecipePage = () => {
    useProtectedPage()
    return (
        <ScreenContainer>
           <RecipeContainer>

           
           <AddRecipeForm/>
           </RecipeContainer>


        </ScreenContainer>


    )

}

export default AddRecipePage