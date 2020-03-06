<template>
<div @click="closePerson($event)" v-show="show" class="pop">
    <div class="person-box">
        <i class="triangle-icon"></i>
        <div class="person-box-wrapper">
            <!-- <transition-group class="person-box-scroller" tag="ul" name="expand"> -->
            <ul class="person-box-scroller">
                <li v-for="(item, index) in items" :key="index" class="person-item ac">
                    <div class="person-item-scroller" :class="{'cur': item.selected}">
                        <div class="person-item-left" @click="selectOne(index)"><i class="person-item-icon"></i>{{item.name}}<span class="person-item-r">{{item.gender == '1' ? '男':'女'}}/{{item.age}}岁</span></div><a href="javascript:void(0)" class="person-item-del ac" @click="delOne(index)"><i class="iconfont icon-shanchu"></i></a></div>
                </li>
            </ul>
        </div>
        <a class="person-add" @click="addOne()" href="javascript:void(0);"><span class="person-add-icon"></span>添加人物</a>
    </div>
</div>
</template>

<script>

export default {
    props: ['show', 'infoShow', 'items'],
	methods: {
        addOne: function() {
            this.$emit('add-info');
        },
        delOne: function(index) {
            this.$emit('del-person', index);
        },
        closePerson: function(event) {
            if (event.target.className == 'pop') {
                this.$emit('close-person');
            }
        },
        selectOne: function(i) {
            if(!this.items[i]['selected']){
                this.$emit('set-person', i);
            }else{
                this.$emit('close-person');
            }
        }
    },
    mounted () {
        this.$emit('init-persons');
    }
}
</script>
