<template>
  <ul class="wrap">
    <li class="hover">菜单 1</li>
    <li class="menu-wrap">
      <ul class="menu">
        <li>
          菜单 1-1
        </li>
        <li>
          菜单 1-2
        </li>
        <li>
          菜单 1-3
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'hover_menu'
}
</script>

<style scoped lang="stylus">
  ul li
    list-style none
    cursor pointer
  .wrap
    width 1200px
    height auto
    margin 0 auto
    background hsl(20, 20%, 80%)
    padding 24px
    display flex
    position relative
  .menu-wrap
    display none
    position absolute
    top 60px
    left 13px
    color #ffffff
    &:hover
      display flex
    &::before
      content ''
      width 0px
      height 0px
      border 5px solid transparent
      border-bottom-color #333333
      position absolute
      left 50%
      top -10px
      transform translateX(-50%)
    li
      padding 8px 12px
      &:hover
        background #222222
  .menu
    border-radius 4px
    overflow hidden
    background #333333
  .hover
    display inline-block
    padding 8px 12px
    &:hover+.menu-wrap
      display flex
</style>
