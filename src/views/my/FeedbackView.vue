<template>
<div class="page-full component-feedback fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <div class="page-content fx-1">
        <section class="mine-data">
            <div class="feedback-bar">
                <div class="feedback-cont">
                    <textarea class="edit-txt" v-model="text" placeholder="请输入您的宝贵意见！" maxlength="1000"></textarea>
                    <ul v-if="imgSrc" class="upload-gallery">
                        <li class="pic">
                            <img :src="imgSrc" alt="">
                            <a href="javascript:;" class="close-btn"></a>
                        </li>
                    </ul>
                    <p class="scaler">还能输入<span class="scaler-num">{{curnum}}</span>字</p>
                </div>
                <div class="upload-btn">
                    <label class="ui-upload-btn" for="feedbackImage"><i class="iconfont icon-shangchuan"></i><input @change="readImageFile" type="file" id="feedbackImage" class="file-bg" accept="image/png,image/jpeg" /></label>
                    
                </div>
                <div class="feedback-contact">
                    <p class="title-s">请留下您的联系方式，方便与我们联系！（非必填项）</p>
                    <div class="input-bar fx">
                        <input type="text" placeholder="请输入您的手机号码" class="input-edit fx-1" value="18812345678">
                        <input type="text" placeholder="请输入您的QQ号" class="input-edit fx-1">
                    </div>
                    <div class="submit-btn active">提&nbsp;交</div>
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
                title: '意见反馈'
            },
            imgSrc: '',
            text: '',
            num: 1000,
            curnum: 1000
        }
    },
    computed: {
    },
    methods: {
        readImageFile: function(event){
            // var _this = event.target;
            // var file = _this.files[0]; 
            // //判断file的类型是不是图片类型。
            // if(!/image\/\w+/.test(file.type)){ 
            //     alert("文件必须为图片！"); 
            //     return false; 
            // }
            // this.previewImage(file);
        },
        previewImage: function(file) {   
            var self = this;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){ 
                self.imgSrc = this.result;
                console.log(self.imgSrc)
            }   
        }
    },
    watch: {
        text: function(val){
            const l = val.length;
            if(l > this.num){
                this.text = val.slice(0, this.num);
                this.curnum = this.num;
            }else{
                this.curnum = this.num - l;
            }
        }
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
