<template>
<div class="page-full component-invitation fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="page-content fx-1">
        <div class="app-content">
            <div class="invite-bg"><img src="../../assets/images/my/invite-bg@2x.png"></div>
            <div class="invite-btn">我的专属码：<span class="invite-code">{{code}}</span></div>
            <div class="invite-info">好友在APP中输入您的专属邀请码，您和好友都可以获得<i class="invite-num">{{gold}}</i>金币，赶快给好友送金币吧！</div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../../components/app-header.vue'

export default {
    components: { appHeader },
    data (){
        return {
            appHeader: {
                title: '邀请好友得金币'
            },
            gold: '',
            code: '',
            loading: '',
        }
    },
    computed: {
    },
    methods: {
    },
    mounted: function(){
        this.gold = 100;
        this.code = '4Lf6L';
        this.loading = 1;
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    background-color: #f1f4f4; 
}
.invite-bg{
    width: 6.14rem;
    height: 5.34rem;
    display: block;
    margin: .65rem auto .7rem;
}
.invite-btn{
    background-color: @bg_info;
    color: @color_f;
    width: 3.34rem;
    height: .6rem;
    line-height: .6rem;
    border-radius: .03rem;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    font-weight: bold;
}
.invite-info{
    text-align: center;
    color: @color_l;
    margin-top: .5rem;
    line-height: 1.5em;
    padding: 0 .6rem;
    font-size: .3rem;
    font-weight: bold;
}
.invite-num{
    color: #ff3a3f;
}
</style>
