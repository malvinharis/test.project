import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/modules/login/routes";
import Dashboard from "@/modules/dashboard/routes";

Vue.use(VueRouter);

const modules = [
  {
    path: "/app-content",
    component: () => import("@/components/layout/LayoutForChildren"),
    children: [Faq, NewsOrPromo, TNC, PrivacyPolicy, HomeBanner, Contact]
  },
  {
    path: "/brand-outlet",
    component: () => import("@/components/layout/LayoutForChildren"),
    children: [Brand, Outlet, Hybrid]
  },
  {
    path: "/loyalty",
    component: () => import("@/components/layout/LayoutForChildren"),
    children: [
      Member,
      Tier,
      Point,
      Reward,
      PointBranding,
      PointValue,
      Reinstatement
    ]
  },
  Report,
  Account,
  Dashboard
];

const routes = [
  Login,
  {
    path: "/",
    redirect: { name: "dashboard.index" },
    component: () => import("@/components/layout/LayoutBase"),
    children: modules
  },
  {
    path: "*",
    meta: {
      isError: true
    },
    component: () => import("@/components/layout/template/errors/404")
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
