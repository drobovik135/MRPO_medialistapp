import axios from "axios";
const API_URL = 'http://localhost:25565/users';



export async function getAllUsers() {
    return await axios.get(`${API_URL}`)   
}

export async function getAllTablesFromUser(userId){
  return await axios.get(`${API_URL}/${userId}/table`)
}

export async function deleteTableById(tableId){
  return await axios.delete(`http://localhost:8080/tables/${tableId}`)
}

export async function createNewUser(name, info) {
    return await axios.post(`${API_URL}`, {
        name: name,
        info: info
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });   
}

export async function getUser(userId) {
  return await axios.get(`${API_URL}/${userId}`)
}
