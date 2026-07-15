import axios from "axios";

const api = axios.create({
    baseURL: "https://visitor-pass-management-system-gules.vercel.app",
    withCredentials: true
})


export default api