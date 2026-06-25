import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/producto/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/tiendas',
      name: 'tiendas',
      component: () => import('../views/TiendasView.vue')
    },
    {
      path: '/tienda/:name',
      name: 'artistStore',
      component: () => import('../views/ArtistStoreView.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/NosotrosView.vue')
    },

    {
      path: '/pago/exito',
      name: 'pagoExito',
      component: () => import('../views/PagoResultadoView.vue')
    },
    {
      path: '/pago/fallido',
      name: 'pagoFallido',
      component: () => import('../views/PagoResultadoView.vue')
    },
    {
      path: '/pago/pendiente',
      name: 'pagoPendiente',
      component: () => import('../views/PagoResultadoView.vue')
    }
  ]
})

export default router
