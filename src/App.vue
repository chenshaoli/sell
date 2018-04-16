<template>
  <div id="app">
    <!-- <router-view/> 当改变路由，这边对应的view内容也会相应的被改变-->
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      i am content
    </div>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style scoped lang="less">
#app {
  .tab {
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    .tab-item {
      flex:1;
      text-align:center;
    }
  }
}
</style>
