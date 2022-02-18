import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { urlBase } from '../constantes/url';
import axios from 'axios'
import { useState } from 'react';
import { useProtectedPage } from '../constantes/useProtected';

const AdminHomePage = (props) =>{
  useProtectedPage()
  
  const [trips, setTrips] = useState([])

  useEffect(() =>{
      getTrips()
  }, [])

  const navigate = useNavigate()

  const goVoltar = () => {
    navigate('/login', {replace: true })

  }

  const goCreate = () => {
    navigate("")

  }

  const getTrips = () => {
     axios.get(`${urlBase}/trips`)
     .then((response) =>{
          setTrips(response.data.trips)
     })
     .catch((error) =>{
       console.log(error.response)
     })

  }

  const tripDetails = trips.map((trip) =>{
      return(
          <button key={trip.id} onClick={() =>{
              navigate(`/details/${trip.id}`)
          }}>
              <h5>{trip.name}</h5>

          </button>
      )

  })
    
 return(

    <div>
        OIIIIII
        {tripDetails}
    </div>
 )


}

export default AdminHomePage