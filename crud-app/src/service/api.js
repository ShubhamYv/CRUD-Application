// import axios from "axios";

// const URL = "http://localhost:8000";
// export const addUser = async (data) => {
//   try {
//     return await axios.post(`${URL}/add`, data);
//   } catch (error) {
//     console.log("Error while calling add user Api ", error);
//   }
// };

// export const getUsers = async () => {
//   try {
//     await axios.get(`${URL}/all`);
//   } catch (error) {
//     console.log("Error while calling getUsers API", error);
//   }
// };

import axios from "axios";

const usersUrl = "http://localhost:8000";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

// export const editUser = async (id, user) => {
//   return await axios.put(`${usersUrl}/${id}`, user);
// };

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${usersUrl}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUrl api", error);
  }
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};
