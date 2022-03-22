import React from "react"

import styled from "styled-components"
import useProtectedPage from "../../hooks/useProtectedPage"
import { BASE_URL } from "../../constants/urls"
import { useRequestData } from "../../hooks/useRequestData"
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
import { RecipeListContainer } from "../../components/RecipeCard/styled"
import { AddRecipeButton } from "../../components/RecipeCard/styled"
import { Add } from '@mui/icons-material'

import { useNavigate } from "react-router-dom"
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator"

// const StyledDiv = styled.div`
//  width : 100vw;
//  display: flex;
//  flex-direction: column ;
// align-items: center;
// justify-content: center;




const RecipesListPage = () => {
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`) //Pega a requisição
 

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)

  }
  //Aqui mapeio todas as receitas e trago o título(title) e imagem
  const recipeCards = recipes.map((recipe) => { //Eu estou mapenado das receitas, as com título
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={()=>onClickCard(recipe.recipe_id)}

      />

    )
  })

  useProtectedPage()
  return (
    <RecipeListContainer>

      {recipeCards}
      <AddRecipeButton
        color={'primary'}
        onClick={() => goToAddRecipes(navigate)}

      >
        <Add />



      </AddRecipeButton>
    </RecipeListContainer>

  )

}

export default RecipesListPage



