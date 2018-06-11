<template>
  <div id="databackup">
    <mt-header fixed title="数据备份">
      <router-link to="/further" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="list">
        <mt-button size="large" class="up">
          <img src="../../assets/images/further/up-icon.png" alt="">
          上传文件
        </mt-button>
        <mt-button size="large" type="primary" class="down">
          <img src="../../assets/images/further/down-icon.png" alt="">
          下载文件
        </mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/further/databackup'

export default controller
</script>

<style scoped lang='scss'>
@import '../../assets/style/further/databackup.scss';
</style>
