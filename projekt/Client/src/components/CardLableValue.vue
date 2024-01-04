<script setup lang="ts">
defineProps<{
    label: string;
    value: string
}>()
</script>

<template>
    <div class="Info">
        <h3>{{ label }}</h3>

        <div class="textBreak">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<style scoped>
.Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
}

h3 {
    color: var(font_primary);
    text-align: center;

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.05rem;
}

p {
    color: var(font_primary);
    text-align: center;

    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.02rem;
}
</style>
