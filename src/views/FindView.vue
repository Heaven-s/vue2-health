<template>
    <div class="page-full component-find fx-column"> 
        <div class="page-content fx-1">
            <section class="banner-box">
                <a class="banner-item ac" href="javascript:;"><img src="../assets/images/find/find_banner.jpg"></a>
            </section>
            <section class="modules">
                <h3 class="modules-title fx-c"><i class="iconfont icon-xiaoaixin"></i><span>优质服务</span><i class="iconfont icon-xiaoaixin"></i></h3>
                <ul class="modules-content fx">
                    <li class="modules-item fx fx-1">
                        <router-link class="fx-c fx-1 ac" to="/aid">
                            <div class="fx">
                                <img src="../assets/images/disease/drug@2x.png">
                                <p class="fx-1"><strong>用药助手</strong>自查症状&nbsp;了解疾病</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="modules-item fx fx-1">
                        <router-link class="fx-c fx-1 ac" to="/firstaid">
                            <div class="fx">
                                <img src="../assets/images/find/find_jjcs.png">
                                <p class="fx-1"><strong>急救常识</strong>解析疾病&nbsp;加强诊疗</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="modules">
                <h3 class="modules-title fx-c"><i class="iconfont icon-xiaoaixin"></i><span>健康测评</span><i class="iconfont icon-xiaoaixin"></i></h3>
                <div class="scroll-evaluations">
                    <ul class="clearfix">
                        <li @click="toPage(0)"><img src="../assets/images/find/evaluation1.jpg"></li>
                        <li @click="toPage(1)"><img src="../assets/images/find/evaluation2.jpg"></li>
                        <li @click="toPage(2)"><img src="../assets/images/find/evaluation1.jpg"></li>
                    </ul>
                </div>
            </section>
        </div>
        <app-nav></app-nav>
    </div>
</template>

<script>
import IScroll from 'iscroll'
import Utils from '../utils'
import appNav from '../components/app-nav.vue'

var myScroll = null;

export default {
    components: { appNav },
    data () {
        return {
            evaluations: [
                            'http://www.xinli001.com/ceshi/470',
                            'http://www.xinli001.com/ceshi/878',
                            'http://www.xinli001.com/ceshi/99897376'
                        ]
        }
    },
    methods: {
        toPage: function(index){
            this.$store.dispatch('set_iframe_info', {
                url: this.evaluations[index],
                title: '健康测评'
            });
            this.$router.push({ path: 'evaluation'});
        }
    },
    mounted () {
        this.$nextTick(() => {
            myScroll = new IScroll('.scroll-evaluations', { scrollX: true, scrollY: false, mouseWheel: false, click: Utils.iScrollClick() });
        })
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";

.page-content{
    padding-bottom: .2rem;
    background-color: #f1f4f4; 
}

.banner{
    background-color: #fff;
}
.banner-item{
    display: block;
    max-height: 4.08rem;
    overflow: hidden;
    & img{
        width: 100%;
    }
}
/**
 * 模块入口
 */
.modules{
    margin-top: .2rem;
    background-color: #fff;
}
.modules-title{
    height: .7rem;
    font-size: .26rem;
    color: #646f7f;
    border-bottom: 1px solid @bg_bd;
    & .iconfont{
        color: #cbdee8;
    }
    & span{
        margin: 0 .2rem;
    }
}
.modules .modules-content{
    border-bottom: 1px solid @bg_bd;
    & li:first-child{
        border-right: 1px solid @bg_bd;
    }
    &:last-child{
        border-bottom-color: transparent;
    }
}
.modules-item{
    height: 1.8rem;
    & a{
        font-size: 0.22rem;
        color: @color_m;
        line-height: 1.65;
        & strong{
            display: block;
            font-size: 0.3rem;
            color: @color_l;
        }
    }
    & img{
        margin-right: 0.18rem;
        width: 0.88rem;
        height: 0.88rem;
    }
}

.scroll-evaluations{
    position: relative;
    overflow: hidden;
    padding: .3rem 0;
    //height: 1.98rem;
    width: 100%;
    & ul{
        width: 3.4*3rem;
    }
    & li{
        margin-left: .2rem;
        float: left;
    }
    & img{
        height: 2rem;
        border-radius: .1rem;
    }
}
</style>
