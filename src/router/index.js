import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import MasterPage from '@/views/MasterPage.vue';
import SpellForm from '@/components/SpellForm.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/masters',
    name: 'MasterPage',
    component: MasterPage,
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
