
import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './Pages/HomePage'
import { ListTripsPage } from './Pages/ListTripsPage';
import { Rotar } from './Rota/Rotar';
import { TripDetails } from './Pages/TripDetailsPage';

const Header = styled.header`

 background-color: #282c34;
  min-height:12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  
`

const AppContainer = styled.div`
  text-align: center;
`;


function App() {
  return (
   <AppContainer> 
     <Header />
     
     <h1>Labex</h1>
     <Rotar/>
     
    
    </AppContainer>
  );
}

export default App;
