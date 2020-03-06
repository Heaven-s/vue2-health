<template>
<div class="page-full component-news-detail fx-column"> 
    <app-header :title="appHeader.title">
        <div slot="right">
            <i class="icon-shoucang iconfont ac-o"></i>
            <i class="icon-fenxiang iconfont ac-o"></i>
        </div>
    </app-header>
    <div class="page-content fx-1">
        <div class="d-header">
            <h2 class="d-header-t">
            <ul class="tag-group">
                <li class="tag-i" v-text="ingredient"></li>
                <li class="tag-i" v-text="prescription"></li>
                <li class="tag-i" v-text="insurance"></li>
            </ul>
            <p class="d-header-tit" v-text="item.general_name || '--'"></p>
        </h2>
            <p class="d-header-d" v-text="'生产厂家：' + item.production_enterprises || '--'"></p>
            <p class="d-header-d" v-text="'药品剂型：' + item.dosage_form || '--'"></p>
            <p class="d-header-d" v-text="'参考价：' + (item.price || '--') + '/' + (item.specification || '--')"></p>
        </div>
        <ul class="d-nav">
            <li class="d-nav-i" @click="type = 1" :class="{ active: type == 1 }">药品概述</li>
            <li class="d-nav-i" @click="type = 2" :class="{ active: type == 2 }">详细说明</li>
        </ul>
        <div class="drug-main">
            <div v-show="type == 1" class="drug-one">
                <div class="drug-item">
                    <strong>主要成分：</strong>
                    <p v-html="item.major_ingredient || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>药品说明：</strong>
                    <p v-html="item._character || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>功能与主治：</strong>
                    <p v-html="item.disease || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>用药禁忌：</strong>
                    <p v-html="item.contraindicant || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>用药方法：</strong>
                    <p v-html="item._usage || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>储存方法：</strong>
                    <p v-html="item.store || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>有效期：</strong>
                    <p v-html="item.period || '--'"></p>
                </div>
                <div v-if="pictures" class="drug-images swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="(item, index) in pictures" class="swiper-slide drug-img"><img src="../../assets/images/aid/default.png" @error="errorImg" /></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                    <!-- 如果需要导航按钮 
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>-->
                </div>
                <div class="drug-footer" v-text="infoText"></div>
            </div>
            <div v-show="type == 2" class="drug-two">
                <div class="drug-item">
                    <strong>批准文号：</strong>
                    <p v-html="item.approval_numbers || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>执行标准：</strong>
                    <p v-html="item.execution_standard || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>适用疾病：</strong>
                    <p v-html="item.for_symptom || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>副作用：</strong>
                    <p v-html="item.poor_reactions || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>注意事项：</strong>
                    <p v-html="item.notes || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>孕妇须知：</strong>
                    <p v-html="item.pregnant_notes || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>儿童须知：</strong>
                    <p v-html="item.children_notes || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>老年人须知：</strong>
                    <p v-html="item.old_notes || '--'"></p>
                </div>
                <div class="drug-item">
                    <strong>药理实验：</strong>
                    <p v-html="item.pharmacological || '--'"></p>
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
                title: '药品详情'
            },
            item: {"id":"33","general_name":"消癌平片","commodity_name":"","spell_name":"","ingredient_label":"2","ingredient":"中成药","price":"￥86.00","prescription_label":"4","prescription":"处方药","insurance_label":"9","insurance":"医保乙类","disease":"食道癌,胃癌,肺癌,大肠癌,宫颈癌,宫颈腺癌,白血病,恶性肿瘤,慢性气管炎,支气管哮喘","dosage_form":"片剂(薄膜衣片)","dosage":"1","_character":"糖衣片，除去包衣后显棕褐色；气微，味苦。","major_ingredient":"抗癌有效成分是乌骨藤","auxiliary_ingredient":"","for_symptom":"本品用于抗癌,消炎,平喘。用于食道癌﹑胃癌﹑肺癌,对大肠癌﹑宫颈癌﹑宫颈腺癌、白血病等多种恶性肿瘤,亦有一定疗效,亦可配合放疗﹑化疗及手术后治疗,并用于治疗慢性气管炎和支气管哮喘。","specification":"0.3g。","poor_reactions":"个别病例使用乌骨藤制剂后可出现食欲减退﹑白细胞下降﹑转氨酶升高﹑发热﹑关节疼痛﹑药物疹等,一般不须特殊处理。","_usage":"口服.一次8-10片,一日3次.","contraindicant":"孕妇忌用。","notes":"个别患者在用药期间有低热，多汗，游走性肌肉，关节疼痛等不适，一般不须特殊处理。","pregnant_notes":"尚不明确","children_notes":"尚不明确","old_notes":"尚不明确","drug_interactions":"如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。","pharmacological":"1.迅速直达病灶，抑DNA和RNA的合成，主动杀灭癌细胞。<br>2.活化机体的免疫细胞（T细胞，巨噬细胞，自然杀伤细胞）和细胞因子（干扰素，白细胞介素等），增强机体自身杀灭癌细胞的能力，抑制肿瘤细胞的生长和繁殖，并保护正常细胞。<br>3.促进癌细胞的分化，减少肿瘤的恶化转移。<br>4.对放疗，化疗有减毒增效作用，增强肺瘤细胞对放疗，化疗的敏感性，减轻毒副反应，提高放疗，化疗的效果。<br>5.减轻肿瘤引起的疼痛，腹水等症状，同时可抑制病灶的形成，使癌细胞缺乏营养而灭亡。","pharmacokinetics":"未进行该项实验且无可靠参考文献。","store":"避光密闭保存","period":"36个月","execution_standard":"","approval_numbers":"国药准字Z20054999","production_enterprises":"湖南华纳大药厂有限公司(国产)","avg_score":null,"picture":"default.png"},
            type: 1,
            infoText: '本药品类型不明确，本软件内容均来源于互联网，不承诺其准确性和有效性，仅供参考，请根据医生处方谨慎采用。',
        }
    },
    computed: {
        ingredient: function(){
            var _ingredient = '其他类';
            if (this.item.ingredient == '西药' || this.item.ingredient == '化学药品') {
                _ingredient = '西药';
            } else if (this.item.ingredient == '中成药') {
                _ingredient = '中成药';
            }
            return _ingredient;
        }, 
        prescription: function(){
            var _prescription = '未知';
            if (this.item.prescription == '处方药' || this.item.prescription == '精神药品' || this.item.prescription == '麻醉药品' || this.item.prescription == '放射性药品' || this.item.prescription == '放射药品') {
                _prescription = '处方药';
                this.infoText = '本药品属于处方类药品，本软件内容均来源于互联网，不承诺其准确性和有效性，仅供参考，请根据医生处方谨慎采用。';
            } else if (this.item.prescription == 'OTC甲' || this.item.prescription == 'OTC甲类' || this.item.prescription == 'OTC药品') {
                _prescription = 'OTC甲';
                this.infoText = '本药品属于非处方类药品，本软件内容均来源于互联网，不承诺其准确性和有效性，仅供参考，请根据药师建议谨慎采用。';
            } else if (this.item.prescription == 'OTC乙' || this.item.prescription == 'OTC乙类') {
                _prescription = 'OTC乙';
                this.infoText = '本药品属于非处方类药品，本软件内容均来源于互联网，不承诺其准确性和有效性，仅供参考，请根据药师建议谨慎采用。';
            }
            return _prescription;
        },
        insurance: function(){
            var _insurance = '未知';
            if (this.item.insurance == '医保甲' || this.item.insurance == '医保甲类') {
                _insurance = '医保甲';
            } else if (this.item.insurance == '医保乙' || this.item.insurance == '医保乙类' || this.item.insurance == '医保' || this.item.insurance == '限工伤保险' || this.item.insurance == '限生育保险') {
                _insurance = '医保乙';
            } else if (this.item.insurance == '非医' || this.item.insurance == '非医保') {
                _insurance = '非医保';
            }
            return _insurance;
        },
        pictures: function(){
            var _pictures = null;
            if (this.item.picture) {
                _pictures = this.item.picture.split(',');
            }
            return _pictures;
        }
    },
    methods: {
        errorImg: function (event) {
            var _this = event.target;
            if (_this.retry && _this.src) {
                return;
            } else {
                _this.retry = true;
                _this.src = null;
                _this.src = 'images/default.png';
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.drug-bg{
    background-color: @bg_main;
}

.d-header{
    padding: 0.32rem 0.2rem;
    overflow: hidden;
    background-color: #fff;
    & .tag-group{
        overflow: hidden;
        float: right;
        margin-top: 0.02rem;
    }
}
.d-header-t{
    margin-bottom: 0.2rem;
    line-height: 1.25em;
    font-size: 0.34rem;
    font-weight: bold;
    color: @color_l;
}
.d-header-d{
    margin-bottom: 0.12rem;
    line-height: 1.2em;
    font-size: 0.24rem;
    color: @color_s;
    &:last-child{
        margin-bottom: 0;
    }
}

.tag-group{
    .clearfix()
}
.tag-i{
    float: left;
    margin-left: 0.1rem;
    padding: 0.06rem;
    font-size: 0.2rem;
    font-weight: normal;
    line-height: 1;
    color: #999;
    text-align: center;
    border: 1px solid #999;
}

.d-nav{
    height: 1.02rem;
    border: 1px solid @bg_bd;
    display: flex;
    background-color: #fff;
}
.d-nav-i{
    display: flex;
    flex: 1;
    height: 100%;
    font-size: 0.32rem;
    color: @color_l;
    justify-content: center;
    align-items: center;
    border-bottom: .04rem solid transparent;
    &.active{
        color: @color_b;
        border-color: @bg;
    }
}

.drug-main{
    padding: 0.28rem 0.2rem 0 0.2rem;
    font-size: 0.28rem;
    background-color: @bg_cont;
}
.drug-item{
    padding-bottom: 0.3rem;
    line-height: 0.5rem;
    & strong{
        font-weight: bold;
        color: @color_l;
    }
}

.drug-images{
    margin: 0 -0.2rem;
    padding: 0.4rem 0.2rem;
    text-align: center;
    background-color: #fff;
}
.drug-footer{
    margin: 0 -0.2rem;
    padding: 0.16rem 0.2rem;
    line-height: 1.4;
    font-size: 0.18rem;
    color: #9fa1a9;
    background-color: @bg_main;
}
.swiper-pagination-bullet-active{
    background: @bg;
}
</style>
