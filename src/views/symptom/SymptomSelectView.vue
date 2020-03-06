<template> 
<div class="page-full symptom-select fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl"></app-header>
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
import Utils from '../../utils'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../../components/app-header.vue'

var myScroll = null;

export default {
    components: { appHeader },
    data () {
        return {
            appHeader: {
                title: '症状',
                backUrl: 'symptom'
            },
            partIndex: 0,
            part: [{
                id: 1,
                name: '头部',
                symptom: ['头晕', '脱发', '发烧']
            },{
                id: 2,
                name: '眼睛',
                symptom: ['黄色眼睛', '怕光', '红眼', '可见畸形']
            },{
                id: 3,
                name: '耳朵',
                symptom: ['触痛', '出血', '耳鸣']
            }]
        }
    },
    methods: {
        selectPart: function (index) {
            this.partIndex = index;
        },
        toPage: function(item){
            const obj = { id: this.part[this.partIndex]['id'], name: this.part[this.partIndex]['name'], symptom: item};
            this.$store.dispatch('set_symptom', obj);
            this.$router.push({ path: 'my-symptom'});
            
        }
    },
    computed: {
        selectedSymptoms () {
            return this.part[this.partIndex]['symptom']
        }
    },
    created () {
        setTimeout(() => {
            myScroll = new IScroll('#scroll-left', { mouseWheel: false, deceleration: 0.001, click: Utils.iScrollClick() })
        }, 20)
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    position: relative;
    background-color: #fff;
}
</style>
