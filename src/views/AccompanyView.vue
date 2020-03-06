<template>
<div class="page-full component-accompany fx-column"> 
    <div class="accompany-header fx fx-column">
        <app-header :back-url="appHeader.backUrl" :title="appHeader.title">
            <router-link tag="div" to="/selectcity" class="city-icon fx-c" slot="right">{{selectedCity}}<i class="icon-sanjiaoxia iconfont ac-o"></i></router-link>
        </app-header>
        <ul class="accompany-nav fx">
            <li @click="toPage(1)" :class="{'active': type == 1}" class="accompany-nav-item fx-1 fx-c"><i class="iconfont icon-putongpeizhen"></i></li>
            <li @click="toPage(2)" :class="{'active': type == 2}" class="accompany-nav-item fx-1 fx-c"><i class="iconfont icon-ertongpeizhen"></i></li>
            <li @click="toPage(3)" :class="{'active': type == 3}" class="accompany-nav-item fx-1 fx-c"><i class="iconfont icon-yunfupeizhen"></i></li>
            <li @click="toPage(4)" :class="{'active': type == 4}" class="accompany-nav-item fx-1 fx-c"><i class="iconfont icon-laorenpeizhen"></i></li>
        </ul>
    </div>
    <div class="page-content fx-1">
        <div v-show="type == 1" class="accompany-wraper">
            <section class="accompany-top">
                <h2>普通陪诊</h2>
                <p>服务时间：07:00-19:00</p>
                <div>￥<span>10</span></div>
            </section>
            <section class="accompany-process">
                <h2>服务流程</h2>
                <ul class="fx">
                    <li class="fx-1 fx-c"><i>1</i>预约陪诊</li>
                    <li class="fx-1 fx-c"><i>2</i>在线支付</li>
                    <li class="fx-1 fx-c"><i>3</i>专业服务</li>
                    <li class="fx-1 fx-c"><i>4</i>诊后关怀</li>
                </ul>
            </section>
            <section class="accompany-content">
                <a class="fx-c" @click="noticeFn" href="javascript:void(0)">服务须知</a>
                <h2>服务内容</h2>
                <h3>诊前提示：</h3>
                <p>了解您的病情、病史、近期服药情况</p>
                <p>提醒您就诊所需准备的物品（如病历本、既往检查报告等）</p>
                <h3>全程陪伴：</h3>
                <p>提前根据您的情况规划就诊流程，节省您的宝贵时间</p>
                <p>帮您取号、陪您候诊、替您缴费、代您取药、陪同检查、送取化验标本、等候检查结果</p>
                <h3>整理档案：</h3>
                <p>整理本次就诊档案，帮您填写用药指导</p>
                <h3>诊后关怀：</h3>
                <p>帮您解读医生的医嘱，告知您在饮食及生活上的注意事项</p>
            </section>
        </div>
        <div v-show="type == 2" class="accompany-wraper">
            <section class="accompany-top">
                <h2>儿童陪诊</h2>
                <p>服务时间：07:00-19:00</p>
                <div>￥<span>10</span></div>
            </section>
            <section class="accompany-process">
                <h2>服务流程</h2>
                <ul class="fx">
                    <li class="fx-1 fx-c"><i>1</i>预约陪诊</li>
                    <li class="fx-1 fx-c"><i>2</i>在线支付</li>
                    <li class="fx-1 fx-c"><i>3</i>专业服务</li>
                    <li class="fx-1 fx-c"><i>4</i>诊后关怀</li>
                </ul>
            </section>
            <section class="accompany-content">
                <a class="fx-c" @click="noticeFn" href="javascript:void(0)">服务须知</a>
                <h2>服务内容</h2>
                <h3>诊前提示：</h3>
                <p>了解宝宝的病史、症状及服药情况</p>
                <p>提醒您就诊所需准备的物品及注意事项</p>
                <h3>全程陪伴：</h3>
                <p>帮您取号、陪您候诊、替您缴费、代您取药、陪同检查、送取化验标本、等候检查结果</p>
                <p>密切观察宝宝的生命体征及病情变化、安抚宝宝的情绪、帮您跟医生进行有效沟通、解读医生开具的医嘱</p>
                <p>提前规划就诊流程，节省您的宝贵时间、尽量减少宝宝交叉感染的风险</p>
                <h3>整理档案：</h3>
                <p>整理本次就诊档案，填写专属就诊档案</p>
                <h3>诊后关怀：</h3>
                <p>提醒您宝宝的用药时间、剂量、医生建议、复诊时间等</p>
            </section>
        </div>
        <div v-show="type == 3" class="accompany-wraper">
            <section class="accompany-top">
                <h2>孕妇陪诊</h2>
                <p>服务时间：07:00-19:00</p>
                <div>￥<span>10</span></div>
            </section>
            <section class="accompany-process">
                <h2>服务流程</h2>
                <ul class="fx">
                    <li class="fx-1 fx-c"><i>1</i>预约陪诊</li>
                    <li class="fx-1 fx-c"><i>2</i>在线支付</li>
                    <li class="fx-1 fx-c"><i>3</i>专业服务</li>
                    <li class="fx-1 fx-c"><i>4</i>诊后关怀</li>
                </ul>
            </section>
            <section class="accompany-content">
                <a class="fx-c" @click="noticeFn" href="javascript:void(0)">服务须知</a>
                <h2>服务内容</h2>
                <h3>建档准备：</h3>
                <p>提醒您选择的指定医院所需建档材料及流程，以便您有充足的准备时间</p>
                <h3>孕检准备：</h3>
                <p>提醒您孕检所需材料、孕检项目以及注意事项，提前规划本次陪诊流程，减少您的等待时间</p>
                <h3>全程陪护：</h3>
                <p>帮您取号、陪您候诊、替您缴费、代您取药、陪同检查、送取化验标本</p>
                <h3>整理病例：</h3>
                <p>记录测量结果、等候检查结果、整理孕检档案等</p>
                <h3>诊后提醒</h3>
                <p>提醒您下次孕检时间、所需材料、孕检项目以及注意事项</p>
            </section>
        </div>
        <div v-show="type == 4" class="accompany-wraper">
            <section class="accompany-top">
                <h2>老人陪诊</h2>
                <p>服务时间：07:00-19:00</p>
                <div>￥<span>10</span></div>
            </section>
            <section class="accompany-process">
                <h2>服务流程</h2>
                <ul class="fx">
                    <li class="fx-1 fx-c"><i>1</i>预约陪诊</li>
                    <li class="fx-1 fx-c"><i>2</i>在线支付</li>
                    <li class="fx-1 fx-c"><i>3</i>专业服务</li>
                    <li class="fx-1 fx-c"><i>4</i>诊后关怀</li>
                </ul>
            </section>
            <section class="accompany-content">
                <a class="fx-c" @click="noticeFn" href="javascript:void(0)">服务须知</a>
                <h2>服务内容</h2>
                <h3>诊前提醒：</h3>
                <p>了解您的病史、症状及服药情况</p>
                <p>提醒您就诊所需准备的物品（如病历本、既往检查报告等）</p>
                <h3>全程陪伴：</h3>
                <p>为行动不便的患者提前准备轮椅</p>
                <p>提前根据您的情况规划就诊流程，节省您的宝贵时间</p>
                <p>帮您取号、陪您候诊、替您缴费、代您取药、陪同检查、送取化验标本、等候检查结果</p>
                <h3>整理档案：</h3>
                <p>整理本次就诊档案，帮您填写用药指导</p>
                <h3>诊后关怀：</h3>
                <p>帮您解读医生的医嘱，告知您在饮食及生活上的注意事项</p>
            </section>
        </div>
    </div>
    <router-link tag="div" to="/appointment" class="app-bottom fx-c ac-o">预约{{accompanyName}}</router-link>
    <div v-if="hasNotice" class="pop"></div>
    <transition name="error">
        <div v-if="hasNotice" class="accompany-notice">
            <h2 class="fx-c">服务须知</h2>
            <div class="accompany-notice-text">
                <p>1、护士会在第一时间主动与您联系，沟通症状、病史、挂号情况及就诊科室，约定就诊行程</p>
                <p>2、服务当日，护士将提前到达医院为您规划就诊流程，并在您预约的医院进行一对一的陪诊服务</p>
                <p>3、护士会在与您见面并征得同意后开始服务</p>
                <p>4、服务过程中遇到的任何问题及建议，请联系客服：400-921-5800，我们会及时处理并反馈</p>
            </div>
            <a @click="hasNotice = false" class="accompany-notice-btn fx-c ac-o" href="javascript:void(0)"><i class="iconfont icon-gou"></i></a>
        </div>
    </transition>
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
                title: '陪诊',
                backUrl: '/home'
            },
            accompanyName: '普通陪诊',
            hasNotice: false,
            type: 1
        }
    },
    computed: {
        ...mapGetters([
          'selectedCity'
        ])
    },
    methods: {
        noticeFn: function(){
            this.hasNotice = true;
        },
        toPage: function(type){
            if(this.type != type){
                this.type = type;
            }
        }
    },
    watch: {
        type: function(val){
            switch (val) {
                case 1: 
                    this.accompanyName = '普通陪诊'
                    break;
                case 2:
                    this.accompanyName = "儿童陪诊"
                    break;
                case 3:
                    this.accompanyName = "孕妇陪诊"
                    break;
                case 4:
                    this.accompanyName = "老人陪诊"
                    break;
                default:
                    this.accompanyName = '普通陪诊'
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.page-content{
    background-color: #f2f3f5;
}
.accompany-header{
    background-color: #39b7ff;
}
.accompany-nav{
    height: 1rem;
}
.accompany-nav-item{
    height: 1rem;
    font-size: .6rem;
    color: #a6dfff;
    border-bottom: 0.05rem solid transparent;
    border-radius: 1px;
    &.active{
        color: #fff;
        border-color: #a6dfff;
    }
}

.accompany-top, .accompany-process, .accompany-content{
    padding: 0.4rem 0.2rem;
    background-color: #fff;
}
.accompany-top{
    position: relative;
    margin-bottom: .2rem;
    & h2{
        margin-bottom: 0.3rem;
        font-size: 0.34rem;
        color: #3d4550;
    }
    & p{
        font-size: 0.24rem;
        color: #7b8ea9;
    }
    & div{
        position: absolute;
        top: .54rem;
        right: .2rem;
        color: #ff6476;
    }
    & span{
        font-size: 0.6rem;
    }
}

.accompany-process{
    margin-bottom: 0.2rem;
    & h2{
        margin-bottom: 0.3rem;
        font-size: 0.24rem;
        color: #7b8ea9;
    }
    & li{
        margin-left: 0.14rem;
        height: .6rem;
        font-size: 0.22rem;
        color: #646f7f;
        border: 1px solid #c5c7ce;
        border-radius: 0.03rem;
        &:first-child{
            margin-left: 0;
        }
        & i{
            display: inline-block;
            width: .22rem;
            height: .22rem;
            margin-right: 0.06rem;
            line-height: .22rem;
            text-align: center;
            font-size: 0.18rem;
            color: #fff;
            border-radius: 0.22rem;
            background-color: #7b8ea9;
        }
    }
}

.accompany-content{
    position: relative;
    & a{
        position: absolute;
        top: 0.32rem;
        right: 0.2rem;
        width: 1.2rem;
        height: 0.4rem;
        font-size: .22rem;
        color: #39b8ff;
        border-radius: 0.03rem;
        border: 1px solid #39b8ff;
    }
    & h2{
        font-size: 0.24rem;
        color: #7b8ea9;
    }
    & h3{
        margin-top: .3rem;
        margin-bottom: .1rem;
        font-size: .3rem;
        color: #3d4550;
    }
    & p{
        line-height: 1.714;
        font-size: .28rem;
        color: #646f7f;
    }
}

.component-accompany .app-bottom{
    background-color: #39b7ff;
}

.accompany-notice{
    position: absolute;
    z-index: 10;
    //margin: 1rem 0.35rem 0 0.35rem;
    top: 1rem;
    right: 0.35rem;
    left: 0.35rem;
    border-radius: 0.1rem;
    background-color: #fff;
    & h2{
        height: 1.2rem;
        font-size: 0.38rem;
        color: #3d4550;
        border-bottom: 1px solid #e6ecf1;
    }
}
.accompany-notice-text{
    padding: 0.5rem 0.46rem 0.6rem 0.46rem;
    font-size: 0.28rem;
    color: #65707f;
    line-height: 1.785;
}
.accompany-notice-btn{
    height: 1rem;
    font-size: 0.38rem;
    color: #fff;
    background-color: #39b7ff;
}
</style>
