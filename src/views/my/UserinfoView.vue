<template>
<div class="page-full component-invitation fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="page-content fx-1">
                <section class="mine-data">
            <div class="mine-bar">
                <a href="javascript:;" class="mine-data-head ac">
                    <div class="clearfix">
                        <span class="fl">我的头像</span>
                        <div class="user-pic fr"><img src="../../assets/images/my/user-head.png" alt="我的头像"><i class="iconfont icon-jinru"></i></div>
                    </div>
                </a>
            </div>
            <div class="mine-bar">
                <div class="data-list-head list-line">基本信息</div>
                <div @click="hasNamePop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">昵称</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!name" class="iconfont icon-jinru"></i><span v-show="name">{{name}}</span></a>
                </div>
                <div @click="hasSexPop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">性别</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!sex" class="iconfont icon-jinru"></i><span v-show="sex">{{sex}}</span></a>
                </div>
                <div @click="selectDate" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">出生日期</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!date" class="iconfont icon-jinru"></i><span v-show="date">{{date}}</span></a>
                </div>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">城市</span>
                    <a href="javascript:;" class="item-data fr">广东 深圳 罗湖区</a>
                </div>
            </div>
            <div class="mine-bar">
                <div class="data-list-head list-line">联系信息</div>
                <div @click="hasPhonePop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl"><i class="icon-pic i-phone"></i>手机号</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!phone" class="iconfont icon-jinru"></i><span v-show="phone">{{phone}}</span></a>
                </div>
                <div @click="hasEmailPop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl"><i class="icon-pic i-email"></i>邮箱</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!email" class="iconfont icon-jinru"></i><span v-show="email">{{email}}</span></a>
                </div>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl"><i class="icon-pic i-wx"></i>微信</span>
                    <a href="javascript:;" class="item-data fr">已绑定</a>
                </div>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl"><i class="icon-pic i-wb"></i>微博</span>
                    <a href="javascript:;" class="item-data fr">未绑定</a>
                </div>
                <div class="data-list-item ac list-line clearfix">
                    <span class="item-name fl"><i class="icon-pic i-qq"></i>QQ</span>
                    <a href="javascript:;" class="item-data fr">未绑定</a>
                </div>
            </div>
            <div class="mine-bar">
                <div @click="hasIdNumberPop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">身份证号</span>
                    <a href="javascript:;" class="item-data fr"><i v-show="!idNumber" class="iconfont icon-jinru"></i><span v-show="idNumber">{{idNumber}}</span></a>
                </div>
                <div @click="hasPassWordPop = true" class="data-list-item ac list-line clearfix">
                    <span class="item-name fl">修改密码</span>
                    <a href="javascript:;" class="item-data fr"><i class="iconfont icon-jinru"></i></a>
                </div>
            </div>
        </section>
        <div class="pop-bar">
            <!-- 性别 -->
            <div v-show="hasSexPop" @click="closePop($event, 'hasSexPop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">您的性别</div>
                    <div class="info-text">
                        <p class="info-check cf">
                            <span class="set-gender fl cf">
                                <span @click="sex = '男'; hasSexPop = false" class="fl gender-man" :class="{cur: sex == '男'}"><i class="iconfont person-item-icon"></i>男</span>
                                <span @click="sex = '女'; hasSexPop = false" class="fr gender-woman" :class="{cur: sex == '女'}"><i class="iconfont person-item-icon"></i>女</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 昵称 -->
            <div v-show="hasNamePop" @click="closePop($event, 'hasNamePop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">编辑昵称</div>
                    <div class="info-text">
                        <p class="info-edit cf">
                            <span class="info-edit-item"><input v-model="name" type="text" class="edit-bar tc"></span>
                        </p>
                    </div>
                    <div @click="name = new_name; hasNamePop = false" class="info-btn-box cf"><a href="javascript:;" class="info-btn"><i class="iconfont icon-gou"></i></a></div>
                </div>
            </div>
            <!-- 身份证 -->
            <div v-show="hasIdNumberPop" @click="closePop($event, 'hasIdNumberPop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">您的身份证号</div>
                    <div class="info-text">
                        <p class="info-edit cf">
                            <span class="info-edit-item"><input v-model="new_idNumber" type="text" class="edit-bar tc"></span>
                        </p>
                    </div>
                    <div @click="idNumber = new_idNumber; hasIdNumberPop = false" class="info-btn-box cf"><a href="javascript:;" class="info-btn"><i class="iconfont icon-gou"></i></a></div>
                </div>
            </div>
            <!-- 邮箱 -->
            <div v-show="hasEmailPop" @click="closePop($event, 'hasEmailPop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">您的邮箱</div>
                    <div class="info-text">
                        <p class="info-edit cf">
                            <span class="info-edit-item"><input v-model="new_email" type="text" class="edit-bar tc"></span>
                        </p>
                    </div>
                    <div @click="email = new_email; hasEmailPop = false" class="info-btn-box cf"><a href="javascript:;" class="info-btn"><i class="iconfont icon-gou"></i></a></div>
                </div>
            </div>
            <!-- 修改密码 -->
            <div v-show="hasPassWordPop" @click="closePop($event, 'hasPassWordPop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">修改密码</div>
                    <div class="info-text">
                        <p class="info-edit cf">
                            <span class="info-edit-item"><input type="text" class="edit-bar" placeholder="请输入旧密码"></span>
                            <span class="info-edit-item"><input type="text" class="edit-bar" placeholder="请输入新密码(6-12位)"></span>
                            <span class="info-edit-item"><input type="text" class="edit-bar" placeholder="请再次输入新密码"></span>
                        </p>
                    </div>
                    <div @click="hasPassWordPop = false" class="info-btn-box cf"><a href="javascript:;" class="info-btn"><i class="iconfont icon-gou"></i></a></div>
                </div>
            </div>
            <!-- 绑定手机号 -->
            <div v-show="hasPhonePop" @click="closePop($event, 'hasPhonePop')" class="info-pop tc">
                <div class="info-box">
                    <div class="info-tip">您的手机号</div>
                    <div class="info-text">
                        <p class="info-edit cf">
                            <span class="info-edit-item"><input type="text" v-model="phone" class="edit-bar" placeholder=""></span>
                            <span class="info-edit-item get-code clearfix">
                                <input type="text" class="edit-bar edit-code fl" placeholder="验证码" value="">
                                <span v-show="isShowCode" @click="getCode" class="code-btn edit-code fr">获取验证码</span>
                                <span v-show="!isShowCode" class="code-btn edit-code fr active">{{seconds}}秒后重新发送</span>
                            </span>
                        </p>
                    </div>
                    <div @click="phone = new_phone; hasPhonePop = false" class="info-btn-box cf"><a href="javascript:;" class="info-btn"><i class="iconfont icon-gou"></i></a></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MuiPicker from '../../utils/picker'
import appHeader from '../../components/app-header.vue'

export default {
    components: { appHeader },
    data (){
        return {
            appHeader: {
                title: '个人信息'
            },
            date: '',
            sex: '男', 
            name: '雲溪谷',
            new_name: '雲溪谷',
            phone: '15999988888',
            new_phone: '15999988888',
            email: '15999988888@163.com',
            new_email: '15999988888@163.com',
            idNumber: '431122199112206677',
            new_idNumber: '431122199112206677',
            hasNamePop: false,
            hasSexPop: false,
            hasPhonePop: false,
            hasEmailPop: false,
            hasIdNumberPop: false,
            hasPassWordPop: false,
            seconds: 60,
            isShowCode: true
        }
    },
    computed: {
    },
    methods: {
        closePop: function(event, value) {
            if (event.target.className.indexOf('info-pop') > -1) {
                this[value] = false;
            }
        },
        countDown: function(){
            this.seconds --;
            if (this.seconds > 0) {
                setTimeout(() => {
                    this.countDown();
                }, 1000)
            } else {
                this.seconds = 60;
                this.isShowCode = true;
            }
        },
        getCode: function(){
            this.isShowCode = false;
            this.countDown();
        },
        selectDate: function(){
            var options = {
                type: 'date',
                title: '请选择出生日期'
            };
            var picker = new mui.DtPicker(options);
            picker.show(item => {
                this.date = item.toString();
                picker.dispose();
            });
        }
    },
    mounted: function(){
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

.cover-bg{
    width: 100%;
    height: 3.84rem;
    background-image: url(../../assets/images/my/head.png); 
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
    background-image: url(../../assets/images/my/task@2x.png);
}
.i-mall{
    background-image: url(../../assets/images/my/mall@2x.png);
}
.i-order{
    background-image: url(../../assets/images/my/order@2x.png);
}
.i-record{
    background-image: url(../../assets/images/my/record@2x.png);
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


.mine-data{
	position: relative;
}
.mine-bar{
	background-color: @color_f;
	margin-top: .2rem;
	& .mine-data-head{
		display: block;
		height: 1.6rem;
		line-height: 1.6rem;
		color: @color_l;
		font-size: .3rem;
		padding-left: 0.2rem;
	}
	& .data-list-head{
		height: 0.7rem;
		line-height: .7rem;
		color: @color_m;
		font-size: .26rem;
	}
	& .list-line{
		border-bottom: 1px solid @bg_bd;
		padding: 0 0.2rem;
	}
	& .list-line:last-child{
		border-bottom: none;
	}
	& .data-list-item{
		height: .88rem;
		line-height: .88rem;
		font-size: .3rem;
		color: @color_l;
	}
	& .item-data{
		color: @color_m;
	}
	& .num-mark{
		font-size: .4rem;
		color: #ff8177;
		position: absolute;
		right: 1.56rem;
		width: 1rem;
		overflow: hidden;
	}
	& .tips-m{
		color: @color_m;
		font-size: .22rem;
		margin: 0 0.41rem 0 0.2rem;
	}
}
.add:before{
	content: "+";
	font-size: .38rem;
	margin-right: 0.05rem;
}
.mine-data-head{
	& .user-pic{
		display: inline-block;
		img{
            margin-right: .72rem;
			width: .96rem;
			height: .96rem;
			vertical-align: middle;
			border: 1px solid #d0d0d0;
			border-radius: 50%;
		}
	}
}
.icon-pic{
	display: inline-block;
	background-size: cover;
	width: .4rem;
	height: .4rem;
	vertical-align: middle;
	margin-right: .16rem;
}
.i-phone{
	background-image: url(../../assets/images/my/p_phone.png);
}
.i-email{
	background-image: url(../../assets/images/my/p_email.png);
}
.i-wx{
	background-image: url(../../assets/images/my/p_wx.png);
}
.i-wb{
	background-image: url(../../assets/images/my/p_wb.png);
}
.i-qq{
	background-image: url(../../assets/images/my/p_qq.png);
}
.i-friend{
	background-image: url(../../assets/images/my/p_friend.png);
	
}
.info-pop {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9;
    & .info-box{
    	background-color: @color_f;
    	overflow: hidden;
        margin: 1.6rem auto 0 auto;
        width: 80%;
        man-width: 7rem;
        border-radius: 0.09rem;
        font-size: 0.32rem;
        z-index: 10;
    }
    & .info-tip {
        padding: 0.5rem 0 0.5rem 0;
        font-size: 0.38rem;
        line-height: 1.25;
        color: @color_l;
        font-weight: normal;
        text-align: center;
    }

    & .info-tips{
    	line-height: 0.4rem;
    }
    
    & .info-text {
        margin: 0 auto;
        max-width: 6rem;
        & .info-check{
        	height: .56rem;
        	line-height: .56rem;
        	margin-bottom: .5rem;
        }
        & .set-gender{
	        height: .56rem;
	        width: 100%;
	        color: @color_m;
	        font-size: 0.32rem;
    	}
	    & .gender-woman, .gender-man{
	        width: 50%;
	        padding: 0 0.4rem;
	    }
	    & .info-edit{
			margin: 0 0.3rem 0.5rem;
			& .info-edit-item{
				display: block;
				margin-bottom: 0.2rem;
		    	height: 0.8rem;
				line-height: 0.8rem;
			}
			& .edit-bar{
				border: 1px solid #f2f3f5;
				border-radius: 0.03rem;
				background-color: #fafafa;
				width: 100%;
				height: 100%;
				font-size: 0.26rem;
				color: #646f7f;
				padding: 0 0.24rem;
			}
	    }
	    .get-code{
	    	& .edit-code{
	    		width: 47.6%;
	    	}
	    	& .code-btn{
	    		background-color: #6ee0e1;
	    		color: @color_f;
	    		font-size: .26rem;
	    		border-radius: 0.03rem;
	    		&.active{
	    			background-color: #c5c7ce;
	    		}
	    	}
	    }
    }
    & .info-btn-box{
		background-color: #39b7ff;
		color: @color_f;
		height: 1rem;
		line-height: 1rem;
		& .info-btn{
			color: @color_f;
			display: block;
			width: 100%;
		}
	}
	& .coin-get-img{
		width: 100%;
	}
	& .btn-know{
		width: 3.2rem;
		height: 0.65rem;
		line-height: 0.65rem;
		border-radius: 0.5rem;
		display: inline-block;
		margin-bottom: 0.5rem;
	}
}
.person-item-icon{
	font-size: 0.42rem;
	color: #dcdde2;
	margin-right: 0.14rem;
	vertical-align: middle;
}
.cur .person-item-icon{
	color: #39b8ff;
}
.coin-cover-bg{
	background-image: url(../../assets/images/my/coin_bg.jpg);
	background-size: cover;
	height: 3.28rem;
	color: @color_f;
}
.mine-cover{
	padding: 0 0.2rem 0 0.26rem;
	& .coin-header{
		background-color: transparent;
		font-size: 0.38rem;
	}
	& .coin-header-cont{
		margin-top: .4rem;
		& .i-coin-logo{
			background-image: url(../../assets/images/my/my_glod.png);
			background-size: cover;
			width: 1.78rem;
			height: 1.52rem;
		}
		& .coin-num-cont{
			margin-left: .2rem;
			margin-top: 0.25rem;
		}
		& .num-title{
			color: rgba(255,255,255,0.6);
			font-size: 0.22rem;
		}
		& .coin-num{
			font-size: 0.8rem;
			font-family: "simhei";
			font-weight: bold;
		}
		& .coin-mall{
			width: 1.54rem;
			height: .5rem;
			line-height: .5rem;
			font-size: .26rem;
			border-radius: .03rem;
			text-align: center;
			display: block;
			margin-top: .68rem;
		}
		& .btn-bg{
			background-color: rgba(255,255,255,0.2);
			color: @color_f;
		}
	}
}
.mine-bar-mt0{
	margin-top: 0;
}
.logout-bar{
	text-align: center;
    height: 1rem;
    line-height: 1rem;
    & .logout-btn{
    	color: #ff0000;
    	font-size: 0.32rem;
    }
}
.btn-ok{
	color: @color_f;
	font-size: .28rem;	
}
.invite-bg{
	margin: 0.9rem 0 1rem;
}
.invite-btn{
	display: block;
    width: 5.29rem;
    margin: 0 auto;
	& .invite-btn-input{
		background-color: #f3f5f9;
		height: .9rem;
		line-height: .9rem;
		width: 100%;
		text-align: center;
		color: #646f7f;
		border-radius: 0.06rem;
		font-size: .28rem;
	}
}
.feedback-cont{
	background-color: @color_f;
	color: @color_m;
	width: 100%;
	height: 3.58rem;
	padding: 0.2rem;
	position: relative;
	& .edit-txt{
		height: 1.16rem;
		line-height: .34rem;
		width: 100%;
		color: #646f7f;
		resize: none;
		overflow: hidden;
		font: 0.26rem/1 "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	& .scaler{
		position: absolute;
		right: 0.2rem;
		bottom: 0.2rem;
	}
}
.upload-gallery{
	height: 1.64rem;
	margin-top: 0.2rem;
	font-size: 0;
	& .pic{
		margin-right: 0.05rem;
		position: relative;
		width: 1.64rem;
		height: 1.64rem;
		display: inline-block;
		border: 1px solid #e3e4e6;
		& img{
			width: 1.62rem;
			height: 1.62rem;
		}
	}
	& .close-btn{
		position: absolute;
		right: 0;
		top: 0;
		background-image: url(../../assets/images/my/yijian_shanchu.png);
		background-size: cover;
		width: 0.38rem;
		height: 0.38rem;
	}
}
.upload-btn{
	text-align: right;
	padding-right: 0.2rem;
	margin-top: 0.2rem;
	margin-bottom: 0.6rem;
	& .file-bg{
		position: absolute;
		right: 0;
		clip:rect(0 0 0 0);
	}
	.icon-shangchuan{
		font-size: 0.38rem;
		color: @color_m;
	}
}
.feedback-contact{
	margin: 0 0.2rem;
	& .title-s{
		color: @color_s;
		font-size: .22rem;
		margin-bottom: .20rem;
	}
	& .input-bar{
		margin-bottom: 0.5rem;
		& .input-edit{
			margin-right: 0.2rem;
			height: 0.8rem;
			line-height: 0.8rem;
			color: #646f7f;
			padding: 0 0.2rem;
			font-size: 0.26rem;
			border-radius: 3px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	& .submit-btn{
		width: 100%;
		height: 0.9rem;
		line-height: 0.9rem;
		background-color: @color_s;
		color: @color_f;
		font-size: 0.36rem;
		text-align: center;
		border-radius: 3px;
		&.active{
			background-color: @bg;
		}
	}
}
.collect-bar{
	margin-top: 0;
	& .item-data{
		font-size: 0.22rem;
	}
	& .tips-m{
		color: #7b8ea9;
	}
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
	color: @color_s;
}
input:-moz-placeholder {/* Mozilla Firefox 4 to 18 */
	color: @color_s;
}
input::-webkit-input-placeholder { /* WebKit browsers */ 
	color: @color_s;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
	color: @color_s; 
}
textarea::-moz-placeholder { /* Mozilla Firefox 19+ */ 
	color: #e3e4e6;
}
textarea:-moz-placeholder {/* Mozilla Firefox 4 to 18 */
	color: #e3e4e6;
}
textarea::-webkit-input-placeholder { /* WebKit browsers */ 
	color: #e3e4e6;
}
textarea:-ms-input-placeholder { /* Internet Explorer 10+ */ 
	color: #e3e4e6; 
} 
</style>
