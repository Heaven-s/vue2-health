import API from '../../utils/api'
import storage from '../../utils/storage'
import * as types from '../mutation-types'

const deepCopy = (p, c) => {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}

export const set_symptom = ({ commit, state }, obj) => {
    // keep-alive 状态下 symptoms 在 mutations 中更新，dom 不能及时更新
    var symptoms = deepCopy(state.symptom.symptoms);
    if(symptoms[obj.id]){
        if(symptoms[obj.id]['symptom'].indexOf(obj.symptom) == -1){
            if(symptoms[obj.id].symptom){
                symptoms[obj.id]['symptom'].push(obj.symptom)
            }else{
                symptoms[obj.id]['symptom'] = [obj.symptom]
            }
        }
    }else{
        symptoms[obj.id] = {
            'name': obj.name,
            'symptom': [obj.symptom]
        }
    }
    commit(types.SET_SYMPTOM, symptoms);
}

export const del_symptom = ({ commit, state }, key, index) => {
    var symptoms = deepCopy(state.symptom.symptoms);
    if(symptoms[key]){
        symptoms[key]['symptom'].splice(index, 1);
        if(symptoms[key]['symptom'].length == 0){
            delete symptoms[key]
        }
    }
    commit(types.SET_SYMPTOM, symptoms);
}

export const empty_symptom = ({ commit }) => {
    commit(types.SET_SYMPTOM, {});
}

export const get_persons = ({ commit }) => {
    commit(types.GET_PERSONS, storage.fetch('persons') || []);
}

export const add_persons = ({ commit, state }, item) => {
    commit(types.ADD_PERSONS, item);
    storage.save('persons', state.symptom.persons);
}

export const del_persons = ({ commit, state }, index) => {
    commit(types.DEL_PERSONS, index);
    storage.save('persons', state.symptom.persons);
}

export const set_persons = ({ commit, state }, index) => {
    commit(types.SET_PERSONS, index);
    storage.save('persons', state.symptom.persons);
}