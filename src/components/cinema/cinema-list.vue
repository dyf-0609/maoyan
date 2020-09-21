<template>
<div class="cinema-list">
    <ul class="list-wrap">
        <li class="item line" v-for="item in data" :key="item.id">
            <div class="title line-ellipsis">
                <span class="shop">{{item.title}}</span>
                <span class="price" v-if="item.price">{{item.price}}<span class="q">元起</span></span>
            </div>
            <div class="location">
                <div class="address line-ellipsis">{{item.location}}</div>
                <div class="length">{{item.distance}}</div>
            </div>
            <div class="lable" v-for="tab in (item.lable)" :key="tab.id">
                <div class="tab" :class="{'tab1':tab.snack||tab.vipTag}">{{Object.values(tab)[0]}}</div>
            </div>
            <div class="discount" v-if="item.discountText">
                <img src="/image/card.png" alt="">
                <span>{{item.discountText}}</span>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props:{
        data:Array
    },
}
</script>

<style lang="scss" scoped>
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.line-ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-list{
    width: 100%;
    background-color: #fff;
    .list-wrap{
        width: 100%;
        .item{
            padding: 13px 15px;
            overflow: hidden;
            .title{
                height: 23px;
                line-height: 23px;
                font-size: 16px;
                .shop{
                    color: #000;
                }
                .price{
                    padding-top:9px;
                    padding-left: 5px;
                    font-size: 18px;
                    color: #f03d37;
                    .q{
                       margin-left: 3px; 
                       font-size: 11px;
                    }
                }
            }
            .location{
                margin-top: 6px;
                font-size: 13px;
                color: #666;
                display: flex;
                .address{
                    flex: 1;
                }
                .length{
                   margin-left: 5px; 
                }
            }
            .lable{
                height: 17px;
                line-height: 17px;
                margin-top: 6px;
                margin-bottom: 4px;
                overflow: hidden;
                display: inline-block;
                .tab{
                    display: inline-block;
                    color: #589daf;
                    border: 1Px solid #589daf;
                    padding: 0 3px;
                    height: 15px;
                    line-height: 15px;
                    border-radius: 2px;
                    font-size: 12px;
                    margin-right: 3px;
                }
                .tab1{
                    color: #f90;
                    border: 1px solid #f90;
                }
            }
            .discount{
                line-height: 14px;
                color: #999;
                margin-bottom: 4px;
                font-size: 12px;
                position: relative;
                img{
                    font-size: 14px;
                }
                span{
                    position: absolute;
                    top: 0; left:20px;
                }
            }
        }
    }
}

</style>