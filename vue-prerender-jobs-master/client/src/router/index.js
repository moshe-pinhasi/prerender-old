import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue'),
  },
  {
    path: '/job/edit/:id?',
    component: () => import('../views/JobEdit.vue'),
  },
  {
    path: '/job/:id',
    component: () => import('../views/JobDetails.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
