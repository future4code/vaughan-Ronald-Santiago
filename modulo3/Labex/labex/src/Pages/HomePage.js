import React from "react";
import { useNavigate } from "react-router-dom";

 const HomePage = () => {
    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("/viagens")
    }
    const goAdmin = () => {
        navigate("/admin")

    }

    return (
        <div>
       <h1>LABEX</h1>
       <button onClick={goToListTrips}>Viagens</button>
       <button onClick={goAdmin}>Admin</button>


        </div>



    )



}

export default HomePage