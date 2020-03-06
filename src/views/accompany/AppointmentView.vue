<template> 
<div class="page-full component-appointment fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl"></app-header>
    <info-pop :show="errorShow" :message="message"></info-pop>
    <div class="page-content fx-1">
        <ul class="list-group">
            <router-link tag="li" to="/hospital" class="list-item fx-ac ac"><strong>医院</strong><div class="fx-1 fx-jr"><div class="fx-column"><h3>{{selectedHospital.name}}</h3>{{selectedHospital.address || '选择医院'}}</div></div><i class="iconfont icon-jinru"></i></router-link>
            <li @click="showPicker" class="list-item fx-ac ac"><strong>时间</strong><div class="fx-1 fx-jr">{{time || '选择时间'}}</div><i class="iconfont icon-jinru"></i></li>
            <router-link tag="li" to="/patient" class="list-item fx-ac ac"><strong>就诊人</strong><div class="fx-1 fx-jr">{{patient.name || '选择就诊人'}}</div><i class="iconfont icon-jinru"></i></router-link>
        </ul>
        <ul class="list-group">
            <li class="list-item fx-ac ac"><strong>优惠劵</strong><div class="fx-1 fx-jr">选择优惠劵</div><i class="iconfont icon-jinru"></i></li>
        </ul>
        <ul class="list-group">
            <li class="list-item fx-ac">
                <div class="list-service fx-1">保险服务<span>0元</span>
                    <p>免费送您一份价值15000元平安意外险<i class="iconfont icon-wenhao"></i></p>
                </div>
                <div class="switch" @click="hasInsurance = !hasInsurance" :class="{'active': hasInsurance}"><div class="switch-handle"></div></div>
            </li>
            <transition name="downup">
            <li v-show="hasInsurance" class="list-item-more list-item-insurance">
                <div class="list-item fx-ac"><strong>雲溪谷</strong></div>
                <div class="list-item fx-ac"><input class="fx-1" maxlength="18" type="text" placeholder="请输入身份证号码"></div>
                <div class="list-item list-item-tip tip-red">请填写真实就诊人信息，信息有误会导致理赔失败</div>
            </li>    
            </transition>
        </ul>
        <ul class="list-group">
            <li class="list-item fx-ac">
                <div class="list-service fx-1">接送服务<span>100元</span>
                    <p>护士上门接着，不包括携就诊人往返医院的交通费</p>
                </div>
                <div class="switch" @click="pickupFn" :class="{'active': hasPickup}"><div class="switch-handle"></div></div>
            </li>
            <transition name="downup">
            <li v-show="hasPickup" class="list-item-more list-item-pickup">
                <div class="list-item fx-ac"><input class="fx-1" maxlength="18" type="text" placeholder="请输入接送地址"></div>
                <div class="list-item list-item-tip">温馨提示：离预约时间2小时内取消订单退款50%，2小时外全退</div>
            </li>
            </transition>
        </ul>
    </div>
    <div class="appointment-price">
        共计：<span><i>￥</i>{{money}}</span>
    </div>
    <div @click="toPage" class="app-bottom fx-c ac-o">确认订单</div>
</div>
</template>

<script>

import Utils from '../../utils'
import MuiPicker from '../../utils/picker'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../../components/app-header.vue'
import infoPop from '../../components/info-pop.vue'

export default {
    components: { appHeader, infoPop },
    data () {
        return {
            errorShow: false,
            message: '',
            appHeader: {
                title: '预约陪诊',
                backUrl: 'accompany'
            },
            time: '',
            hasInsurance: false,
            hasPickup: false
        }
    },
    computed: {
        ...mapGetters([
          'patient',
          'money',
          'selectedHospital'
        ])
    },
    methods: {
        dateFormat (date){
            const da = new Date(date);
            const month =  da.getMonth() + 1;
            const day =  da.getDate();
            const monthText  = month > 9 ? month + '月' : '0' + month + '月';
            const dayText  = day > 9 ? day + '日' : '0' + day + '日';
            const weekText = '周' + '日一二三四五六'.charAt(da.getDay());
            return monthText + dayText + ' ' + weekText;
        },
        getHours (hours){
            var hoursArray = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
            var minutesArray = ['00', '10', '20', '30', '40', '50'];
            var arr = [];
            if(hours){
                hoursArray = hoursArray.filter(e => parseFloat(e) >= hours);
            }
            hoursArray.forEach(item => {
                let hoursObj = {};
                hoursObj.text = item;
                hoursObj.value = item;
                hoursObj.children = [];
                if(item == '19'){
                    minutesArray = ['00'];
                }
                minutesArray.forEach(value => {
                    let minutesObj = {};
                    minutesObj.text = value;
                    minutesObj.value = value;
                    hoursObj.children.push(minutesObj);
                });
                arr.push(hoursObj);
            });
            return arr;
        },
        toPage: function(){
            if(this.selectedHospital.name == undefined){
                this.message = '请选择医院';
                this.errorShow = true;
                return;
            }
            if(this.time == ''){
                this.message = '请选择预约时间';
                this.errorShow = true;
                return;
            }
            if(this.patient.name == undefined){
                this.message = '请选择就诊人';
                this.errorShow = true;
                return;
            }
            this.$router.push({ path: 'pay'});
        },
        pickupFn: function(){
            this.hasPickup = !this.hasPickup;
            if (this.hasPickup){
                this.$store.dispatch('set_money', this.money + 100);
            }else{
                this.$store.dispatch('set_money', this.money - 100);
            }
        },
        showPicker: function(){
            const nowHours = new Date().getHours() + 2;
            const ms = 86400000;
            var nowDate = Date.now();
            var dateArray = [];
            var curDate = 0;
            var name = '';
            var obj = {};
            if(nowHours > 19){
                nowDate += ms;
            }
            for(var i = 0; i < 14; i++){
                curDate = nowDate + ms * i;
                if(i == 0 && nowHours <= 19){
                    name = '今天';
                    if(nowHours > 7){
                        obj = { text: name, value: new Date(curDate), children: this.getHours(nowHours)};
                    }else{
                        obj = { text: name, value: new Date(curDate), children: this.getHours()};
                    }
                }else{
                    name = this.dateFormat(curDate);
                    obj = { text: name, value: new Date(curDate), children: this.getHours()};
                }
                dateArray.push(obj);
            }
            var picker = new mui.PopPicker({
                    title: '请选择时间',
                    layer: 3
                });
            picker.setData(dateArray);
            picker.pickers[0].setSelectedIndex(0);
            picker.pickers[1].setSelectedIndex(0);
            picker.pickers[2].setSelectedIndex(0);
            picker.show(SelectedItem => {
                const day = Utils.dateFormat('yyyy-MM-dd' ,SelectedItem[0]['value']);
                const hour = SelectedItem[1]['value'];
                const minute = SelectedItem[2]['value'];
                this.time = day + ' ' + hour + ':' + minute + ':00';
            })
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
    created () {}
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";

.page-content{
    padding-bottom: .4rem;
    background-color: #f1f4f4;
}
.list-item-more{
    overflow: hidden;
    border-top: 1px solid #e6edf2;
}
.list-item-insurance{
    height: 2.41rem;
}
.list-item-pickup{
    height: 1.87rem;
    & .list-item-tip{
        height: 0.89rem;
    }
}
.list-group{
    margin-top: .2rem;
    background-color: #fff;
}
.list-item{
    padding: 0 .2rem;
    height: .98rem;
    font-size: .24rem;
    color: #9fa1a9;
    border-top: 1px solid #e6edf2;
    &:first-child{
        border-top: 0;
    }
    & h3{
        margin-bottom: .1rem;
    }
    & strong, & h3{
        font-weight: normal;
        font-size: .3rem;
        color: #3d4550;
    }
    & input{
        height: .4rem;
        line-height: .4rem;
        font-size: .3rem;
        color: #3d4550;
    }
    & .icon-jinru{
        margin-left: .16rem;
        color: #d6ddea;
    }
}
.list-item-tip{
    height: auto;
    line-height: 2;
    font-size: .22rem;
    color: #9fa1a8;
    background-color: #f1f4f4;
    &.tip-red{
        color: #ff6476;
    }
}

.list-service{
    font-size: .3rem;
    color: #7b8ea9;
    & p{
        margin-top: .1rem;
        font-size: .2rem;
        color: #9fa1a9;
    }
    & span{
        margin-left: .1rem;
        color: #ff6476;
    }
    & .iconfont{
        margin-left: .1rem;
        font-size: .22rem;
        color: #c5c7ce;
    }
}

.appointment-price{
    padding: 0 .2rem;
    height: 1rem;
    line-height: 1rem;
    font-size: .28rem;
    color: #646f7f;
    text-align: right;
    background-color: #f1f4f4;
    & span{
        color: #ff6476;
        font-size: .6rem;
        & i{
            font-size: .34rem;
        }
    }
}

.switch{
    position: relative;
    display: block;
    width: 1rem;
    height: .6rem;
    transition-timing-function: ease-in-out;
    transition-duration: .2s;
    transition-property: background-color,border;
    border: .02rem solid #ddd;
    border-radius: .38rem;
    background-clip: padding-box;
    &:active{
        & .switch-handle{
            width: .76rem;
        }
    }
    &.active {
        border: .02rem solid #39b8ff;
        background-color: #39b8ff;
        & .switch-handle{
            transition-duration: 0.2s;
            transform: translate(.4rem, 0);
        }
        &:active{
            & .switch-handle{
                left: -0.22rem;
            }
        }
    }
}
.switch-handle{
    position: absolute;
    z-index: 1;
    top: 0.02rem;
    left: 0.02rem;
    width: .52rem;
    height: .52rem;
    transition: .2s ease-in-out;
    transition-property: transform,width,left;
    border-radius: .48rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0 .02rem .05rem rgba(0,0,0,.3);
}

</style>
