<template>
  <ul class="wrap">
    <li class="menu-wrap">
      <div class="menu">菜单1</div>
      <div class="menu-list">
        <p>菜单1-1</p>
        <p>菜单1-2</p>
        <p>菜单1-3</p>
      </div>
    </li>
    <li class="menu-wrap">
      <div class="menu">菜单2</div>
      <div class="menu-list">
        <p>菜单2-1</p>
        <p>菜单2-2</p>
        <p>菜单2-3</p>
      </div>
    </li>
    <li class="menu-wrap">
      <div class="menu">菜单3</div>
      <div class="menu-list">
        <p>菜单3-1</p>
        <p>菜单3-2</p>
        <p>菜单3-3</p>
      </div>
    </li>
    <li class="menu-wrap">
      <div class="menu">菜单4</div>
      <div class="menu-list">
        <p>菜单4-1</p>
        <p>菜单4-2</p>
        <p>菜单4-3</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'hover_menu_2'
}
</script>

<style scoped lang="stylus">
  ul li
    list-style none
    cursor pointer
  .menu-wrap
    display inline-block
    text-align center
    position relative
    &:hover>.menu-list
      display block
    &:hover
      background #333333
      color #ffffff
  .menu
    padding 8px 12px
    display inline-block
  .menu-list
    position absolute
    display none
    background #333333
    left 50%
    transform translateX(-50%)
    top calc(100% + 6px)
    border-radius 4px
    &::before
      content ''
      width 100%
      height 6px
      left 0
      top -6px
      position absolute
    p
      padding 8px 12px
      min-width 100px
      text-align center
      position relative
      &:first-of-type::before
        content ''
        width 0
        height 0
        border 5px solid transparent
        border-bottom-color #333333
        position absolute
        left 50%
        transform translateX(-50%)
        top -10px
      &:first-of-type:hover
        background #222222
        border-radius 4px 4px 0 0
      &:last-of-type:hover
        background #222222
        border-radius 0 0 4px 4px
      &:hover
        background #222222
  .wrap
    width 1200px
    margin 0 auto
    background #f8f8fb
    padding 24px
</style>
