import axios from "axios"
import { useEffect, useState } from "react"
import { SERVER_URL } from "@/SharedAndUtils/urls"
export default function useItems() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${SERVER_URL}/product/list`)
            .then(data => {
                setItems(data.data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [items])



    return [items, loading]

}