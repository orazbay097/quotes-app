import axios from "axios";

export default {
    init(baseURL) {
        axios.defaults.withCredentials = true
        axios.defaults.baseURL = baseURL
    },
    getAll() {
        return axios.get("")
    },
    add(text) {
        return axios.put("", { text })
    },
    delete(index) {
        return axios.delete(index)
    }
}