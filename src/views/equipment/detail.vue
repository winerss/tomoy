<template>
    <div id="equipmentDetail">
      <div class="box">
        <mt-header title="小智主机">
          <mt-button @click="backPage()" slot="left" icon="back"></mt-button>
          <img slot="right" @click="toPage('/equipment/addEquipment')" :src="images.add">
        </mt-header>
      <div class="container">
        <mt-cell v-for="(item, index) in lists" :key="index.id" :title="item.name">
          <span v-show="item.status" class="oneline">在线</span>
          <span v-show="!item.status" class="outline">离线</span>
          <img @click="toPage('/equipment/property')" :src="item.images" alt="">
        </mt-cell>
      </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/detail';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/detail.scss';
</style>
