<template>
  <div id="app">
    <ele-header :seller = 'seller'></ele-header>
    <ul class="nav">
        <li><router-link to = '/'>商品</router-link></li>
        <li><router-link to = '/comments'>评论</router-link></li>
        <li><router-link to = '/seller'>商家</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import './assets/css/reset.css'
import './assets/js/public.js'
// import ele from '../data.json';

export default {
  data(){
      return {
          seller:{},
      }
  },
  created(){
      //载入数据
      let ele = require ('../data.json');
      this.seller = ele.seller
  },
  name: 'app',
  components:{
      'ele-header':Header
  }
}
</script>

<style lang='less' scoped>
    @import "./assets/less/public.less";
    .nav{
        .h(80);
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .line-height(28);
        border-bottom: 1px solid rgba(7,17,27,.2);
        a{
            .fs(28);
            color: rgb(75,95,83);
            &.router-link-exact-active{
                color: #f00;
            }
        }
    }
</style>
