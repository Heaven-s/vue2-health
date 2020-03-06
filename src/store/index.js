import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'
import global from './modules/global'
import disease from './modules/disease'
import symptom from './modules/symptom'
import accompany from './modules/accompany'
import patient from './modules/patient'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        global,
        disease,
        symptom,
        accompany,
        patient
    },
    strict: true
})