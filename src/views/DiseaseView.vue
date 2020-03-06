<template> 
<div class="page-full component-disease fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right">
            <i class="icon-chaxun iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <div id="scroll-left">
            <ul>
                <li v-for="(subject, index) in subjects" :key="subject.id" class="ac" :class="{'active': index == curSubjectIndex}"  @click="selectSubject(index)"><span>{{subject.name}}</span></li>
            </ul>
        </div>
        <div id="scroll-right">
            <ul>
                <li v-for="item in diseaseItems" :key="item.condition_id"><router-link to="/disease/1">{{item.condition_name}}</router-link></li>
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

var myScroll = null, myScroll2 = null;

export default {
    components: { appHeader },
    data () {
        return {
            appHeader: {
                title: '疾病大全'
            },
            curSubjectIndex: 0,
            subjects: [{
                id: 1,
                name: '外科学'
            },{
                id: 2,
                name: '内科学'
            },{
                id: 3,
                name: '儿科学'
            },{
                id: 4,
                name: '妇产科学'
            },{
                id: 5,
                name: '肿瘤学'
            },{
                id: 6,
                name: '急诊医学'
            },{
                id: 7,
                name: '皮肤病学'
            },{
                id: 8,
                name: '口腔医学'
            },{
                id: 9,
                name: '眼科学'
            },{
                id: 10,
                name: '耳鼻咽喉科学'
            },{
                id: 11,
                name: '性医学'
            },{
                id: 12,
                name: '保健医学'
            },{
                id: 13,
                name: '麻醉学'
            },{
                id: 14,
                name: '神经病学'
            },{
                id: 15,
                name: '精神病学'
            }],
        }
    },
    methods: {
        resetFn: function () {
            myScroll2.isAnimating = false;
            myScroll2._execEvent('scrollEnd');
            setTimeout(() => {
                myScroll2.refresh();
                myScroll2.scrollTo(0, 0, 150);
            }, 100);
        },
        selectSubject: function (index) {
            this.curSubjectIndex = index;
            this.$store.dispatch('set_disease_list', { id: index, fn: this.resetFn})
        },
        initFn: function () {
            setTimeout(() => {
                myScroll2 = new IScroll('#scroll-right', { scrollbars: true, shrinkScrollbars: 'scale', fadeScrollbars: true, mouseWheel: false, deceleration: 0.001, click: Utils.iScrollClick() });
            }, 100)
        }    
    },
    computed: mapGetters({
        backPath: 'backPath',
        diseaseItems: 'diseaseItems',
    }),
    mounted () {
        this.$nextTick(() => {
            this.initFn();
            myScroll = new IScroll('#scroll-left', { mouseWheel: false, deceleration: 0.001, click: Utils.iScrollClick() })
        })
    },
    created () {
        //this.$store.dispatch('set_disease_list', { id: this.curSubjectIndex, fn: this.initFn })
        this.$store.dispatch('set_disease_list', { id: this.curSubjectIndex })
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
