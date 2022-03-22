import {urlBase} from '../constantes/url'

export const sendApplication = (body, tripId, clear) =>{
    axios.post(`${urlBase}/trips/${tripId}/apply`, body)
    ,then(() => {
        alert("Aplicação enviada com sucesso !")
        clear()
    })
    .catch((err) => alert(err.response.message))
}