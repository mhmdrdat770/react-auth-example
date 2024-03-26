import axios from "axios";
const http = axios.create({
    baseURL : 'http://localhost:8000/',
    headers : {
        withCredentials : true
    }

})

export default http