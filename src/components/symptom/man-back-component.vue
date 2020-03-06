<template>
<div class="figure-item">
    <img class="figure-img" src="../../assets/images/symptom/man-0.png">
    <i @click="setState('back')" class="place place-back"></i>
    <i @click="setState('pelvis')" class="place place-pelvis"></i>
    <img v-if="statePerson=='back'" class="figure-cur" src="../../assets/images/symptom/man-back.png">
    <img v-if="statePerson=='pelvis'" class="figure-cur" src="../../assets/images/symptom/man-pelvis2.png">
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
