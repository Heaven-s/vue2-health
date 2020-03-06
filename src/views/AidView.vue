<template> 
<div class="page-full component-aid fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl">
        <div slot="right">
            <i class="icon-chaxun iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <div id="scroll-left">
            <ul>
                <li v-for="(item, index) in part" :key="item.id" class="ac" :class="{'active': index == partIndex}"  @click="selectPart(index)"><span>{{item.name}}</span></li>
            </ul>
        </div>
        <div id="scroll-right">
            <ul>
                <li v-for="(item, index) in selectedSymptoms" :key="index"><a @click="toPage(item)" href="javascript:void(0)">{{item}}</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

import IScroll from 'iscroll'
import Utils from '../utils'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../components/app-header.vue'

var myScroll = null;

export default {
    components: { appHeader },
    data () {
        return {
            appHeader: {
                title: '用药助手',
                backUrl: 'find'
            },
            partIndex: 0,
            part: [{
                id: 1,
                name: '骨科疾病',
                symptom: ['风湿性关节炎', '骨关节炎', '骨折']
            },{
                id: 2,
                name: '外科疾病',
                symptom: ['创伤', '烧伤', '痔疮']
            },{
                id: 3,
                name: '儿科疾病',
                symptom: ['小儿支气管炎', '惊厥', '早产儿']
            }]
        }
    },
    methods: {
        selectPart: function (index) {
            this.partIndex = index;
        },
        toPage: function(item){
            this.$router.push({ path: 'drug-list'}); 
        }
    },
    computed: {
        selectedSymptoms () {
            return this.part[this.partIndex]['symptom']
        }
    },
    mounted () {
        this.$nextTick(() => {
            myScroll = new IScroll('#scroll-left', { mouseWheel: false, deceleration: 0.001, click: Utils.iScrollClick() })
        })
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.page-content{
    position: relative;
    background-color: #fff;
}
</style>
