<template>
<div class="page-full component-news-detail fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right">
            <i class="icon-shoucang iconfont ac-o"></i>
            <i class="icon-fenxiang iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <section class="news-content">
            <h1 class="news-tit">慢性鼻炎总是不好，还有得治吗，反复发作，该怎么办？</h1>
            <p class="news-author clearfix">瑞康医生&nbsp;&nbsp;2017-01-12<span class="fr">作者：小伟哥</span></p>
            <img class="news-img" src="../../assets/images/news/news-1.jpg">
            <div class="news-text">
                <h2>首先了解鼻炎的病因：</h2>
                <p>感冒是一种短暂的上呼吸道病毒感染，部位包括：鼻鼻窦、口腔和咽喉。症状包括喉咙痛，鼻塞，流涕，头痛，轻微的肌肉疼痛。由于导致感冒的病毒超过20种，而新的病毒不断出现，机体对感冒无法建立免疫感冒传染性很强，是世界上最常见的疾病。多数感冒在几天内就消失了，并不会引起严重的健康问题。</p>
            </div>
            <div class="praise-box fx-c fx-column">
                <a class="news-praise fx-c ac" href="javascript:;">
                    <span>2</span>
                    <i class="icon-dianzan iconfont"></i>
                </a>   
                <p>非常棒</p>
            </div>
        </section>
        <section class="comment-box">
            <div class="comment-top">热门评论</div>
            <ul class="comment-main">
                <li class="comment-item">
                    <div class="comment-l fl">
                        <img src="../../assets/images/head.png">
                    </div>
                    <div class="comment-r">
                        <div class="comment-t">
                            <span class="comment-tit">军中一枝花~</span>
                            <div class="comment-icon">
                                <a class="comment-t-box fl ac" href="javascript:;">
                                    <i class="icon-pinglun iconfont comment-icon-t fl"></i>
                                </a>
                                <a class="comment-p-box fl ac" href="javascript:;">
                                    <i class="icon-dianzan iconfont comment-icon-p fl"></i>
                                    <span class="comment-number fl">9</span>
                                </a>
                            </div>
                        </div>
                        <div class="comment-date">刚刚</div>
                        <div class="comment-content">我10年多鼻炎，一直反反复复，没到天冷时更严重，慢性病没办法的，只能慢慢调养... 
                        </div>
                    </div>
                </li>
                <li class="comment-item">
                    <div class="comment-l fl">
                        <img src="../../assets/images/head.png">
                    </div>
                    <div class="comment-r">
                        <div class="comment-t">
                            <span class="comment-tit">情何以堪</span>
                            <div class="comment-icon">
                                <a class="comment-t-box fl ac" href="javascript:;">
                                    <i class="icon-pinglun iconfont comment-icon-t fl"></i>
                                </a>
                                <a class="comment-p-box fl ac active" href="javascript:;">
                                    <i class="icon-dianzan iconfont comment-icon-p fl"></i>
                                    <i class="icon-yizan iconfont comment-icon-p fl"></i>
                                    <span class="comment-number fl">9</span>
                                </a>
                            </div>
                        </div>
                        <div class="comment-date">10分钟前</div>
                        <div class="comment-content">保养好吧，无解！ 
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
    <div class="comment-bottom-box">
        <div class="comment-bottom fx-c ac">
            <div @click="toPageComment" class="comment-input fx-1">评论...</div>
            <div @click="toPage" class="comment-total fx-c">
                <i class="icon-pinglun iconfont"></i>
                <span class="comment-n">339</span>
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
                title: '资讯详情'
            }
        }
    },
    methods: {
        toPageComment: function(){
            this.$router.push({ name: 'news-detail-comments-comment'})
        },
        toPage: function(){
            this.$router.push({ name: 'news-detail-comments'})
        },
    },
    computed: mapGetters({
        backPath: 'backPath'
    })
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-full{
    background-color: #fff;
}
.news-content {
    margin-bottom: 0.2rem;
    padding: 0.3rem 0.2rem;
    line-height: 1.4;
    font-size: 0.28rem;
    color: #65707f;
    background-color: #fff;
    & .news-tit {
        font-size: 0.38rem;
        color: #3d4550;
    }
    & .news-author {
        padding-top: 0.12rem;
        padding-bottom: 0.26rem;
        font-size: 0.24rem;
        color: #9fa1a9;
        border-bottom: 1px solid #e6ecf1;
    }
    & .news-img {
        margin: 0.4rem 0 0.3rem 0;
        width: 100%;
    }
    & .news-text {
        line-height: 1.5;
    }
    & h2 {
        font-size: 0.28rem;
        color: #3d4550;
    }
}

.praise-box {
    padding: 0.46rem 0;
    & p {
        margin-top: 0.18rem;
        font-size: 0.3rem;
        color: #818a97;
    }
}

.news-praise {
    position: relative;
    width: 1.28rem;
    height: 1.28rem;
    border: 1px solid #a4a5ad;
    border-radius: 50%;
    & .iconfont {
        color: #9fa1a9;
    }
    & span {
        position: absolute;
        display: block;
        top: -0.04rem;
        right: -0.06rem;
        padding: 0 0.14rem;
        height: 0.32rem;
        min-width: 0.5rem;
        line-height: 0.32rem;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        border-radius: 0.32rem;
        background-color: #9fa1a9;
    }
}

.comment-box {
    background-color: #fff;
}

.comment-top {
    padding: 0 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #646f7f;
    border-bottom: 1px solid #e6ecf1;
}

.comment-main {
    padding: 0 0.2rem;
}

.comment-item {
    overflow: hidden;
    padding: 0.3rem 0 0.2rem 0;
}

.comment-t {
    position: relative;
}

.comment-r {
    padding-left: 0.9rem;
}

.comment-icon {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
}

.comment-icon .iconfont {
    display: block;
    font-size: 0.3rem;
    line-height: 0.4rem;
    color: #c5c7ce;
    vertical-align: middle;
}

.comment-t-box {
    padding: 0.06rem 0.16rem;
}

.comment-p-box {
    padding: 0.06rem 0 0.06rem 0.16rem;
    & .icon-yizan{
        display: none;
    }
    & .icon-dianzan{
        display: block;
    }
    &.active {
        .icon-yizan{
            display: block;
        }
        .icon-dianzan{
            display: none;
        }
    }
}

.comment-total{
    height: .6rem;
}

.comment-icon-p {
    margin-right: 0.12rem;
}

.comment-number {
    width: 0.48rem;
    font-size: 0.24rem;
    line-height: 0.4rem;
    color: #c5c7ce;
}

.comment-t {
    overflow: hidden;
}

.comment-tit {
    display: block;
    padding-right: 1.16rem;
    line-height: 0.44rem;
    font-size: 0.3rem;
    color: #00a2ff;
}

.comment-l {
    overflow: hidden;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 0.72rem;;
    border: 1px solid #d0d0d0;
}

.comment-date {
    padding: 0.06rem 0 0.16rem 0;
    font-size: 0.24rem;
    color: #c5c7ce;
}

.comment-content {
    line-height: 0.44rem;
    font-size: 0.3rem;
    color: #3d4550;
}

.comment-bottom-box{
    height: 0.98rem;
    background-color: #fff;
}
.comment-bottom{
    padding: 0 0.2rem;
    height: 0.98rem;
    color: #9fa1a9;
    font-size: 0.24rem;
    border-top: 1px solid #d9d9d9;
    background-color: #f8f8f8;
    & .comment-input{
        padding: 0 0.15rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #c5c7ce;
        border: 1px solid #d9d9d9;
        border-radius: 0.12rem;
        background-color: #fff;
    }
    & .iconfont{
        margin-left: 0.3rem;
        margin-right: 0.12rem;
    }
}
</style>
