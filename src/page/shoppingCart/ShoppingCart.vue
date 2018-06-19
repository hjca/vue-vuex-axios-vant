<!-- 购物车 -->
<template>
  <div class="shoppingCart">
      <!-- 购物车为空 -->
      <EmptyCart v-if="!$store.state.shopCartList.length"></EmptyCart>
      <!-- 购物车不为空 -->
      <HaveShopCart v-else></HaveShopCart>
  </div>
</template>

<script>
import EmptyCart from './emptyCart/emptyCart.vue';
import HaveShopCart from './haveShopCart/haveShopCart.vue';
import store from '../../store/store.js';

export default {
  name:'shoppingCart',
  data () {
    return {
    };
  },

  components: {
    EmptyCart,
    HaveShopCart
  },

  computed: {},

  mounted() {},

  methods: {},
  store
}

</script>
<style scoped>
</style>