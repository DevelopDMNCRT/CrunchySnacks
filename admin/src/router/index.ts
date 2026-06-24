import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/pedidos'
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: () => import('../views/Usuarios.vue'),
      meta: { title: 'Usuarios' },
    },
    {
      path: '/usuarios/nuevo',
      name: 'UsuarioNuevo',
      component: () => import('../views/UsuarioNuevo.vue'),
      meta: { title: 'Nuevo Usuario' },
    },
    {
      path: '/usuarios/:id/editar',
      name: 'UsuarioEditar',
      component: () => import('../views/UsuarioNuevo.vue'),
      meta: { title: 'Editar Usuario' },
    },
    {
      path: '/productos',
      name: 'Productos',
      component: () => import('../views/Productos.vue'),
      meta: { title: 'Productos' },
    },
    {
      path: '/productos/nuevo',
      name: 'ProductoNuevo',
      component: () => import('../views/ProductoNuevo.vue'),
      meta: { title: 'Nuevo Producto' },
    },
    {
      path: '/productos/:id',
      name: 'ProductoEditar',
      component: () => import('../views/ProductoNuevo.vue'),
      meta: { title: 'Editar Producto' },
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: () => import('../views/Pedidos.vue'),
      meta: { title: 'Pedidos' },
    },
    {
      path: '/pedidos/:id',
      name: 'PedidoDetalle',
      component: () => import('../views/PedidoDetalle.vue'),
      meta: { title: 'Detalle de Pedido' },
    },
    {
      path: '/tiendas',
      name: 'Tiendas',
      component: () => import('../views/Tiendas.vue'),
      meta: {
        title: 'Categorías',
      },
    },
    {
      path: '/reporte',
      name: 'Reporte',
      component: () => import('../views/Reporte.vue'),
      meta: {
        title: 'Reporte',
      },
    },
    {
      path: '/envio',
      name: 'Envio',
      component: () => import('../views/Envio.vue'),
      meta: {
        title: 'Configuración de Envío',
      },
    },

    {
      path: '/clientes',
      name: 'Clientes',
      component: () => import('../views/Clientes.vue'),
      meta: { title: 'Clientes' },
    },
    {
      path: '/clientes/:id',
      name: 'ClienteDetalle',
      component: () => import('../views/ClienteDetalle.vue'),
      meta: { title: 'Detalle de Cliente' },
    },

    {
      path: '/tickets',
      name: 'Tickets',
      component: () => import('../views/Tickets.vue'),
      meta: {
        title: 'Tickets',
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/tiendas/nueva',
      name: 'TiendaNueva',
      component: () => import('../views/TiendaNueva.vue'),
      meta: { title: 'Nueva Tienda' },
    },
    {
      path: '/tiendas/:id',
      name: 'TiendaEditar',
      component: () => import('../views/TiendaNueva.vue'),
      meta: { title: 'Editar Tienda' },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Auth/Signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
    {
      path: '/error-404',
      name: '404 Error',
      component: () => import('../views/Errors/FourZeroFour.vue'),
      meta: {
        title: '404 Error',
      },
    },
  ],
})

export default router

const PUBLIC_ROUTES = ['/signin', '/signup', '/error-404']

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | CrunchySnacks Admin`
  // Login guard disabled
  next()
})
