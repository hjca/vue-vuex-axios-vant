import Vue from 'vue';
import Router from 'vue-router';

import indexWelfare from '../page/welfareIndex/welfareIndex';    //员工福利领取的主页
import AllShopping from '../page/allShoppings/allShoppings';     //全部商品
import ShoppingCart from '../page/shoppingCart/ShoppingCart';    //购物车
import UserOrder from '../page/shoppingOrder/shoppingOrder';     //我的订单
import ShopDetailInfo from '../page/shopDetail/shopDetail';      //商品详情
import ShopAddress from '../page/shippingAddress/shippingAddress';      //收货地址
import UserIfo from '../page/chageUserInfo/chageUserInfo';    //用户信息界面

Vue.use(Router);

export default new Router({
    routes: [
        {path:'/',redirect:'/index'},
        {
            path:"/index",
            name:'indexWelfare',
            component:indexWelfare
        },
        {
            path:"/allshop",
            name:'AllShopping',
            component:AllShopping
        },
        {
            path:"/shopcart",
            name:'ShoppingCart',
            component:ShoppingCart
        },
        {
            path:"/userorder",
            name:'UserOrder',
            component:UserOrder
        },
        {
            path:'/detail/:shopname',
            name:'ShopDetailInfo',
            component:ShopDetailInfo
        },
        {
            path:'/address',
            name:'ShopAddress',
            component:ShopAddress
        },
        {
            path:'/userinfo',
            name:'UserIfo',
            component:UserIfo
        }
    ]
})