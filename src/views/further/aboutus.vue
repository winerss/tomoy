<template>
  <div id="aboutus">
    <mt-header fixed title="关于我们">
      <router-link to="/further" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <p><img src="../../assets/images/further/aboutimg-icon.png" alt=""></p>
      {{content}}
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/aboutus'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/aboutus.scss';
</style>
