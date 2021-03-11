import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    name: "main",
    path: "/",
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          label: "Home",
        },
      },
      {
        path: '',
        redirect: 'home'
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
