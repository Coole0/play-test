<template>
  <div class="smart-heaters">
    <GoBack style="background: #5169E9; margin-bottom: 0.31rem;" :title="'智能取暖器'"></GoBack>
    <div class="content">
      <div class="content-top">
        <p>取暖器1</p>
      </div>
      <div class="content-cnt">
        <div class="status">
          <input type="checkbox" id="status">
          <label for="status">当前状态</label>
        </div>
        <div class="hermometer">
          <ul>
            <li style="margin-right: 0.4rem;">
              <p class="num">36</p>
              <p class="title">当前温度</p>
            </li>
            <li>
              <p class="num">80<span>min</span></p>
              <p class="title">后关闭</p>
            </li>
          </ul>
        </div>
        <div class="custom">
          <input type="checkbox" id="custom">
          <label for="custom">自定义温度</label>
          <img src="../assets/img/editor.png" alt="" @click="openSet()">
          <span class="info">推荐温度为：36度。</span>
          <div class="set-up" v-if="isSet">
            <i></i>
            <div class="set-box">
              <div class="set-title">
                <input type="text" v-model="heaters">
                <span>度</span>
              </div>
              <button class="ok-btn" @click="okClick(heaters)">确定</button>
              <button class="claer-btn" @click="!isSet">取消</button>
            </div>
          </div>
        </div>
        <div class="emperature">
          <div class="emperature-l" @click="isShowHeaters">
            <span>{{heaters}}°</span>
            <div class="showHeater" v-if="isShowHeater">
              <i></i>
              <p>{{heaters}}°</p>
            </div>
          </div>
          <div class="emperature-r"></div>
        </div>
        <div class="time">
          <input type="checkbox" id="time">
          <label for="time">自定义时间</label>
          <img src="../assets/img/twoTime.png" alt="">
        </div>
        <div class="min">
          <img src="../assets/img/times.png" alt="">
          <span>123min后关闭</span>
        </div>
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
      isSet: false,
      isShowHeater: false,
      heaters: 0
    }
  },
  methods: {
    openSet () {
      this.isSet = !this.isSet
    },
    okClick (val) {
      let dom = document.getElementsByClassName('emperature-l')[0]
      const num = val * 4.8 / 100
      dom['style'].left = `${num}rem`
      // if (10 < parseInt(val) > 90) {
      //   dom['style'].background = `linear-gradient(90deg,rgba(255,243,228,1) ${parseInt(val) - 10}%,rgba(255,79,0,1) ${parseInt(val) + 10}%)`
      // } else if (10 < parseInt(val)) {
      //   dom['style'].background = `linear-gradient(90deg,rgba(255,243,228,1) 0%,rgba(255,79,0,1) 100%)`
      // } else if (parseInt(val) > 90) {
      //   dom['style'].background = `linear-gradient(90deg,rgba(255,243,228,1) 90%,rgba(255,79,0,1) 100%)`
      // }
      this.isSet = !this.isSet
    },
    isShowHeaters () {
      this.isShowHeater = !this.isShowHeater
    }
  }
}
</script>

<style lang="less" scoped>
input[type="checkbox"] + label::before {
  content: ' ';
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 0.03rem solid rgba(192,205,239,1);
  border-radius: 50%;
  margin-right: 0.2rem;
  background: #ffffff;
  background-clip: content-box;
  padding: 0.02rem;
}
input[type="checkbox"]:checked + label::before {
  content: ' ';
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 0.03rem solid rgba(192,205,239,1);
  border-radius: 50%;
  margin-right: 0.2rem;
  background: #2D60EE;
  background-clip: content-box;
  padding: 0.02rem;
}
.smart-heaters {
  height: 100%;
  background-color: #EDEFF3;
  .content-top {
    width: 6.7rem;
    height: 1.24rem;
    margin: auto;
    background-color: #D1DBF6;
    border-radius: 0.3rem 0.3rem 0 0;
    p {
      text-align: center;
      font-size: 0.32rem;
      font-weight: bold;
      line-height: 1.24rem;
      color: rgba(50,50,50,1);
      opacity: 1;
    }
  }
  .content-cnt {
    width: 6.7rem;
    height: 7.72rem;
    padding: 0.33rem 0.38rem 04rem;
    box-sizing: border-box;
    margin: auto;
    background-color: #fff;
    border-radius: 0 0 0.3rem 0.3rem;
    .status {
      input {
        display: none;
      }
      label {
        font-size: 0.28rem;
        font-family: 'PingFang SC';
        font-weight: bold;
        line-height: 0.4rem;
        color: #323232;
        display: flex;
        align-items: center;
        width: 2rem;
      }
    }
    .hermometer {
      border-bottom: 0.01rem solid rgba(235,237,255,1);
      ul {
        display: flex;
        width: 3.6rem;
        margin: 0.3rem auto;
        li {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          text-align: center;
          padding-top: 0.12rem;
          box-sizing: border-box;
          background: linear-gradient(321deg,rgba(252,128,37,1) 0%,rgba(254,211,182,1) 100%);
          .num {
            font-size: 0.56rem;
            font-family: 'SF UI Display';
            font-weight: 400;
            line-height: 0.9rem;
            color: rgba(242,242,242,1);
            span {
              font-size: 0.26rem;
              font-family: 'SF UI Display';
              font-weight: 400;
              line-height: 0.31rem;
              color: rgba(242,242,242,1);
            }
          }
          .title {
            font-size: 0.2rem;
            font-family: 'PingFang SC';
            font-weight: 400;
            line-height: 0.28rem;
            color: rgba(242,242,242,1);
          }
        }
        li:last-child {
          background: linear-gradient(142deg,rgba(137,170,254,1) 0%,rgba(40,98,249,1) 100%);
        }
      }
    }
    .custom {
      padding: 0.3rem 0 0;
      width: 100%;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 0.56rem;
      input {
        display: none;
      }
      label {
        font-size: 0.28rem;
        font-family: 'PingFang SC';
        font-weight: bold;
        line-height: 0.4rem;
        color: #323232;
        display: flex;
        align-items: center;
        width: 2rem;
      }
      img {
        position: absolute;
        top: 0.37rem;
        right: 0;
        width: 0.24rem;
        height: 0.24rem;
      }
      .info {
        position: absolute;
        bottom: -0.2rem;
        left: 0.5rem;
        font-size: 0.14rem;
        font-family: 'PingFang SC';
        font-weight: 400;
        line-height: 0.2rem;
        color: rgba(124,124,124,1);
      }
      .set-up {
        position: absolute;
        top: 0.37rem;
        right: 0.41rem;
        width: 2.6rem;
        height: 3.06rem;
        background: rgba(109,120,149,1);
        opacity: 1;
        border-radius: 0.04rem;
        text-align: center;
        z-index: 10;
        i {
          position: absolute;
          top: 0.23rem;
          right: -0.17rem;
          width: 0;
          height: 0;
          overflow: hidden;
          font-size: 0;
          line-height: 0;
          border-width: 0.09rem;
          border-style: dashed dashed dashed solid;
          border-color: transparent transparent transparent rgba(109,120,149,1);
        }
        .set-box {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          .set-title {
            text-align: center;
            margin: 0.4rem auto 0.7rem;
            input {
              display: inline-block;
              width: 0.6rem;
              height: 0.4rem;
              text-align: center;
              background: rgba(109,120,149,1);
              border: 0.01rem solid;
              border-color: transparent transparent rgba(242,242,242,1) transparent;
            }
            span {
              vertical-align: top;
              font-size: 0.34rem;
              font-family: 'PingFang SC';
              font-weight: 500;
              line-height: 0.48rem;
              color: rgba(242,242,242,1);
            }
          }
        }
        button {
          width: 2rem;
          height: 0.44rem;
          opacity: 1;
          border-radius: 0.06rem;
          background-color: rgba(109,120,149,1);
        }
        .ok-btn {
          color: rgba(242,242,242,1);
          margin-bottom: 0.2rem;
          border: 0.01rem solid rgba(242,242,242,1);
        }
        .claer-btn {
          color: rgba(192,205,239,1);
          border: 0.01rem solid rgba(192,205,239,1);
        }
      }
    }
    .emperature {
      position: relative;
      padding-bottom: 0.3rem;
      margin-bottom: 0.3rem;
      height: 1.42rem;
      border-bottom: 0.01rem solid rgba(235,237,255,1);
      box-sizing: border-box;
      .emperature-l {
        position: absolute;
        top: 0;
        left: 0;
        width: 1.12rem;
        height: 1.12rem;
        border: 0.05rem solid rgba(255,198,159,1);
        background: linear-gradient(270deg,rgba(255,176,130,1) 0%,rgba(252,233,208,1) 100%);
        border-radius: 50%;
        text-align: center;
        z-index: 1;
        span {
          font-size: 0.44rem;
          font-family: 'PingFang SC';
          font-weight: 400;
          line-height: 1.12rem;
          color: rgba(242,242,242,1);
        }
        .showHeater {
          position: absolute;
          left: 0;
          top: -1.22rem;
          width: 1.12rem;
          height: 1.06rem;
          border-radius: 0.03rem;
          text-align: center;
          background-color: #FB8E4D;
          z-index: 9;
          p {
            font-size: 0.44rem;
            font-family: 'PingFang SC';
            font-weight: 500;
            line-height: 1.06rem;
            color: rgba(242,242,242,1);
          }
          i {
            position: absolute;
            bottom: -0.15rem;
            left: 0.5rem;
            width: 0;
            height: 0;
            overflow: hidden;
            font-size: 0;
            line-height: 0;
            border-width: 0.09rem;
            border-style: solid dashed dashed dashed;
            border-color: #FB8E4D transparent transparent transparent;
          }
        }
      }
      .emperature-r {
        position: absolute;
        top: 0.46rem;
        left: 0.56rem;
        width: 4.8rem;
        height: 0.2rem;
        border-radius: 0.3rem;
        background: linear-gradient(90deg,rgba(255,243,228,1) 0%,rgba(255,79,0,1) 100%);
      }
    }
    .time {
      position: relative;
      input {
        display: none;
      }
      label {
        font-size: 0.28rem;
        font-family: 'PingFang SC';
        font-weight: bold;
        line-height: 0.4rem;
        color: #323232;
        display: flex;
        align-items: center;
        width: 2rem;
      }
      img {
        position: absolute;
        bottom: -0.16rem;
        left: 0.5rem;
        width: 1.99rem;
        height: 0.2rem;
      }
    }
    .min {
      width: 2.4rem;
      height: 0.56rem;
      box-sizing: border-box;
      padding: 0.13rem 0.23rem;
      background-color: #687DF3;
      border-radius: 0.04rem;
      display: flex;
      margin: 0.36rem 0 0 0.5rem;
      img {
        width: 0.28rem;
        height: 0.28rem;
        margin-right: 0.1rem;
      }
      span {
        font-size: 0.24rem;
        font-family: 'PingFang SC';
        font-weight: 400;
        line-height: 0.3rem;
        color: rgba(242,242,242,1);
      }
    }
  }
}
</style>
