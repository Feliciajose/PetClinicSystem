import axios from "axios";
const API_URL = "http://localhost:8080/api/owners";

export const getAllOwners = async () => axios.get(`${API_URL}/getall`);
export const addOwner = async (owner) => axios.post(`${API_URL}/add`, owner);
export const deleteOwner = async (id) => axios.delete(`${API_URL}/delete/${id}`);
