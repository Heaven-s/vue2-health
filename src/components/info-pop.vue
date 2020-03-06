<template>
<transition name="error">
    <div v-show="show" class="error-pop-box">
        <div class="error-pop">{{message}}</div>
    </div>
</transition>
</template>

<script>

export default {
    props: {
        'show': {
            type: Boolean,
            required: true
        },
        'message': {
            type: String,
            required: true
        }
    },
}
</script>
