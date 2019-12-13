<template>
  <div class="monitoring-add">
    <GoBack style="background: #5169E9; margin-bottom: 0.29rem;" :title="'监控详情'" :operate2="'...'"></GoBack>
    <div class="monitorings">
      <video src="../assets/img/cloud.png"></video>
      <span class="m-title">窗帘1</span>
      <span class="m-wifi">21fps · 1kb/s</span>
      <span class="m-time">2019-11-11&nbsp;&nbsp;&nbsp;17:03:47</span>
    </div>
    <div class="feedback">
      <div class="feedback-l">
        <img src="../assets/img/feedback.png" alt="">
        <span>反馈</span>
      </div>
      <div class="feedback-r">
        <img src="../assets/img/feedback.png" alt="">
        <span>标清</span>
        <img src="../assets/img/feedback.png" alt="">
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import GoBack from '../components/goBack'
export default {
  components: {
    GoBack
  },
  data () {}
}
</script>

<style lang="less" scoped>
.monitoring-add {
  height: 100%;
  background-color: #edeff3;
  .monitorings {
    position: relative;
    width: 7.5rem;
    height: 4.8rem;
    background-color: #0A1430;
    video {
      width: 100%;
      height: 100%;
    }
    .m-title {
      position: absolute;
      top: 0.2rem;
      left: 0.23rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
    .m-wifi {
      position: absolute;
      top: 0.2rem;
      right: 0.23rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
    .m-time {
      position: absolute;
      bottom: 0.2rem;
      left: 0.2rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
  }
  .feedback {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0.26rem 0.35rem 0.36rem 0.16rem;
    .feedback-l {
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.06rem;
      }
    }
    .feedback-r {
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      span {
        margin: 0 0.24rem 0 0.27rem;
      }
    }
    span {
      font-size: 0.2rem;
      font-family: 'PingFang SC';
      font-weight: bold;
      line-height: 0.28rem;
      color: rgba(50,50,50,1);
    }
  }
  .footer {
    width: 100%;
    height: 6.39rem;
    background-color: #5169E9;
  }
}
</style>
