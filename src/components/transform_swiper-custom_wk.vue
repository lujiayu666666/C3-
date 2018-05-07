<template>
  <div class="wrap">
    <div class="content">
      <div class="cube-wrap">
        <input type="radio" id="1" checked name="cube-radio" class="cube-radio">
        <input type="radio" id="2" name="cube-radio" class="cube-radio">
        <input type="radio" id="3" name="cube-radio" class="cube-radio">
        <input type="radio" id="4" name="cube-radio" class="cube-radio">
        <input type="radio" id="5" name="cube-radio" class="cube-radio">
        <input type="radio" id="6" name="cube-radio" class="cube-radio">
        <div class="cube">
          <div class="cube-face front"><img src="/static/img2/WechatIMG1801.jpeg" alt=""></div>
          <div class="cube-face back"><img src="/static/img2/WechatIMG1802.jpeg" alt=""></div>
          <div class="cube-face left"><img src="/static/img2/WechatIMG1803.jpeg" alt=""></div>
          <div class="cube-face right"><img src="/static/img2/WechatIMG1804.jpeg" alt=""></div>
          <div class="cube-face top"><img src="/static/img2/WechatIMG1805.jpeg" alt=""></div>
          <div class="cube-face bottom"><img src="/static/img2/WechatIMG1806.jpeg" alt=""></div>
        </div>
        <div class="cube-left">
          <label for="6" class="cube-label_item"></label>
          <label for="1" class="cube-label_item"></label>
          <label for="2" class="cube-label_item"></label>
          <label for="3" class="cube-label_item"></label>
          <label for="4" class="cube-label_item"></label>
          <label for="5" class="cube-label_item"></label>
        </div>
        <div class="cube-right">
          <label for="2" class="cube-label_item"></label>
          <label for="3" class="cube-label_item"></label>
          <label for="4" class="cube-label_item"></label>
          <label for="5" class="cube-label_item"></label>
          <label for="6" class="cube-label_item"></label>
          <label for="1" class="cube-label_item"></label>
        </div>
        <div class="cube-index">
          <label for="1" class="cube-index_item"></label>
          <label for="2" class="cube-index_item"></label>
          <label for="3" class="cube-index_item"></label>
          <label for="4" class="cube-index_item"></label>
          <label for="5" class="cube-index_item"></label>
          <label for="6" class="cube-index_item"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transform_swiper-custom'
}
</script>

<style scoped lang="stylus">
  @keyframes spin {
    from {
      transform rotateX(45deg) rotateY(45deg)
    }
    to {
      transform rotateX(405deg) rotateY(765deg)
    }
  }
  @keyframes entrance {
    from {
        transform: rotateX(-225deg) rotateY(-225deg);
    }
  }
  .wrap
    background-image: linear-gradient(-25deg, #616161 0%, #96B7C4 100%);
  .cube-radio
    display none
  .cube-label_item
    background-color #fafafa
    border-radius 50%
    cursor pointer
    display none
    width 40px
    height 40px
    opacity 0.15
    position absolute
    transition all 0.5s ease
    z-index 5
    &:hover
      opacity 1
    &::before
      border-bottom 4px solid #111
      border-right 4px solid #111
      content ''
      display block
      height 25%
      left 50%
      position absolute
      top 50%
      width 25%
      transform translate(-70%, -50%) rotate(-45deg)
  .cube-left
    .cube-label_item
      &::before
        transform translate(-40%, -50%) rotate(135deg)
  .content
    width 600px
    height 600px
    margin 200px auto
    margin-top 0
    transform scale(0.5)
    cursor pointer
    transition all .6s
    padding-top 200px
    &:hover
      transform scale(1)
      // .cube-label_item
      //   display block
      // .cube-wrap
      .cube
        animation entrance .5s ease
  .cube-wrap
    width 300px
    height 300px
    position relative
    perspective 1000px
    margin 0 auto
  .cube-left
    position absolute
    left -115px
    top 50%
    transform translateY(-50%)
  .cube-right
    position absolute
    right -75px
    top 50%
    transform translateY(-50%)
  .cube-index
    height auto
    position absolute
    left 50%
    bottom 0
    transform translate(-50%, 400%)
    display flex
    justify-content space-between
    display none
    .cube-index_item
      width 10px
      height 10px
      border-radius 50%
      margin 0 5px
      display inline-block
      background #fafafa
      opacity .8
      transition all .6s
  .cube
    width 100%
    height 100%
    position absolute
    transition all .5s ease
    animation spin 10s linear infinite
    transform-style preserve-3d
    .cube-face
      width 100%
      height 100%
      position absolute
      img
        width 100%
        height 100%
        opacity .9
      &.front
        transform translateZ(150px)
      &.back
        transform rotateX(180deg) translateZ(150px)
      &.left
        transform rotateY(-90deg) translateZ(150px)
      &.right
        transform rotateY(90deg) translateZ(150px)
      &.top
        transform rotateX(90deg) translateZ(150px)
      &.bottom
        transform rotateX(-90deg) translateZ(150px)
  .content:hover
    .cube-index
      display block
    .cube-radio:nth-of-type(1):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(1)
          display block
      &~.cube
        transform translateZ(-150px)
      &~.cube-index
        .cube-index_item:nth-of-type(1)
          background #666666
    .cube-radio:nth-of-type(2):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(2)
          display block
      &~.cube
        transform translateZ(-150px) rotateX(-180deg)
      &~.cube-index
        .cube-index_item:nth-of-type(2)
          background #666666
    .cube-radio:nth-of-type(3):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(3)
          display block
      &~.cube
        transform translateZ(-150px) rotateY(90deg)
      &~.cube-index
        .cube-index_item:nth-of-type(3)
          background #666666
    .cube-radio:nth-of-type(4):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(4)
          display block
      &~.cube
        transform translateZ(-150px) rotateY(-90deg)
      &~.cube-index
        .cube-index_item:nth-of-type(4)
          background #666666
    .cube-radio:nth-of-type(5):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(5)
          display block
      &~.cube
        transform translateZ(-150px) rotateX(-90deg)
      &~.cube-index
        .cube-index_item:nth-of-type(5)
          background #666666
    .cube-radio:nth-of-type(6):checked
      &~.cube-left, &~.cube-right
        .cube-label_item:nth-of-type(6)
          display block
      &~.cube
        transform translateZ(-150px) rotateX(90deg)
      &~.cube-index
        .cube-index_item:nth-of-type(6)
          background #666666
</style>
