<template>
<div class="page-full component-news-detail fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right">
            <i class="icon-shoucang iconfont ac-o"></i>
            <i class="icon-fenxiang iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <div class="app-content firstaid-content">
            <div class="content detail-cont">
                <div class="detail-head detail-bg border-b">
                    <h2 class="detail-head-title">{{item.c_name}}</h2>
                    <p class="detail-head-small">不同情况的对应方法和步骤：</p>
                    <span @click="hasPop = !hasPop" class="warn-block fx-c">警示!</span>
                </div>
                <div class="detail-info">
                    <!-- 多种情况 -->
                    <!-- 情况1 -->
                    <div v-if="stepArr" v-for="(value, index) in stepArr" class="border-b info-group">
                        <div v-if="value.tit" class="info-h"><span class="fillet-block"></span>{{value.tit}}</div>
                        <div v-if="value.desc" class="info-desc">{{value.desc}}</div>
                        <!-- 分点内容 -->
                        <div v-if="value.arrs && value.arrs.length > 0" v-for="(value1, index1) in value.arrs" class="info-sub">
                            <p class="info-sub-h info-tag"><span class="round-block">{{index1 + 1}}</span>{{value1.tit}}</p>
                            <ol v-if="value1.arrs && value1.arrs.length > 0" class="info-sub-list disc-list">
                                <li v-for="(value2, index2) in value1.arrs">{{value2}}</li>
                            </ol>
                        </div>
                    </div>
                    <!-- 急救贴士 -->
                    <div v-if="doctorArr" class="tips info-group info-group-doctor">
                        <p class="info-sub-h">哪些情况下该住院：</p>
                        <div v-for="(value, index) in doctorArr">
                            <p v-if="value.tit" class="info-sub-tips">{{value.tit}}</p>
                            <ol v-if="value.arrs && value.arrs.length > 0" class="info-sub-list disc-list">
                                <li v-for="(value1, index1) in value.arrs">{{value1}}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="hasPop" class="pop-cover pop-bg">
                <div class="pop-cont">
                    <div class="pop-h">出现以下情况&nbsp;请立即就医</div>
                    <div class="pop-b">
                        <div class="pop-b-box clearfix" v-for="(value, index) in makeArr">
                            <p v-if="value.tit" class="pop-b-tit">{{value.tit}}</p>
                            <ol v-if="value.arrs && value.arrs.length > 0" class="pop-list disc-list clearfix">
                                <li v-for="(value1, index1) in value.arrs" class="pop-li">{{value1}}</li>
                            </ol>
                        </div>
                    </div>
                    <div class="pop-f fx">
                        <a href="tel:120" class="pop-btn pop-btn-l bg fx-1 fx-c"><i class="iconfont icon-dianhua"></i>120</a>
                        <a @click="hasPop = false" href="javascript:;" class="pop-btn pop-btn-r fx-1 fx-c"><i class="iconfont icon-gou"></i></a>
                    </div>
                </div>
            </div>
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
                title: '急救常识'
            },
            item: {"id":"198","e_name":"Vomiting (Children)","c_name":"呕吐（儿童）急救常识","makecall":"因吞食有毒东西导致的儿童呕吐需及时就医。","do_step1":"婴儿吐奶时间^婴儿吐奶@在婴儿开始吃固体食物之前，吐奶是很常见的。这和呕吐不同。|吐奶经常发生在婴儿打嗝时。#防止吐奶@婴儿以直立的姿势喂奶。|少量多次喂奶，每3到5分钟让宝宝打嗝一次。|避免宝宝打嗝时将其胃压在你肩膀上。|在喂食中或喂食后避免挪动婴儿。|喂食后将宝宝直立45到60分钟。&&治疗儿童呕吐*呕吐比吐奶更严重更痛苦。呕吐会导致孩子失液，所以注意脱水是很重要的。^治疗呕吐症状@给予少量的液体。在孩子呕吐20到30分钟后再给液体。如果孩子已经吐了两次或更多，打电话联系医生。|如果您的孩子是母乳喂养，继续哺乳您的宝宝。|医生可能要你给宝宝少量的口服电解质溶液。与医生一起核查数量。|每15分钟给幼儿约一汤匙的口服电解质溶液，冰土豆汁，稀释果汁，淡姜汁或清肉汤。如果你的孩子继续呕吐，请咨询医生。#观察脱水迹象@如果你看到这些迹象的话，请打电话给你的医生：干口，没有眼泪，尿布干燥，小便颜色较平时加深，在头顶囟门凹陷。#呕吐停止3～4小时后@给孩子补充大量的液体。#停止呕吐8小时后：@像平时一样母乳喂养婴儿，逐渐加至正常量。|规律性的喂食幼儿温和食物，避免辛辣和油炸食物。#停止呕吐24小时后@ 恢复孩子的正常饮食","do_step2":"治疗儿童呕吐<br>呕吐比吐奶更严重更痛苦。呕吐会导致孩子失液，所以注意脱水是很重要的。\r<br> 1. 治疗呕吐症状<br>    •给予少量的液体。在孩子呕吐20到30分钟后再给液体。如果孩子已经吐了两次或更多，打电话联系医生。<br>    •如果您的孩子是母乳喂养，继续哺乳您的宝宝。<br>    •医生可能要你给宝宝少量的口服电解质溶液。与医生一起核查数量。<br>    •每15分钟给幼儿约一汤匙的口服电解质溶液，冰土豆汁，稀释果汁，淡姜汁或清肉汤。如果你的孩子继续呕吐，请咨询医生。<br>2. 观察脱水迹象<br>    •如果你看到这些迹象的话，请打电话给你的医生：干口，没有眼泪，尿布干燥，小便颜色较平时加深，在头顶囟门凹陷。<br>3. 呕吐停止3～4小时后<br>    •给孩子补充大量的液体。<br>4. 停止呕吐8小时后：<br>    •像平时一样母乳喂养婴儿，逐渐加至正常量。<br>    •规律性的喂食幼儿温和食物，避免辛辣和油炸食物。<br>5. 停止呕吐24小时后<br>    •恢复孩子的正常饮食","do_step3":null,"do_step4":null,"do_step5":null,"do_step6":null,"do_step7":null,"go_doctor":"你的孩子经常呕吐。|剧烈呕吐或吐奶。|吐奶超过一个或两个汤匙。|吐出的奶呈棕色，红色或绿色液体。|体重不增加。|尿量比往常少。|目光呆滞或很疲倦。|发烧至38.5摄氏度。|呕吐物或大便中带血。|没有眼泪的呕吐和哭泣。|每天腹泻不止一次。","appreciation":"0","remarks":null,"last_update_by":null,"last_update_time":null},
            hasPop: false,
        }
    },
    computed: {
        makeArr: function(){
            return this.getArr(this.item.makecall);
        },
        doctorArr: function(){
            return this.getArr(this.item.go_doctor);
        },
        stepArr: function(){
            if(!this.item.do_step1){
                return null;
            }
            var arr = this.item.do_step1.split('&&');
            var stepArr = [];
            for(var i = 0, l = arr.length; i < l; i++){
                var obj = {};
                var arr1 = arr[i].split('^');
                var arrs = [];
                if(arr1.length > 1){
                    var subArr = arr1[0].split('*');
                    if(subArr.length > 1){
                        obj.desc = subArr[1]
                    }
                    obj.tit = subArr[0];
                    arrs = arr1[1];
                }else{
                    arrs = arr1[0];
                }
                obj.arrs = [];
                var arr2 = arrs.split('#');
                for(var j = 0, k = arr2.length; j < k; j++){
                    var obj2 = {};
                    var arr3 = arr2[j].split('@');
                    var arr4 = [];
                    obj2.arrs = [];
                    if(arr3.length > 1){
                        obj2.tit = arr3[0];
                        arr4 = arr3[1].split('|');
                    }else{
                        arr4 = arr3[0].split('|');
                    }
                    for(var n = 0, m = arr4.length; n < m; n++){
                        obj2.arrs.push(arr4[n]);
                    }
                    obj.arrs.push(obj2);
                }
                stepArr.push(obj);
            }
            return stepArr;
        }
    },
    methods: {
        getArr: function(data){
            if(!data){
                return null;
            }
            var arr = data.split('&&');
            var curArr = [];
            for(var i = 0, l = arr.length; i < l; i++){
                var arr1 = arr[i].split('#');
                var arr2 = [];
                var obj = {};
                obj.arrs = [];
                if(arr1.length > 1){
                    obj.tit = arr1[0];
                    if(arr1[1]){
                        arr2 = arr1[1].split('|');
                    }
                }else{
                    arr2 = arr1[0].split('|');
                }
                for(var j = 0, k = arr2.length; j < k; j++){
                    obj.arrs.push(arr2[j]);
                }
                curArr.push(obj);
            }
            return curArr;
        }
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.firstaid-content .detail-head-title{
    margin-right: 1rem;
}
.warn-block {
    background-color: @bg_info;
    color: @color_f;
    width: 0.9rem;
    height: 0.34rem;
    border-radius: 0.02rem;
    font-size: .24rem;
    position: absolute;
    right: .2rem;
    top: .39rem
}
.pop-cover{
    top: .88rem;
    background: rgba(0, 0, 0, 0.2);
}

.pop-cont {
    margin-top: -.44rem;
    width: 6rem;
    .pop-h, .pop-f {
        height: 1rem;
        line-height: 1rem;
        color: @color_f;
        text-align: center;
        font-size: .38rem;
    }
    .pop-h {
        background-color: @bg_info;
        border-top-right-radius: .1rem;
        border-top-left-radius: .1rem;
    }
    .pop-f {
        border-bottom-right-radius: .1rem;
        border-bottom-left-radius: .1rem;

        .pop-btn.bg{
            background-color: #61c5fc;
        }
        .pop-btn {
            background-color: @bg;
            color: @color_f;
        }
    }
    .pop-b {
        background: #fff;
        min-height: 2.8rem;
        max-height: 7rem;
        padding: .2rem 0 .44rem 0;
        -webkit-overflow-scrolling: touch; 
        overflow-y: auto;
    }
}

.pop-list .pop-li{
    line-height: 1.5em;
    max-height: 3em;
    overflow: hidden;
    padding-left: .23rem;
    float: left;
    min-width: 50%;
    margin-bottom: .1rem;
}
.info-desc{
    margin: -0.08rem 0.28rem 0.24rem 0.28rem;
    line-height: 0.3rem;
    font-size: 0.24rem;
    color: #9fa1a9;
}
.pop-b-box{
    padding-top: 0.24rem;
    & .disc-list{
        margin-left: .48rem;
        margin-right: .24rem;
    }
    & .disc-list li{
        margin-left: 0;
        padding-right: .24rem;
    }
}
.pop-b-tit{
    margin: 0 .48rem .1rem .48rem;
    line-height: 1.5em;
    font-weight: bold;
    color: @color_l;
}
.info-group-doctor .disc-list li{
    margin-left: .1rem;
}
.pop-btn-l{
    border-bottom-left-radius: .1rem;
    & .iconfont{
        margin-right: .15rem;
    }
}
.pop-btn-r{
    border-bottom-right-radius: .1rem;
}
.info-tag.info-sub-h{
    padding: 0 0 0.2rem 0.48rem;
    line-height: 1.5;
}
.info-tag .round-block{
    margin-left:  -0.43rem;
}
</style>
