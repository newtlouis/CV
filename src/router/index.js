import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projets.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "about" */ '../views/Experience.vue')
  },
  {
    path: '/cursus',
    name: 'Cursus',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cursus.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
