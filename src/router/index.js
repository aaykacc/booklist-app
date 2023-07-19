import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddBook',
      component: () => import('../views/AddBook.vue')
    },
    {
      path: '/books/:id',
      name: 'EditBook',
      component: () => import('../views/EditBook.vue'),
      props: true
    }
  ]
})

export default router
