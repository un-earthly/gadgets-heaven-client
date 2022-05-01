import axios from "axios";

const handleDelivary = id => {

    axios.put(`https://guarded-shelf-11836.herokuapp.com/updatequanity/${id}`)


}

export default handleDelivary;