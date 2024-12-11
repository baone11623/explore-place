import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RestaurantView from "@/views/RestaurantView.vue";
import CheckinView from "@/views/CheckinView.vue";
import AttractionsView from "@/views/AttractionsView.vue";
import GuideView from "@/views/GuideView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Khám Phá Đà Lạt - Thành Phố Ngàn Hoa",
    },
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: RestaurantView,
    meta: {
      title: "Nhà Hàng Nổi Bật",
    },
  },
  {
    path: "/checkin",
    name: "checkin",
    component: CheckinView,
    meta: {
      title: "Điểm Check-in",
    },
  },
  {
    path: "/attractions",
    name: "attractions",
    component: AttractionsView,
    meta: {
      title: "Danh Lam Thắng Cảnh",
    },
  },
  {
    path: "/guide",
    name: "guide",
    component: GuideView,
    meta: {
      title: "Hướng Dẫn Du Lịch",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Khám Phá Đà Lạt";
  next();
});

export default router;
