<!-- 修改用户信息 -->
<template>
  <div id="userInfo">
      <HeaderTab header-title='账号管理'></HeaderTab>
      <!-- 用户头像信息 -->
      <div class="userHead">
          <div class="headImg">
                <van-uploader 
                    :after-read="onRead" 
                    accept="image/gif, image/jpeg, image/jpg, image/png" 
                    @oversize='overSzieImg'
                    :max-size="imgSize">
                    <img :src="userHead" :onerror='userHead'>
                    <!-- <van-icon name="photograph" /> -->
                </van-uploader>
          </div>
          <div class="userNameEmail">
              <p class="username">{{username}}</p>
              <p class="useremail">{{useremail}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import HeaderTab from '../../components/headerBar/headerBar.vue';
import noHeadImg from '../../static/images/noHeadImg.png';
import { Uploader, Toast } from 'vant';

Vue.use(Uploader);

export default {
  name:'',
  data () {
    return {
        userHead:noHeadImg,
        imgSize:2560,
        username:'张三',
        useremail:'13716055457@163.com'
    };
  },

  components: {
      HeaderTab
  },

  computed: {},

  mounted() {},

  methods: {
      onRead(file){
          consle.log(file)
      },
    //   超出设定的的大小
    overSzieImg(){
        Toast("对不起，图片太大了")
    }
  }
}

</script>
<style scoped>
#userInfo{
    width: 100%;
    height: auto;
}
.userHead{
    width: 100%;
    height: auto;
    padding: 10px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
}
.headImg{
    width: 1.6rem;
    height: 1.6rem;
}
.van-uploader{
    width: 100%;
    height: 100%;
}
.userNameEmail{
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
}
.userNameEmail p{
    font-size: .3rem;
    height: auto;
    display: inline-block;
}
</style>