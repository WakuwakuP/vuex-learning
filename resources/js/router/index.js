import Vue from 'vue';
import VueRouter from 'vue-router';

import PhotoList from '../pages/PhotoList';
import Login from '../pages/Login';
import PhotoDetail from '../pages/PhotoDetail'
import SystemError from '../pages/errors/System';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: PhotoList,
  },
  {
    path: '/login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters['auth/check']) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/photos/:id',
    component: PhotoDetail,
    props: true
  },
  {
    path: '/500',
    component: SystemError,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;