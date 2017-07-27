<template lang="html">

        <div class="goods">
            <!-- 左边导航栏 -->
            <div class="menu">
                <ul>
                    <li v-for = '(item ,index) in goods' :class="{cur :cur==index} "
                    @click = 'select(index)' ref = 'lis'>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <!-- 右侧列表 -->
            <div class="goods-list" >
                <div class="">
                    <dl v-for = 'item in goods' ref='list'>
                        <dt>{{item.name}}</dt>
                        <dd v-for = 'food in item.foods' @click = 'getFood(food)'>
                            <div class="food">
                                <img :src="food.icon" alt="">
                                <div class="">
                                    <h3>{{food.name}}</h3>
                                    <p>{{food.description}}</p>
                                    <p>
                                        月售{{food.sellCount}} 好评率{{food.rating}}%
                                    </p>
                                    <p>
                                        <strong class="price">¥<b>{{food.price}}</b></strong>
                                        <del v-if = 'food.oldPrice'>¥{{food.oldPrice}}</del>
                                    </p>
                                </div>
                            </div>
                            <div class="add">
                                <ele-add :food='food'></ele-add>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
            <transition name='slider'>
                <ele-food :food='food' v-show = 'show' @close = 'show=false'></ele-food>
            </transition>
            <ele-carts
             :cartGoods='cartGoods'
             :deliveryPrice='seller.deliveryPrice'
             :minPrice = 'seller.minPrice'

             ></ele-carts>
        </div>

</template>

<script>
require ('../../assets/js/iscroll.js')
require ('../../assets/js/iscroll-probe.js')
import Food from '../Food/Food.vue'
import Carts from '../Carts/Carts.vue'
import Add from '../Add/Add.vue'
export default {
    data(){
        return {
            goods:[],
            cur:0,
            food:{},
            show:false,
            seller:{},
        }
    },
    created(){
        let ele = require('../../../data.json');
        this.goods = ele.goods;
        this.seller =ele.seller;
    },
    mounted(){
        let that = this;
        this.listScroll=new IScroll('.goods-list',{probeType:3});
        this.menuScroll=new IScroll('.menu');
        //console.log(this.getdlDis());

        this.listScroll.on('scroll',function () {
            let scrollDis  = Math.abs(this.y);
            for (let i = 0; i < that.getdlDis().length; i++) {
                if (scrollDis>that.getdlDis()[i]) {
                    that.cur = i;
                }
            }
            let lis = that.$refs.lis;
            that.menuScroll.scrollToElement(lis[that.cur])
        });

    },
    updated(){
        this.listScroll=new IScroll('.goods-list',{probeType:3});
        this.menuScroll=new IScroll('.menu');
    },
    methods:{
        select(index){
            let list = this.$refs.list;
            this.cur = index;
            this.listScroll.scrollToElement(list[index]);
        },
        getdlDis(){
            let list = this.$refs.list;
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                arr.push(list[i].offsetTop)
            }
            return arr;
        },
        getFood(food){
            this.food = food;
            this.show=true;
        }
    },
    computed:{
        cartGoods(){
            let arr =[];
            this.goods.forEach(item1=>{item1.foods.forEach(
                item2=>{
                    if (item2.count) {
                        arr.push(item2);
                    }
                }
            )});
            return arr;
        }
    },
    components:{
        'ele-food' : Food,
        'ele-carts' : Carts,
        'ele-add' : Add,
    }
}
</script>

<style lang="less" scoped>
    @import "../../assets/less/public.less";
    .slider-enter, .slider-leave-active{transform: translateX(100%);}
    .slider-enter-active, .slider-leave-active{transition:all .5s;}
    .goods{
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        position: fixed;
        overflow: hidden;
        left: 0;
        right: 0;
        .bottom(96);
        .top(352);
        .menu{
            .fs(24);
            .w(160);
            .rem(min-width,160);

            background-color: #f3f5f7;
            li{
                .h(108);
                box-sizing: border-box;
                .padding(0,24,0,24);
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                align-items: center;
                &.cur{
                    background-color: #fff;
                    p{
                        border-bottom: 0 none;
                    }
                }
                p{
                    border-bottom: 1px solid rgba(7,17,27,.1);
                    height:100%;
                    width: 100%;
                    display: -webkit-flex;
                    display: -ms-flex;
                    display: flex;
                    align-items: center;
                }
            }
        }

        .goods-list{
            dt{
                background-color: #f3f5f7;
                .h(52);
                .line-height(52);
                color: rgb(147,153,159);
                .fs(24);
                .pl(28);
                border-left: 2px solid #d9dde1;
                font-weight: bold;
            }
            dd{
                .rel();
                .pl(36);
                .fs(20);
                .food{
                    display: flex;

                    .margin(36,0,36,0);
                    img{
                        .w(114);
                        .h(114);
                    }
                    div{
                        .ml(20);
                        h3{
                            .fs(28);

                            color: rgb(7,17,27);
                        }
                        p{
                            color: rgb(147,153,159);
                            .margin (16,0,0,0);
                        }
                        .price{
                            color:red;
                            b{
                                .fs(28);
                            }
                        }
                    }
                }
                .add{
                    .abs();
                    .right(36);
                    bottom: 0
                }

            }
        }
    }
</style>
