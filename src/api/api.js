import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const request = axios.create({
    baseURL: BASE_URL,
});
