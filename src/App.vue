<template>
    <div id="app">
        <transition name="fade">
        <div v-if="!started" class="app-start">
            <img class="app-start-logo" src="./assets/images/app_logo.png">
            <img class="app-start-text" src="./assets/images/app_logo_txt.png">
        </div>
        </transition>
        <keep-alive v-if="started">
            <router-view id="app-main"></router-view>
        </keep-alive>
    </div>
</template>
<script>

export default {
    data () {
        return {
            started: false
        }
    },
    created () {
        setTimeout(() => {
            this.started = true;
        }, 1400);
        this.$store.dispatch('get_nav');
    }
}
</script>

<style lang="less">
@import "./assets/css/reset.less";
@import "./assets/css/picker.less";
.app-start{
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #f6f7f9;
}
.app-start-logo{
    margin-top: 1rem;
    width: 3.36rem;
    height: 4.14rem;
}
.app-start-text{
    position: absolute;
    left: 50%;
    margin-left: -2.71rem; 
    bottom: .5rem;
    width: 5.4rem;
    height: .85rem;
}
.child-view {
    background-color: #fff;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, .1);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active{
    transition: transform .4s cubic-bezier(.55,0,.1,1);
}
.slide-left-leave-active,
.slide-right-leave-active{
    transition: transform .4s cubic-bezier(.55,0,.1,1) .2s;
}
.slide-left-enter, .slide-right-leave-active {
    transform: translate3d(100%, 0, 0); 
}
.slide-left-leave-active, .slide-right-enter {
    transform: translate3d(-20%, 0, 0);
}
.child-view.slide-right-enter, .child-view.slide-right-enter-active {
    z-index: 8;
}

.page-full {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.full-inner{
    height: 100%;
    width: 100%;
}

.page-content {
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.iScrollIndicator {
    background: rgba(0, 0, 0, 0.15) !important;
}
</style>