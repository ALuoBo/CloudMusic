<template>
  <div>
    <TopNav/>
    <Swiper class="swiper"/>
  </div>
</template>

<script setup>
import TopNav from './header/TopNav.vue'
import Swiper from './header/Swiper.vue';
</script>

<style scoped>
  div {
    width: 12rem;
  }
  .swiper {
    margin-top: .4rem;
  }
</style>