import axios from "axios";

export default {
    init(baseURL) {
        axios.defaults.withCredentials = true
        axios.defaults.baseURL = baseURL
    },
    getAll() {
        return axios.get("")
    },
    add(text,id) {
        return axios.put("", { text,id })
    },
    delete(id) {
        return axios.delete(String(id))
    }
}