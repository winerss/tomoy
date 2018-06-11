<template>
  <div id="cameraThird">
    <div class="box">
      <mt-header>
        <mt-button @click="backPage()" slot="left" icon="back">设备列表</mt-button>
      </mt-header>
      <div class="container">
        <p>当前网络：WJOCHELI</p>
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('')">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/cameraThird';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/cameraThird.scss';
</style>
