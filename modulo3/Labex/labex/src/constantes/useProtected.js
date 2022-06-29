import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate();
   
  
    useEffect(() => {
      const token = window.localStorage.getItem("Token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        navigate("/login");
      }
    }, []);
  };
  