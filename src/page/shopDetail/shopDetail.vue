<!-- 商品详情 -->
<template>
  <div id="shopDetailInfo">
      <HeaderTab :header-title='titlename'></HeaderTab>
      <div class="shopDetail">
          <!-- 显示图片 -->
          <!-- <img v-lazy="shopInfo.shopUrl"> -->
          <img :src="shopInfo.shopUrl" :onerror='errorImage'>
          <div class="shopMessage">
              <div class="van-ellipsis">{{ shopInfo.shopName }}</div>
              <div class="shopPrice">￥ {{ shopInfo.shopPrice }}</div>
              <div class="yunFei">
                  <span>运费：免运费</span>
                  <span>剩余：100</span>
              </div>
          </div>
      </div>

      <van-goods-action>
            <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickservice" />
            <van-goods-action-mini-btn icon="cart" to="/shopcart" text="购物车" @click="goShopCart" :info="addCartNum" />
            <van-goods-action-big-btn text="加入购物车" @click="addShopCart" />
            <van-goods-action-big-btn text="立即购买" @click="goPay" primary />
      </van-goods-action>

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
            >
        </van-sku>
  </div>
</template>

<script>
import Vue from 'vue';
import store from '../../store/store.js';
import HeaderTab from '../../components/headerBar/headerBar.vue';
import errorImg from '../../static/images/error.jpg';
import shopGood from '../../constant/constant.js';
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Toast,
  Actionsheet,
  Sku
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn)
  .use(Actionsheet)
  .use(Sku);

export default {
  name:'shopDetailInfo',
  data () {
    return {
        show:false,
        titlename:'商品详情',
        shopInfo:'',
        errorImage:errorImg,
        show:false,
        skuInfo:shopGood.skuObj,
        goods:shopGood.goods,
        shopId:'',
        disableStepperInput:true,
        showCart:true,
        quota:3,
        addCartNum:0
    };
  },

  components: {
      HeaderTab
  },

  computed: {},

  mounted() {
      store.commit('changeFooterHide')
      this.shopInfo = this.$store.state.shopItemInfo;
    //   this.titlename = this.$route.params.shopname;
  },

  methods: {
    //   点击客服
    onClickservice(){
        Toast("客服")
    },
    // 查看购物车
    goShopCart(){},
    // 添加购物车
    addShopCart(){
        this.show = true;
        this.goods.title = this.shopInfo.shopName;
        this.goods.picture = this.shopInfo.shopUrl;
        this.skuInfo.list[0].price = parseInt(this.shopInfo.shopPrice)*100;
        this.skuInfo.list[0].id = Math.random();
        this.shopId = this.shopInfo.shopId;
    },
    //   支付
    goPay(){
        Toast("点击支付按钮");
    },
    // 加入购物车
    onAddCartClicked(evt){
        this.show = false;
        this.addCartNum++;
        this.shopInfo['num'] = evt.selectedNum;
        store.commit('addShopCart',this.shopInfo);
        Toast("成功添加购物车");
    },
    // 购买
    onBuyClicked(){
        this.show = false;
    }
  },
  store
}

</script>
<style scoped>
#footers{
    display: none;
}
.van-goods-action{
    z-index: 10;
}
.shopDetail{
    width: 100%;
    height: auto;
}
.shopDetail img{
    width: 7.5rem;
    height: 7.5rem;
}
.shopMessage{
    width: 100%;
    height: auto;
    background: #ffffff;
    margin-top: .2rem;
    padding: .2rem
}
.van-ellipsis,.shopPrice{
    font-size: .3rem;
}
.shopPrice{
    color: #ff4444;
    margin-top: .2rem;
}
.yunFei{
    width:100%;
    height: auto;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
}
.yunFei span{
    color: #999;
    font-size: .2rem;
}
</style>