
import { urlBase } from './constants/urlBase';
import axios from 'axios';
import { useEffect, useState } from 'react';

import MatchesPage from './pages/MatchesPage/MatchesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import styled from 'styled-components';

const DivPrincipal = styled.div`
display: flex; 
flex-direction : column;
align-items: center;
border: 1px solid black;
width: 40%;
margin: 3% auto;
justify-content: center;
img{
  width: 80%;
} 

`





const App = () => {
  const [profile, setProfile] = useState({}) //Aqui estou criando um estado true
  // const [semMatch, setSemMatch] = useState("topo")
  const [mudarTela, setMudarTela] = useState("profile")

   console.log(profile)
  const goMatch = () => {
    setMudarTela("match")
 }

 const goProfile= () => {
   setMudarTela("profile")
 }

  const selectPage = () => {
    switch(mudarTela ){
       case "profile":
          return <ProfilePage
          goMatch ={goMatch}
          profile ={profile}
          escolhaPessoa = {escolhaPessoa} 
          pegarPerfil = {pegarPerfil}      
         />
       case "match":
          return <MatchesPage goProfile ={goProfile}/>
       default:
            <ProfilePage  goMatch = {goProfile} />

    }

  }
 

  

  useEffect(() =>{
    pegarPerfil()
  },[])

  const limparMatchs = () => {
    axios.put(`${urlBase}/clear`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response)

      })


  }

  const escolhaPessoa = () => {
    const body = {
      id : profile.id,
      choice: true
    }
    axios.post(`${urlBase}/choose-person`, body)
    .then((response) =>{
     pegarPerfil()
       console.log(response.data)
    }).catch((error)=>{
      console.log(error.response)
    })
  }


  const pegarPerfil = () => {
    axios.get(`${urlBase}/person`)
    .then((response)=>{
       console.log(response.data.profile)
       setProfile(response.data.profile)
    }).catch((error)=>{
      console.log(error.response)

    })


  }

  // const Selecionar = () => {
  //   switch (match) {
  //     case "topo":
  //       return
  //     case "não":
  //       return
  //     default:
  //       return

  //   }
  // }




  return (
    <DivPrincipal>

      

      <button onClick = {goMatch} >CLICA AI</button>

    

          {selectPage()}
          {/* {escolhaPessoa()} */}

          <button onClick={limparMatchs}>
        LimparMatchs
      </button >

    </DivPrincipal>


  );
}

export default App;
