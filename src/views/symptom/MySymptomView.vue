<template> 
<div class="page-full my-symptom fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl"></app-header>
    <info-pop :show="errorShow" :message="message"></info-pop>
    <div class="page-content fx-1">
        <ul v-for="(item, key) in symptoms" :key="key" class="part-box">
            <li class="part-item part-tit"><a class="fx-ac" href="javascript:void(0)"><i></i><span class="fx-1">{{item.name}}</span></a></li>
            <li v-for="(value, index) in item.symptom" :key="index" class="part-item"><a class="fx-ac" href="javascript:void(0)"><span class="fx-1">{{value}}</span><i @click="delSymptom(key, index)" class="iconfont icon-shanchu ac-o"></i></a></li>
        </ul>
        <router-link to="/symptom" class="to-symptom fx-c ac-o">{{this.text}}</router-link>
    </div>
    <div @click="startSymptom" class="app-bottom fx-c ac-o">开始诊断</div>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import appHeader from '../../components/app-header.vue'
import infoPop from '../../components/info-pop.vue'

export default {
    components: { appHeader, infoPop },
    data () {
        return {
            errorShow: false,
            message: '',
            text: '添加症状',
            appHeader: {
                title: '我的症状',
                backUrl: 'symptom-select'
            },
        }
    },
    computed: {
        ...mapGetters([
            'symptoms'
        ])
    },
    methods: {
        delSymptom: function (key, index) {
            this.$store.dispatch('del_symptom', key, index);
            if(Object.keys(this.symptoms).length == 0){
                this.text = '添加症状'
            }
        },
        startSymptom: function(){
            if(Object.keys(this.symptoms).length > 0){
                this.$router.push({path: '/symptom-result'});
            }else{
                this.message = '请先添加症状';
                this.errorShow = true;
            }
        }
    },
    watch: {
        errorShow: function(val) {
            if (val) {
                setTimeout(() => {
                    this.errorShow = false;
                }, 1000);
            }
        }
    },
    activated (){
        if(Object.keys(this.symptoms).length > 0){
            this.text = '继续添加症状'
        }else{
            this.text = '添加症状'
        }
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    background-color: #f2f3f5;
}
.app-bottom{
    background-color: #39b7ff;
}
.part-box{
    margin-top: .1rem;
    background-color: #fff;
    .part-item{
        padding-left: 1rem;
        & a{
            height: .88rem;
            font-size: .3rem;
            color: #646f7f;
            border-top: 1px solid #e6ecf1;
            & .iconfont{
                padding: .2rem; 
                font-size: .44rem;
                color: #c5c7ce;
            }
        }
        &.part-tit {
            padding-left: 0;
            & a{
                height: .88rem;
                padding-left: .2rem;
                font-size: .32rem;
                color: #3d4550;
                border-top: 0;
            }
        }
    }
}
.to-symptom{
    margin: .4rem;
    height: .88rem;
    font-size: .32rem;
    color: #fff;
    border-radius: .09rem;
    background-color: #5cc4ff;
}
</style>
