import axios from "axios"
import { useEffect, useState } from "react"

export default function useItemDetails(id) {
    const [item, setItem] = useState({})
    useEffect(() => {
        axios.get(`https://guarded-shelf-11836.herokuapp.com/inventory/${id}`)
            .then(data => setItem(data.data))
    }, [id])

    return [item]
}
