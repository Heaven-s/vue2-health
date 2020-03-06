<template>
<div class="page-full component-invitation fx-column"> 
    <app-header :title="appHeader.title">
        <router-link tag="div" to="/my" slot="right" class="header-right-text ac-o">确定</router-link>
    </app-header>
    <div class="page-content fx-1">
        <section class="mine-data">
            <div class="invite-bg tc">
                <img src="../../assets/images/my/my_enter_invitecode.png" alt="输入邀请码">
            </div>
            <div class="mine-bar">
                <div class="invite-bar tc">
                    <a href="javascript:;" class="invite-btn">
                        <input type="text" placeholder="请输入推荐人邀请码" class="invite-btn-input">
                    </a>
                </div>
            </div>
        </section>
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
                title: '输入邀请码'
            }
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
@import "../../assets/css/common.less";
.page-content{
    background-color: #fff; 
}
.mine-data {
    position: relative;
    top: 0.88rem;
}
.invite-bg {
    margin: 0.9rem 0 1rem;
}
.mine-bar {
    background-color: #fff;
    margin-top: .2rem;
}
.invite-btn {
    display: block;
    width: 5.29rem;
    margin: 0 auto;
}
.invite-btn .invite-btn-input {
    background-color: #f3f5f9;
    height: .9rem;
    line-height: .9rem;
    width: 100%;
    text-align: center;
    color: #646f7f;
    border-radius: 0.06rem;
    font-size: .28rem;
}
</style>
