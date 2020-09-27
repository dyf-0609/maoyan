<template>
    <div class="buy-block">
        <div class="seat-type">
            <span class="text-middle">
                <img src="/image/kexuan.png" alt="">
                <span class="text">可选</span>
            </span>
            <span class="text-middle">
                <img src="/image/yixuan.png" alt="">
                <span class="text">已售</span>
            </span>
            <span class="text-middle">
                <img src="/image/bukexuan.png" alt="">
                <span class="text">不可售</span>
            </span>
        </div>
        <div class="submit-block">
            <div class="submit">请先选座</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.buy-block{
    position: fixed;
    width: 100%;
    bottom: 0;
    box-sizing: border-box;
    z-index: 999;
    background-color: #fff;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    .seat-type{
        width: 100%;
        height: 36.4px;
        text-align: center;
        padding: 0;
        background-color: #f0f0f0;
        opacity: .8;
        line-height: 36.4px;
        .text-middle{
            margin-left: 8px;
            img{
                display: inline-block;
                height: 15px;
                margin-right: 4px;
            }
            .text{
                display: inline-block;
                font-size: 12px;
                color: #777;
            }
        }
    }
    .submit-block{
        padding: 10px;
        height: 45px;
        .submit{
            width: 100%;
            line-height: 45px;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            background-color: #ffddb2;
        }
    }
}
</style>