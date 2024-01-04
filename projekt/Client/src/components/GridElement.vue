<script setup lang="ts">
import type { PropType } from 'vue'
import LocationIcon from './LocationIcon.vue';
import { ISzkolenie } from '../ISzkolenie.ts';
import CardBodyDetails from './CardBodyDetails.vue'
import CardActionBtn from './CardActionBtn.vue'

const props = defineProps({
    data: {
        type: Object as PropType<ISzkolenie>,
        required: true,
        default: {
            kod: 'ABC/XYZ',
            trybRealizacji: 'Mieszany',
            bezplatne: '1',
            dtRozpoczecia: '16.09.2023',
            prowadzacy: 'Kowalski Jan',
            grupa: 'Lorem ipsum',
            id: '123456',
            prowadzacyWyswietlanie: 'Jan Kowalski',
            nazwa: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio ante, feugiat quis urna at, aliquam iaculis ipsum.'
        }
    }
})
</script>

<template>
    <div class="Card">

        <div class="CardHeader">
            <LocationIcon :wariant="data.trybRealizacji"></LocationIcon>
        </div>

        <div class="CardBody">
            <div class="CardBodyName textBreak textBreakHeader">
                <h2>{{ props.data.nazwa }}</h2>
            </div>

            <div class="HorizontalSpacer"></div>

            <CardBodyDetails :Prowadzacy="data.prowadzacyWyswietlanie" :Kategoria="data.grupa" />

            <p class="CardDate">{{ data.dtRozpoczecia }}</p>

            <CardActionBtn :id="data.id" />

        </div>

        <div class="CardFooter">
            <p v-if="new Number(data.bezplatne) == 1" style="color: var(--custom_green)">Bezpłatne</p>
            <p v-if="new Number(data.bezplatne) == 0" style="color: var(--custom_red)">Płatne</p>
        </div>

    </div>
</template>

<style scoped>
.Card {
    --card-height: 25rem;
    --card-width: 25rem;
    --card-padding: 0.625rem;
    --card-item-gap: 0.3rem;
    --card-border-radius: 0.625rem;
    --card-border-thickness: 1px;

    --card-header-width: 100%;

    --card-body-height: 19.5rem;
    --card-body-item-gap: 1rem;
    --card-body-name-min-height: 4em;
    --card-body-name-h2-font-size: 1.2rem;

    --horizontal-spacer-height: 0.079rem;

    --card-date-font-size: 1.25rem;

    --card-footer-p-margin-left: 0.5rem;

    display: flex;
    width: var(--card-width);
    height: var(--card-height);
    padding: var(--card-padding);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--card-item-gap);

    text-align: center;

    border-radius: var(--card-border-radius);
    border-bottom: var(--card-border-thickness) solid var(--custom_border);
    background: var(--background);
    box-shadow: var(--custom_shadow);
}

.CardHeader {
    display: flex;
    width: var(--card-header-width);
    justify-content: flex-end;
}

.CardBody {
    display: flex;
    height: var(--card-body-height);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--card-body-item-gap);
}

.CardBodyName {
    min-height: var(--card-body-name-min-height);
}

.CardBodyName h2 {
    text-align: center;
    font-size: var(--card-body-name-h2-font-size);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--font_primary);
}

.HorizontalSpacer {
    width: 90%;
    height: var(--horizontal-spacer-height);
    background-color: var(--custom_red);
}

.CardDate {
    font-size: var(--card-date-font-size);
    letter-spacing: 0.1rem;
}

.CardFooter {
    display: flex;
    align-self: stretch;
}

.CardFooter p {
    margin-left: var(--card-footer-p-margin-left);
    font-weight: 500;
    text-transform: uppercase;
}

@media (width < 600px) {
    .Card {
        --card-height: 20rem;
        --card-width: 20rem;
        --card-padding: 0.6rem;
        --card-item-gap: 0.1rem;
        --card-border-radius: 0.625rem;
        --card-border-thickness: 1px;

        --card-header-width: 100%;

        --card-body-height: 15.5rem;
        --card-body-item-gap: 0.5rem;
        --card-body-name-min-height: 3em;
        --card-body-name-h2-font-size: 1.1rem;

        --horizontal-spacer-height: 0.079rem;

        --card-date-font-size: 1.2rem;

        --card-footer-p-margin-left: 0.5rem;
    }
}
</style>