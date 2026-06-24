import { ref, computed } from 'vue'

const TOKEN_KEY = 'amigo_admin_token'
const USER_KEY  = 'amigo_admin_user'

const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))

// Restaurar usuario desde localStorage al cargar la página
const storedUser = localStorage.getItem(USER_KEY)
const admin = ref<{ id: number; username: string; email: string; rol?: string } | null>(
  storedUser ? JSON.parse(storedUser) : null
)

export function useAuth() {
  const isAuthenticated = computed(() => !!token.value)

  function setToken(t: string, user: typeof admin.value) {
    token.value = t
    admin.value = user
    localStorage.setItem(TOKEN_KEY, t)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  function clearAuth() {
    token.value = null
    admin.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  async function login(username: string, password: string) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Error al iniciar sesión')
    setToken(data.token, data.admin)
    return data.admin
  }

  async function verifyToken() {
    if (!token.value) return false
    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token.value}` },
      })
      if (!res.ok) { clearAuth(); return false }
      const data = await res.json()
      admin.value = data.admin
      localStorage.setItem(USER_KEY, JSON.stringify(data.admin))
      return true
    } catch {
      clearAuth()
      return false
    }
  }

  function logout() {
    clearAuth()
  }

  return { token, admin, isAuthenticated, login, logout, verifyToken }
}
