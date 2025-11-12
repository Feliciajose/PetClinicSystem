import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

export const getAllAppointments = async () => {
  return axios.get(`${API_URL}/getall`);
};

export const addAppointment = async (appointment) => {
  return axios.post(`${API_URL}/add`, appointment);
};

export const deleteAppointment = async (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};
