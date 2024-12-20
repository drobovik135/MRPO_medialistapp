import axios from "axios";
const API_URL = 'http://localhost:25565/medias';


export async function getAllMedia(params) {
    return await axios.get(API_URL)   
}

export async function getMediaList(params) {
    return await axios.get(API_URL)   
}

export async function getMediaByCategory(category) {
    return await axios.get(`${API_URL}/categories/${category}`)   
}

export async function addEntryMediaToList(params) {
    return await axios.post(API_URL, )
    
}