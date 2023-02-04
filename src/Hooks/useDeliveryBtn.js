import axios from "axios";
import { SERVER_URL } from "../SharedAndUtils/urls";

const handleDelivary = id => {

    axios.put(`${SERVER_URL}/updatequanity/${id}`)


}

export default handleDelivary;