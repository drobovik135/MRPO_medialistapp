import axios from "axios";
const API_URL = 'http://localhost:25565/medias';


export async function getAllMedia(params) {
    return await axios.get(API_URL)   
}


export async function getMediaByCategory(category) {
    return await axios.get(`${API_URL}/categories/${category}`)   
}

export async function addEntryMediaToList(tableId, entryId) {
    return await axios.post(`http://localhost:8080/tables/${tableId}/entries`, {
        "mediaId":entryId
    })
    
}

export async function removeEntry(entryId) {
    return await axios.delete(`http://localhost:8080/entries${entryId}`)
    
}
