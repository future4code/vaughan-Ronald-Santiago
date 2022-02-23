import {useNavigate} from "react-dom"
import { useLayoutEffect } from "react"
import { goToLogin } from "../routes/coordinator"

const useProtectedPage = () => {
const navigate = useNavigate()

useLayoutEffect(() =>{
const token = localStorage.getItem("token")
if(!token){
    goToLogin()
}



}, [navigate])



}

export default useProtectedPage