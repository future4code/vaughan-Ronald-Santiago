import { Routes, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailsPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipeListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/Error Page/ErrorPage"


const Router = ({ rightButtonText,setRightButtonText }) => {
    return (
       
            
          //  <BrowserRouter>
            <Routes>
             

                <Route exact path ={"/login"} element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route exact path ={"/cadastro"} element={<SignUpPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>} />
                <Route exact path ={"/"} element={<RecipesListPage/>} />
                <Route exact path ={"/adicionar-receita"} element={<AddRecipesPage/>} />
                <Route exact path ={"/detalhe/:id"} element={<RecipeDetailPage/>} />
                <Route exact path ={"/erro"} element={<ErrorPage/>} />

                

                {/* <Route /> */}

            </Routes>
            // </BrowserRouter>
      
        
    )

        

}


export default  Router;


//   <BrowserRouter>
//   <Routes>
// <Route exact path={"/"} element={<HomePage/>} />
// <Route exact path={"/trips/list"} element={<ListTripsPage/>} />
// <Route exact path={"/admin"} element={<AdminHomePage/>}/>
// <Route exact path = {"/login"} element={<LoginPage/>} />
// <Route exact path = {"/details/:id"} element ={<TripDetails/>} />

// </Routes> */}