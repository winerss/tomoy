<template>
  <div id="home">
    <div id="serve_detail">
      <mt-navbar v-model="selected_detail">
        <mt-tab-item :id="index" v-for="(item, index) in roomArr" :key="index">{{ item }}</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected_detail">
        <mt-tab-container-item :id="index" v-for="(item, index) in roomArr" :key="index">
          <div class="banner"></div>
          <div class="module-entry">
            <ul class="list">
              <li class="list-item" :class="{'shake': item.isShake}" v-for="(item, index) in listIconArr" :key="index" @touchstart="showDeleteButton(index)" @touchend="clearLoop">
                <img class="item-icon" :src="item.icon" alt="" v-if="item.isAdd" @click="toPage('/home/addeq')">
                <img class="item-icon" :src="item.icon" alt="" v-else>
                <h3 class="item-text">{{ item.text }}</h3>
                <img class="del-icon" v-if="item.text && item.showDel" src="../../assets/images/home/delete.png" alt="" @click="delListItem(index)">
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/home/';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/home/index.scss';
</style>
