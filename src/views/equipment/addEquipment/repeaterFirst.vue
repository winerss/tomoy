<template>
  <div id="repeaterFirst">
    <div class="box">
      <mt-header title="新增摄像头">
        <mt-button @click="backPage()" slot="left" icon="back">设备列表</mt-button>
      </mt-header>
      <div class="container">
        <div class="list">
            <div class="item">
                <img :src="img" alt="">
                <p>主机1</p>
            </div>
            <div class="item">
                <img :src="img" alt="">
                <p>主机2</p>
            </div>
            <div class="item">
                <img :src="img" alt="">
                <p>主机3</p>
            </div>
        </div>
        <mt-button type="primary" @click="goPage('/equipment/repeaterSecond')">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment/addEquipment/repeaterFirst';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../../assets/style/equipment/addEquipment/repeaterFirst.scss';
</style>
