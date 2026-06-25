<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
const isFading = ref(false)

onMounted(() => {
  // Simular carga mínima de 1.5s para apreciar la animación
  setTimeout(() => {
    isFading.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 600) // Duración del fade-out
  }, 1800)
})
</script>

<template>
  <div v-if="isVisible" class="preloader" :class="{ 'fade-out': isFading }">
    <div class="preloader-content">
      <div class="shape-container">
        <img src="/logo.png" alt="Loading..." class="loading-shape">
        <div class="shape-glow"></div>
      </div>
      <div class="loading-bar-container">
        <div class="loading-bar"></div>
      </div>
      <span class="loading-text">CRUNCHY SNACKS</span>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: #ffffff; /* Color primario blanco/crema */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease, visibility 0.6s;
}

.preloader.fade-out {
  opacity: 0;
  visibility: hidden;
}

.preloader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.shape-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-shape {
  width: 140px;
  height: auto;
  z-index: 2;
  animation: dynamic-pulse 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  filter: drop-shadow(0 0 10px rgba(239, 114, 21, 0.15));
}

.shape-glow {
  position: absolute;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, rgba(239, 114, 21, 0.1) 0%, transparent 70%);
  animation: breathing-glow 2s ease-in-out infinite;
  border-radius: 50%;
}

.loading-bar-container {
  width: 200px;
  height: 3px;
  background: rgba(239, 114, 21, 0.15);
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
}

.loading-bar {
  width: 40%;
  height: 100%;
  background: #EF7215;
  animation: scan-loading 1.5s ease-in-out infinite;
  border-radius: 10px;
  box-shadow: 0 0 8px #EF7215;
}

.loading-text {
  color: #EF7215;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  letter-spacing: 8px;
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 5px;
  animation: blink-text 1.5s step-end infinite;
}

@keyframes dynamic-pulse {
  0%, 100% {
    transform: scale(1) translateY(0);
    filter: drop-shadow(0 0 10px rgba(239, 114, 21, 0.15));
  }
  40% {
    transform: scale(1.08) translateY(-3px);
    filter: drop-shadow(0 0 20px rgba(239, 114, 21, 0.3));
  }
  50% {
    transform: scale(1.1) translateY(-5px);
  }
}

@keyframes breathing-glow {
  0%, 100% {
    transform: scale(0.7);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.5;
  }
}

@keyframes scan-loading {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(250%);
  }
}

@keyframes blink-text {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>
