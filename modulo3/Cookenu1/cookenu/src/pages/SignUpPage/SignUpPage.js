import React from "react"
import logo from '../../assets/logo.png'
import { ScreenContainer } from "../SignUpPage/styled"
import { LogoImage } from "./styled"
import SignUpForm from "./SignUpForm"
import useUnProtectedPage from "../../hooks/useUnProtectedPage"

const SignupPage= () => {
  useUnProtectedPage()
return (
  <ScreenContainer>
      <LogoImage src ={logo} />
      <SignUpForm/>
  </ScreenContainer>


)

}

export default SignupPage