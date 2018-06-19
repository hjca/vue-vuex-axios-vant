<!-- 订单 -->
<template>
  <div id="userOrder">
      <!-- 头部信息 -->
      <div class="userTitle">
        <div class="userHeadInfo" @click.stop='watchUserIfo'>
          <img v-lazy="backgroundImg">
          <div class="userName">{{ userName }}</div>
        </div>
      </div>
      <OrderList></OrderList>
      <ShoppingCell></ShoppingCell>
  </div>
</template>

<script>
import Vue from 'vue';
import OrderList from './shoppingList/shoppingList.vue';
import ShoppingCell from './shoppingList/shoppingCell.vue';
import noHeadImg from '../../static/images/noHeadImg.png';
import { Icon } from 'vant';
Vue.use(Icon);

export default {
  name:'userOrder',
  data () {
    return {
      active:0,
      backgroundImg:noHeadImg,
      userName:"张三"
    };
  },

  components: {
    OrderList,
    ShoppingCell
  },

  computed: {},

  mounted() {},

  methods: {
    watchUserIfo(){
      this.$router.push({path:'/userinfo',name:'UserIfo'})
    }
  }
}

</script>
<style scoped>
.userTitle{
  width: 100%;
  height: 3.2rem;
  background: url(../../static/images/mineBack.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.userHeadInfo{
  width: auto;
  height: auto;
}
.userHeadInfo img{
  width: 1rem;
  height: 1rem;
}
.userName{
  color: #ffffff;
  font-size: .3rem;
  text-align: center;
  width: auto;
  height: auto;
}
</style>