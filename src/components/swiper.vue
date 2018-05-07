<template>
  <div class="swiper-wrap">
    <input type="radio" checked class="page-item" name="page" id="page1"/><label for="page1" class="page1"></label>
    <input type="radio" class="page-item" name="page" id="page2"/><label for="page2" class="page2"></label>
    <input type="radio" class="page-item" name="page" id="page3"/><label for="page3" class="page3"></label>
    <input type="radio" class="page-item" name="page" id="page4"/><label for="page4" class="page4"></label>
    <div class="swiper-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper'
}
</script>

<style scoped lang="stylus">
  .swiper-wrap
    width 600px
    height 400px
    margin 0 auto
    position relative
    overflow hidden

    .swiper-box
      width 400%
      height 100%
      display flex
      position relative
      transition all .6s ease-in-out
      z-inde 1
      div
        flex 1
        color #ffffff
        line-height 8.33
        text-align center
        font-size 48px
        &:nth-of-type(1)
          background red
        &:nth-of-type(2)
          background orange
        &:nth-of-type(3)
          background teal
        &:nth-of-type(4)
          background green

    .page-item
      display none
      &:checked+label
        background rgba(255, 255, 255, .4)
      &:nth-of-type(1):checked~.swiper-box
        transform translateX(0)
      &:nth-of-type(2):checked~.swiper-box
        transform translateX(-25%)
      &:nth-of-type(3):checked~.swiper-box
        transform translateX(-50%)
      &:nth-of-type(4):checked~.swiper-box
        transform translateX(-75%)
    label
      width 10px
      height 4px
      display inline-block
      border-radius 2px
      background-color #ffffff
      position absolute
      bottom 24px
      cursor pointer
      z-index 2
      transition all .1s
      &:nth-of-type(1)
        left 272px
      &:nth-of-type(2)
        left 286px
      &:nth-of-type(3)
        left 300px
      &:nth-of-type(4)
        left 314px

</style>
