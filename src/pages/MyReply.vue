<template>
  <div class="reply">
    <go-back :title="'用户反馈'"></go-back>
    <div class="reply-content">
      <input type="text" placeholder="电器品类">
      <input type="text" placeholder="电器品牌">
      <input type="text" placeholder="电器型号">
      <textarea name="" id="" cols="30" rows="10" placeholder="问题描述"></textarea>
      <!-- <input type="textarea" class="special" placeholder="问题描述"> -->
      <input type="text" placeholder="手机号">
      <input type="text" placeholder="邮箱">
    </div>
  </div>
</template>
<script>
import GoBack from '../components/goBack'
export default {
  data () {
    return {

    }
  },
  components: {
    GoBack
  }
}
</script>
<style lang="less" scoped>
.reply {
  min-height: 100%;
  background: #181B2D;
  &-content {
    padding: 0.4rem;
    textarea, input {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 0.36rem 0.3rem;
      font-size:0.24rem;
      font-family:'PingFang SC';
      font-weight:300;
      line-height:0.33rem;
      color: #D9D9D9;
      background: #181B2D;
      border: 1px solid #F9FCFF;
      border-radius: 0.16rem;
      margin-bottom: 0.3rem;
    }
    .special {
      height: 3.2rem;
    }
    textarea::placeholder, input::placeholder {
      color: #D8D8D8;
    }

  }
}
</style>
