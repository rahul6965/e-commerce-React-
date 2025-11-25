import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// console.log("Base URLimport Header from './../Component/Header';
// :", API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL
});


const getToken = () => {
    localStorage.getItem("token") ?.replaceAll("", '');
}

const request = async (method, url, data = null, params = {}) => {
    try {
        const token = getToken();
        const isformData = data instanceof FormData;


        const headers = {
            ...(token && {
                "Authorization": `Bearer` + token
            }),
            ...(isformData ? {} : {
                "content-type": 'application/json'
            }),
        }

        const response = await api({
            method,
            url,
            data,
            params,
            headers
        })
        return response.data;

    } catch (error) {
        console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
        if (error.response ?.data ?.message === "Unauthenticated.") {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.href = '/';
        }
        throw error.response ?.data || "An error occurred";
    }
}

export const apiService = {
    get: (url, params = {}) => request("get", url, null, params),
    post: (url, data) => request("post", url, data),
    put: (url, data) => request("put", url, data),
    delete: (url) => request("delete", url),
};