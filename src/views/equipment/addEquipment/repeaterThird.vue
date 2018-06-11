<template>
  <div id="repeaterThird">
    <div class="box">
      <mt-header>
        <mt-button @click="backPage()" slot="left" icon="back">设备列表</mt-button>
      </mt-header>
      <div class="container">
        <h1>向导说明</h1>
        <p>当前网络：ChinaNet_cNSh</p>
        <input type="text" placeholder="请输入密码">
        <mt-button type="primary" @click="goPage('')">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/repeaterThird';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/equipment/addEquipment/repeaterThird.scss';
</style>
