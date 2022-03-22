import React from "react"
import Button from '@mui/material/Button'
import styled from "styled-components"
import useProtectedPage from "../../hooks/useProtectedPage"

const StyledDiv = styled.div`
 width : 100vw;
 display: flex;
 flex-direction: column ;
align-items: center;
justify-content: center;

`


const RecipesListPage = () => {

    useProtectedPage()
    return(
      <StyledDiv>
        <h1>RecipesListPage</h1>
        <Button variant="contained" color="primary" >
            Primary
            
            </Button>
      </StyledDiv>
      ) 
      
    }

      export default RecipesListPage


    
