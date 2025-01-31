import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "../SharedAndUtils/urls"

export default function useItemDetails(id) {
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`/${SERVER_URL}/${id}`)
            .then(data => setItem(data.data))
    }, [id, item])

    return [item]
}
