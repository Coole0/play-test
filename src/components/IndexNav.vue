<template>
  <div class="index-nav">
    <p class="name" :style="componentData.style">{{componentData.titleName}}</p>
    <div class="title">
      <img :src="componentData.lampImg" alt="">
      <span>公司</span>
    </div>
    <ul>
      <li v-for="(item, index) in componentData.lists" :key="index">
        <i :style="item.style"><img class="imgo" :src="item.imgUrl" alt=""></i>
        <div>
          <p class="pt">{{item.name}}</p>
          <p class="pb">{{item.num}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    componentData: {

    }
  }
}
</script>
<style lang="less" scoped>
.index-nav {
  width: 6.9rem;
  height: 5.3rem;
  border-radius: 0.2rem;
  margin: 0 auto;
  padding: 0.3rem 0.4rem;
  background-color: #fff;
  box-sizing: border-box;
  .name {
    display: inline-block;
    color: #323232;
    text-align: center;
    font-size: 0.28rem;
    font-weight: bold;
    line-height: 0.64rem;
    border-radius: 0 0.26rem 0.1rem 0.26rem;
    height: 0.64rem;
  }
  .title {
    display: flex;
    margin: 0.21rem 0 0.2rem 0.24rem;
    img {
      width: 0.3rem;
      height: 0.44rem;
      margin-right: 0.2rem;
    }
    span {
      font-size: 0.32rem;
      font-weight: bold;
      line-height: 0.45rem;
      color: rgba(50,50,50,1);
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      width: 3.04rem;
      height: 1.6rem;
      background-image: url('../assets/img/rectangular.png');
      box-sizing: border-box;
      padding: 0.48rem 0 0 0.84rem;
      i {
        width: 0.64rem;
        height: 0.64rem;
        border-radius: 50%;
        display: table-cell;
        vertical-align: middle;
        .imgo {
          width: 0.22rem;
          height: 0.24rem;
          line-height: 0.24rem;
          margin: auto;
          margin-top: 0.18rem;
        }
      }
      div {
        display: inline-block;
        margin-left: 0.2rem;
        p {
          text-align: center;
        }
        .pt {
          font-size: 0.26rem;
          font-weight: 600;
          line-height: 0.36rem;
          color: rgba(6,18,31,1);
        }
        .pb {
          font-size: 0.2rem;
          font-weight: 600;
          line-height: 0.26rem;
          color: rgba(140,145,152,1);
        }
      }
    }
  }
}
</style>
