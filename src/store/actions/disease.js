import API from '../../utils/api'
import * as types from '../mutation-types'

export const set_disease = ({ commit }) => {
    API.get({url: 'disease.json'}).then((response) => {
        commit(types.SET_DIS_DATA, response.data);
    })
}

export const set_disease_list = ({ commit }, params) => {
    API.get({url: 'disease-subjects.json'}).then((response) => {
        commit(types.SET_DIS_LIST, response.data);
        params.fn && params.fn();
    })
}