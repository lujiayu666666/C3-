<template>
  <div class="yin-yang"></div>
</template>

<script>
export default {
  name: 'YinYang'
}
</script>

<style scoped lang="stylus">
  @keyframes myrotate {
    from {
      transform rotate(0)
    }
    to {
      transform rotate(360deg)
    }
  }
  .yin-yang
    width 100px
    height 50px
    border 2px solid #222222
    border-bottom-width 50px
    background #ffffff
    margin 0 auto
    border-radius 50%
    position relative
    animation myrotate 3s infinite linear
    &::before
      position absolute
      content ''
      left 0
      top 100%
      transform translateY(-50%)
      background #ffffff
      width 14px
      height 14px
      border-radius 100%
      border 18px solid #222222
    &:after
      position absolute
      content ''
      right 0
      top 100%
      transform translateY(-50%)
      background #222222
      width 14px
      height 14px
      border-radius 100%
      border 18px solid #ffffff
</style>
