import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue'),
  },
  {
    path: '/installation',
    name: 'Installation',
    component: () => import('../views/Installation.vue'),
  },
  {
    path: '/features',
    name: 'Installation',
    component: () => import('../views/Features.vue'),
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('../views/Examples.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
