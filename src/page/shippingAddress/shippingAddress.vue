<!-- 收货地址 -->
<template>
  <div id="shopAddress">
      <HeaderTab header-title='填写收货地址'></HeaderTab>

      <van-address-edit
            :area-list="areaList"
            show-postal
            :show-delete="showResult"
            :show-search-result="showResult"
            @save="onSave"
            @delete="onDelete"
        />
  </div>
</template>

<script>
import Vue from 'vue';
import areaListData from '../../constant/areaList.js';
import HeaderTab from '../../components/headerBar/headerBar.vue';
import { AddressEdit, Toast } from 'vant';

Vue.use(AddressEdit);

export default {
  name:'',
  data () {
    return {
      areaList:{},
       showResult:false
    };
  },

  components: {
      HeaderTab
  },

  computed: {},

  mounted() {
    document.querySelector("#footers").style.display = "none";
    this.areaList = areaListData;
  },

  methods: {
    onSave(content) {
      if(content){
        Toast('保存成功');
        this.$router.push({path:'/shopcart',name:"ShoppingCart"});
      }
    },
    onDelete() {
      Toast('delete');
    }
  },
  beforeDestroy(){
    document.querySelector("#footers").style.display = "block";
  }
}

</script>
<style scoped>
.van-picker__cancel, .van-picker__confirm{
  font-size: medium!important;
}
</style>