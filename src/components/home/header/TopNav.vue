<script setup>
import { getBanner } from '@/request/api/home.js'
import { onMounted } from 'vue';

const state = reactive({
    images: []
})

onMounted(async () => {
    const res = await getBanner()
    state.images = res.data.banners
})
</script>
<template>
    <div class="nav-container">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hanbaobao"></use>
        </svg>
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
    </div>
</template>
<style scoped>
.nav-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 1rem;
    padding: .2rem;
}

.nav-container span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
}

.active {
    font-weight: bold;
}
</style>