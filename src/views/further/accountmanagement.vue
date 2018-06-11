<template>
  <div id="accountmanagement">
    <mt-header fixed title="账号中心">
      <router-link to="/further" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-cell title="修改密码" to="//github.com" is-link ></mt-cell>
      <mt-cell title="切换账号" to="//github.com" is-link ></mt-cell>
      <mt-button size="large" type="danger" class="btnsave">退出账号</mt-button>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/accountmanagement'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/accountmanagement.scss';
</style>
