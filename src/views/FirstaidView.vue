<template> 
<div class="page-full component-firstaid fx-column"> 
    <app-header :title="appHeader.title"></app-header>
    <section class="firstaid-search-box ac">
        <a class="search" href="javascript:;">
            <div class="search-content fx">
                <i class="icon-sousuo iconfont"></i>
                <span class="search-text">搜索</span>
            </div>
        </a>
    </section>
    <div class="page-content fx-1">
        <ul class="firstaid-content">
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">急救包准备常识</span><i class="iconfont icon-dianzan"></i>0</router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">成人徒手心肺复苏术</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">休克急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">头部外伤急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">中风急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">急救包准备常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">成人徒手心肺复苏术</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">休克急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">头部外伤急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">中风急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">急救包准备常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">成人徒手心肺复苏术</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">休克急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">头部外伤急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">中风急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">急救包准备常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">成人徒手心肺复苏术</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">休克急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">头部外伤急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
            <router-link tag="li" to="firstaid/detail/1" class="fx-ac"><span class="fx-1">中风急救常识</span><i class="iconfont icon-dianzan"></i>0
            </router-link>
        </ul>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appHeader from "../components/app-header.vue";

export default {
  components: { appHeader },
  data() {
    return {
      appHeader: {
        title: "急救常识"
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.firstaid-search-box {
  padding: 0.18rem 0.2rem;
  background-color: #f2f3f5;
  & .search {
    color: #c5c7ce;
    background-color: #fff;
  }
}
.firstaid-content {
  & li {
    padding: 0 0.2rem;
    height: 0.88rem;
    font-size: 0.22rem;
    color: #9fa1a9;
    border-bottom: 1px solid #e7ecf2;
  }
  & .iconfont {
    font-size: 0.28rem;
    margin-right: 0.1rem;
  }
  & span {
    font-size: 0.28rem;
    color: #3d4550;
  }
}
</style>
