import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import WelcomePage from '@/views/WelcomePage.vue';
import SpellForm from '@/components/SpellForm.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/welcome-to-dnd',
    name: 'WelcomePage',
    component: WelcomePage,
  },
  {
    path: '/s/:id(.*)',
    name: 'SpellForm',
    component: SpellForm,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory('/dnd/'),
  // history: createWebHistory(),
  history: createWebHashHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
