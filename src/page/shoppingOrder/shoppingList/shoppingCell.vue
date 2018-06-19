<template>
  <div id="shoppingCell">

      <van-cell-group>
        <van-cell v-for="(item,index) in cellList" :key='index' :title="item.title" :icon="item.nameIcon" is-link />
    </van-cell-group>

  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

export default {
  name:'shoppingCell',
  data () {
    return {
      cellList:[
        {
          nameIcon:'member-day-privilege',
          title:'我的会员卡'
        },
        {
          nameIcon:'tosend',
          title:'我的礼品卡'
        },
        {
          nameIcon:'exchange',
          title:'我的积分'
        },
        {
          nameIcon:'tosend',
          title:'我收到的礼物'
        },
        {
          nameIcon:'gift',
          title:'我的优惠卷'
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style scoped>
</style>