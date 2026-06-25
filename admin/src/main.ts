import './assets/main.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

import axios from 'axios'

// --- Global Fetch Interceptor ---
const originalFetch = window.fetch
window.fetch = async (...args) => {
  let [resource, config] = args
  
  if (typeof resource === 'string' && resource.startsWith('/api') && !resource.startsWith('/api/auth/login')) {
    const token = localStorage.getItem('amigo_admin_token')
    if (token) {
      config = config || {}
      config.headers = config.headers || {}
      if (config.headers instanceof Headers) {
        config.headers.set('Authorization', `Bearer ${token}`)
      } else {
        (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
      }
      args[1] = config
    }
  }
  return originalFetch(...args)
}
// --------------------------------

// --- Global Axios Interceptor ---
axios.interceptors.request.use((config) => {
  if (config.url && config.url.startsWith('/api') && !config.url.startsWith('/api/auth/login')) {
    const token = localStorage.getItem('amigo_admin_token')
    if (token) {
      if (!config.headers) {
        config.headers = {} as any
      }
      if (typeof (config.headers as any).set === 'function') {
        (config.headers as any).set('Authorization', `Bearer ${token}`)
      } else {
        (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
      }
    }
  }
  return config
})
// --------------------------------

const app = createApp(App)

app.use(router)
app.use(VueApexCharts)

app.mount('#app')
