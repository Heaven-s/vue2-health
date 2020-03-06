<template>
<div class="figure-item">
    <img class="figure-img" src="../../assets/images/symptom/man-1.png">
    <i @click="setState('leg')" class="place place-leg"></i>
    <i @click="setState('arm')" class="place place-arm-left"></i>
    <i @click="setState('arm')" class="place place-arm-right"></i>
    <i @click="setState('head')" class="place place-head"></i>
    <i @click="setState('pelvis')" class="place place-pelvis"></i>
    <i @click="setState('chest')" class="place place-chest"></i>
    <i @click="setState('stomach')" class="place place-stomach"></i>
    <img v-if="statePerson=='leg'" class="figure-cur" src="../../assets/images/symptom/man-leg.png">
    <img v-if="statePerson=='arm'" class="figure-cur" src="../../assets/images/symptom/man-arm.png">
    <img v-if="statePerson=='head'" class="figure-cur" src="../../assets/images/symptom/man-head.png">
    <img v-if="statePerson=='pelvis'" class="figure-cur" src="../../assets/images/symptom/man-pelvis.png">
    <img v-if="statePerson=='body'" class="figure-cur" src="../../assets/images/symptom/man-body.png">
    <img v-if="statePerson=='skin'" class="figure-cur" src="../../assets/images/symptom/man-skin.png">
    <img v-if="statePerson=='chest'" class="figure-cur" src="../../assets/images/symptom/man-chest.png">
    <img v-if="statePerson=='stomach'" class="figure-cur" src="../../assets/images/symptom/man-stomach.png">
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
