
import { urlBase } from './constants/urlBase';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AstromatchPages from './pages/AstroMatchPages';
import MatchesPage from './pages/MatchesPage/MatchesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';





const App = () => {
  const [profile, setProfile] = useState({}) //Aqui estou criando um estado true
  // const [semMatch, setSemMatch] = useState("topo")
  const [mudarTela, setMudarTela] = useState("")

  const goMatch = () => {
    setMudarTela("match")
 }

 const goProfile= () => {
   setMudarTela("profile")
 }

  const selectPage = () => {
    switch(mudarTela ){
       case "profile":
          return <ProfilePage goMatch ={goMatch} />
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
    axios.put(`${urlBase}clear`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response)

      })


  }



  const pegarPerfil = () => {
    axios.get(`${urlBase}person`)
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
    <div>

      
      <button onClick={limparMatchs}>
        LimparMatchs
      </button >
      <button onClick = {goMatch} >CLICA AI</button>


          {selectPage()}

    </div>


  );
}

export default App;
