<template>
  <div class="authorization">
    <GoBack style="background: #5169E9; margin-bottom: 2.87rem;" :title="'添加设备'"></GoBack>
    <div class="model">
      <img src="../assets/img/error.png" alt="">
      <p>授权失败</p>
      <div class="btn">
        <button style="margin-right: 0.2rem;">重试</button>
        <button>取消</button>
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

    }
  }
}
</script>

<style lang="less" scoped>
.authorization {
  height: 100%;
  background-color: #EDEFF3;
  .model {
    width: 3.6rem;
    height: 4rem;
    background-color: #fff;
    border-radius: 0.1rem;
    text-align: center;
    margin: auto;
    box-sizing: border-box;
    padding: 0.58rem 0;
    img {
      width: 0.88rem;
      height: 0.88rem;
      margin: auto;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 0.4rem;
      color: rgba(50,50,50,1);
      margin-bottom: 0.7rem;
    }
    .btn {
      button {
        display: inline-block;
        width: 0.88rem;
        height: 0.56rem;
        border-radius: 0.1rem;
        border: 0.01rem solid #480AC5;
        box-sizing: border-box;
        color: #480AC5;
        background-color: #fff;
        padding: 0.08rem 0.16rem;
      }
    }
  }
}
</style>
