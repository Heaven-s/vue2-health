import {
    GET_PATIENT,
    EDIT_PATIENT,
    ADD_PATIENT,
    DEL_PATIENT,
} from '../mutation-types'

const state = {
    patients: [/*{
        name: '小明',
        gender: 1,
        phone: 18875912662,
        number: 431221199109096735,
    }*/],
}

const mutations = {
    [GET_PATIENT](state, patients) {
        state.patients = patients;
    },
    [ADD_PATIENT](state, patient) {
        state.patients.unshift(patient);
    },
    [EDIT_PATIENT](state, obj) {
        state.patients.splice(obj.index, 1, obj.patient); 
    },
    [DEL_PATIENT](state, index) {
        state.patients.splice(index, 1);
    },
}

export default {
    state,
    mutations
}