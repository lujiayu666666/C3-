<template>
  <div class="container wrap">
    <div class="cube-wrap">
      <input type="radio" name="cuber" class="controller" id="1" checked="true">
      <input type="radio" name="cuber" class="controller" id="2">
      <input type="radio" name="cuber" class="controller" id="3">
      <input type="radio" name="cuber" class="controller" id="4">
      <input type="radio" name="cuber" class="controller" id="5">
      <input type="radio" name="cuber" class="controller" id="6">
      <div class="cube">
        <div class="cube-face front"><img src="/static/img/WechatIMG13831.jpeg"></div>
        <div class="cube-face back"><img src="/static/img/WechatIMG13832.jpeg"></div>
        <div class="cube-face left"><img src="/static/img/WechatIMG13834.jpeg"></div>
        <div class="cube-face right"><img src="/static/img/WechatIMG13835.jpeg"></div>
        <div class="cube-face top"><img src="/static/img/WechatIMG13836.jpeg"></div>
        <div class="cube-face bottom"><img src="/static/img/WechatIMG13831.jpeg"></div>
      </div>
      <div class="cube_left">
        <label for="6" class="cube_action"></label>
        <label for="1" class="cube_action"></label>
        <label for="2" class="cube_action"></label>
        <label for="3" class="cube_action"></label>
        <label for="4" class="cube_action"></label>
        <label for="5" class="cube_action"></label>
      </div>
      <div class="cube_right">
        <label for="2" class="cube_action"></label>
        <label for="3" class="cube_action"></label>
        <label for="4" class="cube_action"></label>
        <label for="5" class="cube_action"></label>
        <label for="6" class="cube_action"></label>
        <label for="1" class="cube_action"></label>
      </div>
      <div class="indicators">
        <label for="1" class="indicator"></label>
        <label for="2" class="indicator"></label>
        <label for="3" class="indicator"></label>
        <label for="4" class="indicator"></label>
        <label for="5" class="indicator"></label>
        <label for="6" class="indicator"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transformSwiper'
}
</script>

<style scoped lang="stylus">
  @keyframes spin {
    from {
        transform: rotateX(45deg) rotateY(45deg);
    }
    to {
        transform: rotateX(405deg) rotateY(765deg);
    }
  }
  .cube-wrap {
    width 300px
    height 300px
    perspective 1000px
    position relative
    margin-top 100px
    .cube {
      width 100%
      height 100%
      position absolute
      transform-style preserve-3d
      transition all .5s ease
      animation spin 10s linear infinite
    }
    .cube-face {
      width 100%
      height 100%
      position absolute
      overflow hidden
      opacity 0.9
      border 1px solid #ccc
      img {
        width 100%
        height 100%
      }
    }
    .front {
      transform translateZ(150px)
    }
    .back {
      transform rotateX(180deg) translateZ(150px)
    }
    .left {
      transform rotateY(-90deg) translateZ(150px)
    }
    .right {
      transform rotateY(90deg) translateZ(150px)
    }
    .top {
      transform rotateX(90deg) translateZ(150px)
    }
    .bottom {
      transform rotateX(-90deg) translateZ(150px)
    }
  }
  .cube_left .cube_action{
    left: -75px;
    top: 50%;
    transform: translateY(-50%);
  }
  .cube_right .cube_action{
    right: -75px;
    top: 50%;
    transform: translateY(-50%);
  }
  .cube_action{
    background-color: #fafafa;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    width: 40px;
    height: 40px;
    opacity: 0.15;
    position: absolute;
    transition: opacity 0.5s ease;
    z-index: 5;
  }
  .cube_action:hover{
      opacity: 1;
  }
  .cube_action::before{
    border-bottom: 4px solid #111;
    border-right: 4px solid #111;
    content: '';
    display: block;
    height: 25%;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 25%;
    transform: translate(-70%, -50%) rotate(-45deg);
  }
  .cube_left .cube_action::before{
    transform: translate(-40%, -50%) rotate(135deg);
  }
  .indicators{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -80px;
    padding: 20px;
    text-align: center;
    opacity:0;
    transition: opacity .3s;
  }
  .container:hover .indicators{
    opacity: 1;
  }
  .indicators .indicator{
    background-color: #fafafa;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    width: 14px;
    height: 14px;
    margin: 6px;
    opacity: .15;
  }
  .controller{
    display: none;
  }
  .container{
    width: 600px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -300px;
    transition: all .5s ease;
    transform: scale(0.5);
  }
  .container:hover {
    transform: scale(1);
  }
  .container:hover .cube-wrap .cube{
    animation: entrance .5s ease ;
  }
  @keyframes entrance {
    from {
      transform: rotateX(-225deg) rotateY(-225deg);
    }
  }
  .controller:nth-of-type(1):checked ~ .cube{
    transform: translateZ(-150px);
  }
  .controller:nth-of-type(2):checked ~ .cube{
    transform: translateZ(-150px) rotateX(-180deg) ;
  }
  .controller:nth-of-type(3):checked ~ .cube{
    transform: translateZ(-150px) rotateY(90deg) ;
  }
  .controller:nth-of-type(4):checked ~ .cube{
    transform: translateZ(-150px) rotateY(-90deg) ;
  }
  .controller:nth-of-type(5):checked ~ .cube{
    transform: translateZ(-150px) rotateX(-90deg) ;
  }
  .controller:nth-of-type(6):checked ~ .cube{
    transform: translateZ(-150px) rotateX(90deg) ;
  }
  .container:hover .controller:nth-of-type(1):checked ~ .cube_left .cube_action:nth-of-type(1), .container:hover .controller:nth-of-type(1):checked ~ .cube_right .cube_action:nth-of-type(1){
    display: block;
  }
  .container:hover .controller:nth-of-type(2):checked ~ .cube_left .cube_action:nth-of-type(2), .container:hover .controller:nth-of-type(2):checked ~ .cube_right .cube_action:nth-of-type(2){
    display: block;
  }
  .container:hover .controller:nth-of-type(3):checked ~ .cube_left .cube_action:nth-of-type(3), .container:hover .controller:nth-of-type(3):checked ~ .cube_right .cube_action:nth-of-type(3){
    display: block;
  }
  .container:hover .controller:nth-of-type(4):checked ~ .cube_left .cube_action:nth-of-type(4), .container:hover .controller:nth-of-type(4):checked ~ .cube_right .cube_action:nth-of-type(4){
    display: block;
  }
  .container:hover .controller:nth-of-type(5):checked ~ .cube_left .cube_action:nth-of-type(5), .container:hover .controller:nth-of-type(5):checked ~ .cube_right .cube_action:nth-of-type(5){
    display: block;
  }
  .container:hover .controller:nth-of-type(6):checked ~ .cube_left .cube_action:nth-of-type(6), .container:hover .controller:nth-of-type(6):checked ~ .cube_right .cube_action:nth-of-type(6){
    display: block;
  }
</style>
