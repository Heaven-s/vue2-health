<template>
<div v-show="infoShow" class="info-pop tc">
    <div class="info-box">
        <div class="info-tip">自诊对象性别、年龄将会对自诊结果有决定性影响。</div>
        <div class="info-text">
            <p class="cf"><span class="info-span">年龄：</span>
                <input type="number" v-model="age" v-on:keyup="ageKeyup" number maxlength="3">
            </p>
            <p class="cf"><span class="info-span">称呼：</span>
                <input type="text" v-model="name" maxlength="50">
            </p>
            <p class="cf"><span class="info-span fl">性别：</span>
                <span class="set-gender fl cf"><span class="fl gender-man" @click="selectGender(true)" :class="{'cur': gender == 1}"><i class="person-item-icon"></i>男</span><span class="fr gender-woman" @click="selectGender()" :class="{'cur': gender == 0}"><i class="person-item-icon"></i>女</span>
                </span>
            </p>
        </div>
        <div class="info-btn-box cf">
            <a @click="cancelAdd" class="info-btn" href="javascript:void(0)">取消</a>
            <a @click="confirmAdd" class="info-btn" href="javascript:void(0)">确定</a>
        </div>
    </div>
    <transition name="error">
        <div v-if="errorShow" class="error-pop">{{message}}</div>
    </transition>
</div>
</template>

<script>

export default {
    props: ['infoShow'],
    data () {
        return {
            errorShow: false,
            message: '', 
            name: '',
            gender: 1,
            age: '',
            selected: true
        }
    },
    watch: {
        errorShow: function(val) {
            if (val) {
                setTimeout(() => {
                    this.errorShow = false;
                }, 1000);
            }
        }
    },
	methods: {
        selectGender: function(flag) {
            if (flag) {
                this.gender = 1;
            } else {
                this.gender = 0;
            }
        },
        cancelAdd: function() {
            this.name = '';
            this.gender = 1;
            this.age = '';
            this.$emit('cancel-add');
            document.activeElement.blur();
        },
        ageKeyup: function() {
            if (this.age > 130) {
                this.errorShow = true;
                this.message = '年龄在0~130之间';
                setTimeout(() => {
                    this.age = '';
                }, 30);
            }
        },
        confirmAdd: function() {
            if (this.age === '') {
                this.errorShow = true;
                this.message = '请填写年龄';
                return;
            }
            if (this.name === '') {
                this.errorShow = true;
                this.message = '请填写称呼';
                return;
            }
            this.$emit('add-person', {
                name: this.name,
                gender: this.gender,
                age: this.age,
                selected: true
            });
            setTimeout(() => {
                this.name = '';
                this.gender = 1;
                this.age = '';
            }, 300);
            document.activeElement.blur();
            return;
        }
    }
}
</script>
