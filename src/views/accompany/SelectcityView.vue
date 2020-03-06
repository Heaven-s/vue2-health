<template> 
<div class="page-full component-selectcity fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="selectcity-top">
        <i class="iconfont icon-dingwei"></i>当前定位：<span>{{curCity}}</span>
    </div>
    <div class="page-content fx-1">
        <div id="scroll-left">
            <ul>
                <li v-for="(subject, index) in subjects" :key="subject.id" class="ac" :class="{'active': index == curSubjectIndex}"  @click="selectSubject(index)"><span>{{subject.name}}</span></li>
            </ul>
        </div>
        <div id="scroll-right">
            <ul>
                <li v-for="(item, index) in citys" :key="index"><a @click="toPage(item)" href="javascript:void(0)">{{item}}</a></li>
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
                title: '服务城市'
            },
            curSubjectIndex: 0,
            subjects: [{
                id: 1,
                name: '安徽',
                city: ['合肥市', '毫州市']
            },{
                id: 2,
                name: '北京',
                city: ['北京市']
            },{
                id: 3,
                name: '福建',
                city: ['南平市', '泉州市', '福州市']
            },{
                id: 4,
                name: '广东',
                city: ['深圳市', '广州市']
            },{
                id: 5,
                name: '广西',
                city: ['南宁市', '桂林市']
            },{
                id: 6,
                name: '贵州',
                city: ['贵阳市']
            },{
                id: 7,
                name: '河北',
                city: ['唐山市']
            },{
                id: 8,
                name: '河南',
                city: ['郑州市', '洛阳市']
            },{
                id: 9,
                name: '湖北',
                city: ['武汉市', '十堰市']
            },{
                id: 10,
                name: '湖南',
                city: ['长沙市']
            },{
                id: 11,
                name: '江苏',
                city: ['南京市', '徐州市']
            },{
                id: 12,
                name: '江西',
                city: ['赣州市']
            },{
                id: 13,
                name: '山东',
                city: ['济南市', '济宁市']
            },{
                id: 14,
                name: '山西',
                city: ['太原市']
            },{
                id: 15,
                name: '陕西',
                city: ['西安市']
            },{
                id: 16,
                name: '上海',
                city: ['上海市']
            },{
                id: 17,
                name: '四川',
                city: ['成都市']
            },{
                id: 18,
                name: '新疆',
                city: ['乌鲁木齐市']
            },{
                id: 19,
                name: '浙江',
                city: ['杭州市', '温州市']
            },{
                id: 20,
                name: '重庆',
                city: ['重庆市']
            }]
        }
    },
    methods: {
        selectSubject: function (index) {
            this.curSubjectIndex = index;
        },
        toPage: function(item){
            const city = item.replace('市', '');
            this.$store.dispatch('set_city', city);
            this.$router.push({ path: 'accompany'});
        }
    },
    computed: {
        ...mapGetters([
          'curCity'
        ]),
        citys () {
            return this.subjects[this.curSubjectIndex]['city']
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
@import "../../assets/css/common.less";
.page-content{
    position: relative;
    background-color: #fff;
}

.selectcity-top{
    padding-left: 0.16rem;
    height: .88rem;
    line-height: 0.88rem;
    font-size: 0.28rem;
    color: #c5c7ce;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    & i{
        margin-right: 0.1rem;
    }
    & span{
        color: #3d4550;
    }
}
</style>
