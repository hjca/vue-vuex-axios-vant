const axiosHeader='';
let sku = {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [],
    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
    list: [
      {
        id: 2259, // skuId，下单时后端需要
        price: 100, // 价格（单位分）
        s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
        s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
        s3: '0', // 最多包含3个规格值，为0表示不存在该规格
        stock_num: 5 // 当前 sku 组合对应的库存
      }
    ],
    price: '1.00', // 默认价格（单位元）
    stock_num: 227, // 商品总库存
    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
    none_sku: false, // 是否无规格商品
    hide_stock: false // 是否隐藏剩余库存
  }

  let goods = {
    // 商品标题
    title: '测试商品',
    // 默认商品 sku 缩略图
    picture: 'https://img.yzcdn.cn/1.jpg'
  }

  export default {
    skuObj:sku,
    goods:goods
  }