<template> 
<div class="page-full component-patient fx-column"> 
    <app-header :title="appHeader.title">
        <router-link tag="div" to="/patient-add" slot="right" class="header-right-text ac-o">添加</router-link>
    </app-header>
    <div class="page-content fx-1">
        <ul class="patient-box">
            <li @click="setPatient(item)" v-for="(item, index) in patients" :key="index" class="patient-item">
                <div class="patient-item-scroller fx-c">
                    <div class="patient-item-left fx-c fx-1">
                        <div class="fx-1">
                            <h3 class="patient-item-name">{{item.name}}<i class="patient-item-s">|</i>{{item.gender | sex}}</h3>
                            <p>手机号：{{item.phone}}</p>
                            <p>身份证号：{{item.number | identity}}</p>
                        </div>
                        <a @click.stop="editPatient(index)" class="patient-item-edit ac-o" href="javascript:void(0)"><i class="iconfont icon-bianji"></i></a>
                    </div>
                    <a @click.stop="delPatient(index)" class="patient-item-del ac-o" href="javascript:void(0)"><i class="iconfont icon-shanchu"></i></a>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

import IScroll from 'iscroll'
import Utils from '../utils'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../components/app-header.vue'

var patientIscrollArr = [];
export default {
    components: { appHeader },
    data () {
        return {
            appHeader: {
                title: '就诊档案'
            },
        }
    },
    methods: {
        editPatient: function (index){
            this.$store.dispatch('set_patient', index);
            this.$router.push({ path: '/patient/edit/' + index });
        },
        delPatient: function (index) {
            this.$store.dispatch('del_patient', index);
        },
        setPatient: function(patient){
            this.$store.dispatch('set_patient', patient);
            this.$router.push({ path: '/appointment' })
        }
    },
    computed: {
        ...mapGetters([
          'patients'
        ])
    },
    watch: {
        patients: function(val) {
            if(val.length > 0){
                setTimeout(() => {
                    const itemDom = document.querySelectorAll('.patient-item');
                    for (let i = 0, l = itemDom.length; i < l; i++) {
                        patientIscrollArr[i] = new IScroll(itemDom[i], {
                            scrollX: true,
                            scrollY: false,
                            momentum: false,
                            snap: true,
                            snapSpeed: 300,
                            snapThreshold: 0.2,
                            keyBindings: false,
                            click: Utils.iScrollClick()
                        });
                    }
                }, 100)
            }
        }
    },
    created () {
        this.$store.dispatch('get_patient');
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.page-content{
    background-color: #f2f3f5;
}
.patient-box{
    padding-bottom: .6rem;
}
.patient-item{
    overflow: hidden;
    margin-top: .3rem;
    height: 1.98rem;
    width: 100%;
    font-size: .24rem;
    color: #9fa1a9;
    background-color: #fff;
    & p{
        margin-top: .2rem;
    }
}
.patient-item-scroller,.patient-item-left{
    height: 100%;
}
.patient-item-scroller{
    padding: .4rem 0 .4rem .3rem;
    width: 100%;
    width: calc(~"100% + 1.96rem");
    background-color: #fff;
}
.patient-item-name{
    font-size: .34rem;
    color: #3d4550;
}
.patient-item-s{
    margin: 0 .1rem;
    font-size: .32rem;
    color: #c5c7ce;
}
.patient-item-edit,.patient-item-del{
    padding: .72rem .4rem;
    font-size: .52rem;
    color: #9fa1a9;
}
.patient-item-del{
    padding-left: .72rem; 
    padding-right: .72rem; 
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
