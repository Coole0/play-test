<template>
  <div class="goback">
    <div class="goback-btn">
      <img src="../assets/img/back.png" alt="">
      <span>返回</span>
    </div>
    <div class="goback-title">{{title}}</div>
    <div class="goback-operate">{{operate}}</div>
    <div v-if="operate1" class="goback-operate list">{{operate1}}</div>
    <div v-if="operate2" class="goback-operate add">{{operate2}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    operate: {
      type: String
    },
    operate1: {
      type: String
    },
    operate2: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.goback {
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #EBEDFF;
  &-btn {
    display: flex;
    align-items: center;
    img {
      width: 0.17rem;
      height: 0.28rem;
    }
    span {
      font-size:0.3rem;
      font-family: 'PingFang SC';
      font-weight:400;
      line-height:0.42rem;
      color:rgba(243,244,249,1);
      margin-left: 0.07rem;
    }
  }
  &-title {
    position:absolute;
    font-size:0.34rem;
    left: 0;
    right: 0;
    text-align: center;
    font-family:'PingFang SC';
    font-weight:bold;
    line-height:0.40rem;
    color:rgba(242,242,242,1);
  }

  &-operate {
    font-size:0.3rem;
    font-family: 'PingFang SC';
    font-weight:400;
    line-height:0.42rem;
    color:rgba(243,244,249,1);
    margin-left: 0.07rem;
  }
  .list {
    font-size: 0.5rem;
  }
  .add {
    width: 0.3rem;
    height: 0.3rem;
    line-height: 0.18rem;
    text-align: center;
    border: 0.02rem solid rgba(242,242,242,1);
    border-radius: 50%;
  }
}
</style>
