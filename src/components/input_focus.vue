<template>
  <div class="wrap">
    <div class="input-wrap">
      <input
        type="text"
        id="text"
        class="text"
        placeholder="请输入内容">
      <label for="text">请输入内容</label>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input_focus'
}
</script>

<style scoped lang="stylus">
  .text
    outline none
    display block
    width 100%
    height 36px
    line-height 36px
    border none
    border-bottom 1px solid #cccccc
    font-size 14px
    box-sizing border-box
    padding 0 24px
    margin-top 40px
    &~span
      position absolute
      left 0
      bottom 0
      width 0
      height 2px
      background teal
      transition all .3s
    &::-webkit-input-placeholder
      opacity 0
    &:focus+label
      font-size 12px
      top 0
    &:focus~span
      width 100%
    &:not(:placeholder-shown)+label
      font-size 12px
      top 0
    &:not(:placeholder-shown)~span
      width 100%
  .input-wrap
    position relative
  label
    position absolute
    top 50%
    transform translateY(-50%)
    left 24px
    font-size 14px
    color #666666
    transition all .3s
</style>
