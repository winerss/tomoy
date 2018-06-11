<template>
    <div id="equipmentList">
      <div class="box">
        <mt-header title="智能插座">
          <mt-button @click="backPage()" slot="left" icon="back"></mt-button>
        </mt-header>
      <div class="container">
        <mt-cell v-for="(item, index) in lists" :key="index.id" :title="item.name">
          <img :src="item.images" alt="">
        </mt-cell>
      </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/list';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/list.scss';
</style>
