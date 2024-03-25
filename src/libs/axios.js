import axios from "axios";
import { config } from "../config/config";
const axios = axios.create({
    baseURL : config.baseBackendURL,
    Headers : {
        "Content-type" : "application/json",
        "X-Requested-With" : "XMLHttpRequest"
    }
})

export default axios