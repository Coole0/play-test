<template>
  <div class="instruc">
    <go-back :title="'使用说明'"></go-back>
    <div class="instruc-box">
      <div class="instruc-box-content">
        安全范围
      </div>
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
.instruc {
  background: #181B2D;
  min-height: 100%;
  &-box {
    padding: 0.38rem 0.4rem 0 0.4rem;
    &-content {
      background: #FFFFFF;
      width: 6.7rem;
      height: 11.61rem;

      font-size:0.56rem;
      text-align: center;
      font-family:'PingFang SC';
      font-weight:400;
      line-height:9.78rem;
      color:rgba(50,50,50,1);
    }
  }
}
</style>
