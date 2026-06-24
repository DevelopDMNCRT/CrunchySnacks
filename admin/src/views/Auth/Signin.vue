<template>
  <div class="min-h-screen flex bg-white dark:bg-gray-950">

    <!-- ── Left panel – form ─────────────────────────────────────────────── -->
    <div class="flex flex-col flex-1 items-center justify-center px-6 py-12 relative overflow-hidden">

      <div class="relative w-full max-w-sm z-10">

        <!-- Logo -->
        <div class="flex justify-center mb-10">
          <img src="/images/logo/logo.png" alt="CrunchySnacks" class="h-16 w-auto" />
        </div>

        <!-- Heading -->
        <div class="mb-8 text-center">
          <h1 class="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Panel de Administración</h1>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Ingresa tus credenciales para continuar</p>
        </div>

        <!-- Error banner -->
        <transition name="fade">
          <div
            v-if="errorMsg"
            class="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {{ errorMsg }}
          </div>
        </transition>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Username / Email -->
          <div>
            <label for="username" class="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Usuario o correo
            </label>
            <input
              v-model="username"
              type="text"
              id="username"
              autocomplete="username"
              placeholder="admin@crunchysnacks.mx"
              :disabled="loading"
              class="w-full h-12 rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#fb6514] focus:outline-none focus:ring-2 focus:ring-[#fb6514]/20 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-600"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Contraseña
            </label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                autocomplete="current-password"
                placeholder="••••••••"
                :disabled="loading"
                class="w-full h-12 rounded-xl border border-gray-300 bg-white pl-4 pr-12 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#fb6514] focus:outline-none focus:ring-2 focus:ring-[#fb6514]/20 disabled:opacity-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-600"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                tabindex="-1"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading || !username || !password"
            class="group relative w-full h-12 rounded-xl text-sm font-black text-white shadow-lg transition-all duration-200 overflow-hidden disabled:cursor-not-allowed disabled:opacity-40 mt-2"
            style="background: linear-gradient(135deg, #fb6514 0%, #e8520f 100%);"
          >
            <span class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200 rounded-xl"></span>
            <span v-if="!loading" class="relative">Iniciar sesión →</span>
            <span v-else class="relative flex items-center justify-center gap-2">
              <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Verificando...
            </span>
          </button>
        </form>

        <!-- Footer note -->
        <p class="mt-8 text-center text-xs text-gray-400 dark:text-gray-600">
          Acceso restringido · CrunchySnacks © 2026
        </p>
      </div>
    </div>

    <!-- ── Right panel – brand visual ──────────────────────────────────────── -->
    <div class="hidden lg:flex flex-col items-center justify-center w-1/2 relative overflow-hidden" style="background: #fb6514;">

      <!-- Decorative shapes -->
      <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full" style="background: rgba(255,255,255,0.08);"></div>
      <div class="absolute -bottom-28 -left-28 w-[480px] h-[480px] rounded-full" style="background: rgba(0,0,0,0.12);"></div>
      <div class="absolute top-1/4 left-1/4 w-40 h-40 rounded-full" style="background: rgba(255,255,255,0.05);"></div>
      <div class="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full" style="background: rgba(255,255,255,0.07);"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center text-center px-12 max-w-md">

        <h2 class="text-4xl font-black text-white leading-tight mb-4 tracking-tight">
          El sabor que<br/>impulsa tu negocio.
        </h2>
        <p class="text-white/70 text-base leading-relaxed">
          Gestiona productos, pedidos y categorías de CrunchySnacks desde un solo panel de control.
        </p>

        <!-- Feature pills -->
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <div class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white" style="background: rgba(255,255,255,0.15);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Inventario en tiempo real
          </div>
          <div class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white" style="background: rgba(255,255,255,0.15);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Pedidos & envíos
          </div>
          <div class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white" style="background: rgba(255,255,255,0.15);">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Clientes & reportes
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const username     = ref('')
const password     = ref('')
const showPassword = ref(false)
const loading      = ref(false)
const errorMsg     = ref('')

async function handleSubmit() {
  if (!username.value || !password.value) return
  errorMsg.value = ''
  loading.value  = true
  try {
    await login(username.value, password.value)
    router.push('/')
  } catch (err: unknown) {
    errorMsg.value = err instanceof Error ? err.message : 'Error al iniciar sesión'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>
