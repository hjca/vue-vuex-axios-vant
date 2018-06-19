<!--  -->
<template>
  <div id="footers" class="van-hairline--top">
      <van-row>
        <van-col span="3" class="index">
            <router-link to="/index">
                <van-icon name="wap-home" />
            </router-link>
        </van-col>
        <van-col span="7" class="shopList">
            <router-link to="/allshop">
                全部商品
            </router-link>
        </van-col>
        <van-col span="7" class="shopCart">
            <router-link to="/shopcart">
                购物车
            </router-link>
        </van-col>
        <van-col span="7" class="shopOrder">
            <router-link to="/userorder">
                我的订单
            </router-link>
        </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col, Icon } from 'vant';

Vue.use(Row).use(Col).use(Icon);
export default {
  name:'footers',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
    #footers{
        width: 100%;
        height: 1rem;
        background: #fafafa;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #e5e5e5
    }
    .index,.shopList,.shopCart,.shopOrder{
        display: inline-block;
        line-height: 1rem;
        font-size: .3rem;
        text-align: center;
        border-right: 1px solid #e5e5e5;
    }
    .index{
        line-height: 1.2rem;
    }
    .shopOrder{
        border: none;
    }
    .van-icon-wap-home:before{
        font-size: .4rem;
    }
</style>