<template lang="html">
  <div class="addcount">
      <transition name='sub'>
          <strong class="iconfont icon-jian" v-show='food.count'  @click.stop = 'sub(food)'></strong>
      </transition>
      <transition name='count'>
          <em  v-show='food.count'>{{food.count}}</em>
      </transition>

      <b class="iconfont icon-jia" @click.stop = "addToCart(food)"></b>


  </div>
</template>

<script>
export default {
    props:{
        food:{
            type:Object,
            require:true
        }
    },
    methods:{
        addToCart(food){
            if (food.count) {
                food.count++;
            }else{
                this.$set(food,'count',1);
            }
        },
        sub(food){
            food.count--;
        }
    },
    computed:{

    }
}
</script>

<style lang="less" scoped>
    @import "../../assets/less/public.less";
    .sub-enter, .sub-leave-active{transform: translateX(48px) rotateZ(360deg);}
    .sub-enter-active, .sub-leave-active{transition: all .5s;}

    .count-enter, .count-leave-active{transform:  translateX(48px) rotateZ(180deg) !important;}
    .count-enter-active, .count-leave-active{transition: all 1s;}


    .addcount{
        .w(144);
        .h(48);
        color:rgb(0,160,220);
        .fs(48);
        .rel();
        strong{
            .abs();
            left:0;
            top: 0;
        }
        b{
            .abs();
            right:0;
            top: 0;
        }
        em{
            display: inline-block;
            .w(48);
            .abs();
            right:50%;
            transform: translateX(50%);
            top: 0;
            .fs(20);
            .tc();
            .mt(5);
        }
    }
</style>
