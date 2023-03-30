<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
</template>

<script setup>

</script>

<style scoped>
.my-swipe .van-swipe-item {
    width: 100%;
    color: #fff;
    font-size: .4rem;
    line-height: 3rem;
    text-align: center;
    background-color: #39a9ed;
}
</style>