<template> 
<div class="page-full component-drug-list fx-column"> 
    <div class="druglist-header">
        <app-header :title="appHeader.title">
            <i slot="right" class="icon-chaxun iconfont ac-o"></i>
        </app-header>
        <div class="filter-top fx">
            <div class="fx-1 fx-c filter-item" :class="{active: showDrug}" @click="showOtc = false, showType = false, showDrug = !showDrug">药品类别<i class="icon-sanjiaoxia iconfont"></i></div>
            <div class="fx-1 fx-c filter-item" :class="{active: showOtc}" @click="showOtc = !showOtc, showType = false, showDrug = false">OTC/非OTC<i class="icon-sanjiaoxia iconfont"></i></div>
            <div class="fx-1 fx-c filter-item" :class="{active: showType}" @click="showOtc = false, showType = !showType, showDrug = false">医保类别<i class="icon-sanjiaoxia iconfont"></i></div>
        </div>
    </div>
    <div class="page-content fx-1">
        <ul class="druglist-content">
            <li v-for="(item, index) in drugs" v-bind:key="index" @click="toPage(item)" class="drug-item fx-ac ac">
                <div class="fx-1">{{item.name}}</div><span>{{item.num}}</span>
            </li>
        </ul>
    </div>
    <transition name="downup">
        <div v-show="showDrug" class="filter-content filter-drug">
        <ul class="fx-column">
            <li v-for="(item, index) in drugItems" v-bind:key="index" @click="selectItem(item)" :class="{active: item.selected}" class="fx-1 fx-ac ac"><p class="fx-1">{{item.name}}</p><span class="filter-select fx-c" :class="{active: item.selected}"><i class="iconfont" :class="{'icon-gou': item.selected}"></i></span></li>
        </ul>
    </div>
    </transition>
    <transition name="downup">
    <div v-show="showOtc" class="filter-content filter-type">
        <ul class="fx-column">
            <li v-for="(item, index) in otcItems" v-bind:key="index" @click="selectItem(item)" :class="{active: item.selected}" class="fx-1 fx-ac ac"><p class="fx-1">{{item.name}}</p><span class="filter-select fx-c" :class="{active: item.selected}"><i class="iconfont" :class="{'icon-gou': item.selected}"></i></span></li>
        </ul>
    </div>
    </transition>
    <transition name="downup">
    <div v-show="showType" class="filter-content filter-type">
        <ul class="fx-column">
            <li v-for="(item, index) in typeItems" v-bind:key="index" @click="selectItem(item)" :class="{active: item.selected}" class="fx-1 fx-ac ac"><p class="fx-1">{{item.name}}</p><span class="filter-select fx-c" :class="{active: item.selected}"><i class="iconfont" :class="{'icon-gou': item.selected}"></i></span></li>
        </ul>
    </div>
    </transition>
    <div v-show="showOtc || showType || showDrug" @click="showOtc = false, showType = false, showDrug = false" class="mask"></div>
</div>
</template>

<script>
import IScroll from "iscroll";
import Utils from "../../utils";
import { mapGetters, mapActions } from "vuex";
import appHeader from "../../components/app-header.vue";

export default {
  components: { appHeader },
  data() {
    return {
      drugItems: [
        { name: "西药", selected: false },
        { name: "中成药", selected: false },
        { name: "其它类", selected: false }
      ],
      otcItems: [
        { name: "处方药", selected: false },
        { name: "OTC甲", selected: false },
        { name: "OTC乙", selected: false },
        { name: "未知类别", selected: false }
      ],
      typeItems: [
        { name: "医保甲", selected: false },
        { name: "医保乙", selected: false },
        { name: "非医保", selected: false },
        { name: "未知类别", selected: false }
      ],
      drugs: [
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        },
        {
          name: "芬布芬片",
          num: 8
        }
      ],
      showOtc: false,
      showDrug: false,
      showType: false,
      appHeader: {
        title: "药品清单"
      }
    };
  },
  methods: {
    selectItem: function(item, index) {
      item.selected = !item.selected;
    },
    toPage: function(item) {
      this.$router.push({ path: "drugs" });
    }
  },
  computed: {},
  created() {}
};
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
.component-drug-list {
  background-color: #f2f3f5;
}
.druglist-header {
  position: relative;
  z-index: 10;
  font-size: 0.26rem;
  color: #a6dfff;
  background-color: #39b7ff;
}
.druglist-content {
  background-color: #fff;
}
.filter-top {
  height: 0.88rem;
  font-size: 0.26rem;
}
.filter-item {
  color: #a6dfff;
  border-bottom: 0.05rem solid transparent;
  transition: all 0.25s ease-in;
  & .iconfont {
    margin-left: 0.1rem;
    font-size: 0.12rem;
    transition: all 0.25s ease-in;
  }
  &.active {
    color: #fff;
    border-bottom-color: #a6bfff;
    & .iconfont {
      transform: rotate(180deg);
    }
  }
}
.filter-content {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 1.76rem;
  width: 100%;
  max-height: 60%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  & li {
    padding: 0 0.2rem;
    height: 0.88rem;
    font-size: 0.28rem;
    color: #3d4550;
    border-bottom: 1px solid #e7ecf2;
    &.active {
      color: #00a2ff;
      & .filter-select {
        background-color: #39b9ff;
      }
    }
    & .filter-select {
      width: 0.32rem;
      height: 0.32rem;
      font-size: 0.12rem;
      color: #fff;
      border-radius: 0.02rem;
      background-color: #dbdde2;
    }
  }
}
.filter-drug {
  height: 3*0.88rem;
  & ul {
    height: 3*0.88rem;
  }
}
.filter-type {
  height: 4*0.88rem;
  & ul {
    height: 4*0.88rem;
  }
}
.drug-item {
  height: 0.88rem;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  color: #3d4550;
  border-bottom: 0.01rem solid #e7ecf2;
  & span {
    font-size: 0.22rem;
    color: #9fa1a9;
  }
}
</style>
