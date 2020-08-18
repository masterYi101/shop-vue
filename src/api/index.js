import axios from "axios";
axios.interceptors.response.use(response => {
  if (response.status !== 200) {
    console.log(response.status);
  }
  return response;
});
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
