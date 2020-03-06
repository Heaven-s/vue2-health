import axios from 'axios'
//import storage from './storage'

const api_root = './static/mock/'

const API = {
    get ({url, params = {}}){
        return axios.get(api_root + url, {
            params
        })
    },
    post ({url, params = {}}){
        return axios.post(api_root + url, {
            params
        })
    }
}

export default API