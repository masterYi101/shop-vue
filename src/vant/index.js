import Vue from "vue";
import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem
} from "vant";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Search,
  Loading,
  SubmitBar,
  Checkbox,
  AddressList,
  AddressEdit
} from "vant";
[
  Button,
  NavBar,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
  Search,
  Loading,
  SubmitBar,
  Checkbox,
  AddressList,
  AddressEdit
].map(e => Vue.use(e));
