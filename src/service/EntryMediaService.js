import axios from "axios";
const API_URL = 'http://localhost:25565/medias';


export async function getAllMedia(params) {
    return await axios.get(API_URL)   
}


export async function getMediaByCategory(category) {
    return await axios.get(`${API_URL}/categories/${category}`)   
}

export async function addEntryMediaToList(tableId, entryId, entryRate, entryReview) {
    return await axios.post(`http://localhost:8080/tables/${tableId}/entries`, {
        "mediaId":entryId,
        "mediaRate": entryRate,
        "mediaReview": entryReview
    })
}



export async function removeEntry(entryId) {
    return await axios.delete(`http://localhost:8080/entries/${entryId}`);
}

export async function createTable(userId, tableName, tableInfo) {
    return await axios.post(`http://localhost:8080/users/${userId}/table`, {
        "name":tableName,
        "info": tableInfo
    })
}

export async function createUser(userInfo, userName) {
    return await axios.post(`http://localhost:8080/users`, {
        "name": userInfo,
        "info": userName
    })
}