<template>
<div class="page-full component-set fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="page-content fx-1">
        <section class="mine-data">
            <div class="mine-bar">
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">关于瑞康医生</span>
                    <a href="javascript:;" class="item-data fr"><i class="iconfont icon-jinru"></i></a>
                </div>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">给我评分吧</span>
                    <a href="javascript:;" class="item-data fr"><i class="iconfont icon-jinru"></i></a>
                </div>
                <router-link tag="div" to="/agreement" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">用户协议</span>
                    <span class="item-data fr"><i class="iconfont icon-jinru"></i></span>
                </router-link>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">版权申明</span>
                    <span class="item-data fr"><i class="iconfont icon-jinru"></i></span>
                </div>
            </div>
            <div class="mine-bar ac">
                <div class="logout-bar">
                    <span class="logout-btn">退出登录</span>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../components/app-header.vue'

export default {
    components: { appHeader },
    data (){
        return {
            appHeader: {
                title: '设置'
            },
        }
    },
    computed: {
    },
    methods: {
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";

.page-content{
    background-color: #f1f4f4; 
}
.mine-bar{
    background-color: @color_f;
    margin-top: .2rem;
    & .mine-data-head{
        display: block;
        height: 1.6rem;
        line-height: 1.6rem;
        color: @color_l;
        font-size: .3rem;
        padding-left: 0.2rem;
    }
    & .data-list-head{
        height: 0.7rem;
        line-height: .7rem;
        color: @color_m;
        font-size: .26rem;
    }
    & .list-line{
        border-bottom: 1px solid @bg_bd;
        padding: 0 0.2rem;
    }
    & .list-line:last-child{
        border-bottom: none;
    }
    & .data-list-item{
        height: .88rem;
        line-height: .88rem;
        font-size: .3rem;
        color: @color_l;
    }
    & .item-data{
        color: @color_m;
    }
    & .num-mark{
        font-size: .4rem;
        color: #ff8177;
        position: absolute;
        right: 1.56rem;
        width: 1rem;
        overflow: hidden;
    }
    & .tips-m{
        color: @color_m;
        font-size: .22rem;
        margin: 0 0.41rem 0 0.2rem;
    }
}
.icon-jinru, .iconfont.icon-jinru{
    color: #d4dbe8;
    font-size: 0.36rem;
    position: absolute;
    right: .2rem;
}
.logout-bar{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    & .logout-btn{
        color: #ff0000;
        font-size: 0.32rem;
    }
}
</style>
