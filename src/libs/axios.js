import axios from "axios";
import { config } from "../config/config";
const axios = axios.create({
    baseURL : 'http://localhost:8000/api/',

})

export default axios