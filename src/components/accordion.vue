<template>
  <div class="wrap">
    <div class="accordion">
      <input type="radio" id="page1" name="page">
      <label for="page1">山重水复</label>
      <div class="page">
        <p>涟漪轻舟 莲花坞栈桥头</p>
        <p>碧水本无痕 因风皱</p>
        <p>争渡惊鹭鸥</p>
        <p>白雾染清霜 云深几许不愁</p>
        <p>青山万古久 雪白头</p>
        <p>一笑天子酒</p>
        <p>避世独立 三千浮尘</p>
        <p>随心而动 便游红尘</p>
        <p>世事弄人 擦肩过身</p>
      </div>
      <input type="radio" id="page2" name="page">
      <label for="page2">山重水复</label>
      <div class="page">
        <p>涟漪轻舟 莲花坞栈桥头</p>
        <p>碧水本无痕 因风皱</p>
        <p>争渡惊鹭鸥</p>
        <p>白雾染清霜 云深几许不愁</p>
        <p>青山万古久 雪白头</p>
        <p>一笑天子酒</p>
        <p>避世独立 三千浮尘</p>
        <p>随心而动 便游红尘</p>
        <p>世事弄人 擦肩过身</p>
      </div>
      <input type="radio" id="page3" name="page">
      <label for="page3">山重水复</label>
      <div class="page">
        <p>涟漪轻舟 莲花坞栈桥头</p>
        <p>碧水本无痕 因风皱</p>
        <p>争渡惊鹭鸥</p>
        <p>白雾染清霜 云深几许不愁</p>
        <p>青山万古久 雪白头</p>
        <p>一笑天子酒</p>
        <p>避世独立 三千浮尘</p>
        <p>随心而动 便游红尘</p>
        <p>世事弄人 擦肩过身</p>
      </div>
      <input type="radio" id="page4" name="page">
      <label for="page4">山重水复</label>
      <div class="page">
        <p>涟漪轻舟 莲花坞栈桥头</p>
        <p>碧水本无痕 因风皱</p>
        <p>争渡惊鹭鸥</p>
        <p>白雾染清霜 云深几许不愁</p>
        <p>青山万古久 雪白头</p>
        <p>一笑天子酒</p>
        <p>避世独立 三千浮尘</p>
        <p>随心而动 便游红尘</p>
        <p>世事弄人 擦肩过身</p>
      </div>
      <input type="radio" id="page5" name="page">
      <label for="page5">山重水复</label>
      <div class="page">
        <p>涟漪轻舟 莲花坞栈桥头</p>
        <p>碧水本无痕 因风皱</p>
        <p>争渡惊鹭鸥</p>
        <p>白雾染清霜 云深几许不愁</p>
        <p>青山万古久 雪白头</p>
        <p>一笑天子酒</p>
        <p>避世独立 三千浮尘</p>
        <p>随心而动 便游红尘</p>
        <p>世事弄人 擦肩过身</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion'
}
</script>

<style scoped lang="stylus">
  .accordion
    width 600px
    height auto
    input
      display none
      &:checked+label+.page
        max-height 1000px
    label
      font-weight 500
      line-height 30px
      display inline-block
      cursor pointer
    .page
      overflow hidden
      max-height 0
      transition max-height .3s
</style>
