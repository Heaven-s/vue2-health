import API from '../../utils/api'
import * as types from '../mutation-types'

export const get_nav = ({ commit }) => {
    API.get({url: 'menu.json'}).then((response) => {
        commit(types.SET_MENU, response.data);
    })
}

export const set_menu_active = ({ commit }, index) => {
    commit(types.SET_MENU_ACTIVE, index);
}

export const set_back_path = ({ commit }, path) => {
    commit(types.BACK_PATH, path);
}

export const set_iframe_info = ({ commit }, info) => {
    commit(types.SET_IFRAME_INFO, info);
}

export const ifrmae_hwuc = ({ commit }, boole) => {
    commit(types.IFRAME_HWUC, boole);
}