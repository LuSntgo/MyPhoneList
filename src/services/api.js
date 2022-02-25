import axios from "axios";

const BASE_URL = "http://localhost:5000";

function addConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}
async function login(data) {
  const promise = await axios.post(`${BASE_URL}/login`, data);
  return promise;
}

async function addContact(data, token) {
  const config = addConfig(token);

  const promise = await axios.post(`${BASE_URL}/addContact`, data, config);
  return promise;
}

async function getList(token) {
  const config = addConfig(token);
  const promise = await axios.get(`${BASE_URL}/home`, config);
  return promise;
}
async function deleteContact(id, token) {
  const config = addConfig(token);

  const promise = await axios.delete(`${BASE_URL}/home/${id}`, config);
  return promise;
}

async function updateContact(body, id) {
  console.log(id);
  const promise = await axios.put(`${BASE_URL}/home/${id}`, body);
  return promise;
}

const api = {
  signUp,
  login,
  getList,
  addContact,
  deleteContact,
  updateContact,
};

export default api;
