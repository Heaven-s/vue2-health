<template> 
<div class="page-full component-news fx-column"> 
    <div v-show="toggle" class="pop-bg"></div>
    <header class="news-header">
        <a class="toggle" :class="{ 'active': toggle}" @click="toggleFn" href="javascript:;"></a>
        <div class="news-header-box" v-show="!toggle">
            <ul class="news-header-items" :style="{ width: headerWidth + 'rem' }">
                <li @click="pageFn(item.id)" v-for="item in activeTypes" :class="{ 'active': item.id == type }" class="news-header-item"><a href="javascript:;">{{item.name}}</a></li>
            </ul>
        </div>
        <div class="news-subscribe" v-show="toggle">订阅频道</div>
        <ul class="subscribe-box" v-show="toggle">
            <li v-for="(item, index) in types" @click="activeFn(item.id)" :class="{ 'active': item.selected, 'subscribe-recommend': item.id == 0 }" class="subscribe-item"><a href="javascript:;">{{item.name}}</a></li>
        </ul>
    </header>
    <div class="page-content fx-1">
        <section class="news-search-box">
            <a class="search ac" href="javascript:;">
                <div class="search-content fx">
                    <i class="icon-sousuo iconfont"></i>
                    <span class="search-text">请输入搜索内容</span>
                </div>
            </a>
        </section>
        <section>
            <ul>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/news/detail/168" class="news-item fx ac">
                        <img class="news-item-img" src="../assets/images/index/news-list@2x.jpg">
                        <div class="fx-1">
                            <p class="news-item-text">得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。得了痛风怎么办，一日三餐如何吃？控 制嘌呤摄入是关键。</p>
                            <div class="news-item-icon">
                                <i class="icon-chakan iconfont"></i><span class="news-item-number">1025</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
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
        toggle: false,
        type: 0,
        types: [{
            id: 0,
            name: '推荐',
            selected: true
        },{
            id: 1,
            name: '营养',
            selected: true
        },{
            id: 2,
            name: '疾病',
            selected: true
        },{
            id: 3,
            name: '知道',
            selected: true
        },{
            id: 4,
            name: '两性',
            selected: true
        },{
            id: 5,
            name: '运动',
            selected: true
        },{
            id: 6,
            name: '减肥',
            selected: true
        },{
            id: 7,
            name: '母婴',
            selected: true
        },{
            id: 8,
            name: '中医',
            selected: true
        },{
            id: 9,
            name: '心理',
            selected: true
        }]
    }
  },
  computed: {
    activeTypes: function(){
        return this.types.filter(el => el.selected)
    },
    headerWidth: function(){
        return this.activeTypes.length * 1.1;
    },
  },
  methods: {
    toggleFn: function(){
        this.toggle = !this.toggle;
    },
    pageFn: function(id){
        this.type = id;
        //this.$router.push({ path: '/news/'+id })
    },
    activeFn: function(id){
        if(id != 0){
            this.types.forEach(el => {
                if(el.id == id){
                    el.selected = !el.selected;
                    if(id == this.type && !el.selected){
                        this.type = 0;
                        this.$router.push({ path: '/news/0' })
                    }
                }
            })
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.news-header{
    position: relative;
    width: 100%;
    height: 0.88rem;
    background-color: @bg;
    z-index: 3;
}
.toggle{
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 0.88rem;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: url(../assets/images/news/pull-down@2x.png);
    background-size: 1rem auto;
    z-index: 9;
    &.active{
        background-image: url(../assets/images/news/pull-up@2x.png);
    }
}
.news-subscribe{
    padding-left: 0.25rem;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
}
.news-header-box::-webkit-scrollbar {
    display: none;
}
.news-header-box{
    z-index: 1;
    width: 100%;
    width: calc(~"100% - 0.68rem");
    height: 0.88rem;
    background-color: @bg;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch; 
}
.news-header-items{
    width: 1.1*10+1rem;
    overflow: hidden;
}
.news-header-item{
    float: left;
    height: 0.88rem;
    & a{
        display: block;
        width: 1.1rem;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.3rem;
        color: #a6dfff;
        text-align: center;
        border-bottom: 0.04rem solid transparent;
    }
    &.active a{
        color: #fff;
        border-color: #a6dfff;
    }
}

.news-search-box{
    padding: 0.18rem 0.2rem;
    background-color: #fcfcfc;
    & .search{
        color: #c5c7ce;
        background-color: #eef1f2;
    }
}

.subscribe-box{
    overflow: hidden;
    padding: 0.6rem 0.06rem 0.46rem 0.06rem;
    background-color: #fff;
}
.subscribe-item{
    float: left;
    margin-bottom: 0.14rem;
    padding: 0 0.07rem;
    width: 25%;
    height: 0.72rem;
    & a{
        display: block;
        height: 0.72rem;
        line-height: 0.72rem;
        font-size: 0.32rem;
        color: #646f7f;
        text-align: center;
        border: 1px solid #d4dbe8;
        border-radius: 0.03rem;
        transition: all .3s ease;
    }
    &.active a{
        color: #fff;
        background-color: #39b7ff;
    }
    &.subscribe-recommend a{
        color: #c5c7ce;
        background-color: #f1f3f4;
    }
}
</style>
