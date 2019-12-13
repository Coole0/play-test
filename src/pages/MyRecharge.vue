<template>
  <div class="recharge">
    <div class="recharge-top">
      <go-back :title="'充值'"></go-back>
      <div class="recharge-user">
        <img src="" alt="">
        <div class="recharge-user-info">
          <div class="recharge-user-info-phone">13666365656</div>
          <div class="recharge-user-info-other">
            <span>当前余额0元</span>
            <span>2019.12.12到期，已开启自动续费</span>
          </div>
        </div>
      </div>

    </div>
    <div class="recharge-tab">
      <div v-for="(item, index) in tabs" v-bind:key="index" class="recharge-tab-item">
        <img :src="item.url" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="recharge-center">
      <div class="recharge-center-top">
        <div class="recharge-center-top-title">云套餐购买</div>
        <div class="recharge-center-top-btn">
          <span>更多</span>
          <img src="../assets/img/back-blank.png" alt="">
        </div>
      </div>
      <div class="recharge-center-center">
        <div class="recharge-center-center-card">
          <div class="recharge-center-center-card-title">
            每月专享88折
          </div>
          <div class="recharge-center-center-card-word1">
            连续包月
          </div>
          <div class="recharge-center-center-card-word2">
            循环存储3天 录像
          </div>
          <div class="recharge-center-center-card-money">
            <u>￥9.9</u>
            <span>￥8.8</span>
          </div>
        </div>
         <div class="recharge-center-center-card">
          <div class="recharge-center-center-card-title">
            每月专享88折
          </div>
          <div class="recharge-center-center-card-word1">
            连续包月
          </div>
          <div class="recharge-center-center-card-word2">
            循环存储7天 录像
          </div>
          <div class="recharge-center-center-card-money">
            <u>￥18</u>
            <span>￥16</span>
          </div>
        </div>
         <div class="recharge-center-center-card">
          <div class="recharge-center-center-card-title">
            每月专享88折
          </div>
          <div class="recharge-center-center-card-word1">
            连续包年
          </div>
          <div class="recharge-center-center-card-word2">
            循环存储7天 录像
          </div>
          <div class="recharge-center-center-card-money2">
            <span>￥179</span>
            <i>66%用户选择</i>
          </div>
        </div>
      </div>
      <div class="recharge-center-bottom">
        <input type="checkbox" name="到期后自动续费，可随时取消" id="pay">
        <label for="pay">到期后自动续费，可随时取消</label>
      </div>
    </div>
    <div class="recharge-discount">
      <span>优惠券</span>
      <span>当前套餐不支持使用</span>
    </div>
    <div class="recharge-pay">
      <span>支付方式</span>
      <div class="recharge-pay-checkbox">
        <input type="checkbox" name="" id="style">
        <label for="style">支付宝</label>
      </div>
    </div>
    <div class="recharge-btn">
      <button>立即开通</button>
      <div class="recharge-btn-checkbox">
        <input type="checkbox" name="" id="agree">
        <label for="agree">
          我已阅读并同意<a>《云服务购买协议》</a>和<a>《自动续费协议》</a>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import GoBack from '../components/goBack'
export default {
  data () {
    return {
      tabs: [
        {url: '', name: '套餐转移'},
        {url: '', name: '优惠券'},
        {url: '', name: '兑换码'},
        {url: '', name: '购买记录'}
      ]
    }
  },
  components: {
    GoBack
  }
}
</script>
<style lang="less" scoped>
input[type="checkbox"] + label::before {
  content: ' ';
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 1px solid #707070;
  border-radius: 50%;
  margin-right: 0.1rem;
  background: #ffffff;
  background-clip: content-box;
  padding: 0.02rem;
}
input[type="checkbox"]:checked + label::before {
  content: ' ';
  display: inline-block;
  width: 0.16rem;
  height: 0.16rem;
  border: 1px solid #707070;
  border-radius: 50%;
  margin-right: 0.1rem;
  background: #01cd78;
  background-clip: content-box;
  padding: 0.02rem;
}
.recharge {
  min-height: 100%;
  background: #EDEFF3;
  &-top {
    background: #181B2D;
  }

  &-user {
    padding: 0.4rem 0.7rem;
    display: flex;
    img {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
      background: #BDCBF1;
      margin-right: 0.2rem;
    }
    &-info {
      position: relative;
      &-phone {
        font-size:0.34rem;
        font-family:'SF UI Display';
        font-weight:400;
        line-height:0.4rem;
        color: #F2F2F2;
        margin-bottom: 0.1rem;
      }
      &-other {
        display: flex;
        position: absolute;
        left: -73%;
        top: 33%;
        transform: scale(0.5, 0.5);
        span {
          border: 1px solid #DCB99E;
          border-radius: 0.06rem;
          padding: 0.2rem 0.32rem;
          font-size: 0.24rem;
          color: #fff;
          white-space: nowrap;
        }
        span:first-child {
          margin-right: 0.2rem;
        }
      }
    }
  }

  &-tab {
    padding: 0.4rem 1.02rem;
    background: #212431;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 0.64rem;
        height: 0.64rem;
        background: #7C7C7C;
      }
      span {
        font-size:0.32rem;
        font-family:'PingFang SC';
        font-weight:bold;
        line-height:0.26rem;
        color:rgba(242,242,242,1);
        transform: scale(0.5, 0.5);
        margin-top: 0.1rem;
      }
    }
  }

  &-center {
    padding: 0.3rem 0.4rem;
    background: #fff;
    border-radius: 0.5rem 0.5rem 0 0;
    margin-top: 0.3rem;
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-title {
        font-size:0.28rem;
        font-family:'PingFang SC';
        font-weight:bold;
        line-height:0.26rem;
        color:rgba(50,50,50,1);
      }
      &-btn {
        display: flex;
        align-items: center;
        span {
          font-size:0.2rem;
          font-family:'PingFang SC';
          font-weight:bold;
          line-height:0.4rem;
          color:rgba(88,88,88,1);
          margin-right: 0.1rem;
        }
        img {
          width: 0.12rem;
          height: 0.2rem;
        }
      }
    }

    &-center {
      display: flex;
      justify-content: space-between;
      margin-top: 0.2rem;
      &-card {
        width:2.08rem;
        height:2.40rem;
        background:rgba(32,36,57,1);
        border:0.04rem solid rgba(197,172,153,1);
        border-radius: 0.2rem;
        text-align: center;
        &-title {
          width: 1.31rem;
          height: 0.42rem;
          background: #B59073;
          border-bottom: 0.04rem solid #C5AC99;
          border-right: 0.04rem solid #C5AC99;
          font-size:0.16rem;
          font-family:'PingFang SC';
          font-weight:400;
          line-height:0.38rem;
          color:rgba(242,242,242,1);
          text-align: center;
          border-radius:0.2rem 0px 0.2rem 0px;
        }
        &-word1 {
          font-size:0.24rem;
          font-family:'PingFang SC';
          font-weight:bold;
          line-height:0.34rem;
          color: #f2f2f2;
          margin-top: 0.16rem;
          text-align: center;
        }
        &-word2 {
          font-size:0.18rem;
          font-family:'PingFang SC';
          font-weight:400;
          line-height:0.28rem;
          color:rgba(242,242,242,1);
          text-align: center;
          margin-top: 0.08rem;
        }
        &-money {
          margin-top: 0.08rem;
          display: flex;
          flex-direction: column;
          u {
            font-size:0.18rem;
            font-family:'SF UI Text';
            font-weight:500;
            line-height:0.38rem;
            color: #7C7C7C;
            text-decoration: line-through;
          }
          span {
            font-size:0.28rem;
            font-family:'SF UI Text';
            font-weight:bold;
            line-height:0.38rem;
            color: #DFAD86;
            margin-top: 0.17rem;
          }
        }

        &-money2 {
          display: flex;
          flex-direction: column;
          margin-top: 0.2rem;
          span {
            font-size:0.28rem;
            font-family:'SF UI Text';
            font-weight:bold;
            line-height:0.38rem;
            color: #DFAD86;
          }
          i {
            font-size:0.16rem;
            font-family:'PingFang SC';
            font-weight:500;
            line-height:0.34rem;
            color: #f2f2f2;
            margin-top: 0.07rem;
          }
        }
      }
    }

    &-bottom {
      margin-top: 0.2rem;
      input {
        display: none;
      }

      label {
        font-size:0.16rem;
        font-family:'PingFang SC';
        font-weight:400;
        line-height:0.38rem;
        color: #DFAD86;
        display: flex;
        align-items: center;
      }

    }
  }

  &-discount {
    margin-top: 0.2rem;
    background: #fff;
    padding: 0.3rem 0.4rem;
    display: flex;
    justify-content: space-between;
    span {
      font-size:0.26rem;
      font-family:'PingFang SC';
      line-height:0.40rem;
    }
    span:first-child {
      font-weight:bold;
      color: #323232;
    }
    span:last-child {
      font-weight:500;
      color: #7C7C7C;
    }
  }

  &-pay {
    margin-top: 0.2rem;
    background: #fff;
    padding: 0.3rem 0.4rem;
    display: flex;
    justify-content: space-between;
    span {
      font-size:0.26rem;
      font-family:'PingFang SC';
      line-height:0.40rem;
      font-weight:bold;
      color: #323232;
    }
    &-checkbox {
      input {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        font-size:0.24rem;
        font-family:'PingFang SC';
        font-weight:bold;
        line-height:0.40rem;
      }
      input[type="checkbox"] + label::before {
        width: 0.24rem;
        height: 0.24rem;
      }
      input[type="checkbox"]:checked + label::before {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }

  &-btn {
    padding: 0.24rem 0.45rem;
    button {
      background: #1C1612;
      border-radius: 0.1rem;
      font-size:0.24rem;
      font-family:'PingFang SC';
      font-weight:bold;
      line-height:0.40rem;
      text-align: center;
      color: #DCB99E;
      display: block;
      width: 100%;
      padding: 0.12rem 0;
      margin-bottom: 0.2rem;
    }
    &-checkbox {
      display: flex;;
      justify-content: center;
      input {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        font-size:0.12rem;
        font-family:'PingFang SC';
        line-height:0.40rem;
        color: #585858;
        a {
          color: #C5AC99;
        }
      }
      input[type="checkbox"] + label::before {
        border-radius: 0;
        border-color: #707070;
      }
      input[type="checkbox"]:checked + label::before {
        border-radius: 0;
        border-color: #707070;
      }
    }
  }
}
</style>
