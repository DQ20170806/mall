import Vue from "vue";
import Router from "vue-router";
// Vue.use  加载插件的固定写法
Vue.use(Router);

import Home from "./pages/home.vue";
import Index from "./pages/index.vue";
import Product from "./pages/product.vue";
import Detail from "./pages/detail.vue";
import Cart from "./pages/cart.vue";
import Login from "./pages/login.vue";
import Order from "./pages/order.vue";
import OrderList from "./pages/orderList.vue";
import OrderConfirm from "./pages/orderConfirm.vue";
import OrderPay from "./pages/orderPay.vue";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home, // Home是跟路由
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/product:id", // 商品页要传一个id
          name: "product",
          component: Product,
        },
        {
          path: "/detail:id", // 商品详情页也要传一个id
          name: "detail",
          component: Detail,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list",
          name: "order-list",
          component: OrderList,
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay,
        },
      ],
    },
  ],
});
