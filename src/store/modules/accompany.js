import {
    SET_CITY,
    SET_PATIENT,
    SET_AREA,
    SET_HOSPITAL_TYPE,
    SELECTED_HOSPITAL,
    SET_MONEY
} from '../mutation-types'

const state = {
    selectedCity: '深圳',
    patient: {},
    selectedHospital: {},
    money: 10,
    hospitals: [{
        name: '深圳市中医院第一门诊部',
        area: 3,
        type: 1,
        typeName: '三甲',
        address: '深圳市罗湖区解放路3015号'
    },{
        name: '深圳市人民医院',
        area: 3,
        type: 1,
        typeName: '三甲',
        address: '深圳市罗湖区东门北路1017号'
    },{
        name: '深圳市康宁医院',
        area: 3,
        type: 2,
        typeName: '三级',
        address: '深圳市罗湖区翠竹路1080号'
    },{
        name: '深圳市罗湖区中医院',
        area: 3,
        type: 3,
        typeName: '二级',
        address: '深圳市罗湖区乐园路83号'
    },{
        name: '深圳市慢性病防治中心',
        area: 3,
        type: 3,
        typeName: '社区',
        address: '深圳市罗湖区布心路2021号'
    },{
        name: '北京大学深圳医院',
        area: 1,
        type: 1,
        typeName: '三甲',
        address: '深圳市福田区莲花路1120号'
    },{
        name: '香港大学深圳医院',
        area: 1,
        type: 2,
        typeName: '三级',
        address: '深圳市福田区海园一路1120号'
    },{
        name: '深圳市福田区第二人民医院',
        area: 1,
        type: 3,
        typeName: '二级',
        address: '深圳市福田区上格林中康路72号'
    },{
        name: '西丽人民医院',
        area: 2,
        type: 3,
        typeName: '二级',
        address: '深圳市南山区留仙大道2051号'
    },{
        name: '深圳华侨城医院',
        area: 2,
        type: 4,
        typeName: '社区',
        address: '深圳市南山区华侨城香山东街10号'
    },{
        name: '盐田区人民医院',
        area: 4,
        type: 3,
        typeName: '二级',
        address: '深圳市盐田区梧桐路2010号'
    },{
        name: '深圳市盐田区梅沙医院',
        area: 4,
        type: 4,
        typeName: '社区',
        address: '深圳市盐田区大梅沙望翠路2号'
    },{
        name: '宝安区中医院',
        area: 5,
        type: 1,
        typeName: '三甲',
        address: '深圳市宝安30区裕安路25号'
    },{
        name: '深圳宝安区中心医院',
        area: 5,
        type: 3,
        typeName: '二级',
        address: '深圳市宝安区西乡街道松白路4253号'
    },{
        name: '深圳市龙岗区中心医院',
        area: 6,
        type: 1,
        typeName: '三甲',
        address: '深圳市龙岗区龙岗大道1228号'
    }],
    area: [{
        id: 0,
        name: '所有区域',
        selected: true
    },{
        id: 1,
        name: '福田区',
        selected: false
    },{
        id: 2,
        name: '南山区',
        selected: false
    },{
        id: 3,
        name: '罗湖区',
        selected: false
    },{
        id: 4,
        name: '盐田区',
        selected: false
    },{
        id: 5,
        name: '宝安区',
        selected: false
    },{
        id: 6,
        name: '龙岗区',
        selected: false
    }],
    hospitalType: [{
        id: 0,
        name: '全部',
        selected: true
    },{
        id: 1,
        name: '三甲',
        selected: false
    },{
        id: 2,
        name: '三级',
        selected: false
    },{
        id: 3,
        name: '二级',
        selected: false
    },{
        id: 4,
        name: '社区',
        selected: false
    }]
}

const mutations = {
    [SET_CITY](state, city) {
        state.selectedCity = city;
    },
    [SET_PATIENT](state, patient) {
        state.patient = patient;
    },
    [SET_AREA](state, id) {
        state.area.forEach((item) => {
            if (item.selected) {
                item.selected = false;
            } else if (id == item.id) {
                item.selected = true;
            }
        })
    },
    [SET_HOSPITAL_TYPE](state, id) {
        state.hospitalType.forEach((item) => {
            if (item.selected) {
                item.selected = false;
            } else if (id == item.id) {
                item.selected = true;
            }
        })
    },
    [SELECTED_HOSPITAL](state, hospital) {
        state.selectedHospital = hospital;
    },
    [SET_MONEY](state, money) {
        state.money = money;
    }
}

export default {
    state,
    mutations
}