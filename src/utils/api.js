import axios from "axios";
export const apiUrl = "http://localhost:8082/api/"
export const api = axios.create({baseURL: apiUrl})
export const endpoints = {
    products: "products/",
    product: "products/",
    login: "user/signin",
    register: "user/register",
    google: "user/google",
    verify: "user/verify/",
    createdProduct: "products/created",
}