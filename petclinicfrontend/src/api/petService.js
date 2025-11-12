import axios from "axios";
const API_URL = "http://localhost:8080/api/pet";

export const getAllPets = async () => axios.get(`${API_URL}/getall`);
export const addPet = async (pet) => axios.post(`${API_URL}/add`, pet);
export const deletePet = async (id) => axios.delete(`${API_URL}/delete/${id}`);
