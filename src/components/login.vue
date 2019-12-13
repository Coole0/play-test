<template>
  <div class="login">
    <div class="login-angle"></div>
    <div class="login-content">
      <input type="text" placeholder="输入手机号">
      <div class="login-content-input" v-if="isDirectLogin || isForget">
        <input type="text" placeholder="输入验证码">
        <span>获取验证码</span>
      </div>
      <input v-if="!isDirectLogin || isForget" type="password" placeholder="输入8-15位密码">
      <input v-if="isForget" type="password" placeholder="再次输入密码">
      <button v-if="!isForget">登录</button>
      <button v-if="isForget">完成并登录</button>
      <div class="login-content-btm" v-if="!isForget">
        <span @click="isForget = true">忘记密码？</span>
        <span v-if="isDirectLogin" @click="isDirectLogin = !isDirectLogin">账号登录</span>
        <span v-if="!isDirectLogin" @click="isDirectLogin = !isDirectLogin">快速登录</span>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  data () {
    return {
      isDirectLogin: false,
      isForget: false
    }
  }
}
</script>
<style lang="less" scoped>
  .login {
    position: relative;
    &-angle {
      position: absolute;
      top: -0.3rem;
      left: 25%;
      margin-left: -0.15rem;
      border: 0.15rem solid transparent;
      border-bottom: 0.15rem solid #ffffff;
    }
    &-content {
      padding: 0.12rem 0.7rem 0.2rem 0.7rem;
      input {
        display: block;
        width: 100%;
        height: 1.09rem;
        border-bottom: 1px solid rgba(231,236,242,1);
        font-size: 0.26rem;
        font-family: 'PingFang SC';
        font-weight: 500;
        line-height: 0.37rem;
        &::placeholder {
          font-size: 0.26rem;
          font-family: 'PingFang SC';
          font-weight: 500;
          line-height: 0.37rem;
          color: rgba(189,196,206,1);
        }
      }
      &-input {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(231,236,242,1);
        align-items: center;
        input {
          border-bottom: 0;
        }
        span {
          font-size: 0.26rem;
          font-family: 'PingFang SC';
          font-weight: 500;
          line-height: 0.37rem;
          white-space: nowrap;
          color: #D8D8D8;
        }
      }
      button {
        width:6.10rem;
        height:1.06rem;
        background:linear-gradient(90deg,rgba(106,146,255,1) 0%,rgba(32,91,255,1) 100%);
        border-radius: 0.16rem;
        border: 0;
        margin-top: 0.96rem;
        font-size:0.34rem;
        font-family:'PingFang SC';
        font-weight:400;
        line-height:0.48rem;
        color:rgba(249,252,255,1);
      }
      &-btm {
        display: flex;
        margin-top: 0.2rem;
        justify-content: space-between;
        span {
          font-size:0.24rem;
          font-family:'PingFang SC';
          font-weight:400;
          line-height:0.33rem;
          &:last-child {
            color: #585858;
          }
          &:first-child {
            color: #5169E9;
          }
        }
      }
    }
  }
</style>
