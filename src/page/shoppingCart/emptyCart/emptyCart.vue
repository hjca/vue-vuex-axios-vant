<!-- 空购物车 -->
<template>
  <div id="emptyShopCart">
      <div class="emptyContent">
          <p class="bigTitle">购物车快饿瘪了T.T</p>
          <p class="smailTitle">快给我挑点宝贝</p>
          <router-link to="/index">去逛逛</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name:'emptyShopCart',
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
    #emptyShopCart{
        width: 100%;
        height: 100%;
    }
    .emptyContent{
        height: auto;
        text-align: center;
        padding-top: 1.2rem;
    }
    .bigTitle{
        font-size: .32rem;
        margin-bottom: .2rem;
    }
    .smailTitle{
        font-size: .28rem;
        color: #999999;
    }
    a{
        display: inline-block;
        width: 2rem;
        height: 0.68rem;
        border: 1px solid #f60;
        color: #f60;
        font-size: .28rem; 
        text-align: center;
        line-height: .68rem;
        border-radius: .1rem;
    }
</style>