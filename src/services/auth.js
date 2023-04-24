import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function cadastro(body) {
  const response = axios.post(`${BASE_URL}/cadastro`, body);
  return response;
}

export function signIn(body) {
  const response = axios.post(`${BASE_URL}/signIn`, body).catch((error) => {
    return error.response;
  });
  return response;
}
