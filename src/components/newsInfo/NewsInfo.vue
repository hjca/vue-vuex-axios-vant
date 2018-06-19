<!-- 最新消息 -->
<template>
  <div id='latestNews'>
      <van-notice-bar
        :text="latestNews[0]"
        left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);

export default {
  name:'latestNews',
  props: ["latestNews"],
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
      console.log(this)
  },

  methods: {}
}

</script>
<style scoped>
</style>