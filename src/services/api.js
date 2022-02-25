import axios from "axios";

function addConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(user) {
  await axios.post(`${process.env.REACT_APP_API}/sign-up`, user);
}
async function login(data) {
  const promise = await axios.post(`${process.env.REACT_APP_API}/login`, data);
  return promise;
}

async function addContact(data, token) {
  const config = addConfig(token);

  const promise = await axios.post(
    `${process.env.REACT_APP_API}/addContact`,
    data,
    config
  );
  return promise;
}

async function getList(token) {
  const config = addConfig(token);
  const promise = await axios.get(`${process.env.REACT_APP_API}/home`, config);
  return promise;
}
async function deleteContact(id, token) {
  const config = addConfig(token);

  const promise = await axios.delete(
    `${process.env.REACT_APP_API}/home/${id}`,
    config
  );
  return promise;
}

async function updateContact(body, id) {
  console.log(id);
  const promise = await axios.put(
    `${process.env.REACT_APP_API}/home/${id}`,
    body
  );
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
