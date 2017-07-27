<template>
    <div class="food">
        <span class="back" @click = 'close'>&lt;</span>
        <img :src="food.image" alt="">
        <div class="info">
            <h3>{{food.name}}</h3>
            <p>
                月售{{food.sellCount}} 好评率{{food.rating}}%
            </p>
            <p>
                <strong class="price">¥<b>{{food.price}}</b></strong>
                <del v-if = 'food.oldPrice'>¥{{food.oldPrice}}</del>
            </p>
            <div class="cart" @click='add(food)'>
                加入购物车
            </div>
        </div>
        <div class="intro">
            <h3>商品介绍</h3>
            <p>{{food.info}}</p>
        </div>
        <div class="comments">
            <h2>商品评价</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        food:{
            type:Object,
            require:true,
        }
    },
    methods:{
        close(){
            this.$emit('close');
        },
        add(food){
            if (food.count) {
                food.count++;
            }else{
                this.$set(food,'count',1);
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../assets/less/public.less";
    .food{
        .fix();
        left : 0;
        right: 0;
        top : 0;
        .bottom (48);
        .fs(20);
        background-color: #f3f4f5;
        .back{
            .abs();
            .top(10);
            .left(10);
            .fs(64);
            color: #fff;
        }
        img{
            width: 100%;
        }
        .info{
            background-color: #fff;
            .padding(0,36,0,36);
            border-bottom: 1px solid rbga(7,17,27,.1);
            .rel();
            h3{
                .pt(36);
                .pb(16);
                .fs(28);
                font-weight: 700;
                color: rgb(7,17,27);
            }
            p:first-of-type{
                color: rgb(147,153,157);
            }
            p:last-of-type{
                .pt(36);
                .pb(36);

                strong{
                    color:red;
                    b{
                        .fs(28);
                    }
                }
            }
            .cart{
                .abs();
                .right(36);
                .bottom(36);
                .w(148);
                .h(48);
                background-color: rgb(0, 160, 220);
                color: #fff;
                .line-height(48);
                .tc();
                border-radius: 40px;
                .fs(20);
            }
        }
        .intro{
            .mt(32);
            .padding(0,36,0,36);
            border-top: 1px solid rbga(7,17,27,.1);
            background-color: #fff;
            h3{
                .pt(36);
                .fs(28);
                .pb(12);
            }
            p{
                .fs(24);
                font-weight: 200;
                .line-height(32);
                color:rgb(75,85,93);
                .pb(36);
            }

        }
        .comments {
            h2 {
                font-size: 14px;
                color:rgb(7,17,27);
                font-weight: 700;
                line-height: 14px;
                margin-bottom: 10px;
            }
        }

    }
</style>
