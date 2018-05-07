<template>
  <div class="wrap">
    <div class="content">
      <div class="cube-wrap">
        <input type="radio" checked class="cube-radio" name="cube-radio" id="1">
        <input type="radio" class="cube-radio" name="cube-radio" id="2">
        <input type="radio" class="cube-radio" name="cube-radio" id="3">
        <input type="radio" class="cube-radio" name="cube-radio" id="4">
        <input type="radio" class="cube-radio" name="cube-radio" id="5">
        <input type="radio" class="cube-radio" name="cube-radio" id="6">
        <div class="cube">
          <div class="cube-face front"><img src="/static/w/1.jpg" alt=""></div>
          <div class="cube-face back"><img src="/static/w/2.jpg" alt=""></div>
          <div class="cube-face left"><img src="/static/w/3.jpg" alt=""></div>
          <div class="cube-face right"><img src="/static/w/4.jpg" alt=""></div>
          <div class="cube-face top"><img src="/static/w/5.jpg" alt=""></div>
          <div class="cube-face bottom"><img src="/static/w/6.jpeg" alt=""></div>
        </div>
        <div class="cube-left">
          <label for="6" class="cube-check_item"></label>
          <label for="1" class="cube-check_item"></label>
          <label for="2" class="cube-check_item"></label>
          <label for="3" class="cube-check_item"></label>
          <label for="4" class="cube-check_item"></label>
          <label for="5" class="cube-check_item"></label>
        </div>
        <div class="cube-right">
          <label for="2" class="cube-check_item"></label>
          <label for="3" class="cube-check_item"></label>
          <label for="4" class="cube-check_item"></label>
          <label for="5" class="cube-check_item"></label>
          <label for="6" class="cube-check_item"></label>
          <label for="1" class="cube-check_item"></label>
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
  name: 'transformSwiperWz'
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
  @keyframes rotate {
    from {
      transform: rotateX(-225deg) rotateY(-225deg);
    }
  }
  .wrap
    background-image linear-gradient(-25deg, #616161 0%, #96b7c4 100%)
  .content
    width 600px
    height 600px
    margin 0 auto
    box-sizing border-box
    padding-top 150px
    transition all .6s
    transform scale(0.5)
    &:hover
      transform scale(1)
      .cube
        animation rotate .6s
      .cube-index
        display block
      .cube-left
        display block
      .cube-right
        display block
  .cube-radio
    display none
  .cube-left
    position absolute
    left -115px
    top 50%
    transform translateY(-50%)
    display none
    .cube-check_item
      transform rotate(-180deg);
  .cube-right
    position absolute
    right -75px
    top 50%
    transform translateY(-50%)
    display none
  .cube-index
    position absolute
    left 50%
    bottom 0
    transform translateX(-50%) translateY(500%)
    display none
    transition all .6s
    .cube-index_item
      width 10px
      height 10px
      border-radius 50%
      background #ffffff
      opacity .8
      display inline-block
      transition all .6s
      cursor pointer
  .cube-check_item
    position absolute
    width 40px
    height 40px
    background #fafafa
    opacity .15
    border-radius 50%
    cursor pointer
    transition all .6s
    display none
    &:hover
      opacity 1
    &::after
      content ''
      position absolute
      width 25%
      height 25%
      border-right 4px solid #333
      border-bottom 4px solid #333
      left 50%
      top 50%
      transform: translate(-70%, -50%) rotate(-45deg);
  .cube-wrap
    width 300px
    height 300px
    margin 0 auto
    perspective 1000px
    .cube
      width 100%
      height 100%
      transition all .5s ease
      animation spin 10s linear infinite
      transform-style preserve-3d
      .cube-face
        width 100%
        height 100%
        position absolute
        overflow hidden
        opacity .9
        img
          width auto
          height 100%
          position absolute
          left 50%
          top 0px
          transform translateX(-50%)
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
  .cube-radio:nth-of-type(1):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(1)
        display block
    &~.cube
      transform translateZ(-150px)
    &~.cube-index
      .cube-index_item:nth-of-type(1)
        background #333
  .cube-radio:nth-of-type(2):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(2)
        display block
    &~.cube
      transform translateZ(-150px) rotateX(-180deg)
    &~.cube-index
      .cube-index_item:nth-of-type(2)
        background #333
  .cube-radio:nth-of-type(3):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(3)
        display block
    &~.cube
      transform translateZ(-150px) rotateY(90deg)
    &~.cube-index
      .cube-index_item:nth-of-type(3)
        background #333
  .cube-radio:nth-of-type(4):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(4)
        display block
    &~.cube
      transform translateZ(-150px) rotateY(-90deg)
    &~.cube-index
      .cube-index_item:nth-of-type(4)
        background #333
  .cube-radio:nth-of-type(5):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(5)
        display block
    &~.cube
      transform translateZ(-150px) rotateX(-90deg)
    &~.cube-index
      .cube-index_item:nth-of-type(5)
        background #333
  .cube-radio:nth-of-type(6):checked
    &~.cube-left, &~.cube-right
      .cube-check_item:nth-of-type(6)
        display block
    &~.cube
      transform translateZ(-150px) rotateX(90deg)
    &~.cube-index
      .cube-index_item:nth-of-type(6)
        background #333
</style>
