<template>
  <div class="equipment">
    <navbar></navbar>
    <ul class="list">
      <li class="list-item border_bottom" v-for="(item, index) in listArr" :key="index">
        <div @click="toPage(`/home/addcopy?${item.query}=${item.query}`)" v-if="item.query === 'copyRm'">
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
        <div @click="toPage(`/home/addscene?${item.query}=${item.query}`)" v-else-if="item.query === 'scene'">
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
        <div @click="toPage(`/home/details?${item.query}=${item.query}`)" v-else>
          <img :src="item.icon" alt="" class="list-icon">
          <span class="list-title">{{ item.title }}</span>
          <img :src="item.arrow" alt="" class="list-arrow">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import controller from '@/controller/home/addequipment/';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/home/addequipment/index.scss';
</style>
