import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


import Home from '@/views/public/Home.vue';
import NotFound from '@/views/public/NotFound.vue';
import About from '@/views/public/About.vue';
import Contact from '@/views/public/Contact.vue';
import Footer from '@/views/public/Footer.vue';
import Header from '@/views/public/Header.vue';
import MessagesItem from '@/views/public/MessagesItem.vue';
import Projects from '@/views/public/Projects.vue';
import Resume from '@/views/public/Resume.vue';
import Wip from '@/views/public/Wip.vue';
import AdminBoard from '@/views/admin/AdminBoard.vue';
import AdminConnect from '@/views/admin/AdminConnect.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home,
  },
  {
    path:'/About',
    name: 'about',
    component: About,
  },
  {
    path:'/Contact',
    name: 'contact',
    component: Contact,
  },
  {
    path:'/Footer',
    name: 'footer',
    component: Footer,
  },
  {
    path:'/Header',
    name: 'header',
    component: Header,
  },
  {
    path:'/MessagesItem',
    name: 'messagesitem',
    component: MessagesItem,
  },
  {
    path:'/Projects',
    name: 'projects',
    component: Projects,
  },
  {
    path:'/Resume',
    name: 'resume',
    component: Resume,
  },
  {
    path:'/Wip',
    name: 'wip',
    component: Wip,
  },

  {
    path:'/AdminBoard',
    name: 'adminboard',
    component: AdminBoard,
  },
  {
    path:'/AdminConnect',
    name: 'adminconnect',
    component: AdminConnect,
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
