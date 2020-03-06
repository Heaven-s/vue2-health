<template>
<footer class="footer">
    <ul class="footer-box fx">
        <li v-for="item in menuList" class="fx fx-1">
            <router-link class="footer-item fx-c ac" @click="set_menu_active($index)" :to="{ path: item.path}"><div class="tc"><i class="iconfont" :class="item.icon"></i><br>{{item.text}}</div></router-link>
        </li>
    </ul>
</footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters({
    	menuList: 'menuList'
  	}),
	methods: mapActions([
    	'set_menu_active'
  	])
}
</script>
