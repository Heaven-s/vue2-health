<template>
<div class="page-full component-comment fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right" @click="submitFn" class="header-right-text ac-o">提交</div>
    </app-header>
    <div class="page-content fx-1">
        <div class="comment-content">
            <textarea v-model="val"></textarea>
            <p>还能输入{{sum}}字</p>
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
                title: '我的评论'
            },
            SUM: 200,
            sum: 200,
            val: ''
        }
    },
    methods: {
        submitFn: function(){
            if (window.history.length > 1) {
                this.$router.back()
            }else{
                this.$router.push({ name: 'home'})
            }
        }
    },
    watch: {
        val: function (val, oldVal) {
            if(val.length > this.SUM){
                this.val = val.substr(0, this.SUM);
                this.sum = this.SUM
            }else{
                this.sum = this.SUM - val.length;
            }
        },
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    background-color: #f2f3f5;
}
.comment-content{
    padding: .2rem;
    font-size: .22rem;
    color: #9fa1a9;
    background-color: #fff;
    & textarea{
        width: 100%;
        height: 3rem;
        line-height: 1.5;
        font-size: .26rem;
        color: #65707f;
    }
    & p{
        margin-top: .2rem;
        text-align: right;
    }
}
</style>
