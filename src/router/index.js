import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import SpellForm from '@/components/SpellForm.vue';

const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'Main' }
  // },
  // {
  //   path: '/dnd/',
  //   name: 'Main',
  //   component: Main,
  // },
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    // path: '/dnd/s/:id',
    // path: '/s/:id',
    // path: '/dnd/s/:queryParams(.*)',
    path: '/s/:id(.*)',
    name: 'SpellForm',
    component: SpellForm,
    // props: true
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
