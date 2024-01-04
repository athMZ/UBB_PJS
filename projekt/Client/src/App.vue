<script setup lang="ts">
import Header from './components/Header.vue';
import MainGrid from './components/MainGrid.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
    <Header></Header>
    <MainGrid></MainGrid>
    <Footer></Footer>
  </div>
</template>

<style scoped>
div {
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 3.125rem;

  font-weight: 400;
}
</style>
