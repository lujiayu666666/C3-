<template>
  <div class="wrap">
    <div class="parent">
      <!-- <div class="child"></div> -->
    </div>
    <!-- <div class="one">
      <div class="two">
        <div class="three"></div>
      </div>
    </div> -->
    <div class="a">
      <custom-tooltips> <!-- 组件 下边引过来 -->
        <span>123123</span> <!-- 触发的 就是那个icon -->
        <div slot="tooltips-content" class="tooltips"> <!-- 点击之后出来的内容 这个随便写 slot="tooltips-content" 必须写 剩下的class啥的都行 样式就在这个组件写就好 -->
          <div><!-- 这是里面一项一项的内容 可以加class啥的 在这个组件写样式。。 -->
            123
          </div>
          <div>
            123
          </div>
          <div>
            123
          </div>
        </div>
      </custom-tooltips>
    </div>
  </div>
</template>

<script>
import CustomTooltips from '../common/custom-tooltips'
export default {
  name: 'bl',
  components: {
    CustomTooltips
  }
}
</script>

<style scoped lang="stylus">
  .a
    text-align right
  .tooltips
    width 300px
  .parent
    width 100px
    height 100px
    overflow hidden
    background skyblue
    border-radius 50%
    margin 0 auto
    position relative
    &::after, &::before
      content ''
      position absolute
      width 200px
      height 200px
      border-radius 45%
      background #ffffff
    &::before
      left 50%
      top -150px
      animation rotate 6s linear infinite
    &::after
      left 50%
      top -150px
      opacity .5
      animation rotate 6s linear infinite .1s
    @keyframes rotate {
      0% {
        transform: translate(-50%, 0) rotateZ(0deg);
      }
      50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
      }
      100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
      }
    }
  borderTop(myColor) {
    border-top 10px solid myColor
  }
  borderBot(myColor) {
    border-bottom 10px solid myColor
  }
  .one
    width 100%
    height 70px
    box-sizing border-box
    borderTop(red)
    borderBot(purple)
    div
      box-sizing border-box
    .two
      height 50px
      borderTop(orange)
      borderBot(blue)
    .three
      height 30px
      borderTop(yellow)
      borderBot(skyblue)
      background green

</style>
