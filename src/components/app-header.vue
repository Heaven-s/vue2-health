<template>
<header class="header fx">
    <div class="header-box fx-c fx-1">
        <i @click="toPage" class="icon-fanhui iconfont back-icon ac-o"></i>
        <p class="fx-1 fx-jc">
            <slot name="center">
                <span v-text='title'></span>
            </slot>
        </p>
        <div class="header-icon">
            <slot name="right"></slot>
        </div>
    </div>
</header>
</template>

<script>
import router from '../router'
import { mapGetters, mapActions } from 'vuex'

export default {
	props: {
        'title': {
            type: String,
            required: true
        },
        'backUrl': {
            type: String,
        }
    },
    methods: {
        toPage: function() {
            if(this.backUrl){
                router.push({ path: this.backUrl })
            }else if (window.history.length > 1) {
                router.back()
            }else{
                router.push({ name: 'home'})
            }
        }    
    }
}
</script>
