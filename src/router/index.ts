import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/public/Home.vue';
import NotFound from '@/views/public/NotFound.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home,
  },

  /*page 404*/
  {
    path:'/:pathMatch(.*)*', component: NotFound
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
