<script setup lang="ts">

const props = withDefaults(
    defineProps<{
        text?: string,
        type?: 'pink' | 'tip' | 'error' | 'info'
    }>(), {
    text: '',
    type: 'pink',
}
)
</script>
<template>
    <span class='highlight' :class="[ `highlight-type-${props.type}` ]">
        <slot>{{ props.text }}</slot>
    </span>
</template>

<style scoped>
.highlight {
    border-radius: 4px;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
}

.highlight-type-pink {
    background: #fddcf7;
}
</style>