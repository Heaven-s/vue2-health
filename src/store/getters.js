// global 全局
export const curCity = state => state.global.curCity;
export const menuList = state => state.global.menu;
export const backPath = state => state.global.backPath;
export const iframeInfo = state => state.global.iframeInfo;
export const ifrmeHwUced = state => state.global.ifrmeHwUced;

// disease 疾病
export const diseaseItem = state => state.disease.item;
export const diseaseItems = state => state.disease.items;
export const hasInformations = state => {
    let t;  
    for (t in diseaseItem.informations) { 
        return !0;
    }  
    return !1 ;
};
export const informations = state => {
    let infos = diseaseItem.informations;
    if(!infos){
        return false;
    }
    let informations = [];
    for(key in infos){
        let Infos = infos[key].split('|');
        let obj  = {};
        obj.id = key;
        obj.title = Infos[0];
        obj.number = Infos[1];
        obj.image = Infos[2];
        informations.push(obj);
    }
    return informations;
};

// symptom 自诊
export const symptomPersons = state => state.symptom.persons;
export const symptoms = state => state.symptom.symptoms;

// accompany 陪诊
export const selectedCity = state => state.accompany.selectedCity;
export const patient = state => state.accompany.patient;
export const hospitals = state => state.accompany.hospitals;
export const area = state => state.accompany.area;
export const hospitalType = state => state.accompany.hospitalType;
export const selectedHospital = state => state.accompany.selectedHospital;
export const money = state => state.accompany.money;

// patient 就诊人信息
export const patients = state => state.patient.patients;