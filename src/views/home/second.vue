<template>
    <div class="second">
        <div style="height: 40px; line-height: 40px; background: green; color: #fff;">{{ test }}</div>
        <div>{{ data.msg }}</div>
    </div>
</template>

<script>
import controller from '@/controller/home/second';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/home/index.scss';
</style>
