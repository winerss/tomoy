<template>
  <div id="equipment">
    <div class="box">
      <mt-header title="设备列表">
        <mt-button slot="right">
         <img @click="toPage('/equipment/addEquipment')" :src="images.add">
        </mt-button>
      </mt-header>
      <div class="list">
        <p>test123</p>
		<p>test123</p>
		<p>test123</p>
        <div v-for="item in list1" :key="item.id">
          <mt-cell :title="item.name" is-link to="/equipment/list">
            <span>{{ item.num }}</span>
            <img slot="icon" :src="item.images" width="24" height="24">
          </mt-cell>
        </div>
        <mt-cell title="控制类（18）">
          <img :src="images.arrowdown" width="24" height="24">
        </mt-cell>
        <div v-for="item in list2" :key="item.id">
          <mt-cell :title="item.name" is-link to="/equipment/list">
            <span>{{ item.num }}</span>
            <img slot="icon" :src="item.images" width="24" height="24">
          </mt-cell>
        </div>
        <mt-cell title="安防类（18）">
          <img :src="images.arrowdown" width="24" height="24">
        </mt-cell>
          <div v-for="item in list3" :key="item.id">
            <mt-cell :title="item.name" is-link to="/equipment/list">
              <span>{{ item.num }}</span>
              <img slot="icon" :src="item.images" width="24" height="24">
            </mt-cell>
          </div>
        <mt-cell title="环境采样（9）">
          <img :src="images.arrowdown" width="24" height="24">
        </mt-cell>
          <div v-for="item in list4" :key="item.id">
            <mt-cell :title="item.name" is-link to="/equipment/list">
              <span>{{ item.num }}</span>
              <img slot="icon" :src="item.images" width="24" height="24">
            </mt-cell>
          </div>
        <mt-cell title="其他（2）">
          <img :src="images.arrowdown" width="24" height="24">
        </mt-cell>
          <div v-for="item in list5" :key="item.id">
            <mt-cell :title="item.name" is-link to="/equipment/list">
              <span>{{ item.num }}</span>
              <img slot="icon" :src="item.images" width="24" height="24">
            </mt-cell>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from '@/controller/equipment';

export default controller;
</script>

<style scoped lang="scss">
  @import '../../assets/style/equipment/index.scss';
</style>
