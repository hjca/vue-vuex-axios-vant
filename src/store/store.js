import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    shopCartList:[],
    shopItemInfo:'',
    footerHide:false,
    userInfo:{}                //用户信息
}

const mutations = {
    showShopDetail(state,val){
        state.shopItemInfo = val;
    },
    changeFooterHide(state){
        state.footerHide = true;
    },
    changeFooterShow(state){
        state.footerHide = false;
    },
    // 删除购物车数据
    deleteShopItem(state,name){
        for(let i = 0;i < state.shopCartList.length;i++){
            if(name == state.shopCartList[i].shopName){
                state.shopCartList.splice(i,1);
                return;
            }
        }
    },
    // 单个商品数量增加与减少
    ShopItemNum(state,obj){
        let after = state.shopCartList.filter((item) => {
            return item.shopName == obj.name;
        })
        after[0].num = obj.value;
    },
    // 全部删除
    allDeleteShop(state,result){
        if(result.length ==  state.shopCartList.length){
             state.shopCartList = [];
            return;
        }
        for(let i = 0;i < state.shopCartList.length;i++){
            for(let j = 0; j < result.length;j++){
                if(result[j].shopName == state.shopCartList[i].shopName){
                    state.shopCartList.splice(i,1);
                    // console.log( state.shopCartList[i])
                }
            }
        }
    },
    // 添加购物车
    addShopCart(state,val){
        console.log(val)
        if(state.shopCartList.length){
            for(let item of state.shopCartList){
                if(item.shopName == val.shopName){
                    alert(1)
                    item.num += val.num;
                    return;
                }else{
                    alert(2)
                    state.shopCartList.push(val)
                    return;
                }
            }
        }else{
            state.shopCartList.push(val)
        }
    }
}

export default new Vuex.Store({
    state,
    mutations
})