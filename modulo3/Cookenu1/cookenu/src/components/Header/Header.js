import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolbar } from './styled';
import { goToRecipesList,goToLoginPage } from '../../routes/coordinator';
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Header =()=> {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

{/* component="div" sx={{ flexGrow: 1 }} */}
          {/* <Typography variant="h6">
            News
          </Typography> */}
    
          <Button onClick ={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick ={() => goToLoginPage(navigate)} color="inherit">Login</Button>
         
        </StyledToolbar>
      </AppBar>
     </Box>
  );
}

export default Header