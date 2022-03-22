import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolbar } from './styled';
import { goToRecipesList,goToLoginPage } from '../../routes/coordinator';
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';


const Header =(rightButtonText,setRightButtonText)=> {
    
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    
    const logout = () => {
      localStorage.removeItem("token")
    }

   const rightButtonAction = () => {
     if (token){
       logout()
       setRightButtonText("Login")
       goToLoginPage(navigate)
     }
     else {
       goToLoginPage(navigate)

     }
   }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
       
    
          <Button onClick ={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick ={rightButtonAction} color="inherit">{rightButtonText}Login</Button>
         
        </StyledToolbar>
      </AppBar>
     </Box>
  );
}

export default Header