import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import { urlBase } from '../constantes/url'
import styled from "styled-components";



export const ListTripsPage = () => {

    const [trips, setTrips ] = useState([])

useEffect(()=>{
    getTrips()  //Quando eu abrir a página, essa função irá aparecer
}, [])

    const getTrips = () => {

        axios.get(`${urlBase}/trips`)  //Criei uma constante  e só precisei colocar algumas coisas a mais
            .then((response) => {
                console.log(trips)  //Sempre bom pegar o console para ver o que estou utilizando
                setTrips(response.data.trips) //Aqui estou pegando o estado e jogando aqui dentro
                

            }).catch((error) => {

            })


    }
    // const jobComponents = this.state.filteredJobsList.map((job) => {
    //     return <JobCard key={job.id} job={job} goToDetailPage={this.props.goToDetailPage} addToCart={this.props.addToCart}/>

    // const viagens = getTrips
    const listadeViagens = trips.map((trips) => { //Pois o valor a partir do set foi para aí, então está aí dentro
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
