import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import HomeComponent from '@/components/Home'
import LoginComponent from '@/components/Login'
import ProfileComponent from '@/components/Profile'
import history from '@/components/historico'
import comprar from '@/components/comprar'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: ProfileComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/comprar',
      component: comprar,
      meta: {
        requiresAuth: true
      }},
    {
      path: '/historico',
      component: history,
      meta: {
        requiresAuth: true
      }}
  ]
})

router.beforeEach(navigationGuard)

export default router