import axios from "axios";
axios.defaults.withCredentials = true

const http = axios.create({
    baseURL : 'https://api.webkadee.ir/',
    withCredentials : true


})

export default http