<template>
  <div class="navigation-bg">
    <div class="navigation-logo">
      <img src="" class="navigation-logo-img">
      <p class="navigation-logo-title">开启智能生活</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    setTimeout(() => {

    }, 2000)
  }
}
</script>
<style lang="less" scoped>
  .navigation {
    &-bg {
      background-image: url('../assets/img/navigation-bg.png');
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
    &-logo {
      position: absolute;
      top: 4.84rem;
      left: 0;
      right: 0;
      &-img {
        width: 2.56rem;
        height: 2.56rem;
        background: #fff;
        margin: 0 auto;
      }
      &-title {
        text-align: center;
        font-size: 0.3rem;
        font-family:'PingFang SC';
        font-weight:400;
        line-height:0.42rem;
        color:rgba(242,242,242,1);
        letter-spacing:0.15rem;
        margin-top: 0.3rem;
        padding-left: 0.15rem;
      }
    }
  }
</style>
