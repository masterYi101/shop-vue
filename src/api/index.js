import axios from "axios";

const createfn = function(url) {
  return function() {
    let a = axios.get(url);
    a.catch(e => console.log(e.message));
    return a;
  };
};
// 获取轮播地址
export const getBanne = createfn("/json/banner.json");

//获取商品列表
export const getGoodsList = createfn("/json/selling-list.json");

//获取大图数据
export const getWinNow = createfn("/json/winnow.json");

// 获取推荐数据
export const getCommendList = createfn("/json/commend-list.json");

//获取商品详情

export const getGoodsDetail = createfn("/json/goods-detail.json");

//获取分类数据
export const getCation = createfn("/json/assort.json");

//获取搜索结果
export const getSearch = createfn("/json/search-detail.json");

//获取购物车结果

export const getCart = createfn("/json/cart.json");

//获取订单分类
export const getOrder = createfn("/json/order.json");
