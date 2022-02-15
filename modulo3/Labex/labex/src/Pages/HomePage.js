import { useState } from "react";

function HomePage(){
   const [selecionarPagina, setSelecionarPagina] = useState("viagens")

   const renderSelecionarPagina = () => {
      switch(selecionarPagina) {
          case 'viagens':
              return
            case 'admin':
                return
            default:
                return
      }
}

const goViagens = () =>{
    selecionarPagina('viagens')
}

const goAdmin = () =>{
    selecionarPagina('admin')
}

return(

    <div>
        <button onClick={goViagens}>Viagens</button>
        <button onClick={goAdmin}>Admin</button>
    </div>
)


}

export default HomePage