import { useState } from "react"



export default function useShowPass() {
    const [show, setShow] = useState(false)
    const setToggle = () => {
        setShow(!show)
    }
    return [show, setToggle]
}