import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/home/Home")
  },
  {
    path: "/cation",
    name: "cation",
    component: () => import("../pages/cation/cation")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../pages/search/search")
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: () => import("../pages/shopcart/shopcart")
  },
  {
    path: "/myinfo",
    name: "myinfo",
    component: () => import("../pages/myinfo/myinfo")
  },
  {
    path: "/splist/:id",
    name: "splist",
    component: () => import("../components/sp-list/sp-list")
  },
  {
    path: "/address",
    name: "address",
    component: () => import("../components/address-edit/address-edit")
  },
  {
    path: "/mydingdan",
    name: "mydingda",
    component: () => import("../components/my-dd.vue/my-dd")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeResolve((...{ 2: next }) => {
  document.querySelector("#app").scrollTop = 0;
  next();
});
export default router;
