<template>
  <div id="cameraFourth">
    <div class="box">
      <mt-header title="新增摄像头">
        <mt-button @click="backPage()" slot="left" icon="back">设备列表</mt-button>
      </mt-header>
      <div class="container">
        <input type="text" placeholder="请输入摄像头UID">
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('')">确认</mt-button>
        <mt-button type="primary" @click="goPage('')">扫码</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/cameraFourth';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/cameraFourth.scss';
</style>
