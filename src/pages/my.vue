<template>
  <div class="my">
    <div class="my-title">
      个人中心
    </div>
    <div class="my-content">
      <div class="my-content-item" v-for="(item, index) in list" v-bind:key="index">
        {{item}}
        <label class="silder" v-if="index === 0">
          <input type="checkbox">
          <span></span>
        </label>

      </div>
    </div>
    <div class="fix-bottom">
      <div class="home">
        <img src="../assets/img/home_selected.png" alt="">
        <span>家</span>
      </div>
      <div class="me">
        <img src="../assets/img/my.png" alt="">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['按键遥控振动', '充值', '修改密码', '使用说明', '分享', '用户反馈', '关于我们', '设备更新', '退出登录']
    }
  }
}
</script>
<style lang="less" scoped>
  .my {
    background-image: url('../assets/img/my_bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    min-height: 100%;
    &-title {
      background: #4F77F3;
      padding: 0.2rem 0;
      font-size:0.34rem;
      font-family:'PingFang SC';
      font-weight:800;
      line-height:0.40rem;
      color:rgba(249,252,255,1);
      text-align: center;
      border-bottom: 1px solid #EBEDFF;
    }

    &-content {
      position: absolute;
      top: 0.88rem;
      bottom: 0.88rem;
      left: 0;
      right: 0;
      padding: 0.39rem 0.3rem 0 0.3rem;
      overflow: auto;
      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.06rem;
        padding: 0 0.3rem;
        border:1px solid rgba(242,242,242,1);
        border-radius: 0.16rem;
        background:rgba(255,255,255,0.2);
        font-size:0.28rem;
        font-family:'PingFang SC';
        font-weight:bold;
        color:rgba(242,242,242,1);
        margin-bottom: 0.2rem;
      }
    }
  }

  .silder {
    position: relative;
    width: 0.88rem;
    span::before {
      position: absolute;
      top: 0;
      content: ' ';
      width: 0.88rem;
      height: 0.44rem;
      border-radius: 0.44rem;
    }
    span::after {
      position: absolute;
      top: 0.02rem;
      content: ' ';
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: #fff;
    }
    input + span::before {
      background: #E1E3E9;
      transition: background 0.2s ease-in;
    }
    input + span::after {
      left: 0.02rem;
    }
    input:checked + span::before {
      background: #0AC296;
      transition: background 0.2s ease-in;
    }
    input:checked + span::after {
      right: 0.02rem;
      left: auto;
    }
  }

  .fix-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 0.1rem 1.61rem;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      span {
        text-align: center;
        font-size:0.18rem;
        font-family:'PingFang SC';
        font-weight:bold;
        line-height:0.22rem;
        color:rgba(50,50,50,1);
      }
    }
    .home img {
      width: 0.52rem;
    }
    .me img {
      width: 0.46rem;
    }
  }
</style>
