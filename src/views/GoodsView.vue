<template> 
<div class="page-full component-goods fx-column"> 
    <goods-header :type="type"></goods-header>
    <div class="page-content fx-1">
        <section>
            <ul class="recom-items">
                <router-link tag="li" to="/news/detail/168" class="recom-item">
                    <img src="../assets/images/goods/goods-b1.jpg" alt="" class="recom-pic">
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="recom-item">
                    <img src="../assets/images/goods/goods-b2.jpg" alt="" class="recom-pic">
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="recom-item">
                    <img src="../assets/images/goods/goods-b3.jpg" alt="" class="recom-pic">
                </router-link>
                <router-link tag="li" to="/news/detail/168" class="recom-item">
                    <img src="../assets/images/goods/goods-b2.jpg" alt="" class="recom-pic">
                </router-link>
            </ul>
        </section>
    </div>
    <app-nav></app-nav>
</div>
</template>

<script>

import appNav from '../components/app-nav.vue'
import goodsHeader from '../components/goods-header.vue'
export default {
  components: { appNav, goodsHeader },
  data () {
    return {
        type: 0
    }
  },
  computed: {
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
.recom-items{
    font-size: 0;
    padding-top: 0.2rem;
    & .recom-item{
        margin: 0 0.2rem 0.2rem;
    }
    & .recom-pic{
        width: 100%;
    }
}
.recom-item-cell .recom-pic {
    width: 100%;
}
</style>
