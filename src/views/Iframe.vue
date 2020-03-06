<template>
<div class="page-full component-iframe fx-column"> 
    <app-header :title="iframeInfo.title"></app-header>
    <div class="iframe-wrapper fx-1">
        <iframe class="full-inner" style="overflow:hidden;" :src='iframeInfo.url' frameborder="0"></iframe>
    </div>
</div>
</template>

<script>
import appHeader from '../components/app-header.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: { appHeader },
    data () {
        return {
            isScale: false
        }
    },
    computed: {
        ...mapGetters([
          'iframeInfo'
        ])
    },
    deactivated (){
        // 华为UC缩小时，页面变形
        if(this.isScale && !(/HUAWEI/i.test(navigator.userAgent) && /UCBrowser/i.test(navigator.userAgent))){
            setTimeout(() => {
                document.querySelector('html').style.fontSize = '100px';
                document.querySelector('meta[name="viewport"]').content = 'initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, width=device-width, user-scalable=0';
            }, 600)
        }else if(this.isScale){
            this.$store.dispatch('ifrmae_hwuc', true);
        }
    },
    activated () {
        setTimeout(() => {
            var dom = document.querySelector('html');
            if(dom.style.fontSize == '100px'){
                this.isScale = true;
                dom.style.fontSize = '50px'
                document.querySelector('meta[name="viewport"]').content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
            }
        }, 600)
    }
}
</script>
<style lang="less" scoped>
    .iframe-wrapper{
        width: 100%;
        height: 100%;
        -webkit-overflow-scrolling: touch; 
        overflow-y: auto;
    }
</style>
