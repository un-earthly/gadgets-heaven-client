import axios from "axios"
import { useEffect, useState } from "react"



export default function useItems() {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://guarded-shelf-11836.herokuapp.com/inventory')
            .then(data => setItems(data.data))
    }, [])



    return [items]

}