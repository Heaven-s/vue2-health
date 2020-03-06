<template>
<div class="page-full component-news-detail fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right">
            <i class="icon-shoucang iconfont ac-o"></i>
            <i class="icon-fenxiang iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <!-- 详情标题 -->
        <div class="detail-head detail-bg border-b">
            <h2 class="detail-head-title" v-text="item.name"></h2>
            <p v-if="item.alias" class="detail-head-small" v-text="'别名：'+item.alias"></p>
            <p v-if="item.common_name" class="detail-head-small" v-text="'俗称：'+item.common_name"></p>
            <p v-if="item.advice" class="detail-head-small" v-text="'就诊建议：'+item.advice"></p>
        </div>
        <!-- 跳转模块 -->
        <div class="detail-relevant border-b">
            <ul class="detail-relevant-box fx">
                <li class="relevant-item fx-1 fx-c fx-column"><i class="flex-icon icon-1"></i>辅助疗法</li>
                <li class="relevant-item fx-1 fx-c fx-column"><i class="flex-icon icon-2"></i>热门医生</li>
                <li class="relevant-item fx-1 fx-c fx-column"><i class="flex-icon icon-3"></i>附近医院</li>
                <li class="relevant-item fx-1 fx-c fx-column"><i class="flex-icon icon-4"></i>相关药品</li>
            </ul>
        </div>
        <!-- 详情内容 -->
        <div class="detail-info">
            <div class="info-group">
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">症状描述：</div>
                    <p class="info-sub-dd" v-html="item.symptom || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">疾病简介：</div>
                    <p class="info-sub-dd" v-html="item.description || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">患者须知：</div>
                    <p class="info-sub-dd" v-html="item.expect || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">流行病学统计：</div>
                    <p class="info-sub-dd" v-html="item.how_common || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">患病风险因素：</div>
                    <p class="info-sub-dd" v-html="item.risk_factors || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">治疗方法：</div>
                    <p class="info-sub-dd" v-html="item.treatment || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">自我护理：</div>
                    <p class="info-sub-dd" v-html="item.self_care || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">疾病恶化因素：</div>
                    <p class="info-sub-dd" v-html="item.made_worse_by || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">何时就医：</div>
                    <p class="info-sub-dd" v-html="item.disease_see_doctor || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">建议问医生的问题：</div>
                    <p class="info-sub-dd" v-html="item.ask_questions || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">一般诊断方法：</div>
                    <p class="info-sub-dd" v-html="item.diagnose || '--'"></p>
                </div>
                <!-- 分点内容 -->
                <div class="info-sub">
                    <div class="info-sub-h">疾病分类：</div>
                    <p class="info-sub-dd" v-html="item.title || '--'"></p>
                </div>
            </div>
        </div>
    </div>
    <!-- 相关资讯 -->
    <div v-if="hasInformations" class="detail-bg detail-advice">
        <div class="head-more s-icon-next icon-after"><a :href="'javascript:;'" class="cell">相关资讯</a></div>
        <ul class="advice-con-list">
            <li v-for="(value, key) in informations" class="list-cell border-b">
                <a :href="'http://192.168.99.40:8001/news?id='+value.id" class="cell">
                    <div class="fx">
                        <img :src="value.image" class="cell-img" />
                        <div class="fx-cell">
                            <p class="cell-tit" v-text="value.title"></p>
                            <div class="tr">
                                <i class="s-icon icon"></i><span class="read-num" v-text="value.number"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
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
                title: '疾病详情'
            }
        }
    },
    activated (){
    },
    deactivated (){
    },
    methods: {
    },
    computed: mapGetters({
        backPath: 'backPath',
        item: 'diseaseItem',
        hasInformations: 'hasInformations',
        informations: 'informations'
    }),
    created () {
        this.$store.dispatch('set_disease')
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-full{
    background-color: #fff;
}

.detail-relevant{
}
.relevant-item{
    height: 1.9rem;
    color: @color_l;
}

.flex-icon {
    display: block;
    width: 0.88rem;
    height: 0.88rem;
    margin-bottom: 0.18rem;
    background-size: 0.88rem 0.88rem;
}

.flex-icon.icon-1 {
    background-image: url(../../assets/images/disease/therapy@2x.png);
}

.flex-icon.icon-2 {
    background-image: url(../../assets/images/disease/doctor@2x.png);
}

.flex-icon.icon-3 {
    background-image: url(../../assets/images/disease/hospital@2x.png);
}

.flex-icon.icon-4 {
    background-image: url(../../assets/images/disease/drug@2x.png);
}

/*页面其他小图标*/
.s-icon {
    margin-right: .06rem;
    width: 0.26rem;
    height: 0.2rem;
    vertical-align: middle;
}


/*图标">"*/

.s-icon-next:after {
    content: '';
    width: 0.16rem;
    height: 0.28rem;
    position: absolute;
    right: 0.2rem;
    top: 0.02rem;
    cursor: pointer;
}


/*症状详情*/

.info-sub-dd {
    color: @color;
    line-height: 0.52rem;
}


/*相关资讯*/

.detail-advice {
    margin-top: .32rem;
    padding-top: 0.2rem;
}

.head-more {
    color: @color;
    font-size: .26rem;
    height: .4rem;
    line-height: .4rem;
    position: relative;
    padding: 0 .2rem;
    overflow: hidden;
}

.detail-advice .cell {
    display: block;
    width: 100%;
    color: @color;
}

.list-cell .cell {
    color: @color_l;
}

.list-cell {
    padding: 0 .2rem;
    position: relative;
}

.list-cell .cell-img {
    width: 1.6rem;
    height: 1.2rem;
    border-radius: .05rem;
    margin: .26rem .23rem .26rem 0;
}

.list-cell .fx-cell {
    flex: 1;
    margin-top: .26rem;
    line-height: .4rem;
    font-size: .3rem;
}

.list-cell .cell-tit {
    overflow: hidden;
    height: 0.91rem;
    line-height: 0.45rem;
    font-size: .3rem;
    color: #3d4550;
    .elsn();
}

.list-cell .fx-cell .tr {
    position: absolute;
    right: .2rem;
    bottom: .17rem
}

.list-cell .read-num {
    color: @color_s;
    font-size: .24rem;
}
</style>
