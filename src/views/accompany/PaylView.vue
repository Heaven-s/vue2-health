<template> 
<div class="page-full component-pay fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="page-content fx-1">
        <div class="pay-content">
            <p class="pay-tip">请在15分钟内完成支付</p>
            <p class="pay-money"><i>￥</i>{{money}}</p>
            <p class="pay-ps">服务开始前2小时内取消，将扣除5%支付金额</p>
        </div>
        <ul class="pay-select">
            <li class="fx-c ac" @click="payType = 1"><span class="fx-1 fx-ac"><i class="iconfont icon-weixinzhifu"></i>微信支付</span><i :class="{ 'icon-weixuan': payType == 2, 'icon-xuanzhong': payType == 1 }" class="iconfont"></i></li>
            <li class="fx-c ac" @click="payType = 2"><span class="fx-1 fx-ac"><i class="iconfont icon-zhifubao"></i>支付宝支付</span><i :class="{ 'icon-weixuan': payType == 1, 'icon-xuanzhong': payType == 2 }" class="iconfont"></i></li>
        </ul>
    </div>
    <div @click="toPage" class="app-bottom fx-c ac-o">确认支付</div>
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
            payType: 2,
            appHeader: {
                title: '支付订单'
            },
        }
    },
    methods: {
        toPage: function() {
            if(this.payType == 1){
                location.href = 'weixin://';
            }else{
                location.href = 'alipays://';
            }
        },
    },
    computed: {
        ...mapGetters([
          'money'
        ]),
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    padding: .2rem 0 .4rem 0;
    background-color: #f2f3f5;
}
.pay-content{
    margin-bottom: .5rem;
    padding: .5rem .2rem .4rem .2rem;
    text-align: center;
    background-color: #fff;
}
.pay-tip{
    margin-bottom: .5rem;
    font-size: .28rem;
    color: #3d4550;
}
.pay-money{
    margin-bottom: .4rem;
    font-size: 1rem;
    color: #ff6476;
    & i{
        margin-right: .2rem;
        font-size: .58rem;
    }
}
.pay-ps{
    font-size: .22rem;
    color: #9fa1a9;
}
.pay-select{
    background-color: #fff;
    & li{
        padding: 0 .4rem;
        height: 1.05rem;
        font-size: .3rem;
        color: #646f7f;
        border-top: 1px solid #e6edf0;
        &:first-child{
            border-top: 0;
        }
    }
}
.icon-weixinzhifu, 
.icon-zhifubao{
    margin-right: .3rem;
    font-size: .6rem;
    color: #09bb06;
}
.icon-zhifubao{
    color: #01aef5;
}
.icon-weixuan,
.icon-xuanzhong{
    font-size: .5rem;
    color: #d0d4d8;
}
.icon-xuanzhong{
    font-size: .5rem;
    color: #fe6475;
}
</style>
