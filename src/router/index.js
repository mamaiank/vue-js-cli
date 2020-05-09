import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demo1 from "../views/Demo1.vue";
import Demo2 from "../views/Demo2.vue";
import Demo3 from "../views/Demo3.vue";
import Demo4 from "../views/Demo4.vue";
import Demo5 from "../views/Demo5.vue";
import Demo6 from "../views/Demo6.vue";
import Demo7 from "../views/Demo7.vue";
import Demo8 from "../views/Demo8.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: Demo1,
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: Demo2,
  },
  {
    path: "/demo3",
    name: "Demo3",
    component: Demo3,
  },
  {
    path: "/demo4",
    name: "Demo4",
    component: Demo4,
  },
  {
    path: "/demo5",
    name: "Demo5",
    component: Demo5,
  },
  {
    path: "/demo6",
    name: "Demo6",
    component: Demo6,
  },
  {
    path: "/demo7",
    name: "Demo7",
    component: Demo7,
  },
  {
    path: "/demo8",
    name: "Demo8",
    component: Demo8,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
