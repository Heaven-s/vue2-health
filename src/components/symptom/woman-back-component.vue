<template>
<div class="figure-item">
    <img class="figure-img" src="../../assets/images/symptom/woman-0.png">
    <i @click="setState('back')" class="place woman-place-back"></i>
    <i @click="setState('pelvis')" class="place woman-place-pelvis"></i>
    <img v-if="statePerson=='back'" class="figure-cur" src="../../assets/images/symptom/woman-back.png">
    <img v-if="statePerson=='pelvis'" class="figure-cur" src="../../assets/images/symptom/woman-pelvis2.png">
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
