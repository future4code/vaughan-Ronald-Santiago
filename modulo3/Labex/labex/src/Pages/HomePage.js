import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


// const MeuBotao = styled.button`
//  background: #0099FF;
//  border: 2px solid #0099FF;
//  border-radius: 3px;
//  color: #FDFDFD;
//  font-size: .2rem;
//  margin: 1rem;
//  padding: 1rem 1.5rem;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`     


 const HomePage = () => {
    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("/trips/list")
    }
    const goAdmin = () => {
        navigate("/login")

    }

    return (
        <div>
       <h1>LABEX</h1>
       <Button onClick={goToListTrips}>Viagens</Button>
       <Button onClick={goAdmin}>Admin</Button>


        </div>



    )



}

export default HomePage