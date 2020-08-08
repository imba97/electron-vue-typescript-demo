import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index/index.vue')
  },
  {
    path: '/login',
    redirect: '/login/qrcode',
    name: 'login',
    component: () => import('../views/Login/index.vue'),
    children: [
      {
        path: 'qrcode',
        component: () => import('../views/Login/qrcode.vue')
      },
      {
        path: 'password',
        component: () => import('../views/Login/password.vue')
      }
    ]
  },
  {
    path: '/space/:uid',
    name: 'space',
    props: true,
    component: () => import('../views/Space/index.vue')
  },
  {
    path: '*',
    redirect: '/index'
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
