<template>
  <div class="wrap">
    <div class="area button1">
      <span class="button">
        <i>forever</i>
      </span>
    </div>
    <div class="area button2">
      <input type="checkbox" id="switch" checked>
      <label for="switch" class="label">
        <span class="h">
          )
        </span>
      </label>
    </div>
    <div class="staggered">
      <span class="staggered-btn">
        <span class="staggered-btn_item" data-text="F">F</span>
        <span class="staggered-btn_item" data-text="O">O</span>
        <span class="staggered-btn_item" data-text="R">R</span>
        <span class="staggered-btn_item" data-text="E">E</span>
        <span class="staggered-btn_item" data-text="V">V</span>
        <span class="staggered-btn_item" data-text="E">E</span>
        <span class="staggered-btn_item" data-text="R">R</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myButton'
}
</script>

<style scoped lang="stylus">
  .wrap
    background-image: linear-gradient(-25deg, #616161 0%, #96B7C4 100%);
  .area
    display flex
    width 100%
    justify-content center
    padding 24px 0
    span
      display inline-block
      color #ffffff
      cursor pointer
      text-transform uppercase
      letter-spacing 12px
  .button1 .button
    font-size 16px
    line-height 1.5
    padding 6px 12px
    position relative
    transition-delay .3s
    i
      transition color .3s
      position relative
      z-index 10
    &:hover
      color #96B7C4
      &::before, &::after
        width 100%
      &::before
        transition-delay .3s
      &::after
        transition-delay 0
    &::before
      position absolute
      content ''
      width 0
      height 100%
      border-top #ffffff solid 1px
      border-bottom #ffffff solid 1px
      transition width .3s
      transition-delay .3s
    &::after
      position absolute
      content ''
      width 0
      height calc(100% - 2px)
      transition width .3s
      background #ffffff
      transition-delay 0s
      z-index 1
    &::after
      right 0
      top 2px
    &::before
      left 0
      top 0
  .button2
    cursor pointer
    font-weight 600
    input
      display none
      &:checked+.label
        box-shadow -4px 0 5px rgba(255, 255, 255 .8)
        .h
          transform translateX(24px)
          color green
        &::after
          color #cccccc
        &::before
          color green
    .label
      display inline-block
      width 100px
      height 36px
      background #ffffff
      border-radius 18px
      line-height 36px
      position relative
      cursor pointer
      transition all .6s
      box-shadow 4px 0 5px rgba(255, 255, 255 .8)
      .h
        color #222222
        transform translateX(66px)
        transition all .6s
        color red
      &::after, &::before
        content '：'
        position absolute
        top 50%
        transform translateY(-50%)
        transition all .6s
      &::before
        left 12px
        color #cccccc
      &::after
        right 8px
        color red
  .staggered
    text-align center
    padding-bottom 30px
    .staggered-btn
      display inline-block
      border 1px solid #ffffff
      padding 0 12px
      height 36px
      line-height 36px
      border-radius 4px
      cursor pointer
      color #fff
      overflow hidden
      &:hover
        .staggered-btn_item
          &:nth-child(odd)
            transform translate(0)
          &:nth-child(even)
            transform translate(0)
      .staggered-btn_item
        display inline-block
        position relative
        height 72px
        transition all .4s
        &:nth-child(odd)
          transform translateY(50%)
          &::after
            content attr(data-text)
            position absolute
            height 36px
            width 100%
            top -36px
            left 0
            color #616161
        &:nth-child(even)
          transform translateY(-50%)
          &::before
            content attr(data-text)
            position absolute
            height 36px
            width 100%
            bottom 0px
            left 0
            color #616161
</style>
