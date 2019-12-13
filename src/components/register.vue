<template>
  <div class="register">
    <div class="register-angle"></div>
    <div class="register-content">
      <input type="text" placeholder="输入手机号">
      <div class="register-content-input">
        <input type="text" placeholder="输入验证码">
        <span>获取验证码</span>
      </div>
      <button>注册并登录</button>
      <div class="register-content-other">
        <span></span>
        <p>其他方式注册</p>
        <span></span>
      </div>
      <div class="register-content-way">
        <div class="register-content-way-qq">
          <img src="../assets/img/QQ.png" alt="">
          <span>QQ</span>
        </div>
        <div class="register-content-way-wx">
          <img src="../assets/img/微信.png" alt="">
          <span>微信</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .register {
    position: relative;
    &-angle {
      position: absolute;
      top: -0.3rem;
      left: 75%;
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
      &-other {
        display: flex;
        margin-top: 1.27rem;
        justify-content: space-between;
        align-items: center;
        span {
          width: 1.7rem;
          height: 0;
          border-bottom: 1px solid #8C9198;
        }
        p {
          font-size:0.24rem;
          font-family:'PingFang SC';
          font-weight:400;
          line-height:0.33rem;
          color:rgba(140,145,152,1);
        }
      }
      &-way {
        display: flex;
        margin-top: 0.3rem;
        justify-content: center;
        div {
          display: flex;
          flex-direction: column;
          img {
            width: 0.64rem;
            height: 0.64rem;
          }
          span {
            font-size:0.28rem;
            font-family:'PingFang SC';
            font-weight:400;
            line-height:0.40rem;
            color:rgba(6,18,30,1);
            margin-top: 0.04rem;
            text-align: center;
          }
        }
        &-wx {
          margin-left: 1.28rem;
        }
      }
    }
  }
</style>
