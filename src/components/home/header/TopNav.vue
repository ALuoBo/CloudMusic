<script setup>
</script>
<template>
    <div class="nav-container">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hanbaobao"></use>
        </svg>
        <span>我的</span>
        <span>发现</span>
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
    height: .2rem;
    padding: .1rem;
    gap: 0.05rem;
}

.nav-container span {
    display: inline-block;
    width: 0.6rem;
}

</style>