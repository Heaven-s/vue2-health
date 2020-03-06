<template> 
<div class="page-full component-patientadd fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right" @click="addPatient" class="header-right-text ac-o">保存</div>
    </app-header>
    <div class="page-content fx-1">
        <ul class="patientadd-box">
            <li class="patientadd-item fx-c">
                <p>姓名</p>
                <div class="patientadd-item-text fx-jr fx-1">
                    <input maxlength="20" type="text" v-model="patient.name"  placeholder="请输入姓名">
                </div>
            </li>
            <li class="patientadd-item fx-c">
                <p>性别</p>
                <div class="patientadd-item-text patientadd-item-gender fx-jr fx-1">
                    <span class="gender-man" @click="patient.gender = !patient.gender" :class="{'cur': patient.gender}"><i class="person-item-icon"></i>男</span>
                    <span class="gender-woman" @click="patient.gender = !patient.gender" :class="{'cur': !patient.gender}"><i class="person-item-icon"></i>女</span>
                </div>
            </li>
            <li class="patientadd-item fx-c">
                <p>手机</p>
                <div class="patientadd-item-text fx-jr fx-1">
                    <input maxlength="11" type="tel" v-model="patient.phone" number placeholder="请输入手机号">
                </div>
            </li>
            <li class="patientadd-item fx-c">
                <p>身份证</p>
                <div class="patientadd-item-text fx-jr fx-1">
                    <input maxlength="18" type="text" v-model="patient.number" placeholder="如需获取免费保险请填写">
                </div>
            </li>
        </ul>
    </div>
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
            errorShow: false,
            message: '',
            patient: {
                name: '',
                gender: 1,
                phone: null,
                number: null,
            },
            appHeader: {
                title: '添加就诊人'
            },
        }
    },
    methods: {
        addPatient: function() {
            if(this.patient.name == ''){
                this.message = '请输入姓名';
                this.errorShow = true;
                this.patient.name = '';
                return;
            }
            if (!/^1\d{10}$/.test(this.patient.phone)) {
                this.message = '请输入有效的手机号';
                this.errorShow = true;
                this.patient.phone = '';
                return;
            }
            if(!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(this.patient.number)){
                this.message = '请输入有效的身份证号码';
                this.errorShow = true;
                this.patient.number = '';
                return;
            }
            this.$store.dispatch('add_patient', this.patient);
            if (window.history.length > 1) {
                this.$router.back()
            }else{
                this.$router.push({ name: 'home'})
            }
        },
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
    mounted () {
        
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";

.page-content{
    background-color: #f2f3f5;
}
.patientadd-box{
    padding: .2rem 0 .4rem 0;
}
.patientadd-item{
    height: .98rem;
    padding: .2rem;
    font-size: .3rem;
    color: #3d4550;
    border-top: 1px solid #e6ecf1;
    background-color: #fff;
}
.patientadd-item-text{
    padding-left: .2rem;
}
.patientadd-item-text input{
    width: 100%;
    line-height: 1.5;
    font-size: .28rem;
    color: #c5c7ce;
    text-align: right;
}
.patientadd-item-gender .gender-woman, .patientadd-item-gender .gender-man{
    padding: 0 .2rem;
    width: auto;
    color: #9fa1a9;
}
</style>
