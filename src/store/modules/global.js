import {
    SET_MENU,
    SET_MENU_ACTIVE,
    BACK_PATH,
    SET_IFRAME_INFO,
    IFRAME_HWUC
} from '../mutation-types'

const state = {
    curCity: '深圳',
    backPath: '',
    ifrmeHwUced: false,
    iframeInfo: {
        'url': '',
        'title': ''
    },
    menu: [{
        path: '/home',
        icon: 'icon-shouye',
        text: '首页'
    }],
    menuActive: {}
}

const mutations = {
    [SET_MENU](state, menu) {
        state.menu = menu
    },
    [SET_MENU_ACTIVE](state, index) {
        state.menuActive = state.menu[index]
    },
    [SET_IFRAME_INFO](state, iframeInfo) {
        state.iframeInfo = iframeInfo
    },
    [IFRAME_HWUC](state, boole) {
        state.ifrmeHwUced = boole
    },
    [BACK_PATH](state, path) {
        state.backPath = path
    },
}

export default {
    state,
    mutations
}