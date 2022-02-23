import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useState, useMemo } from "react"
import Select from "react-select-country-list"
import countryList from "react-select-country-list"
import styled from "styled-components";
import axios from "axios";


export default function ApplicationFormPage() {
    const [trips, setTrips] = useState([])
    const [form, setForm] = useState({ id: "", name: "", })
    const navigate = useNavigate()

    useEffect(() => {

    })

    const gettrips = () => {
        axios.get(`${urlBase}/trips`)
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((err) => {
                console.log(err.response)

            })
    }

    const goVoltar = () => {
        navigate("/")


    }

    const onChangeForm = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const applyToTrip = () => {
        axios.post(`${urlBase}/${id}/apply`, {...form, value })
            .then((res) => {
                console.log(res.data)

            })
            .catch((error) => {
                console.log(error.response)
            })


    }

    const preventReload = (event) => {
        event.preventDefault()
        applyToTrip(id)
    }

    const tripName = trips.map((data) => {
        return (
            <option key={data.id} name={data.id}></option>

        )
    })

}

return (
    
    <>
    
    
    </>
)
