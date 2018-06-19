<!-- 头部导航 -->
<template>
  <div id='headBar'>
      <van-nav-bar
            :title="headerTitle"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  name:'headBar',
  props:["headerTitle"],
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //   返回
      onClickLeft(){
          this.$router.go(-1);
      }
  }
}

</script>
<style scoped>
</style>