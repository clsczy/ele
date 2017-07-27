<template lang="html">
    <header>
        <!-- 商家基本信息 -->
        <div class="seller">
            <img :src="seller.avatar" alt="">
            <div class="seller-wrapper">
                <h2><i></i>{{seller.name}}</h2>
                <p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
                <p><i></i>{{seller.supports[0].description}}</p>
            </div>
            <div class="sw" @click = 'show=true'>
                {{seller.supports.length}}个&gt;
            </div>
        </div>
        <!-- 公告信息 -->
        <div class="bulletin" >
            <p @click = 'show=true'><i></i>{{seller.bulletin}}</p>
        </div>
        <!-- 背景 -->
        <div class="bg">
            <img :src="seller.avatar" alt="">
        </div>
        <!-- 弹出层 -->
        <transition name='bounce'>
            <ele-popup :seller = 'seller' v-show = 'show' @close='show=false'></ele-popup>
        </transition>
    </header>
</template>

<script>
import Popup from '../Popup/Popup.vue'
export default {
    data(){
        return {
            show:false,
        }
    },
    props:{
        seller:{
            type:Object,
            require:true
        }
    },
    components:{
        'ele-popup':Popup,
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/public.less';
    @keyframes bounce-in {
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(0);
        }
    }
    .bounce-enter-active{animation: bounce-in 1s}
    .bounce-leave-active{animation: bounce-out 1s}
    header{
        .h(270);
        .fs(20);
        width: 100%;
        color: #fff;
        background-color: rgba(7, 17, 27, 0.5);
        position: relative;
        .seller{
            box-sizing: border-box;
            width: 100%;
            .padding( 48, 24, 36, 48);
            display: flex;
            img {
               .w(128);
               .h(128);
               border-radius: 4px;
           }
           .seller-wrapper{
               .ml(32);
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               h2{
                   font-weight: bold;
                   .fs(32);
                   i{
                       display: inline-block;
                       background: url('./brand@2x.png');
                      .w(60);
                      .h(36);
                       background-size: 100% 100%;
                       vertical-align: middle;
                       .mr(14);
                   }
               }
               p:last-of-type{
                   i{
                       display: inline-block;
                       background: url('./decrease_2@2x.png');
                      .w(36);
                      .h(36);
                       background-size: 100% 100%;
                       vertical-align: middle;
                       .mr(14);
                   }
               }
           }
           .sw{
               align-self: flex-end;
               background: rgba(0,0,0,0.2);
               padding: 10px;
               border-radius: 10px;
               margin-left: auto;
           }
        }
        .bulletin{
            .l-h(28px);
            background: rgba(0,0,0,0.2);
            padding-left: 12px;
            padding-right: 12px;
            p{
                .ellipsis-basic();
                i{
                    .dib();
                    background: url('./bulletin@2x.png');
                    width: 36px;
                    height: 18px;
                    background-size: 100% 100%;
                    vertical-align: middle;
                    margin-right: 7px;
                }
            }
        }
        .bg{
            .abs();
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: blur(10px);
            img{
                .wh(100%);
            }
        }
    }
</style>
