<template>
    <div class="page-full component-my fx-column"> 
        <div class="page-content fx-1">
            <header class="mine-cover cover-bg">
                <div class="user-header tc" id="login">
                    <div class="user-pic">
                        <router-link to="/userinfo"><img src="../assets/images/my/user-head.png" alt="我的头像"></router-link>
                    </div>
                    <p class="user-name">微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑微微一笑</p>
                </div>
                <div class="user-header tc none" id="logout">
                    <div class="user-login"><a href="">立即登录</a></div>
                </div>
                <div class="user-score clearfix">
                    <div class="mine-coin fl"><i class="iconfont icon-jinbi"></i>3200</div>
                    <div class="mine-level fr"><i class="iconfont icon-dengji"></i>Lv12</div>
                </div>
            </header>

            <section>
                <div class="mine-tab">
                    <ul class="fx mine-tabs">
                        <li class="fx fx-1">
                            <a href="javascript:;" class="tab-item fx-c ac">
                                <div class="tc"><i class="i-coin"></i>
                                    <p class="tab-title">金币任务</p>
                                </div>
                            </a>
                        </li>
                        <li class="fx fx-1">
                            <a href="javascript:;" class="tab-item fx-c ac">
                                <div class="tc"><i class="i-mall"></i>
                                    <p class="tab-title">金币商城</p>
                                </div>
                            </a>
                        </li>
                        <li class="fx fx-1">
                            <a href="javascript:;" class="tab-item fx-c ac">
                                <div class="tc"><i class="i-order"></i>
                                    <p class="tab-title">我的订单</p>
                                </div>
                            </a>
                        </li>
                        <li class="fx fx-1">
                            <router-link to="/patient" class="tab-item fx-c ac">
                                <div class="tc"><i class="i-record"></i>
                                    <p class="tab-title">就诊档案</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="mine-list">
                    <div class="mine-list-items ac">
                        <div class="mine-list-item"><i class="iconfont icon-list-item icon-shoucang1"></i>我的收集<i class="icon-jinru iconfont"></i></div>
                    </div>
                    <router-link tag="div" to="/invite" class="mine-list-items ac">
                        <div class="mine-list-item"><i class="iconfont icon-list-item icon-yaoqing"></i>邀请好友得金币<i class="icon-jinru iconfont"></i></div>
                    </router-link>
                    <router-link tag="div" to="/inputcode" class="mine-list-items ac">
                        <div class="mine-list-item"><i class="iconfont icon-list-item icon-saoma"></i>输入邀请码<i class="icon-jinru iconfont"></i></div>
                    </router-link>
                    <router-link tag="div" to="/feedback" class="mine-list-items ac">
                        <div class="mine-list-item"><i class="iconfont icon-list-item icon-yijian"></i>意见反馈<i class="icon-jinru iconfont"></i></div>
                    </router-link>
                    <router-link tag="div" to="/set" class="mine-list-items ac">
                        <div class="mine-list-item"><i class="iconfont icon-list-item icon-shezhi"></i>设置<i class="icon-jinru iconfont"></i></div>
                    </router-link>
                </div>
            </section>
        </div>
        <app-nav></app-nav>
    </div>
</template>

<script>
import appNav from '../components/app-nav.vue'
export default {
  components: { appNav },
  data () {
    return {
        bannerHeight: 0,
        opacity: 0,
        timer: null
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";

.page-content{
    background-color: #f1f4f4; 
}

.cover-bg{
    width: 100%;
    height: 3.84rem;
    background-image: url(../assets/images/my/head.png); 
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
}
.mine-cover{
    position: relative;
}
.user-header{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    & .user-pic{
        width: 1.4rem;
        height: 1.4rem;
        display: inline-block;
        border: 1px solid @color_f;
        border-radius: 50%;
        box-shadow: 0 .1rem .18rem rgba(0,107,167,0.4);
        overflow: hidden;
        & a{
            display: inline-block;
        }
        & img{
            width: 100%;
            height: 100%;
            display: inline-block;
        }
    }
    & .user-name{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0.15rem 0.2rem;
        font-size: 0.32rem;
        color: @color_f;
    }
    & .user-login{
        width: 3.2rem;
        height: .9rem;
        line-height: .9rem;
        background: rgba(255,255,255,0.25);
        border-radius: 0.45rem;
        color: @color_f;
        display: inline-block;
        top: 1.48rem;
        & a{
            color: @color_f;
            font-size: .36rem;
        }
    }
}
.user-score{
    width: 100%;
    height: 0.68rem;
    line-height: .68rem;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.28rem;
    padding: 0 .2rem;
    & .mine-coin, .mine-level{
        display: inline-block;
        color: @color_f;
        max-width: 45%;
        overflow: hidden;
        -ms-word-break: break-all;
        word-break: break-all;
        & .iconfont{
            font-size: 0.28rem;
            display: inline-block;
            vertical-align: middle;
            margin-right: .1rem;
        }
}
}
.mine-coin{
    left: .2rem;
}
.mine-level{
    right: .2rem;
}
.i-coin,
.i-mall,
.i-order,
.i-record{
    width: 0.88rem;
    height: 0.88rem;
    display: inline-block;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
.i-coin{
    background-image: url(../assets/images/my/task@2x.png);
}
.i-mall{
    background-image: url(../assets/images/my/mall@2x.png);
}
.i-order{
    background-image: url(../assets/images/my/order@2x.png);
}
.i-record{
    background-image: url(../assets/images/my/record@2x.png);
}
.mine-tab{
    height: 2rem;
    margin-bottom: .2rem;
    background-color: @color_f;
    & .mine-tabs{
        height: 100%;
        & li{
            height: 100%;
        }
        & .tab-item{
            color: #646f7f;
            width: 100%;
            height: 100%;
            & .tab-title{
                margin: .1rem 0;
                font-size: 0.26rem;
            }
        }
    }
}
.mine-list{
    background-color: @color_f;
}
.mine-list-item{
    position: relative;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid @bg_bd;
    margin-left: 0.98rem;
    color: @color_l;
    & .iconfont{
        font-size: 0.44rem;
        vertical-align: middle;
    }
    & .icon-list-item{
        margin-left: -0.68rem;
        margin-right: 0.3rem;
    }
}
.mine-list-items:last-child .mine-list-item{
    border-bottom: none;
}
.icon-shoucang1{
    color: #53c4ff;
}
.icon-yaoqing{
    color: #ff938a;
}
.icon-saoma{
    color: #33ddf6;
}
.icon-yijian{
    color: #f0c365;
}
.icon-shezhi{
    color: #45e1c3;
}
.icon-jinru, .iconfont.icon-jinru{
    color: #d4dbe8;
    font-size: 0.36rem;
    position: absolute;
    right: .2rem;
}
.mine-header-box{
    position: relative;
    & .back-icon{
        position: absolute;
        left: 0;
        top: 0.26rem;
    }
}
</style>
