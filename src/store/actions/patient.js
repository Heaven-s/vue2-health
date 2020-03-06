import API from '../../utils/api'
import storage from '../../utils/storage'
import * as types from '../mutation-types'

export const get_patient = ({ commit }) => {
    commit(types.GET_PATIENT, storage.fetch('patients') || []);
}

export const add_patient = ({ commit, state }, item) => {
    commit(types.ADD_PATIENT, item);
    storage.save('patients', state.patient.patients);
}
export const edit_patient = ({ commit, state }, obj) => {
    commit(types.EDIT_PATIENT, obj);
    storage.save('patients', state.patient.patients);
}

export const del_patient = ({ commit, state }, index) => {
    commit(types.DEL_PATIENT, index);
    storage.save('patients', state.patient.patients);
}