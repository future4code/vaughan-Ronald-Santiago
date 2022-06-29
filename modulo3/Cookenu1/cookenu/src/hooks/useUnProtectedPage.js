import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
import { goToRecipesList } from "../routes/coordinator"

const useUnProtectedPage = () => {
const navigate = useNavigate()

useEffect(() =>{
const token = localStorage.getItem("token")
if(token){
    goToRecipesList(navigate)
}

}, [navigate])


}


export default useUnProtectedPage
// import  {useNavigate} from "react-router-dom"
// import { useEffect } from "react"
// import { goToRecipesList } from "../routes/coordinator"

//  const useUnProtectedPage = () => {
//     const navigate =useNavigate()
    
//     useEffect =(() => {
//       const token = localStorage.getItem("token")
//       if(token){
//           goToRecipesList(navigate)
//       }


//     }, [navigate])
// }

// export default useUnProtectedPage