<template> 
<div class="page-full component-goods fx-column"> 
    <goods-header :type="type"></goods-header>
    <div class="page-content fx-1">
        <section>
            <ul class="goods-items clearfix">
                <router-link tag="li" to="/news/detail/168" class="goods-item">
                    <div class="goods-item-cell">
                        <img src="../../assets/images/goods/goods-2.jpg" alt="正宗红枸杞 中宁苟杞王">
                        <div class="goods-detail">
                            <p class="goods-name">正宗红枸杞 中宁苟杞王</p>
                            <p class="goods-des">抵抗力差的人最适宜吃枸杞，每天吃一点，才能见效</p>
                        </div>
                    </div>
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="goods-item">
                    <div class="goods-item-cell">
                        <img src="../../assets/images/goods/goods-3.jpg" alt="正宗红枸杞 中宁苟杞王">
                        <div class="goods-detail">
                            <p class="goods-name">水果牛奶劲爆炸奶花</p>
                            <p class="goods-des">早晨一杯果汁牛奶对健康大有裨益</p>
                        </div>
                    </div>
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="goods-item">
                    <div class="goods-item-cell">
                        <img src="../../assets/images/goods/goods-4.jpg" alt="正宗红枸杞 中宁苟杞王">
                        <div class="goods-detail">
                            <p class="goods-name">按摩椅多功能电动太空舱</p>
                            <p class="goods-des">抵抗力差的人最适宜吃枸杞，每天吃一点，才能见效</p>
                        </div>
                    </div>
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="goods-item">
                    <div class="goods-item-cell">
                        <img src="../../assets/images/goods/goods-1.jpg" alt="正宗红枸杞 中宁苟杞王">
                        <div class="goods-detail">
                            <p class="goods-name">正宗红枸杞 中宁苟杞王</p>
                            <p class="goods-des">抵抗力差的人最适宜吃枸杞，每天吃一点，才能见效</p>
                        </div>
                    </div>
                </router-link>
            </ul>
        </section>
    </div>
    <app-nav></app-nav>
</div>
</template>

<script>

import appNav from '../../components/app-nav.vue'
import goodsHeader from '../../components/goods-header.vue'
export default {
  components: { appNav, goodsHeader },
  data () {
    return {
        type: 2
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.page-content{
    background-color: #f1f4f4;
}
.goods-items{
    padding: 0.1rem;
    & .goods-item{
        width: 50%;
        float: left;
    }
}
.goods-item-cell{
    margin: 0.1rem;
    font-size: 0;
    background-color: #fff;
    border-radius: 10px;
    & img{
        width: 100%;
    }
}
.goods-detail {
    font-size: 0.2rem;
    color: @color_m;
    padding: 0.2rem 0.15rem;
    & .goods-des {
        line-height: 0.3rem;
        height: 0.6rem;
        overflow: hidden;
    }
    & .goods-name {
        font-size: 0.22rem;
        color: @color_l;
        line-height: 1.2em;
        height: 1.2em;
        overflow: hidden;
    }
}
</style>
