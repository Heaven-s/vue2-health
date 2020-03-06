import {
    SET_DIS_DATA,
    SET_DIS_LIST,
} from '../mutation-types'

const state = {
    item: {},
    items: []
}

const mutations = {
    [SET_DIS_DATA](state, item) {
        state.item = item
    },
    [SET_DIS_LIST](state, items) {
        state.items = items
    }
}

export default {
    state,
    mutations
}