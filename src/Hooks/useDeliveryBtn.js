import axios from "axios";

const handleDelivary = id => {

    axios.put(`https://guarded-shelf-11836.herokuapp.com/updatequanity/${id}`)
        .then(res => {
            console.log(res.data)
        })


}

export default handleDelivary;