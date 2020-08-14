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
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
