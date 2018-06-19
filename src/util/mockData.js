const Mock = require('mockjs');
import mockData from "./xuData";
//轮播图数据
Mock.mock( '/api/swiperData',(req,res) => {
  return {
    swiperData:mockData.swiperData
  }
})
// 最新消息
Mock.mock( '/api/latestNews',(req,res) => {
  return {
    latestNews:mockData.lastNews
  }
})
// 商品分类
Mock.mock( '/api/shoppingClass',(req,res) => {
  return {
    shopClassList:mockData.shopClassList
  }
})
// 商品种类
Mock.mock( '/api/shoppingItemList',(req,res) => {
  return {
    shopItemList:mockData.shopItemList
  }
})
