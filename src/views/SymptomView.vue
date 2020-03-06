<template> 
<div class="page-full component-symptom fx-column"> 
    <app-header :title="appHeader.title" :back-url="appHeader.backUrl">
        <div slot="right">
            <i class="icon-bianji iconfont ac-o" @click="setShow"></i>
        </div>
    </app-header>
    <person-component v-on:set-person="setPerson" v-on:close-person="closePerson" v-on:add-info="addInfo" v-on:del-person="delPerson" :info-show="infoShow" :items="items" :show="show"></person-component>
    <info-component :info-show="infoShow" v-on:add-person="addPerson" v-on:cancel-add="cancelAdd"></info-component>
    <div class="page-content fx-1">
        <div id="symptom-wraper">
            <ul id="nav">
                <li @click="setStatePerson('body')" class="nav-item" :class="{'cur': statePerson == 'body'}"><i class="icon icon-1"></i>全身</li>
                <li @click="setStatePerson('skin')" class="nav-item" :class="{'cur': statePerson == 'skin'}"><i class="icon icon-2"></i>皮肤</li>
                <li @click="setStatePerson('head')" class="nav-item" :class="{'cur': statePerson == 'head'}"><i class="icon icon-3"></i>头部</li>
                <li @click="setStatePerson('chest')" class="nav-item" :class="{'cur': statePerson == 'chest'}"><i class="icon icon-4"></i>胸部</li>
                <li @click="setStatePerson('stomach')" class="nav-item" :class="{'cur': statePerson == 'stomach'}"><i class="icon icon-5"></i>腹部</li>
                <li @click="setStatePerson('pelvis')" class="nav-item" :class="{'cur': statePerson == 'pelvis'}"><i class="icon icon-6"></i>骨盆</li>
                <li @click="setStatePerson('back')" class="nav-item" :class="{'cur': statePerson == 'back'}"><i class="icon icon-7"></i>背部</li>
                <li @click="setStatePerson('arm')" class="nav-item" :class="{'cur': statePerson == 'arm'}"><i class="icon icon-8"></i>手臂</li>
                <li @click="setStatePerson('leg')" class="nav-item" :class="{'cur': statePerson == 'leg'}"><i class="icon icon-9"></i>腿部</li>
            </ul>
            <div id="figure">
                <div class="figure-box">
                    <div class="figure-img-box">
                        <keep-alive>
                            <!-- <transition name="fade" mode="out-in"> -->
                                <component :is="picked" :statePerson='statePerson' v-on:set-state="setStatePerson"></component>
                            <!-- </transition> -->
                        </keep-alive>
                    </div>
                    <div @click="setSides" class="figure-sides" :class="{'sides-icon': !sides}"><i></i></div>
                </div>
            </div>
        </div>
        <div v-if="popShow" class="ban-pop"></div>
    </div>
</div>
</template>

<script>

import IScroll from 'iscroll'
import Utils from '../utils'
import { mapGetters, mapActions } from 'vuex'
import appHeader from '../components/app-header.vue'
import personComponent from '../components/symptom/person-component.vue'
import infoComponent from '../components/symptom/info-component.vue'
import manFrontComponent from '../components/symptom/man-front-component.vue'
import womanFrontComponent from '../components/symptom/woman-front-component.vue'
import manBackComponent from '../components/symptom/man-back-component.vue'
import womanBackComponent from '../components/symptom/woman-back-component.vue'

var personIscroll = null;
var personIscrollArr = [];

export default {
    components: {
        'app-header': appHeader,
        'person-component': personComponent,
        'info-component': infoComponent,
        'man-front': manFrontComponent,
        'woman-front': womanFrontComponent,
        'man-back': manBackComponent,
        'woman-back': womanBackComponent
    },
    computed: mapGetters({
        items: 'symptomPersons'
    }),
    data () {
        return {
            appHeader: {
                title: '症状检查',
                backUrl: 'home'
            },
            statePerson: 0, // 部位
            show: 0, // 显示选择人物
            infoShow: 0, // 添加人物
            popShow: 0, // 禁止触屏
            sides: 1, // 面 1：正面、0：反面 
            picked: '', // 动态组件
            triggerResizeRender: true,
            bodyId: {
                body: 66,
                skin: 68,
                head: 2,
                chest: 14,
                stomach: 20,
                pelvis: 32,
                back: 26,
                arm: 40,
                leg: 52
            }
        }
    },
    methods: {
        changeFigure: function(){
            const curItem = this.items.filter(function(el) {
                return el.selected == true;
            });
            this.curItem = curItem.length > 0 ? curItem[0] : { gender: 1 };
            if (this.curItem.gender == 1) {
                this.picked = this.sides ? 'man-front' : 'man-back';
            } else {
                this.picked = this.sides ? 'woman-front' : 'woman-back';
            }    
        },
        resetIScroll: function(){
            const _l = this.items.length;
            const l = _l > 3 ? 3 : _l;
            const h = l * 0.9;
            document.querySelector('.person-box-wrapper').style.height = h + 'rem';
            setTimeout(() => {
                if(personIscroll){
                    personIscroll.destroy();
                }
                personIscroll = new IScroll('.person-box-wrapper', {
                    scrollbars: true,
                    shrinkScrollbars: 'scale',
                    fadeScrollbars: true,
                    mouseWheel: false,
                    deceleration: 0.001,
                    click: Utils.iScrollClick()
                });
                const itemDom = document.querySelectorAll('.person-item');
                if(personIscrollArr.length > 0){
                    for (let i = 0, l = personIscrollArr.length; i < l; i++) {
                        personIscrollArr[i].destroy();
                    }
                }
                personIscrollArr = [];
                for (let i = 0, l = itemDom.length; i < l; i++) {
                    personIscrollArr[i] = new IScroll(itemDom[i], {
                        scrollX: true,
                        scrollY: false,
                        momentum: false,
                        snap: true,
                        snapSpeed: 300,
                        snapThreshold: 0.2,
                        keyBindings: false,
                        click: Utils.iScrollClick()
                    });
                }
            }, 30);
        },
        setStatePerson: function(statePerson) {
            this.statePerson = statePerson;
        },
        setSides: function() {
            this.sides = this.sides ? 0 : 1;
        },
        setShow: function() {
            this.show = this.show ? 0 : 1;
        },
        setPerson: function(i) {
            this.$store.dispatch('set_persons', i);
            this.changeFigure();
            this.show = 0;
        },
        addPerson: function(item) {
            this.$store.dispatch('add_persons', item);
            this.infoShow = 0;
            this.changeFigure();
        },
        delPerson: function(index) {
            this.$store.dispatch('del_persons', index);
            this.show = 0;
            this.changeFigure();
        },
        addInfo: function(){
            this.infoShow = 1;
            this.show = 0;
        },
        closePerson: function(){
            this.show = 0;
        },
        cancelAdd: function(){
            this.infoShow = !this.infoShow;
        },
    },
    watch: {
        statePerson: function(val) {
            if (val) {
                if (this.curItem.age === undefined) {
                    this.show = 1;
                    this.statePerson = '';
                }else{
                    this.popShow = 1;
                    setTimeout(() => {
                        this.popShow = 0;
                        this.$router.push('symptom-select');
                        this.statePerson = '';
                    }, 600);
                }
            }
        },
        show: function(val, oldVal) {
            if (val) {
                this.resetIScroll();
            }else{
                if(personIscroll){
                    personIscroll.scrollTo(0, 0);
                    personIscroll.destroy();
                    personIscroll = null;
                }
                personIscrollArr.forEach(el => {
                    el.scrollTo(0, 0);
                    el.destroy();
                })
            }
        },
        sides: function(val, oldVal) {
            if (val != oldVal) {
                if (val === 1) {
                    this.picked = this.curItem.gender ? 'man-front' : 'woman-front';
                } else {
                    this.picked = this.curItem.gender ? 'man-back' : 'woman-back';
                }
            }
        }
    },
    activated () {
        this.triggerResizeRender = true;
    },
    deactivated () {
        this.triggerResizeRender = false;
    },
    created () {
        const self = this;
        self.$store.dispatch('get_persons');
        self.changeFigure();
        const resizeRender = function() {
            if(self.triggerResizeRender){
                self.statePerson = '';
                document.querySelector('.figure-img-box').style.display = 'inline'
                setTimeout(function() {
                    document.querySelector('.figure-img-box').style.display = 'inline-block'
                }, 30);
            }
        };
        if ("onorientationchange" in window) {
            window.addEventListener('orientationchange', resizeRender, false)
        } else {
            window.addEventListener('resize', resizeRender, false);
        }
    }
}
</script>

<style lang="less">
@import "../assets/css/common.less";
    .component-symptom {
        & .page-content{
            height: 100%;
            height: calc(~"100% - 0.88rem");
        }
    }
    #symptom-wraper {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    
    #nav {
        display: flex;
        flex-direction: column;
        width: 1.8rem;
        min-height: 7.2rem;
        background-color: #f5f6f7;
    }
    
    #figure {
        flex: 1;
    }
    
    .nav-item {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        color: #7b8ea9;
        font-size: 0.3rem;
        cursor: pointer;
    }
    
    .nav-item.cur {
        color: #00a2ff;
        background-color: #fff;
    }
    
    #nav .nav-item:first-child {
        border-top: 1px solid #e2e2e2;
    }
    
    .icon {
        margin-right: 0.2rem;
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        vertical-align: middle;
        background-image: url(../assets/images/symptom/i-icon.png);
        background-repeat: no-repeat;
        background-size: auto 1.2rem;
    }
    
    #nav .icon-1 {
        background-position: 0 0;
    }
    
    #nav .icon-2 {
        background-position: -0.6rem 0;
    }
    
    #nav .icon-3 {
        background-position: -1.2rem 0;
    }
    
    #nav .icon-4 {
        background-position: -1.8rem 0;
    }
    
    #nav .icon-5 {
        background-position: -2.4rem 0;
    }
    
    #nav .icon-6 {
        background-position: -3rem 0;
    }
    
    #nav .icon-7 {
        background-position: -3.6rem 0;
    }
    
    #nav .icon-8 {
        background-position: -4.2rem 0;
    }
    
    #nav .icon-9 {
        background-position: -4.8rem 0;
    }
    
    #nav .cur .icon-1 {
        background-position: 0 -0.6rem;
    }
    
    #nav .cur .icon-2 {
        background-position: -0.6rem -0.6rem;
    }
    
    #nav .cur .icon-3 {
        background-position: -1.2rem -0.6rem;
    }
    
    #nav .cur .icon-4 {
        background-position: -1.8rem -0.6rem;
    }
    
    #nav .cur .icon-5 {
        background-position: -2.4rem -0.6rem;
    }
    
    #nav .cur .icon-6 {
        background-position: -3rem -0.6rem;
    }
    
    #nav .cur .icon-7 {
        background-position: -3.6rem -0.6rem;
    }
    
    #nav .cur .icon-8 {
        background-position: -4.2rem -0.6rem;
    }
    
    #nav .cur .icon-9 {
        background-position: -4.8rem -0.6rem;
    }
    
    #figure {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    
    .figure-img {
        height: 100%;
        width: auto;
    }
    
    .figure-sides i,
    .figure-person i,
    .triangle-icon,
    .person-item-icon,
    .person-add-icon {
        background-image: url(../assets/images/symptom/condition-icon.png);
        background-repeat: no-repeat;
        background-size: auto 0.88rem;
    }
    
    .triangle-icon{
        position: absolute;
        display: block;
        width: 0.24rem;
        height: 0.15rem;
        right: 0.24rem;
        top: -0.15rem;
        background-position: -1.56rem -.36rem;
    }

    .figure-box {
        font-size: 0;
        position: relative;
        height: 100%;
        overflow: hidden;
        text-align: center;
    }
    
    .figure-img-box {
        position: relative;
        display: inline-block;
        height: 100%;
    }
    
    .figure-cur {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        animation-name: figureAnt;
        animation-timing-function: linear;
        animation-duration: 0.3s;
        animation-iteration-count: 2;
        animation-fill-mode: both;
    }
    
    @keyframes figureAnt {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    .place {
        position: absolute;
        z-index: 2;
    }
    
    .place-head {
        left: 37.82608695652174%;
        top: 2.57936507936508%;
        width: 22.60869565217391%;
        height: 16.07142857142857%;
    }
    
    .woman-place-head {
        left: 39.56521739130435%;
        top: 5.35714285714286%;
        width: 21.08695652173913%;
        height: 14.68253968253968%;
    }
    
    .place-back {
        left: 28.26086956521739%;
        top: 16.86507936507937%;
        width: 41.30434782608696%;
        height: 30.25793650793651%;
    }
    
    .woman-place-back {
        left: 33.69565217391304%;
        top: 19.44444444444444%;
        width: 33.69565217391304%;
        height: 25.3968253968254%;
    }
    
    .place-pelvis {
        left: 28.69565217391304%;
        top: 43.84920634920635%;
        width: 41.30434782608696%;
        height: 12.1031746031746%;
    }
    
    .woman-place-pelvis {
        left: 31.73913043478261%;
        top: 43.9484126984127%;
        width: 37.82608695652174%;
        height: 8.43253968253968%;
    }
    
    .place-chest {
        left: 30%;
        top: 17.26190476190476%;
        width: 38.47826086956522%;
        height: 15.6%;
    }
    
    .woman-place-chest {
        left: 33.47826086956522%;
        top: 19.84126984126984%;
        width: 34.34782608695652%;
        height: 15.47619047619048%;
    }
    
    .place-stomach {
        left: 30%;
        top: 32.63888888888889%;
        width: 38.47826086956522%;
        height: 14.18650793650794%;
    }
    
    .woman-place-stomach {
        left: 33.47826086956522%;
        top: 34.42460317460317%;
        width: 34.34782608695652%;
        height: 10.41666666666667%;
    }
    
    .place-leg {
        left: 29.1304347826087%;
        top: 50.49603174603175%;
        width: 38.91213389121339%;
        height: 47.42063492063492%;
    }
    
    .woman-place-leg {
        left: 31.30434782608696%;
        top: 47.71825396825397%;
        width: 38.26086956521739%;
        height: 46.82539682539683%;
    }
    
    .place-arm-left {
        left: 5.65217391304348%;
        top: 19.1468253968254%;
        width: 24.78260869565217%;
        height: 39.68253968253968%;
    }
    
    .woman-place-arm-left {
        left: 5.43478260869565%;
        top: 20.13888888888889%;
        width: 29.56521739130435%;
        height: 35.71428571428571%;
    }
    
    .place-arm-right {
        left: 68.69565217391304%;
        top: 19.1468253968254%;
        width: 25.65217391304348%;
        height: 39.68253968253968%;
    }
    
    .woman-place-arm-right {
        left: 65.21739130434783%;
        top: 20.13888888888889%;
        width: 30.21739130434783%;
        height: 35.71428571428571%;
    }
    
    .figure-sides {
        position: absolute;
        bottom: 0;
        right: 0;
        padding-top: 0.3rem;
        width: 1.56rem;
        height: 1rem;
        text-align: center;
    }
    
    .figure-person {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.3rem 0.3rem 0.3rem 0;
        width: 1.26rem;
        height: 1.04rem;
        text-align: right;
    }
    
    .figure-person i {
        display: inline-block;
        width: 0.48rem;
        height: 0.44rem;
        background-position: -1.34rem -0.4rem;
    }
    
    .figure-sides i {
        display: inline-block;
        width: 1.18rem;
        height: 0.4rem;
    }
    .figure-sides.sides-icon i {
        background-position: 0 -0.44rem;
    }
    
    .figure-item {
        height: 100%;
    }
    
    .pop,
    .info-pop,
    .ban-pop {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 9;
    }
    
    .ban-pop {
        z-index: 11;
        background-color: rgba(0, 0, 0, 0);
    }
    
    .person-box {
        position: absolute;
        top: 1.12rem;
        right: 0.1rem;
        width: 4rem;
        max-height: 3.6rem;
        border-radius: 0.1rem;
        background-color: #fff;
        z-index: 10;
    }
    
    .person-item,
    .person-add {
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        color: #3d4550;
    }
    
    .person-add {
        display: block;
        color: #c5c7ce;
        font-size: 0.26rem;
        text-align: center;
    }
    
    .person-add-icon {
        margin: -0.04rem 0.2rem 0 0;
        display: inline-block;
        width: 0.36rem;
        height: 0.36rem;
        vertical-align: middle;
        background-position: -1.54rem 0;
    }
    
    .person-item-r {
        float: right;
        color: #3a3a48;
        font-size: 0.2rem;
    }
    
    .set-gender{
        height: .56rem;
        width: 3.4rem;
    }

    .gender-woman, .gender-man{
        width: 50%;
        padding: 0 0.4rem;
    }

    .person-item-icon {
        margin: -0.06rem 0.14rem 0 0;
        vertical-align: middle;
        display: inline-block;
        width: 0.32rem;
        height: 0.32rem;
        background-position: -1.2rem 0;
    }
    
    .cur .person-item-icon {
        background-position: -1.2rem -0.34rem;
    }
    
    .person-item {
        position: relative;
        overflow: hidden;
        width: 4rem;
        height: 0.9rem;
        border-bottom: 1px solid #fafafa;
    }
    
    .person-item-scroller,
    .person-box-scroller {
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 5.4rem;
        height: 0.9rem;
        transform: translateZ(0);
        -webkit-touch-callout: none;
        user-select: none;
        text-size-adjust: none;
        overflow: hidden;
    }
    
    .person-box-scroller {
        width: 5.4rem;
        height: auto;
    }
    
    .person-box-wrapper {
        position: relative;
        max-height: 2.7rem;
        overflow: hidden;
    }
    
    .person-item-left {
        padding: 0 0.2rem;
        width: 4rem;
        height: 0.9rem;
        float: left;
    }
    
    .person-item-del {
        width: 1.4rem;
        height: 0.9rem;
        float: left;
        display: block;
        text-align: center;
        color: #c5c7ce;
        & .iconfont {
            font-size: .5rem;
        }
    }
    
    .person-box .person-item:first-child .person-item-del {
        border-top-right-radius: 0.1rem;
    }
    
    .iScrollIndicator {
        background: rgba(0, 0, 0, 0.3) !important;
    }

    .component-symptom{
        .info-box {
            overflow: hidden;
            margin: 1.6rem auto 0 auto;
            width: 80%;
            man-width: 7rem;
            border-radius: 0.2rem;
            background-color: #fff;
            font-size: 0.32rem;
            z-index: 10;
        }
        .info-tip {
            padding: 0.24rem 0 0.2rem 0;
            font-size: 0.24rem;
            line-height: 1.25;
            color: #b9c3c4;
            font-weight: normal;
            text-align: center;
        }
        
        .info-text {
            margin: 0 auto;
            width: 4.6rem;
        }
        
        .info-text p {
            margin-bottom: 0.3rem;
            height: 0.56rem;
            line-height: 0.56rem;
        }
        
        .info-text input {
            height: 0.56rem;
            width: 3.4rem;
            padding: 0.06rem 0.1rem;
            font-size: 0.24rem;
            line-height: 1.5;
            border: 1px solid #9f9f9f;
            border-radius: 0.1rem;
        }
        
        .info-text .info-span {
            float: left;
            display: block;
            color: #3a3a48;
            vertical-align: middle;
        }
        
        .info-btn {
            float: left;
            width: 50%;
            height: 0.88rem;
            line-height: 0.88rem;
            color: #fff;
            text-align: center;
        }
        
        .info-btn-box .info-btn:first-child {
            border-bottom-left-radius: 0.1rem;
            background-color: #7898a1;
        }
        
        .info-btn-box .info-btn:last-child {
            border-bottom-right-radius: 0.1rem;
            background-color: #39b7ff;
        }
    }
    
    .component-symptom .error-pop {
        position: relative;
        top: -3rem;
    }

    .expand-enter-active, .expand-leave-active {
        transition: all .3s ease;
    }
    
    .expand-enter,
    .expand-leave {
        height: 0;
        opacity: 0;
    }

</style>
