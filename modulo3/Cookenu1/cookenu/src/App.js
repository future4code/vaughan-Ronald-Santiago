
import React from 'react';
// import theme from './constants/theme'
// import {ThemeProvider} from '@mui/material'
// import Router from "./routes/Router"
import AddRecipePage from './pages/AddRecipesPage/AddRecipesPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import RecipesListPage from './pages/RecipeListPage/RecipesListPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailPage'

const App = () => {
  return (
    <>
      <SignUpPage/>
     <AddRecipePage/> 
      <RecipeDetailsPage/>
      <LoginPage/>
      <RecipesListPage/> 

      </>
      
)
}

export default App;
