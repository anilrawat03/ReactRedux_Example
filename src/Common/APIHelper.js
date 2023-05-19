import axios from "axios";
import { getLoggeduserToken } from "../Services/Authservice";
const axiosApi = axios.create({
    baseURL: "https://fakestoreapi.com/",
});
axiosApi.interceptors.request.use(
    config => 
    {
        console.log("asaddaprocess.env.API_BASE_URL", process.env.API_BASE_URL)
        const token = getLoggeduserToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)
axiosApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (401 === error.response.status) 
        {
            window.location.href="/";
        }
        else {
            return Promise.reject(error);
        }
    }
);

export const axiosinstance=axiosApi;
const get = async (url) => {
    return await axiosApi
        .get(url)
        .then((response) => response.data);
}

const post = async (url, data, isformdata=false) => {
    if (!isformdata) 
    {
        return await axiosApi
            .post(url, data)
            .then((response) => response.data);
    }
    else{
        return await axiosApi
        .post(url, data, {
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((response) => response.data);
    }
}

export const api_helper = {get, post }