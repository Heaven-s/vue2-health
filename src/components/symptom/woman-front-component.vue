<template>
<div class="figure-item">
    <img class="figure-img" src="../../assets/images/symptom/woman-1.png">
    <i @click="setState('leg')" class="place woman-place-leg"></i>
    <i @click="setState('arm')" class="place woman-place-arm-left"></i>
    <i @click="setState('arm')" class="place woman-place-arm-right"></i>
    <i @click="setState('head')" class="place woman-place-head"></i>
    <i @click="setState('pelvis')" class="place woman-place-pelvis"></i>
    <i @click="setState('chest')" class="place woman-place-chest"></i>
    <i @click="setState('stomach')" class="place woman-place-stomach"></i>
    <img v-if="statePerson=='leg'" class="figure-cur" src="../../assets/images/symptom/woman-leg.png">
    <img v-if="statePerson=='arm'" class="figure-cur" src="../../assets/images/symptom/woman-arm.png">
    <img v-if="statePerson=='head'" class="figure-cur" src="../../assets/images/symptom/woman-head.png">
    <img v-if="statePerson=='pelvis'" class="figure-cur" src="../../assets/images/symptom/woman-pelvis.png">
    <img v-if="statePerson=='body'" class="figure-cur" src="../../assets/images/symptom/woman-body.png">
    <img v-if="statePerson=='skin'" class="figure-cur" src="../../assets/images/symptom/woman-skin.png">
    <img v-if="statePerson=='chest'" class="figure-cur" src="../../assets/images/symptom/woman-chest.png">
    <img v-if="statePerson=='stomach'" class="figure-cur" src="../../assets/images/symptom/woman-stomach.png">
</div>
</template>

<script>

export default {
    props: ['statePerson'],
	methods: {
        setState: function(name) {
            this.$emit('set-state', name);
        }
    }
}
</script>
