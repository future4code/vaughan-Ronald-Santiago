import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {useParams} from 'react-router-dom'
import { useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/urls"
import { ScreenContainer, RecipeImage, RecipeContainer } from "./styled"
import { Typography } from "@mui/material"
const RecipeDetailsPage = () => {
   useProtectedPage()
   const params = useParams() //ParamÊtros de rota
   const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
   console.log(recipe)
return (
   <ScreenContainer>
      {recipe &&
      <RecipeContainer>
         <RecipeImage src ={recipe.image} />
         <Typography gutterBotom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
         <Typography align={'center'}>{recipe.description}</Typography>
      <h1>{recipe && recipe.title}</h1> 

      </RecipeContainer>}


   </ScreenContainer>


)

}

export default RecipeDetailsPage