<template>
  <div id="header border_bottom">
    <div class="header-wrap">
      <div class="header-left">
        <slot name="header-left"></slot>
        <img v-if="showArrowLeft" src="../assets/images/home/arrow.png" alt="" @click="goBack">
      </div>
      <div class="header-title">
        {{ $route.meta.title }}
      </div>
      <div class="header-right">
        <slot name="header-right"></slot>
        <p v-if="showNext" class="next">下一步</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showArrowLeft: {
      type: Boolean,
      default: true
    },
    showNext: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    goBack() {
      window.history.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/header/index.scss';
</style>


