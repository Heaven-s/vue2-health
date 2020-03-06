<template>
<header class="goods-header">
    <div class="goods-header-box">
        <ul class="goods-header-items fx">
            <router-link :class="{'active': type == 0}" tag="li" to="/goods" class="goods-header-item fx-1 fx-c">
                <div class="title">精品推荐</div>
            </router-link>
            <router-link :class="{'active': type == 1}" active-class="active" tag="li" to="/goods/eat" class="goods-header-item fx-1 fx-c">
                <div class="title">吃得健康</div>
            </router-link>
            <router-link :class="{'active': type == 2}" active-class="active" tag="li" to="/goods/use" class="goods-header-item fx-1 fx-c">
                <div class="title">用得放心</div>
            </router-link>
        </ul>
    </div>
</header>
</template>

<script>
export default {
	props: ['type']
}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.goods-header{
    width: 100%;
    height: 0.88rem;
    background-color: @bg_header;
    & .goods-header-item{
        height: 0.88rem;
        & .title{
            font-size: 0.3rem;
            color: @color_m;
            border-bottom: 3px solid transparent;
            padding: 0.27rem 0;
        }

        &.active .title{
            color: @color_b;
            border-bottom-color: #39b7ff;
        }
    }
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
