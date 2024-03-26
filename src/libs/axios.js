import axios from "axios";
axios.defaults.withCredentials = true

const http = axios.create({
    baseURL : 'http://localhost:8000',
    withCredentials : true


})

export default http