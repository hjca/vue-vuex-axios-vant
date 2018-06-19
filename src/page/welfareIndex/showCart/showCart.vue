<!-- 主页显示购物车按钮 -->
<template>
  <div id="shopCart">
      <van-icon name="shopping-cart" color="#ffffff" @click="goCart"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);

export default {
  name:'',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      goCart(){
          this.$router.push({path:"/shopcart"});
      }
  }
}

</script>
<style scoped>
#shopCart{
    width: 1rem;
    height: 1rem;
    background: #6688a4;
    border: 2px solid #ffffff;
    border-radius: 50%;
    text-align: center;
    line-height: .8rem;
}
#shopCart .van-icon{
    display: inline-block;
    width: auto;
    height: auto;
    font-size: .6rem!important;
}
.van-icon-shopping-cart:before{
    font-size: .6rem;
}
</style>