<!-- 商品订单列表 -->
<template>
  <div id="orderList">

       <!-- 用户个人的购买情况信息 -->
      <div class="userBuyStatus">
          <div v-for="(item,index) in orderList" :key="index" @click.stop='showTotast(item.name)'>
              <van-icon :name="item.nameIcon" color="#333"></van-icon>
              <p>{{ item.name }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Toast, Cell, CellGroup } from 'vant';

Vue.use(Icon).use(Cell).use(CellGroup);

export default {
  name:'orderList',
  data () {
    return {
        orderList:[
            {
                nameIcon:'pending-payment',
                name:'待付款'
            },
            {
                nameIcon:'pending-orders',
                name:'待接单'
            },
            {
                nameIcon:'pending-deliver',
                name:'待发货'
            },
            {
                nameIcon:'logistics',
                name:'已发货'
            },
            {
                nameIcon:'completed',
                name:'已完成'
            },
        ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      showTotast(name){
          Toast(name)
      }
  }
}

</script>
<style scoped>
    .userBuyStatus{
        width: 100%;
        height: auto;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        border-bottom: 0 solid #e5e5e5;
    }
    .userBuyStatus div{
        width: 20%;
        height: 1.6rem;
        /* height: auto; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }
    .userBuyStatus div p{
        width: 100%;
        height: auto;
        font-size: .24rem;
        text-align: center;
        margin-top: .1rem;
        color: #333;
    }
    .van-icon{
        font-size: medium;
    }
    .van-icon-pending-payment:before,
    .van-icon-pending-orders:before,
    .van-icon-pending-deliver:before,
    .van-icon-logistics:before,
    .van-icon-completed:before{
        font-size: .5rem;
        color: #333;
    }
</style>