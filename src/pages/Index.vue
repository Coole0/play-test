<template>
    <div class="index">
      <header>
        <div class="img-box">
          <img src="" alt="">
        </div>
        <div class="header-name">
          <p class="name-t">Starting the intelligent life</p>
          <p class="name-b">开启智能生活</p>
        </div>
      </header>
      <div class="shuffling">
        <ul>
          <li><img src="../assets/img/index-lb.png" alt=""></li>
          <li><img src="../assets/img/index-lb.png" alt=""></li>
          <li><img src="../assets/img/index-lb.png" alt=""></li>
        </ul>
        <div class="point">
          <span class="target target-r"></span>
          <span class="target-r"></span>
          <span></span>
        </div>
      </div>
      <div class="new-recommended">
        <p>新人推荐</p>
        <div style="display: flex; margin-top:0.2rem;">
          <img style="margin-right: 0.34rem;" src="../assets/img/new-left.png" alt="">
          <img src="../assets/img/new-right.png" alt="">
        </div>
      </div>
      <div class="add">
        <div class="add-left">
          <p>
            <img src="../assets/img/radar.png" alt="">
          </p>
          <span>添加设备</span>
        </div>
        <div class="add-right">
          <p>
            <img src="../assets/img/key.png" alt="">
          </p>
          <span>添加授权</span>
        </div>
      </div>
      <IndexNav :componentData='componentData'></IndexNav>
      <IndexNav style="margin-top: 0.2rem;" :componentData='componentData1'></IndexNav>
      <IndexNav style="margin-top: 0.2rem;" :componentData='componentData2'></IndexNav>
    </div>
</template>
<script>
import IndexNav from '../components/IndexNav'
export default {
  components: {
    IndexNav
  },
  data () {
    return {
      componentData: {
        titleName: '我的设备',
        lampImg: require('../assets/img/lamp.png'),
        style: 'background: linear-gradient(133deg,rgba(27,223,86,0.77) 0%,rgba(222,255,236,0.2) 100%); width: 1.6rem;',
        lists: [
          {
            name: '空调',
            num: 2,
            imgUrl: require('../assets/img/chuanglian.png'),
            style: 'background: linear-gradient(133deg, rgba(245,234,218,1) 0%, rgba(233,200,146,1) 100%);'
          },
          {
            name: '卷帘门',
            num: 2,
            imgUrl: require('../assets/img/curtain.png'),
            style: 'background: linear-gradient(133deg,rgba(252,224,222,1) 0%,rgba(246,164,148,1) 100%);'
          },
          {
            name: '起降杆',
            num: 2,
            imgUrl: require('../assets/img/qijianggan.png'),
            style: 'background: linear-gradient(133deg,rgba(145,245,223,1) 0%,rgba(89,214,176,1) 100%);'
          },
          {
            name: '取暖器',
            num: 2,
            imgUrl: require('../assets/img/qunuanqi.png'),
            style: 'background: linear-gradient(133deg,rgba(214,202,251,1) 0%,rgba(174,152,248,1) 100%);'
          }
        ]
      },
      componentData1: {
        titleName: '接收授权的设备',
        lampImg: require('../assets/img/guree.png'),
        style: 'background: linear-gradient(127deg,rgba(58,230,189,0.88) 0%,rgba(223,255,248,0.2) 100%); width: 2.5rem;',
        lists: [
          {
            name: '空调',
            num: 2,
            imgUrl: require('../assets/img/chuanglian.png'),
            style: 'background: linear-gradient(133deg, rgba(245,234,218,1) 0%, rgba(233,200,146,1) 100%);'
          },
          {
            name: '卷帘门',
            num: 2,
            imgUrl: require('../assets/img/curtain.png'),
            style: 'background: linear-gradient(133deg,rgba(252,224,222,1) 0%,rgba(246,164,148,1) 100%);'
          },
          {
            name: '起降杆',
            num: 2,
            imgUrl: require('../assets/img/qijianggan.png'),
            style: 'background: linear-gradient(133deg,rgba(145,245,223,1) 0%,rgba(89,214,176,1) 100%);'
          },
          {
            name: '取暖器',
            num: 2,
            imgUrl: require('../assets/img/qunuanqi.png'),
            style: 'background: linear-gradient(133deg,rgba(214,202,251,1) 0%,rgba(174,152,248,1) 100%);'
          }
        ]
      },
      componentData2: {
        titleName: '已授权的设备',
        lampImg: require('../assets/img/blue.png'),
        style: 'background: linear-gradient(139deg,rgba(99,123,255,0.56) 0%,rgba(239,241,255,0.38) 100%); width: 2.2rem;',
        lists: [
          {
            name: '空调',
            num: 2,
            imgUrl: require('../assets/img/chuanglian.png'),
            style: 'background: linear-gradient(133deg, rgba(245,234,218,1) 0%, rgba(233,200,146,1) 100%);'
          },
          {
            name: '卷帘门',
            num: 2,
            imgUrl: require('../assets/img/curtain.png'),
            style: 'background: linear-gradient(133deg,rgba(252,224,222,1) 0%,rgba(246,164,148,1) 100%);'
          },
          {
            name: '起降杆',
            num: 2,
            imgUrl: require('../assets/img/qijianggan.png'),
            style: 'background: linear-gradient(133deg,rgba(145,245,223,1) 0%,rgba(89,214,176,1) 100%);'
          },
          {
            name: '取暖器',
            num: 2,
            imgUrl: require('../assets/img/qunuanqi.png'),
            style: 'background: linear-gradient(133deg,rgba(214,202,251,1) 0%,rgba(174,152,248,1) 100%);'
          }
        ]
      }
    }
  }
}
</script>
<style lang="less">
.index {
  font-size: 0;
  margin: 0;
  padding: 0 0 2.89rem 0;
  background-color: #E7ECF2;
  box-sizing: border-box;
  header {
    background: #5169E9;
    padding: 0.28rem 0;
    display: flex;
    .img-box {
      width: 0.88rem;
      height: 0.88rem;
      margin-left: 0.82rem;
      border-radius: 50%;
      background: #fff;
      img {
      }
    }
    .header-name {
      margin-left: 0.2rem;
      .name-t {
        color: #F2F2F2;
        font-size: 0.28rem;
        font-weight:bold;
        line-height: 0.34rem;
      }
      .name-b {
        margin-top: 0.1rem;
        color: #F2F2F2;
        font-size: 0.26rem;
        font-weight:bold;
        line-height: 0.37rem;
      }
    }
  }
  .shuffling {
    position: relative;
    height: 3.6rem;
    overflow: hidden;
    ul {
      width: 300%;
      display: flex;
      li {
        width: 100%;
        img {
          margin: 0.2rem 0.3rem;
          width: 6.9rem;
          height: 3.6rem;
        }
      }
    }
    .point {
      position: absolute;
      top: 3.32rem;
      width: 100%;
      text-align: center;
      left: 0;
      span{
        display: inline-block;
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        background-color: #F2F2F2;
      }
      .target {
        width: 0.24rem;
        height: 0.08rem;
        border-radius: 0.08rem;
      }
      .target-r {
        margin-right: 0.08rem;
      }
    }
  }
  .new-recommended {
    width: 6.9rem;
    height: 2.64rem;
    background-color: #fff;
    border-radius: 0.2rem;
    margin: 0.2rem auto;
    box-sizing: border-box;
    padding: 0.3rem 0.4rem;
    p {
      font-size: 0.28rem;
      font-weight: bold;
      line-height: 0.34rem;
    }
    div {
      img {
        width: 2.88rem;
        height: 1.44rem;
      }
    }
  }
  .add {
    width: 6.9rem;
    height: 1.12rem;
    background-color: #fff;
    border-radius: 0.2rem;
    margin: 0.2rem auto;
    display: flex;
    p {
      display: inline-block;
      width: 0.56rem;
      height: 0.56rem;
      border-radius: 50%;
      // margin-right: 0.19rem;
      margin: auto 0.19rem auto 0.85rem;
    }
    .add-left {
      border-right: 1px solid #DDE3F2;
      display: flex;
      height: 0.72rem;
      flex: 1;
      margin: auto 0;
      p {
        background-color: #19B944;
        box-shadow: 0 0.06rem 0.2rem #09AC2A;
        img {
          width: 0.56rem;
          height: 0.56rem;
          margin-top: 0.05rem;
        }
      }
      span {
        font-size: 0.24rem;
        font-weight: bold;
        line-height: 0.72rem;
      }
    }
    .add-right {
      display: flex;
      flex: 1;
      height: 0.72rem;
      margin: auto 0;
      p {
        background-color: #FF6C00;
        box-shadow: 0 0.06rem 0.2rem #FCB480;
        img {
          width: 0.56rem;
          height: 0.56rem;
          margin-top: 0.05rem;
        }
      }
      span {
        font-size: 0.24rem;
        font-weight: bold;
        line-height: 0.72rem;
      }
    }
  }

}

</style>
