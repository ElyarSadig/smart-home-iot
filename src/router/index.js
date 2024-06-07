import { createRouter, createWebHistory } from "vue-router";
import LivingRoom from "@/views/LivingRoom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LivingRoom",
      component: LivingRoom,
    },
  ],
});

export default router;
