<script setup lang="ts">
import CardLableValue from './CardLableValue.vue';

defineProps<{
    Kategoria: string;
    Prowadzacy: string;
}>()
</script>

<template>
    <div class="CardBodyDetails">
        <CardLableValue label="Kategoria" :value="Kategoria" />
        <div class="VerticalSpacer"></div>
        <CardLableValue label="Prowadzący" :value="Prowadzacy" />
    </div>
</template>

<style scoped>
.CardBodyDetails {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.3125rem;
    align-self: stretch;
}

.VerticalSpacer {
    width: 0.0625rem;
    height: 5rem;
    margin: .2rem;
    background-color: var(--font_secondary);
}
</style>