<template>
  <div class="update">
    <go-back :title="'修改密码'" :operate="'完成'"></go-back>
    <div class="update-box">
      <input type="text" placeholder="输入当前密码">
      <input type="text" placeholder="输入8-15位新密码">
      <input type="text" placeholder="再次输入新密码">
    </div>
  </div>
</template>
<script>
import GoBack from '../components/goBack'
export default {
  data () {
    return {}
  },
  components: {
    GoBack
  }
}
</script>
<style lang="less" scoped>
.update {
  background: #181B2D;
  min-height: 100%;
  &-box {
    padding: 0.13rem 0.7rem 0 0.7rem;
    input {
      display: block;
      width: 100%;
      height: 1.09rem;
      background: #181B2D;
      border-bottom: 1px solid #E7ECF2;
      font-size: 0.26rem;
      font-family: 'PingFang SC';
      font-weight: 500;
      line-height: 0.37rem;
      color: #fff;
      &::placeholder {
        font-size: 0.26rem;
        font-family: 'PingFang SC';
        font-weight: 500;
        line-height: 0.37rem;
        color: #BDC4CE;
      }
    }
  }
}
</style>
