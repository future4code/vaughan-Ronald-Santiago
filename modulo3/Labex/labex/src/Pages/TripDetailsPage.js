// // import axios from "axios"
// // import { useEffect} from "react"
// // import { urlBase } from "../constantes/url"
// // import { useNavigate } from "react-router-dom";





// // const useProtectedPage = () => {
// //   const navigate = useNavigate(); //Aqui o navigate vai servir para mudar as telas



// // useEffect (() =>{
// //   const token = localStorage.getItem("token") //Acredito que aqui se o token for aceito, isso vai dar certo
   
// //   if(token === null) {
// //       console.log("Não está logado !!");
// //       navigate("/login")           //Aqui ele volta para página de login
// //   }

// // }, []) //Aqui é um array de depêndencias





// export const TripDetails = () => {
//   useEffect(() =>{
//     const token = localStorage.getItem("token");
//       axios
//       .get(`${urlBase}/trip/`, {headers:{
//         auth: token
//       }
//     })
//   }, [])
//   .then((response) =>{
//     console.log(response.data)

//   }).catch((error)=>{
//     console.log("Deu erro: ", error.response);
      
//   }, [])




//   return (<div>
//     Detalhes da viagem: 
    
    
    
//     </div>)

// }}


import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlBase } from "../constantes/url";
import { useProtectedPage } from "../constantes/useProtected";
import { token } from "../constantes/token";

export const TripDetails = () => {

  const params = useParams();

  const idTrip = params.id
 
  const [details, setDetails] = useState([])

 
  useProtectedPage();

  useEffect(() => {
    getTrips()
  },[])

   const getTrips = () => { 
    axios
      .get(
  (`${urlBase}/trip/${idTrip}`),
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data.trip);
        setDetails(response.data.trip)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      }) }
  ; 

  // const listaDetails = details.map((details) =>{
  //   return <div>
  //   <h4>Candidatos: {details.candidate}</h4>
    
  //   </div>
  // })


  return <div>Detalhes da viagem: 
       
       {details.name}
       {details.description}
       {details.planet}
       {details.durationInDays}
       {details.date}
  </div>;
};