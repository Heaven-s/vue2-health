import API from '../../utils/api'
import storage from '../../utils/storage'
import * as types from '../mutation-types'

export const set_city = ({ commit }, city) => {
    commit(types.SET_CITY, city);
}
export const set_patient = ({ commit }, patient) => {
    commit(types.SET_PATIENT, patient);
}
export const set_area = ({ commit }, id) => {
    commit(types.SET_AREA, id);
}
export const set_hospital_type = ({ commit }, id) => {
    commit(types.SET_HOSPITAL_TYPE, id);
}
export const select_hospital = ({ commit }, hospital) => {
    commit(types.SELECTED_HOSPITAL, hospital);
}
export const set_money = ({ commit }, money) => {
    commit(types.SET_MONEY, money);
}