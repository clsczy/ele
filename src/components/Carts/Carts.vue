<template >
    <div class="carts"  >
        <section @click = 'show = !show && count'>
            <div class="cart-left">
                <div class="wrapper">
                    <div class="inner" :class="{active :count}">
                        <span class="iconfont icon-gouwuche"></span>
                    </div>
                </div>
            </div>
            <div class="count">
                {{count}}
            </div>
            <div class="cart-middle">
                <strong>¥{{totalPrice}}</strong>
                <em>另许配送{{deliveryPrice}}元</em>
            </div>
            <div class="cart-right" :class="{active :totalPrice>=minPrice}">
                ¥{{minPrice}}元起送
            </div>
        </section>



        <div class="carts-list" v-show = 'showList'>

                <div class="header">
                    <h3>购物车</h3>
                    <span @click='clear'>清空</span>
                </div>
            <div class="list">
                <ul>
                    <li v-for = 'food in cartGoods'>
                        {{food.name}}
                        <ele-add :food='food'></ele-add>
                    </li>
                </ul>
            </div>
        </div>

        <div class="cover" v-show = 'showList'>

        </div>
    </div>

</template>

<script>
import '../../assets/css/font.css'
import Add from '../Add/Add.vue'
require ('../../assets/js/iscroll.js')

export default {
    data(){
        return {
            show:false
        }
    },
    mounted(){
        new IScroll('.list');
        console.log(new IScroll('.list'));
    },
    props:{
        cartGoods:Array,
        deliveryPrice:Number,
        minPrice:Number,

    },
    computed:{
        count(){
            let sum = 0;
            this.cartGoods.forEach(item=>{
                 sum += item.count
            })
            return sum
        },
        totalPrice(){
            let sum = 0;
            this.cartGoods.forEach(item=>{
                 sum += item.count*item.price
            })
            return sum
        },
        showList(){
            if (!this.cartGoods.length) {
                this.show=false
            }
            return this.show
        }
    },
    methods:{
        clear(){
            this.cartGoods.forEach(item=>item.count=0);
            this.show = false;
        }
    },
    components:{
        'ele-add':Add,
    }
}
</script>

<style lang="less" scoped>
    @import "../../assets/less/public.less";
    .carts{
        .fix();
        bottom:0;
        width: 100%;
        .h(96);
        background-color: #131D26;
        display: flex;
        align-items: center;
        color: rgba(255,255,255,0.4);
        z-index: 99;
        section{
            .fix();
            display: flex;
            width: 100%;
            align-items: center;
            z-index: 222;
        }
        .cover{
            width: 100%;
            .fix();
            letf:0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, .4);

        }
        .cart-left{
            height: 100%;
        }
        .wrapper{
            .w(96);
            .h(96);
            z-index: 100;
            background-color: #131D26;
            border-radius: 50%;
            .abs();
            .left(36);
            .bottom(20);
            .inner{
                .w(76);
                .h(76);
                .abs();
                .top(10);
                .left(10);

                &.active{
                    background-color: rgb(0,160,220);
                    color: #fff;

                }
                color:#80858a;
                background-color: #2b343c;
                border-radius: 50%;
                text-align: center;

                span:before{
                    .abs();
                    .top(21);
                    .left(21);
                    .fs(36);

                }
            }

        }
        .count{
            .abs();
            z-index: 131;
            .left(88);
            .top(-18);
            .fs(18);
            background-color: red;
            color: #fff;
            .w(48);
            .h(32);
            border-radius: 10px;
            .tc();
            .line-height(32);
        }
        .cart-middle{
            .fs(24);
            .pl(164);
            strong{
                font-weight: bold;
                .fs(32);
                .pr(24);
                .mr(24);
                border-right: 1px solid rgba(255,255,255,0.4);
            }
        }
        .cart-right{
            .fs(24);
            .w(210);
            .h(96);
            .tc();
            .line-height(96);
            background-color: #2B333B;
            margin-left: auto;
            &.active{
                background-color: rgb(0,160,220);
                color: #fff;
            }
        }
        .carts-list{
            .fix();
            .bottom(96);
            .left(0);
            color: rgb(7,17,27);
            background-color: #fff;
            max-height: 250px;
            width: 100%;
            z-index: 1;
            .header{
                background-color: #f3f5f7;
                .padding(0,36,0,36);
                .h(80);
                .line-height(80);
                border-bottom: 1px solid rgba(7,17,27,.1);
                .fs(28);
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                    color: rgb(0, 160 ,220);
                }
            }
            .list{
                overflow: hidden;
                max-height: 200px;
            }
            ul{
                .padding(0,36,0,36);
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .h(96);
                    .fs(28);
                    border-bottom: 1px solid rgba(7,17,27,.1);

                }
            }
        }

    }


</style>
