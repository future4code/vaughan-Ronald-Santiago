import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../routes/coordinator"


export const login = (body, clear, navigate, setRightButtonText) => {
 
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token) //Eu preciso entender melhor
      clear ()
      goToRecipesList(navigate)
    })
    .catch((err) => alert(err.response.data.message)
    )
  }


  export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token) //Eu preciso entender melhor
      clear ()
      goToRecipesList(navigate)
    })
    .catch((err) => {
     
    console.log(err)
    }
    )
  }