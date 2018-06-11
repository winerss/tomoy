<template>
    <div id="equipmentRelative">
      <div class="box">
        <mt-header title="关联账号">
          <mt-button @click="backPage()" slot="left" icon="back">设备属性</mt-button>
        </mt-header>
        <div class="container">
            <div class="list">
                <div class="item" v-for="(item, index) in lists" :key="index">
                    <p>{{ item.telphone }}</p>
                    <p>{{ item.name }}</p>
                    <mt-button>解除此设备与账号的关联</mt-button>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import controller from '@/controller/equipment/relative';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/equipment/relative.scss';
</style>
