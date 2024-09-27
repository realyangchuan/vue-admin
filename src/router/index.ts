import { createRouter, createWebHistory } from 'vue-router'
import LayoutIndex from '@/layout/LayoutIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutIndex,
      meta: { requireLogin: true },
      children: [
        {
          path: '', component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/home',
          meta: { role: 1 },
          component: () => import('@/views/HomeView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/403',
      name: 'Forbidden',
      component: () => import('@/views/PermissionDeny.vue')
    },
    {
      path: '/:pathMath(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  console.log(to)
})

export default router
