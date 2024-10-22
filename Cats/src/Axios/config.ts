import axios from "axios";

export const fetchCat = axios.create({
    baseURL: "https://cataas.com/",
    headers: {
        "Content-type": "application/json"
    }
})
