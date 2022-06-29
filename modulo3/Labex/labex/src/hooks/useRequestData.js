import { useState, useEffect } from " react"
import { getDefaultNormalizer } from "@testing-library/react"
import { urlBase } from "../constantes/url"
import axios from axios

const Request = (end, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${urlBase}${end}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => alert(err.response.data.message))

    }

    useEffect(() => {
        getData()
    }, [end])

    return [data, getData]

}

export default useRequestData