<template>
  <div class="about">
    <go-back :title="'关于我们'"></go-back>
    <div class="about-logo"></div>
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
.about {
  min-height: 100%;
  background:linear-gradient(315deg,rgba(59,103,227,1) 0%,rgba(125,159,248,1) 100%);
  &-logo {
    width: 2.56rem;
    height: 2.56rem;
    background: #fff;
    margin: 2.79rem auto 0 auto;
  }
}
</style>
