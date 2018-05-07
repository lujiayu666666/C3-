<template>
  <div class="parent">
    <div class="heart"></div>
  </div>
</template>

<script>
export default {
  name: 'heart'
}
</script>

<style scoped lang="stylus">
  @keyframes scale {
    0 {
      transform scale(1)
    }
    50% {
      transform scale(1.2)
    }
    100% {
      transform scale(1)
    }
  }
  .parent
    transform rotate(-45deg)
    padding-top 100px
    width 100px
    margin 0 auto
  .heart
    width 100px
    height 100px
    background hsl(12,100%,50%)
    margin 0 auto
    position relative
    animation scale .6s ease-in-out infinite
    box-shadow: 0 8px 24px 1px rgba(54, 59, 71, 0.8);
    &::before
      position absolute
      content ''
      top -49px
      width 100px
      height 50px
      background hsl(12,100%,50%)
      border-radius 100px 100px 0 0
    &::after
      position absolute
      content ''
      top -0
      right -49px
      width 50px
      height 100px
      background hsl(12,100%,50%)
      border-radius 0 100px 100px 0
</style>
