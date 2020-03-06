import {
    GET_PERSONS,
    SET_PERSONS,
    ADD_PERSONS,
    DEL_PERSONS,
    SET_SYMPTOM,
} from '../mutation-types'

const state = {
    persons: [{
        name: '小明',
        gender: 0,
        age: 25,
        selected: true,
    }],
    symptoms: {}
}

const mutations = {
    [SET_SYMPTOM](state, symptoms) {
        state.symptoms = symptoms;
    },
    [GET_PERSONS](state, persons) {
        state.persons = persons;
    },
    [SET_PERSONS](state, i) {
        state.persons.forEach((item, index) => {
            if (item.selected) {
                item.selected = false;
            } else if (i == index) {
                item.selected = true;
            }
        })
    },
    [ADD_PERSONS](state, person) {
        state.persons.forEach((el) => {
            if (el.selected) {
                el.selected = false;
            }
        })
        state.persons.unshift(person);
    },
    [DEL_PERSONS](state, index) {
        const isState = state.persons[index]['selected'];
        if(isState){
            if( index > 0){
                state.persons[0]['selected'] = true;
            }else if(state.persons.length > 1){
                state.persons[1]['selected'] = true;
            }
        }
        state.persons.splice(index, 1);
    },
}

export default {
    state,
    mutations
}