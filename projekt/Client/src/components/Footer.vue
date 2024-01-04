<template>
    <div id="footerBar">
        <p>Podstawy Języków Skryptowych - projekt</p>
        <p>|</p>
        <p>Wykonał: Mikołaj Zuziak</p>
        <p>|</p>
        <p>Dane ze strony <a href="https://www.wombb.edu.pl/" target="_blank">RODN WOM Bielsko-Biała</a></p>
    </div>
</template>

<style scoped>
#footerBar {
    width: 100%;

    display: flex;
    flex-direction: row;
    padding: 1.5rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    border-top: 1px solid var(--custom_border);
    background: var(--background);
}

p {
    color: var(--font_primary);
    text-align: center;

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.125rem;
}

a {
    font-size: 1.25rem;
    color: var(--font_primary);
}
</style>