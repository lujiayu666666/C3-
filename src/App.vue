<template>
  <div id="app">
    <ul class="main-menu">
      <router-link
        :to="item.path"
        tag="li"
        v-for="(item, index) in routes"
        :key="index"
        :class="{'menu-active': $route.name === item.name}">
        {{item.meta.title}}
      </router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
ul li
  list-style none
#app
  width 100%
  height 100vh
.main-menu
  display flex
  justify-content space-between
  margin 0 auto
  padding 100px 0 12px 0;
  border-bottom 1px solid #cccccc
  margin-bottom 12px
  width 1200px
  li
    padding 8px 12px
    cursor pointer
    transition all .3s
    &.menu-active
      background #222222
      color #ffffff
</style>
