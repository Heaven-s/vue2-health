<template> 
<div class="page-full my-symptom fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl">
        <div slot="right">
            <i class="icon-fenxiang iconfont ac-o"></i>
        </div>
    </app-header>
    <info-pop :show="errorShow" :message="message"></info-pop>
    <div class="page-content fx-1">
        <div class="symptom-result-list">
            <router-link :to="{ name: 'h-symptom-select-my-result-disease', params: { id: value.id }}" v-for="(value, key) in result" v-bind:key="key" class="symptom-result-li ac">
                <div class="symptom-result-item">
                    <div class="symptom-result els">{{value.name}}</div><i class="icon-jinru iconfont"></i>
                </div>
                <div class="progress-bar">
                    <span class="bar-bg">
                        <span class="bar-cont" v-bind:style="{ width : value.weight * 100 + '%', background: 'linear-gradient(to left, rgba(57, 183, 255,' + (value.weight * 0.59 + 0.41) + ') 0%, rgba(57, 183, 255, 0.41) 100%)'
                        }"></span>
                        <span class="bar-cont-bg" v-bind:style="{ width : value.weight * 100 + '%' }"></span>
                    </span>
                </div>
            </router-link>
        </div>
    </div>
    <div @click="saveResult" class="app-bottom fx-c ac-o">保存自诊结果</div>
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
            appHeader: {
                title: '自诊结果',
                backUrl: 'my-symptom'
            },
            errorShow: false,
            message: '',
            result: [   
                {"id":"35","name":"药物反应","weight":"0.7520"},
                {"id":"269","name":"偏头痛","weight":"0.6619"},
                {"id":"271","name":"高血压","weight":"0.4082"},
                {"id":"351","name":"红眼病","weight":"0.1769"}
            ]
        }
    },
    methods: {
        saveResult: function(){
            this.message = '已保存';
            this.errorShow = true;
            setTimeout(() => {
                this.$router.push({path: '/home'});
            }, 1000);
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
.symptom-result-list {
    background: @bg_header;
    & i{
        position: absolute;
        top: .2rem;
        right: 0;
        display: inline-block;
        font-size: .24rem;
        color: #b5b7c0;
    }
}

.symptom-result-li {
    display: block;
    padding: 0 .2rem;
    height: 1.3rem;
    color: @color_l;
    font-size: .32rem;
}

.symptom-result-li .percent {
    position: absolute;
    right: 0;
    top: .16rem;
    color: @color_s;
    font-size: .22rem;
}

.symptom-result-li .symptom-result-item {
    position: relative;
    height: .65rem;
    line-height: .65rem;
    padding-top: .16rem;
    overflow: hidden;
}

.symptom-result {
    margin-right: 0.4rem;
}

.progress-bar {
    padding-top: .16rem;
}

.progress-bar .bar-bg {
    position: relative;
    width: 100%;
    height: .16rem;
    display: block;
    border-radius: .16rem;
    background: #f2f3f5;
}

.bar-cont {
    position: relative;
    z-index: 1;
    max-width: 100%;
    width: 0;
    display: block;
    border-radius: .16rem;
    height: .16rem;
    background: linear-gradient(to left, rgb(57, 183, 255) 0%, rgb(173, 225, 255) 100%)
}
.bar-cont-bg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    max-width: 100%;
    width: 0;
    display: block;
    border-radius: .16rem;
    height: .16rem;
    background-color: #fff;
}
</style>
