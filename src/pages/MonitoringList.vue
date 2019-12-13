<template>
  <div class="monitoring">
    <GoBack style="background: #5169E9; margin-bottom: 0.21rem;" :title="'监控列表'" :operate1="'+'"></GoBack>
    <ul>
      <li v-for="(item, i) in videoList" :key="i">
        <video src="../assets/img/times.png"></video>
        <div class="title">{{item.title}}</div>
        <div class="status">{{item.status}}</div>
        <div class="times">{{item.times}}</div>
        <div class="video-icon">
          <div class="jump" v-for="(list, index) in item.videoJump" :key="index">
            <img :src="list.jumpImg" alt="">
            <span>{{list.jumpName}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import GoBack from '../components/goBack'
export default {
  components: {
    GoBack
  },
  data () {
    return {
      videoList: [
        {
          title: '窗帘1',
          status: '离线',
          times: '2019-11-11   17:03:47',
          videoJump: [
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '云存储'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '分享'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '回放'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '设置'
            }
          ]
        },
        {
          videoJump: [
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '云存储'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '分享'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '回放'
            },
            {
              jumpImg: require('../assets/img/cloud.png'),
              jumpName: '设置'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.monitoring {
  height: 100%;
  background-color: #edeff3;
  ul {
    li {
      position: relative;
      width: 100%;
      font-size: 0;
      // height: 4.8rem;
      margin-bottom: 0.2rem;
      video {
        width: 100%;
        height: 100%;
        background-color: #0A1430;
      }
    }
    .title {
      position: absolute;
      top: 0.2rem;
      left: 0.3rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
    .status {
      position: absolute;
      top: 0.2rem;
      right: 0.3rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
    .times {
      position: absolute;
      top: 3.4rem;
      left: 0.3rem;
      font-size: 0.18rem;
      font-family: 'PingFang SC';
      font-weight: 400;
      line-height: 0.25rem;
      color: rgba(216,216,216,1);
    }
    .video-icon {
      display: flex;
      justify-content: flex-end;
      background-color: #ffffff;
      padding-top: 0.26rem;
      padding-bottom: 0.3rem;
      .jump {
        text-align: center;
        margin-right: 0.36rem;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin: auto;
        }
        span {
          font-size: 0.2rem;
          font-family: 'PingFang SC';
          font-weight: 400;
          line-height: 0.28rem;
          color: rgba(50,50,50,1);
        }
      }
    }
  }
}
</style>
