<template>
  <div class="popup">
      <h2>{{seller.name}}</h2>
      <div class="grade">
          <p v-for = 'star in stars ' :class="star"></p>
      </div>
      <h3>优惠信息</h3>
      <ul>
          <li v-for = 'item in seller.supports'>{{item.description}}</li>
      </ul>
      <h3>商家公告</h3>
      <p>{{seller.bulletin}}</p>
      <div class="close" @click = 'close'>
          x
      </div>
  </div>
</template>

<script>
export default {
    props:{
        seller:{
            type:Object,
            required:true,
        }
    },
    methods:{
        close(){
            this.$emit('close');
        }
    },
    mounted(){
        console.log(this.stars);
    },
    computed:{
        stars(){
            let len = 5;
            let score = Math.floor(this.seller.score);
            let arr =[];
            for (let i = 0; i < score; i++) {
                arr.push('on');
            }
            if (this.seller.score - score >= 0.5) {
                arr.push('half');
            }
            while (len>arr.length) {
                arr.push('off');
            }
            return arr;
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/less/public.less';
    .popup{
        .fix();
        z-index: 2;
        filter: blur(0.5px);
        top: 0;
        left: 0;
        right:0;
        bottom:0;
        background-color: rgba(7,17,27,.8);
        .fs(24);
        .padding(0,72,0,72);
        .grade{
            display: flex;
            justify-content: center;
            p{
                .padding(20,10,20,10);
                .mt(20)
            }

            .on{
                .w(20);
                .h(20);
                background: url('../../assets/imgs/star24_on@2x.png') no-repeat;
                background-size: 10px 10px;
            }
            .off{
                .w(20);
                .h(20);
                background: url('../../assets/imgs/star24_off@2x.png') no-repeat;
                background-size: 10px 10px;
            }
            .half{
                .w(20);
                .h(20);
                background: url('../../assets/imgs/star24_half@2x.png') no-repeat;
                background-size: 10px 10px;
            }
        }
        h2{
            .fs(32);
            font-weight: 700;
            .line-height(32);
            .mt(128);
            .tc();
        }
        h3{
            .fs(28);
            .tc();
            .line-height(28);
            font-weight: 700;
            .rel();
            .padding(0,24,0,24);
            z-index: 1;
            .mt(56);
            .mb(48);
            &:after{
                content: '';
                .abs();
                left: 0;
                top: 50%;
                border-bottom: 1px solid rgba(255,255,255,.2);
                .db();
                .w100();
                .bc();
            }
        }
        ul{
            .padding(0,24,0,24);
            li{
                .mb(24);
            }
        }
        p{
            .line-height(48);
            .padding(0,24,0,24);

        }
        .close{
            .fs(64);
            .abs();
            bottom: 64px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255,.5);
        }

    }
</style>
