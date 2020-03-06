<template> 
<div class="page-full component-hospital fx-column"> 
    <div class="hospital-header">
        <app-header :title="appHeader.title">
            <i slot="right" class="icon-chaxun iconfont ac-o"></i>
        </app-header>
        <div class="filter-top fx">
            <div class="fx-1 fx-c filter-item" :class="{active: showArea}" @click="showType = false, showArea = !showArea">{{curArea.name}}<i class="icon-sanjiaoxia iconfont"></i></div>
            <div class="fx-1 fx-c filter-item" :class="{active: showType}" @click="showArea = false, showType = !showType">{{curType.name}}<i class="icon-sanjiaoxia iconfont"></i></div>
        </div>
    </div>
    <div class="page-content fx-1">
        <ul class="hospital-content">
            <li v-for="(item, index) in filterHospitals" @click="setHospital(item)" class="hospital-item fx-ac ac">
                <img src="../../assets/images/accompany/hospital.jpg">
                <div class="fl">
                    <h3>{{item.name}}</h3>
                    <span class="fx-c">{{item.typeName}}</span>
                    <p><i class="iconfont icon-dingwei"></i>{{item.address}}</p>
                </div>
            </li>
        </ul>
    </div>
    <transition name="downup">
    <div v-show="showArea" class="filter-content filter-area">
        <ul class="fx-column">
            <li v-for="(item, index) in area" @click="setArea(item)" :class="{active: item.selected}" class="fx-1 fx-ac">{{item.name}}</li>
        </ul>
    </div>
    </transition>
    <transition name="downup">
    <div v-show="showType" class="filter-content filter-type">
        <ul class="fx-column">
            <li v-for="(item, index) in hospitalType" @click="setType(item)" :class="{active: item.selected}" class="fx-1 fx-ac">{{item.name}}</li>
        </ul>
    </div>
    </transition>
    <div v-show="showArea || showType" @click="showArea = false, showType = false;" class="mask"></div>
</div>
</template>

<script>

import IScroll from 'iscroll'
import Utils from '../../utils'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../../components/app-header.vue'

export default {
    components: { appHeader },
    data () {
        return {
            curArea: {},
            curType: {},
            filterHospitals: [],
            showArea: false,
            showType: false,
            appHeader: {
                title: '选择医院'
            },
        }
    },
    methods: {
        filterHospital: function(){
            if(this.curArea.id == 0 && this.curType.id == 0){
                this.filterHospitals = Object.assign([], this.hospitals);
            }else{
                var filterHospitals = null;
                if(this.curArea.id != 0 && this.curType.id != 0){
                    filterHospitals = this.hospitals.filter(item => {
                        return (item.area == this.curArea.id && item.type == this.curType.id)
                    })
                }else if(this.curArea.id != 0){
                    filterHospitals = this.hospitals.filter(item => item.area == this.curArea.id)
                }else if(this.curType.id != 0){
                    filterHospitals = this.hospitals.filter(item => item.type == this.curType.id)
                }
                this.filterHospitals = filterHospitals;
            }
        },
        setHospital: function(item){
            this.$store.dispatch('select_hospital', item);
            this.$router.push({ path: 'appointment'});
        },
        setArea: function(item){
            if(item.selected){
                return;
            }
            this.showArea = false;
            this.curArea = item;
            this.$store.dispatch('set_area', item.id);
            this.filterHospital();
        },
        setType: function(item){
            if(item.selected){
                return;
            }
            this.showType = false;
            this.curType = item;
            this.$store.dispatch('set_hospital_type', item.id);
            this.filterHospital();
        }
    },
    computed: {
        ...mapGetters([
            'hospitals',
            'area',
            'hospitalType'
        ])
    },
    created () {
        this.curArea =  this.area[0];
        this.curType =  this.hospitalType[0];
        this.filterHospitals = Object.assign([], this.hospitals);
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.component-hospital{
    background-color: #f2f3f5;
}
.hospital-header{
    position: relative;
    z-index: 10;
    font-size: .26rem;
    color: #a6dfff;
    background-color: #39b7ff;
}
.hospital-content{
    background-color: #fff;
}
.filter-top{
    height: .88rem;
    font-size: .26rem;
}
.filter-item{
    color: #a6dfff;
    border-bottom: .05rem solid transparent;
    transition: all .25s ease-in;
    & .iconfont{
        margin-left: .1rem;
        font-size: .12rem;
        transition: all .25s ease-in;
    }
    &.active{
        color: #fff;
        border-bottom-color: #a6bfff;
        & .iconfont{
            transform:rotate(180deg)
        }
    }
}
.filter-content{
    position: absolute;
    z-index: 10;
    left: 0;
    top: 1.76rem;
    width: 100%;
    max-height: 60%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    & li{
        padding: 0 .2rem;
        height: .88rem;
        font-size: .28rem;
        color: #3d4550;
        border-bottom: 1px solid #e7ecf2;
        &.active, &:active{
            color: #00a2ff;
            background-color: rgba(0, 0, 0, 0.05)
        }
    }
}
.filter-area{
    height: 7*.88rem;
    & ul{
        height: 7*.88rem;
    }
}
.filter-type{
    height: 5*.88rem;
    & ul{
        height: 5*.88rem;  
    }
}
.hospital-item{
    height: 1.8rem;
    padding: .3rem .2rem;
    border-bottom: .01rem solid #e7ecf2;
    & img{
        margin-right: .3rem;
        width: 1.44rem;
        height: 1.2rem;
        border: 1px solid #d0d0d0;
        border-radius: .03rem;
    }
    & h3{
        margin-bottom: .2rem;
        font-size: .32rem;
        color: #3d4550;
    }
    & span{
        margin-bottom: .16rem;
        width: .7rem;
        height: .26rem;
        font-size: .18rem;
        color: #39b7ff;
        border: 1px solid #39b7ff;
        border-radius: .02rem;
    }
    & p{
        font-size: .24rem;
        color: #9fa1a9;
    }
    & i{
        margin-right: .1rem; 
        font-size: .22rem;
    }
}
</style>
