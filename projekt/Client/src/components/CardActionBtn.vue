<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        required: true,
        default: "0"
    }
})

function openPage() {
    let href = `https://rejestracja.wombb.edu.pl/course.html?id=${props.id}`;
    let param = '_blank';
    window.open(href, param);
}

</script>

<template>
    <button class="CardActionBtn" @click="openPage">Więcej</button>
</template>

<style scoped>
.CardActionBtn {
    display: inline-flex;
    padding: 0.8rem 2.8rem;
    justify-content: center;
    align-items: center;

    border-radius: 1.25rem;
    border-color: transparent;
    background: var(--custom_blue);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    color: var(--font_light);
    text-align: center;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.07rem;

    transition: all .2s ease-in;
}

.CardActionBtn:hover,
.CardActionBtn:focus {
    opacity: 0.90;
}

@media (width < 600px) {
    .CardActionBtn {
        padding: 0.6rem 2.4rem;
        font-size: 1rem;
    }
}
</style>
