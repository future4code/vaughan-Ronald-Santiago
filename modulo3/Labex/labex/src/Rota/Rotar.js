import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage'
import {ListTripsPage} from '../Pages/ListTripsPage'   
import AdminHomePage from '../Pages/AdminHomePage'
import {LoginPage} from '../Pages/LoginPage'
import { TripDetails } from "../Pages/TripDetailsPage";

 export const Rotar =() =>{
  return(
  <BrowserRouter>
  <Routes>
<Route exact path={"/"} element={<HomePage/>} />
<Route exact path={"/trips/list"} element={<ListTripsPage/>} />
<Route exact path={"/admin"} element={<AdminHomePage/>}/>
<Route exact path = {"/login"} element={<LoginPage/>} />
<Route exact path = {"/details/:id"} element ={<TripDetails/>} />

</Routes>
  
  
  
  
  
  </BrowserRouter>




  )



}

