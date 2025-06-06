import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import JurisdiccionesView from '@/views/JurisdiccionesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/jurisdicciones',
      name: 'jurisdicciones',
      component: JurisdiccionesView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
