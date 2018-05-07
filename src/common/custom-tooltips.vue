<template>
  <span class="custom-tooltips_wrap">
    <span class="custom-tooltips_content__wrap">
      <span class="custom-tooltips_trigger" @click="trigger">
        <slot></slot>
      </span>
      <div class="custom-tooltips_content" :class="['custom-tooltips_content__' + position]" v-if="isShow">
        <slot name="tooltips-content"></slot>
      </div>
    </span>
    <div class="custom-tooltips_mask" @click="trigger" v-if="isShow"></div>
  </span>
</template>

<script>
export default {
  name: 'custom-tooltips',
  data () {
    return {
      isShow: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top'
    }
  },
  methods: {
    trigger () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
  .custom-tooltips_wrap {
    position: relative;
    z-index: 100;
  }
  .custom-tooltips_content__wrap {
    position: relative;
    z-index: 100;
  }
  .custom-tooltips_content {
    background: #333;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 7px 14px 0 rgba(54, 54, 77, 0.1);
    border-radius: 4px;
    position: absolute;
    z-index: 101;
  }
  .custom-tooltips_content__top {
    right: 0;
    top: calc(100% + 8px);
  }
  .custom-tooltips_content__top::before {
    position: absolute;
    right: 10px;
    top: 0;
    transform: translateY(-100%);
    content: '';
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #333;
  }

  .custom-tooltips_mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
</style>
