// import React from 'react'

// import AppBar from '@mui/material/AppBar'
// import StyledToolbar from "./styled"
// import Button from '@mui/material/Button'
// import useNavigate from "react-router-dom"

// const Header = () => {

//     const token = localStorage.getItem("token")
//     const navigate = useNavigate()

//     const goToLogin = () => {
//        navigate("/login")

//     }

//     const logout = () =>{
//         localStorage.removeItem("token")
//     }

//     const rightButtonText = () =>{
//        if(token){
//            logout()
//            setRightButtonText("Login")
//        }
//        else {
//            goToLogin()

//        }


//     }

//     return (
//     <AppBar position="static">
//       <StyledToolbar>
//           <Button onClick={() => goToRecipesList()} color="inherit">Cookenu</Button>
//           <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button> 
//       </StyledToolbar>

//     </AppBar>

//     )


// }


