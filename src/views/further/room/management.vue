<template>
  <div id="management">
    <mt-header fixed title="房间">
      <router-link to="/further/roomlist" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-field label="房间名称" placeholder="请输入房间名称" v-model="roomname"></mt-field>
      <mt-field label="房间图片" readonly></mt-field>
      <div class="box">
        <input type="file" name="file"  accept="image/*"/>
        <img id="portrait" :src="userImg"> 
      </div> 
      <mt-field label="主机选择" readonly></mt-field>
      <mt-radio
        align="right"
        v-model="value"
        :options="['小智主机1（在线）', '小智主机2（离线）', '小智主机3（在线）']">
      </mt-radio>
      <mt-field label="控制设备" readonly></mt-field>
      <p class="managementchild" v-for="(item,index) in items" :key="index">{{item.title}}</p>
      <mt-cell
        title="摄像头绑定"
        to="//github.com"
        is-link
        value="未绑定">
      </mt-cell>
      <mt-cell  title="温度：2.5°C" to="/further/roomlist" >
        <img slot="icon" src="../../../assets/images/further/room/water-icon.png">
        <mt-button type="primary" size="small">校准</mt-button>
      </mt-cell>
      <mt-cell  title="湿度：28%" to="/further/roomlist" >
        <img slot="icon" src="../../../assets/images/further/room/humidity-icon.png">
        <mt-button type="primary" size="small">校准</mt-button>
      </mt-cell>
      <mt-button size="large" type="primary" class="btnsave">保存</mt-button>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/management'

export default controller
</script>

<style scoped lang='scss'>
@import '../../../assets/style/further/management.scss';
</style>
