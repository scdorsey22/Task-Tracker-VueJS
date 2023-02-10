<template>
    <v-btn 
        @click="onClick()" 
        :color="color"
        block
        >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    },
}
</script>