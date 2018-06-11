<template>
  <div id="masterFourth">
    <div class="box">
      <mt-header>
        <mt-button @click="backPage()" slot="left" icon="back">设备列表</mt-button>
      </mt-header>
      <div class="container">
        <p>当前网络：WJOCHELI</p>
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('/equipment/detail')">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/masterFourth';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/masterFourth.scss';
</style>
