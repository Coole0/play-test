
<template>
  <div class="index-shutter">
    <GoBack style="background: #5169E9;" :title="'卷帘门'"></GoBack>
    <div class="content">
      <div class="content-top">
        <div class="t-left">
          <i></i>
          <span>卷帘门1</span>
        </div>
        <div class="t-right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <img src="../assets/img/remove.png" alt="">
        </div>
      </div>
      <div class="content-checter">
        <ul>
          <li v-for="(item, index) in lists" :key="index">
            <div :style="item.style">
              <img v-if="item.iconUrl" :style="item.imgStyle ? item.imgStyle : ''" :src="item.iconUrl" alt="">
              <p v-if="!item.iconUrl">
                <i style="margin-right: 0.08rem;"></i>
                <i></i>
              </p>
            </div>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="content-bottom">
        <div class="bottom-title">
          <div class="title-l">
            <img style="display: inline-block; width: 0.28rem; height: 0.32rem;" src="../assets/img/monitoring.png" alt="">
            <span>监控已开启</span>
          </div>
          <img style="width: 0.56rem; height: 0.36rem;" src="../assets/img/video.png" alt="">
        </div>
        <ul>
          <li style="margin-right: 0.38rem;"></li>
          <li></li>
        </ul>
      </div>
    </div>
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
      lists: [
        {
          style: 'background: linear-gradient(132deg,rgba(207,255,238,1) 0%,rgba(98,236,158,1) 100%);',
          iconUrl: require('../assets/img/flag.png'),
          name: '开启'
        },
        {
          style: 'background:linear-gradient(136deg,rgba(255,242,213,1) 0%,rgba(242,187,132,1) 100%);',
          iconUrl: require('../assets/img/flag.png'),
          name: '关闭'
        },
        {
          style: 'background:linear-gradient(134deg,rgba(238,236,255,1) 0%,rgba(154,130,255,1) 100%);',
          iconUrl: require('../assets/img/keys.png'),
          imgStyle: 'width: 0.28rem;',
          name: '锁定'
        },
        {
          style: 'background:linear-gradient(129deg,rgba(254,227,218,1) 0%,rgba(248,135,147,1) 100%);',
          iconUrl: '',
          name: '暂停'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.index-shutter {
  height: 100%;
  background: rgba(237,239,243,1);
  header {
    position: relative;
    width: 100%;
    height: 1.76rem;
    background-color: #5169E9;
    text-align: center;
    .header {
      position: absolute;
      left: 0.3rem;
      bottom: 0.3rem;
      text-align: center;
      img {
        display: inline-block;
        width: 0.17rem;
        height: 0.28rem;
        margin-right: 0.14rem;
      }
      span {
        font-size: 0.3rem;
        font-weight: 400;
        line-height: 0.42rem;
        vertical-align: bottom;
        color: rgba(243,244,249,1);
      }
    }
    h4 {
      padding-top: 1.08rem;
      font-size: 0.34rem;
      font-weight:bold;
      line-height: 0.40rem;
      color: rgba(249,252,255,1);
      letter-spacing: 0.04rem;
    }
  }
  .content {
    width: 6.90rem;
    height: 7.12rem;
    background:rgba(255,255,255,1);
    box-sizing: border-box;
    padding: 0.4rem;
    opacity:1;
    border-radius: 0.2rem;
    margin: 0.36rem auto 0;
    .content-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .t-left {
        i {
          display: inline-block;
          width: 0.1rem;
          height: 0.32rem;
          margin-right: 0.12rem;
          vertical-align: sub;
          background: rgba(255,119,49,1);
          opacity: 1;
        }
        span {
          font-size: 0.32rem;
          font-weight: bold;
          line-height: 0.38rem;
          color: rgba(50,50,50,1);
        }
      }
      .t-right {
        display: flex;
        ul {
          margin: 0.05rem 0.25rem 0 0;
          li {
            width: 0.28rem;
            height: 0.06rem;
            background:rgba(50,50,50,1);
            opacity:1;
            border-radius: 0.01rem;
            margin-bottom: 0.06rem;
          }
          li:last-child {
            margin-bottom: 0;
          }
        }
        img {
          width: 0.4rem;
          height: 0.4rem;
        }
      }
    }
    .content-checter {
      padding: 0.4rem 0 0.3rem;
      border-bottom: 1px solid rgba(221,227,242,1);
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          text-align: center;
          div {
            width: 0.96rem;
            height: 0.96rem;
            margin: 0 auto 0.12rem;
            border-radius: 50%;
            box-sizing: border-box;
            padding-top: 0.28rem;
            img {
              margin: auto;
              width: 0.36rem;
              height: 0.36rem;
            }
            p {
              width: 0.32rem;
              margin: auto;
              display: inline-block;
              display: flex;
              i {
                width: 0.12rem;
                height: 0.36rem;
                background: rgba(255,255,255,1);
                opacity: 1;
                border-radius: 0.06rem 0 0.06rem 0;
              }
            }
          }
        }
      }
    }
    .content-bottom {
      padding-top: 0.32rem;
      .bottom-title {
        padding-bottom: 0.32rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-l {
          span {
            vertical-align: top;
          }
        }
      }
      ul {
        display: flex;
        li {
          width: 2.86rem;
          height: 2.86rem;
          border-radius: 0.3rem;
          background-color: #C1CFF5;
        }
      }
    }
  }
}
</style>
