<!-- 主页中商品分类 -->
<template>
  <div id='shoppingClass'>
      <div class="shoppIngContent" v-for="(item,index) in shopItemListData" :key="index">
            <div class="shopClassName">- {{ item.classFiyName }} -</div>
            <div class="shoppinglist">
                <div class="shopItem" v-for="(val, idx) in item.classArr" :key="idx">
                    <img v-lazy="val.shopUrl" @click.stop="watchDetail(val)">
                    <div class="shopItemInfo">
                        <div class="van-ellipsis">{{ val.shopName }}</div>
                        <div class="addCart">
                            <span class="price">￥ {{ val.shopPrice }}</span>
                            <img :src="loadRedImg" class="loaddingCart" v-if="shopItemNames == val.shopName">
                            <!-- 点击添加购物车 -->
                            <span class="cartIcon" v-else-if="shopItemNames != val.shopName" @click.stop="addShopItem(val.shopName,val)">
                                <i class="van-icon van-icon-shopping-cart"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      <!-- 弹框 -->
      <van-sku 
        v-model="show"
        :sku='skuInfo'
        :goods="goods"
        :goods-id="shopId"
        :disable-stepper-input="disableStepperInput"
        :hide-stock="skuInfo.hide_stock"
        :show-add-cart-btn='showCart'
        :quota='quota'
        reset-stepper-on-hide
        stepper-title="购买数量"
        close-on-click-overlay
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
        ></van-sku>
  </div>
</template>

<script>
import Vue from 'vue';
import { Actionsheet, Sku, Toast  } from 'vant';
import loadImg from '../../static/images/ic_loading.png';
import shopGood from '../../constant/constant.js';
import store from '../../store/store.js';

Vue.use(Actionsheet).use(Sku);

export default {
  name:'shoppingClass',
  props:['shopItemListData'],
  data () {
    return {
        show:false,
        loadRedImg:loadImg,
        shopItemNames:"",
        skuInfo:shopGood.skuObj,
        goods:shopGood.goods,
        disableStepperInput:true,
        shopItemData:'',
        shopId:'',
        showCart:true,
        quota:3
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   点击商品右下方的添加购物车的按钮
    addShopItem(shopName,val){
        this.show = true;
        this.shopItemNames = shopName;
        this.shopItemData = val;
        this.goods.title = val.shopName;
        this.goods.picture = val.shopUrl;
        this.skuInfo.list[0].price = parseInt(val.shopPrice)*100;
        this.skuInfo.list[0].id = Math.random();
        this.shopId = val.shopId;
        let that = this;
        setTimeout(function(){
            that.shopItemNames = ""
        },1000)
    },
    // 加入购物车
    onAddCartClicked(evt){
        this.show = false;
        Toast("成功添加购物车")
        console.log(evt);
        this.shopItemData['num'] = evt.selectedNum;
        store.commit('addShopCart',this.shopItemData);
    },
    // 购买
    onBuyClicked(){
        this.show = false;
    },
    // 查看详情
    watchDetail(val){
        store.commit('showShopDetail',val);
        this.$router.push({path:'/detail', name:'ShopDetailInfo' ,params: {shopname:val.shopName}});
    }
  },
  store
}

</script>
<style scoped>

    .shoppIngContent{
        width: 100%;
        height: auto;
        background: #ffffff;
        margin-top: .2rem;
        padding: .2rem;
    }
    .shopClassName{
        width: 100%;
        font-size: .3rem;
        height: .8rem;
        line-height: .8rem;
    }
    .shoppinglist{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
    }
    .shopItem{
        width: 50%;
        height: auto;
        padding: .2rem;
    }
    .shopItem img{
        width: 100%;
        height: 3rem;
        border: 1px solid #f2f2f2;
    }
    .shopItemInfo{
        width: 100%;
        height: auto;
        border: 1px solid #f2f2f2;
        border-top: none;
    }
    .van-ellipsis{
        font-size: .3rem;
        padding: .1rem;
        margin-bottom: 10px;
    }
    .addCart{
        width: 100%;
        height: auto;
        padding: .1rem;
        padding-bottom: .15rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .price{
        font-size: .3rem;
        color: #f44;
    }
    .cartIcon{
        width: .5rem;
        height: .5rem;
        border: 1px solid #f44;
        border-radius: 50%;
        text-align: center;
        line-height: 0;
    }
    .cartIcon i{
        display: inline;
    }
    .van-icon-shopping-cart:before{
        color: #ff4444;
        font-size: .3rem;
    }
    .van-icon{
        font-size: .3rem;
    }
    .addCart .loaddingCart{
        border: none;
        width: .5rem;
        height: .5rem;
        animation: moveCircle 1s ease-out infinite;
    }
    @keyframes moveCircle{
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }

    /* 弹框样式 */
    .van-sku-group-container{
       border: none;
    }
</style>