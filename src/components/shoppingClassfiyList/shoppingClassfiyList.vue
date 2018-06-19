<!-- 商品分类 -->
<template>
  <div id='shoppingClass'>
      <div class="shopItem" v-for="(item,idex) in shopListData" :key="idex">
          <img v-lazy="item.shopItemUrl">
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload, {
    preload:1.3
})

export default {
  name:'',
  props:['shopListData'],
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
#shoppingClass{
    width: auto;
    height: 3.6rem;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.shopItem{
    width: 25%;
    height: 50%;
}
.shopItem img{
    width: 100%;
    height: 100%;
}
</style>