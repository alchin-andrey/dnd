import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import SpellForm from '@/components/SpellForm.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/spell_form/:id',
    component: SpellForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
