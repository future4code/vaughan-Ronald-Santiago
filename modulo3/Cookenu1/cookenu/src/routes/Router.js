import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailsPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipeListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/Error Page/ErrorPage"
import Header from "../components/Header/Header"

const Router = ({ setRigthButtonText }) => {
    return (
        <BrowserRouter>
        <Header/>
            
           
            <Routes>
             

                <Route exact path ={"/login"} element={<LoginPage/>}/>
                <Route exact path ={"/cadastro"} element={<SignUpPage/>} />
                <Route exact path ={"/"} element={<RecipesListPage/>} />
                <Route exact path ={"/adicionar-receita"} element={<AddRecipesPage/>} />
                <Route exact path ={"/detalhe/:id"} element={<RecipeDetailPage/>} />
                <Route exact path ={"/erro"} element={<ErrorPage/>} />

                

                <Route />

            </Routes>
        </BrowserRouter>
        
        )

        

}


export default  Router

{/* export const Rotar =() =>{
  return(
  <BrowserRouter>
  <Routes>
<Route exact path={"/"} element={<HomePage/>} />
<Route exact path={"/trips/list"} element={<ListTripsPage/>} />
<Route exact path={"/admin"} element={<AdminHomePage/>}/>
<Route exact path = {"/login"} element={<LoginPage/>} />
<Route exact path = {"/details/:id"} element ={<TripDetails/>} />

</Routes> */}