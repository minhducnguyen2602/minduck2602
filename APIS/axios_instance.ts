import axios from "axios"


const instance = axios.create({
    // TODO: replace url in production mode
    baseURL: "https://aiclub.uit.edu.vn/uit_face_tagging/backend/predict_binary"

})

export default instance
