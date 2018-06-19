<!-- 有商品的购物车 -->
<template>
  <div id='haveShop'>
      <!-- 编辑区域 -->
      <van-cell-group>
            <!-- <van-cell class="infoEdit" title="更改收货地址" icon="location" value="编辑"/> -->
            <van-cell icon="location">
                <template slot="title">
                    <span class="van-cell-text" @click.stop="changeAddress">更改收货地址</span>
                </template>
                <span class="infoEdit" @click.stop="infoEdit">
                    <van-icon slot="right-icon" class="van-cell__right-icon" v-if='edieShow'>
                        编辑
                    </van-icon>
                    <van-icon slot="right-icon" class="van-cell__right-icon" v-else>
                        完成
                    </van-icon>
                </span>
            </van-cell>
        </van-cell-group>
     
      <!-- 主体内容 -->
      <div class="shopitemCart" v-for="(item,index) in $store.state.shopCartList" :key='index'>
          <van-cell-swipe :right-width="50" v-if="!showDelete">
              <van-checkbox-group v-model="result">
                   <van-cell-group>
                        <van-checkbox class="checkbook" :name="item">
                            <van-card
                                    :thumb="item.shopUrl"
                                    class="shoopCartItem"
                                >
                                    <div slot="title" class="titleshop">{{ item.shopName }}</div>
                                    <div slot="thumb">
                                        <img v-lazy="item.shopUrl" @click.stop="detailShop(item)">
                                    </div>
                                    <div slot="footer" class="footers">
                                        <span class="price">￥ {{ item.shopPrice }}</span>
                                        <span class="num">x{{ item.num }}</span>
                                    </div>
                                </van-card>
                        </van-checkbox>
                    </van-cell-group>
              </van-checkbox-group>
              <span slot="right" class="deleteButs" @click.stop="deleteShopCart(item.shopName)">删除</span>
            </van-cell-swipe>
          <!-- <div class="deleteBut" v-show="showDelete">删除</div> -->

          <van-checkbox-group v-model="result" v-else-if="showDelete">
                <van-cell-group>
                    <van-checkbox class="checkbook" :name="item">
                        
                    </van-checkbox>
                    <van-card
                        :thumb="item.shopUrl"
                        class="shoopCartItem"
                    >
                        <div slot="title">
                            <van-stepper
                                v-model="value"
                                :integer="integer"
                                :disable-input="disabled"
                                :default-value="item.num"
                                @plus='changeShopNum(item.shopName)'
                                @minus='changeShopNum(item.shopName)'
                            />
                        </div>

                        <div slot="footer" class="footers">
                            <span class="price">￥ {{ item.shopPrice }}</span>
                            <span class="num">x{{ item.num }}</span>
                        </div>
                    </van-card>
                </van-cell-group>
            </van-checkbox-group>
            <div class="deleteBut" v-show="showDelete" @click.stop="deleteShopCart(item.shopName)">删除</div>
      </div>
      <!-- 底部信息 -->
      <van-submit-bar
            :price="price"
            :button-text='"结算("+result.length+")"'
            @submit="onSubmit"
            v-if="!showDelete"
        >

            <div class="allSel" @click="allSelected">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </div>
        </van-submit-bar>

        <van-submit-bar
            button-text='删除'
            @submit="onSubmit1"
            v-else
        >
            <div class="allSel" @click="allSelected">
                <van-checkbox v-model="checked">全选</van-checkbox>
            </div>
        </van-submit-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { SubmitBar, Toast, Checkbox, CheckboxGroup, Cell, CellGroup, Card, CellSwipe, Stepper } from 'vant';
import store from '../../../store/store.js';

Vue.use(SubmitBar)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Cell)
    .use(CellGroup)
    .use(Card)
    .use(CellSwipe)
    .use(Stepper);

export default {
  name:'haveShop',
  data () {
    return {
        checked:false,
        shopCartList:'',
        result:[],
        showDelete:false,
        edieShow:true,
        value:'',
        integer:true,
        disabled:true
    };
  },

  components: {},

  computed: {
      price(){
          let result = 0;
          for(let it of this.result){
              result += it.shopPrice;
          };
          return result*100;
      },
      
  },

  mounted() {
      console.log(this.$store.state.shopCartList)
      this.shopCartList = this.$store.state.shopCartList;
  },

  methods: {
     //结算   
      onSubmit(){
          this.result.length ?
          Toast("提交成功") :
          Toast("请选择商品");
          console.log(this.result)
      },
      //全删
      onSubmit1(){
            this.result.length ?
            store.commit("allDeleteShop",this.result) :
            Toast("请选择商品");
      },   
      //   全选
      allSelected(){
          this.result.length == this.shopCartList.length ?
            this.result = [] :
            this.result = this.shopCartList;
      },
      //   删除
      deleteShopCart(itemName){
          store.commit("deleteShopItem",itemName)
      },
    //   编辑
    infoEdit(){
        this.edieShow = !this.edieShow;
        this.showDelete= !this.showDelete;
        this.result = [];
    },
    // 增加时候的按钮
    changeShopNum(name){
        let shop = {value:this.value,name:name}
        store.commit('ShopItemNum',shop)
    },
    // 查看详情
    detailShop(val){
        store.commit('showShopDetail',val);
        this.$router.push({path:'/detail', name:'ShopDetailInfo' ,params: {shopname:val.shopName}});
    },
    // 更改地址
    changeAddress(){
        this.$router.push({path:'/address', name:'ShopAddress'});
    }
  },
  watch:{
      result:function(newVal,oldVal){
          if(newVal.length == this.shopCartList.length){
              this.checked = true;
          }else{
              this.checked = false;
          }
      }
  },
  store
}

</script>
<style scoped>
    #haveShop{
        width: 100%;
        height:auto;
    }
    .shopitemCart{
        width: 100%;
        height: auto;
        position: relative;
        background: #fafafa;
    }
    .shoopCartItem{
        width: 6.6rem;
        margin: 0;
    }
    .van-checkbox{
        margin-left: .2rem;
    }
    
    .van-checkbox__label{
        width: 100%;
    }
    .van-cell__value span{
        color: #38F;
    }
    .van-cell-group{
        background: #fafafa;
    }
    .price{
        color: #f44;
    }
    .num{
        float: right;
    }
    .footers{
        width: 3.9rem;
        /* width: 100%; */
    }
    
    .deleteBut{
        width: 1rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: #f44;
        z-index: 10;
        color: #ffffff;
        font-size: .3rem;
        text-align: center;
        line-height: 2rem;
        border-bottom: 1px solid #fafafa;
    }
    .deleteButs{
        display: inline-block;
        height: 2rem;
        width: 1rem;
        background: #f44;
        color: #ffffff;
        font-size: .3rem;
        text-align: center;
        line-height: 2rem;
    }
    .checkbook{
        float: left;
        height: 2rem;
    }
    .van-cell__right-icon{
        color: #38f;
    }
</style>