import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import { urlBase } from '../constantes/url'
import styled from "styled-components";



export const ListTripsPage = () => {

    const [trips, setTrips ] = useState([])

useEffect(()=>{
    getTrips()
}, [])

    const getTrips = () => {

        axios.get(`${urlBase}/trips`)
            .then((response) => {
                
                setTrips(response.data.trips)
                console.log(trips)

            }).catch((error) => {

            })


    }
    // const jobComponents = this.state.filteredJobsList.map((job) => {
    //     return <JobCard key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addToCart={this.props.addToCart}/>

    // const viagens = getTrips
    const listadeViagens = trips.map((trips) => {
            return(
                <div>
                <h4 > Nome: {trips.name}</h4>
                <p>Planetas: {trips.planet}</p>
                <p>Dias: {trips.durationInDays}</p>
                <p>Descrição: {trips.description}</p>
                <p>Date: {trips.date}</p>

                </div>
            )
    })


    return(
        <div>
            {listadeViagens}
        
        </div>
    )



}
