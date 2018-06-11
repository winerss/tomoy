<template>
  <div id="roomlist">
    <mt-header title="房间列表">
      <router-link to="/further" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/further/management" slot="right">
        <mt-button  ><img src="../../../assets/images/further/room/addroom-icon.png" alt=""></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="row">
        <div class="el_col" v-for="(item,index) in items" :key="index">
          <img :src="item.listImg" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/roomlist'

export default controller
</script>

<style scoped lang='scss'>
@import '../../../assets/style/further/roomlist.scss';
</style>
