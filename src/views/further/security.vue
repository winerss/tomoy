<template>
  <div id="security">
    <div class="header">
      <div class="left">
        <p class="title">{{title}}</p>
        <p class="status">{{titlestatus}}</p>
      </div>
      <div class="right">
        <router-link to="/further/setup">
          <img src="../../assets/images/further/set-icon.png" alt="">
        </router-link>
        <img src="../../assets/images/further/more-icon.png" alt="">
      </div>
    </div>
    <div class="content">
      <p class="img"><img src="../../assets/images/further/securityb-icon.png" alt=""></p>
      <div class="contentBox">
        <p class="p">自动布防设置</p>
        <p class="pmargin">
          <img src="../../assets/images/further/sunlight-icon.png" alt="">
          白天8：00--12：00
        </p>
        <mt-range v-model="rangeValue"></mt-range>
        <p class="pmargin">
          <img src="../../assets/images/further/moon-icon.png" alt="">
          夜间21：00--2：00
        </p>
        <mt-range v-model="rangemoonValue"></mt-range>
        <div class="footer">
          <mt-button  class="temporary">临时撒防</mt-button>
          <router-link to="/further/securityequipment">
            <mt-button type="primary">              
              查看设备
            </mt-button>          
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/security'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/security.scss';
</style>
