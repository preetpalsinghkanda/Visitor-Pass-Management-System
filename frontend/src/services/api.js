import axios from "axios";

const api = axios.create({
    baseURL: "https://impact-matches-isp-hosts.trycloudflare.com",
    withCredentials: true
})


export default api