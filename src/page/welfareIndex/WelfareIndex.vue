<!-- 首页 -->
<template>
  <div id="welfareIndex">
    <!-- 轮播图 -->
    <SwiperIndex :swiper-data='swiperData'></SwiperIndex>
    <!-- 最新消息 -->
    <!-- <LatestNes :latest-news='latestNewsData'></LatestNes> -->
    <!--  商品分类 -->
    <ShoppingClass :shop-list-data='ShoppingClassList'></ShoppingClass> 
    <!-- 商品种类 -->
    <shoppingClassItem :shop-item-list-data="shopItemList"></shoppingClassItem>
    <!-- 显示购物车按钮 -->
    <div class="cartButton" v-show="$store.state.shopCartList.length">
      <ShowCart></ShowCart>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { PullRefresh } from 'vant';
import getAjax from '../../util/getAjax/getAjax.js';
import errorMessage from '../../util/errorToast/errorToast';
import store from '../../store/store.js';

// 轮播图组件
import SwiperIndex from '../../components/indexSwiperData/IndexSwiper.vue';
// 最新消息组件
import LatestNes from '../../components/newsInfo/NewsInfo.vue';
// 商品分类
import ShoppingClass from '../../components/shoppingClassfiyList/shoppingClassfiyList.vue';
// 商品种类
import shoppingClassItem from '../../components/shoppingClassItem/shoppingClassItem.vue';
// 显示购物车
import ShowCart from './showCart/showCart.vue';

Vue.use(PullRefresh);

export default {
  name:'welfareIndex',
  data () {
    return {
      swiperData:'',
      latestNewsData:'',
      ShoppingClassList:'',
      shopItemList:''
    };
  },

  components: {
    SwiperIndex,
    LatestNes,
    ShoppingClass,
    shoppingClassItem,
    ShowCart
  },

  computed: {},

  mounted () {
    // 轮播图数据
    let resultSwiper = getAjax('/api/swiperData');
    resultSwiper.then(res => {
      return res;
    }).then(json => {
      // 处理后的数据
      const data = json;
      this.swiperData = data.swiperData;
    });

    // 最新消息
    let resultLatestNews = getAjax('/api/latestNews');
    resultLatestNews.then(res => {
      return res;
    }).then(json => {
      // 处理后的数据
      const data = json;
      this.latestNewsData = data.latestNews;
    });

    // 商品分类数据
    let shoppingClass = getAjax('/api/shoppingClass');
    shoppingClass.then(res => {
      return res;
    }).then(json => {
      // 处理后的数据
      const data = json;
      this.ShoppingClassList = data.shopClassList;
    });

    // 商品种类
    let shoppingItemList = getAjax('/api/shoppingItemList');
    shoppingItemList.then(res => {
      return res;
    }).then(json => {
      // 处理后的数据
      const data = json;
      this.shopItemList = data.shopItemList;
    });
  },

  methods: {
    
  },
  store
}

</script>
<style scoped>
.cartButton{
  position: fixed;
  z-index: 1000;
  right: .2rem;
  bottom: 1.2rem;
}
</style>