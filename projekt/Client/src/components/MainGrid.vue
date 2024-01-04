<script setup lang="ts">
import GridElement from './GridElement.vue';
import szkoleniaData from '../../szkoleniaDb.json';
</script>

<template>
    <div id="CardGrid">
        <GridElement v-for="n in szkoleniaData" :data="n"></GridElement>

        <div id="emptyDataSet" v-if="Object.keys(szkoleniaData).length == 0">

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="201" viewBox="0 0 200 201" fill="none">
                    <g clip-path="url(#clip0_53_313)">
                        <path
                            d="M56.75 2.325C57.9213 1.15664 59.5081 0.500351 61.1625 0.5L138.838 0.5C140.492 0.500351 142.079 1.15664 143.25 2.325L198.175 57.25C199.343 58.4213 200 60.0081 200 61.6625V139.338C200 140.992 199.343 142.579 198.175 143.75L143.25 198.675C142.079 199.843 140.492 200.5 138.838 200.5H61.1625C59.5081 200.5 57.9213 199.843 56.75 198.675L1.825 143.75C0.656638 142.579 0.000351487 140.992 0 139.338L0 61.6625C0.000351487 60.0081 0.656638 58.4213 1.825 57.25L56.75 2.325ZM63.75 13L12.5 64.25V136.75L63.75 188H136.25L187.5 136.75V64.25L136.25 13H63.75Z"
                            fill="#D43136" />
                        <path
                            d="M87.525 138C87.525 136.358 87.8483 134.733 88.4765 133.216C89.1047 131.7 90.0255 130.322 91.1862 129.161C92.3469 128 93.7249 127.08 95.2415 126.452C96.7581 125.823 98.3835 125.5 100.025 125.5C101.667 125.5 103.292 125.823 104.809 126.452C106.325 127.08 107.703 128 108.864 129.161C110.025 130.322 110.945 131.7 111.574 133.216C112.202 134.733 112.525 136.358 112.525 138C112.525 141.315 111.208 144.495 108.864 146.839C106.52 149.183 103.34 150.5 100.025 150.5C96.7098 150.5 93.5304 149.183 91.1862 146.839C88.842 144.495 87.525 141.315 87.525 138ZM88.75 62.9375C88.5836 61.3605 88.7505 59.7661 89.24 58.2578C89.7295 56.7496 90.5307 55.361 91.5915 54.1823C92.6523 53.0037 93.9491 52.0612 95.3977 51.416C96.8462 50.7709 98.4143 50.4375 100 50.4375C101.586 50.4375 103.154 50.7709 104.602 51.416C106.051 52.0612 107.348 53.0037 108.409 54.1823C109.469 55.361 110.271 56.7496 110.76 58.2578C111.25 59.7661 111.416 61.3605 111.25 62.9375L106.875 106.775C106.728 108.497 105.94 110.101 104.667 111.27C103.394 112.439 101.728 113.088 100 113.088C98.2716 113.088 96.6062 112.439 95.3331 111.27C94.06 110.101 93.272 108.497 93.125 106.775L88.75 62.9375Z"
                            fill="#D43136" />
                    </g>
                    <defs>
                        <clipPath id="clip0_53_313">
                            <rect width="200" height="200" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <h2>Nie znaleziono szkoleń</h2>
        </div>

    </div>
</template>

<style scoped>
#CardGrid {
    display: flex;
    flex-direction: row;
    padding: 0.625rem;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.5rem;
    align-self: stretch;
    flex-wrap: wrap;
}

#emptyDataSet {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem;

    background-color: rgba(255, 255, 255, 0.507);
    border-radius: 1rem;
}

#emptyDataSet h2 {
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.2rem;
}
</style>