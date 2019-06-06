import Vue from 'vue';
import VueRouter from 'vue-router';

import PhotoList from '../pages/PhotoList';
import Login from '../pages/Login';
import PhotoDetail from '../pages/PhotoDetail'

import SystemError from '../pages/errors/System';
import NotFound from '../pages/errors/NotFound';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: PhotoList,
    props: route => {
      const page = route.query.page;
      return { page: /^[1-9][0-9]*$/.test(page) ? page * 1 : 1 };
    }
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
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;