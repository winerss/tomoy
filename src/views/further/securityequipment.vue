<template>
  <div id="securityequipment">
    <mt-header title="安防设备">
      <router-link to="/further/security" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/further/addequipment" slot="right">
        <mt-button  ><img src="../../assets/images/further/room/addroom-icon.png" alt=""></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">主要设备</mt-tab-item>
        <mt-tab-item id="2">其他设备</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="(item,index) in items" :key="index"  :title="item.title">
            <img slot="icon" :src="item.userImg">
            <mt-switch v-model="item.value"></mt-switch>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(item,index) in otheritems" :key="index"  :title="item.title">
            <img slot="icon" :src="item.userImg">
            <mt-switch v-model="item.value"></mt-switch>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/securityequipment'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/securityequipment.scss';
</style>
