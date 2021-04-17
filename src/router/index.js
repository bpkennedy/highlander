import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "all" */ '../views/Home.vue')
  },
  {
    path: '/alley',
    name: 'Alley',
    component: () => import(/* webpackChunkName: "all" */ '../views/Alley.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
