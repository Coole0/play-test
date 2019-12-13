<template>
  <div class="acc">
    <div class="acc-top">
      <div class="acc-top-info">
        <img src="" alt="">
        <p>开启智能生活</p>
      </div>
      <div class="acc-top-btn">
        <span @click="isLogin = true">登录</span>
        <span @click="isLogin = false">注册</span>
      </div>
    </div>
    <login v-if="isLogin"></login>
    <register v-if="!isLogin"></register>
  </div>
</template>
<script>
import Login from '../components/login'
import Register from '../components/register'
export default {
  data () {
    return {
      isLogin: true
    }
  },
  components: {
    Login,
    Register
  }
}
</script>
<style lang="less" scoped>
  .acc {
    &-top {
      position: relative;
      height: 8.12rem;
      background: #5169E9;
      &-info {
        position: absolute;
        top: 2.64rem;
        left: 0;
        right: 0;
        img {
          width: 2rem;
          height: 2rem;
          background: #fff;
          margin: 0 auto;
        }
        p {
          margin-top: 0.3rem;
          text-align: center;
          font-size: 0.28rem;
          font-family: 'PingFang SC';
          font-weight: 400;
          line-height: 0.4rem;
          color:rgba(242,242,242,1);
          letter-spacing: 0.08rem;
          padding-left: 0.08rem;
        }
      }
      &-btn {
        position: absolute;
        bottom: 0.43rem;
        left: 0;
        right: 0;
        display: flex;
        span {
          width: 50%;
          text-align: center;
          font-size: 0.34rem;
          font-family: 'PingFang SC';
          font-weight: 400;
          line-height: 0.49rem;
          color: rgba(242,242,242,1);
          letter-spacing: 0.02rem;
        }
      }
    }
  }
</style>
