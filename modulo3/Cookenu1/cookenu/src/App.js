
import React from 'react';
// import theme from './constants/theme'
// import {ThemeProvider} from '@mui/material'
// import Router from "./routes/Router"
import AddRecipePage from './pages/AddRecipesPage/AddRecipesPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import RecipesListPage from './pages/RecipeListPage/RecipesListPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailPage'
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState } from 'react';

const App = () => {
 
  const token = localStorage.getItem("token")
  const  [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login") //Se existe token, significa que ela tá logada

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter/>
      
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Router/>
      

      <BrowserRouter/>
      </ThemeProvider>
      
)
}

export default App;
