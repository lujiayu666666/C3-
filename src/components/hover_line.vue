<template>
  <div class="wrap">
    <input name="select" type="radio" checked id="select1">
    <label for="select1">11233123123</label>
    <input name="select" type="radio" id="select2">
    <label for="select2">1</label>
    <input name="select" type="radio" id="select3">
    <label for="select3">123123123</label>
    <input name="select" type="radio" id="select4">
    <label for="select4">123213</label>
    <input name="select" type="radio" id="select5">
    <label for="select5">123123123</label>
  </div>
</template>

<script>
export default {
  name: 'hover_line'
}
</script>

<style scoped lang="stylus">
  .wrap
    width 1200px
    height auto
    margin 0 auto
    background hsl(20, 20%, 80%)
    padding 24px
    display flex
    input
      display none
    input:checked
      &~label::after
        right 100%
    input:checked+label::after
      background #ffffff
      width 100%
      right 0
    label
      padding 12px
      color hsl(210, 100%, 50%)
      cursor pointer
      position relative
      &::after
        content ''
        width 0
        position absolute
        bottom 0
        height 2px
        right 0
        transition all .3s
        background #ffffff

</style>
