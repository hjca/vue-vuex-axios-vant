<!-- 首页轮播图 -->
<template>
  <div id='indexSwiper'>
      <van-swipe :autoplay="3000">
          <van-swipe-item class="seiperItem" v-for='(item, index) in swiperData'
            :key='index'>
                <img v-lazy="item.imgUrl">
            </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload  } from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload, {
    preload:1.3
});

export default {
  name:'indexSwiper',
  props: ["swiperData"],
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
      
  },

  methods: {}
}

</script>
<style scoped>
.seiperItem{
    height: 3rem!important;
}
.seiperItem img{
    width: 100%;
    height: 100%;
}
</style>