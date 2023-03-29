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
  // {
  //   path: '/dnd/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    // path: '/dnd/spell_form/:id',
    // path: '/spell_form/:id',
    // path: '/dnd/spell_form/:queryParams(.*)',
    path: '/spell_form/:id(.*)',
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
