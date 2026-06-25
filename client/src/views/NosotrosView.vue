<template>
  <main class="nosotros-view">
    <div class="us-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>{{ t('nosotros.heroTitle') }}</h1>
        <p>{{ t('nosotros.heroSub') }}</p>
      </div>
    </div>

    <section class="us-story-section">
      <div class="container us-container">
        <div class="us-text-content">
          <h2>{{ t('nosotros.storyTitlePre') }}<span class="highlight">{{ t('nosotros.storyHighlight') }}</span>{{ t('nosotros.storyTitlePost') }}</h2>
          <p class="lead">{{ t('nosotros.storyLead') }}</p>
          <p>{{ t('nosotros.storyP1') }}</p>
          <p>{{ t('nosotros.storyP2') }}</p>
        </div>
        <img src="/images/shape-2.png" class="floating-shape shape-right" alt="" aria-hidden="true">
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="mvv-section">
      <div class="container">
        <div class="mvv-grid">
          <div class="mvv-card">
            <h3>{{ t('nosotros.misionTitle') }}</h3>
            <p>{{ t('nosotros.misionDesc') }}</p>
          </div>
          <div class="mvv-card highlight-card">
            <h3>{{ t('nosotros.visionTitle') }}</h3>
            <p>{{ t('nosotros.visionDesc') }}</p>
          </div>
          <div class="mvv-card">
            <h3>{{ t('nosotros.valoresTitle') }}</h3>
            <p>{{ t('nosotros.valoresDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="certifications-section">
      <div class="container">
        <h2 class="section-title">{{ t('nosotros.certificacionesTitle') }}</h2>
        <div class="certifications-banner">
          <img src="/Captura-de-pantalla-2025-06-18-133932.png" alt="Certificaciones" class="cert-banner-img" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Liofilización Process -->
    <section class="process-section">
      <div class="container process-container">
        <div class="process-text">
          <div class="process-header">
            <h2>{{ t('nosotros.liofilizacionTitle') }}</h2>
            <p class="process-desc">{{ t('nosotros.liofilizacionDesc') }}</p>
          </div>
          <div class="process-grid">
            
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>{{ t('nosotros.step1Title') }}</h3>
              <p>{{ t('nosotros.step1Desc') }}</p>
            </div>

            <div class="process-step">
              <div class="step-number">2</div>
              <h3>{{ t('nosotros.step2Title') }}</h3>
              <p>{{ t('nosotros.step2Desc') }}</p>
            </div>

            <div class="process-step">
              <div class="step-number">3</div>
              <h3>{{ t('nosotros.step3Title') }}</h3>
              <p>{{ t('nosotros.step3Desc') }}</p>
            </div>

            <div class="process-step">
              <div class="step-number">4</div>
              <h3>{{ t('nosotros.step4Title') }}</h3>
              <p>{{ t('nosotros.step4Desc') }}</p>
            </div>

          </div>
        </div>
        <div class="process-image-wrapper">
          <img src="/ChatGPT-Image-18-jun-2025-01_55_37-p.m.png" alt="Frutas Liofilizadas" class="process-image" loading="lazy" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLocale } from '../composables/useLocale.js'

const { t } = useLocale()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.nosotros-view {
  background-color: #fafafa;
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Hero Header */
.us-hero {
  position: relative;
  height: 350px;
  background-image: url('/frascos_optimizada_web.jpg');
  background-size: cover;
  background-position: center 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to bottom, rgba(35,118,80,0.4), rgba(0,0,0,0.7));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 0 20px;
  max-width: 800px;
}

.hero-content h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  margin: 0 0 16px 0;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.hero-content p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.9;
}

/* Story Section */
.us-story-section {
  position: relative;
  padding: 100px 20px;
  background: white;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.us-container {
  position: relative;
  z-index: 2;
}

.us-text-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.us-text-content h2 {
  font-family: 'Nunito', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 32px;
  line-height: 1.2;
}

.highlight {
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--secondary-color);
  z-index: -1;
  border-radius: 4px;
}

.us-text-content p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.us-text-content p.lead {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
}

.floating-shape {
  position: absolute;
  z-index: 0;
  opacity: 0.15;
  animation: float 6s ease-in-out infinite;
}

.shape-right {
  top: 10%;
  right: -5%;
  width: 300px;
  transform: rotate(15deg);
}

@keyframes float {
  0% { transform: translateY(0px) rotate(15deg); }
  50% { transform: translateY(-20px) rotate(20deg); }
  100% { transform: translateY(0px) rotate(15deg); }
}

/* MVV Section */
.mvv-section {
  padding: 80px 20px;
  background: #f8f8f8;
}

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.mvv-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.03);
  transition: transform 0.3s;
}

.mvv-card:hover {
  transform: translateY(-8px);
}

.mvv-card h3 {
  font-family: 'Nunito', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 20px;
}

.mvv-card p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.mvv-card.highlight-card {
  background: var(--primary-color);
  color: #ffffff;
}

.mvv-card.highlight-card h3, 
.mvv-card.highlight-card p {
  color: #ffffff !important;
}

/* Certifications Section */
.certifications-section {
  padding: 80px 20px;
  background: white;
}

.certifications-section .section-title {
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 40px;
}

.certifications-banner {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.cert-banner-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  animation: floatCert 6s ease-in-out infinite alternate;
}

@keyframes floatCert {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-10px); }
}

/* Process Section */
.process-section {
  padding: 100px 20px;
  background: #f8f8f8;
}

.process-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
}

.process-header {
  margin-bottom: 40px;
}

.process-header h2 {
  font-family: 'Nunito', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 16px;
}

.process-desc {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.step-number {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--secondary-color);
  color: #111;
  font-family: 'Nunito', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-step h3 {
  font-family: 'Nunito', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 8px;
}

.process-step p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
}

.process-image-wrapper {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.process-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.process-image-wrapper:hover .process-image {
  transform: scale(1.05);
}

/* Responsividad */
@media (max-width: 1024px) {
  .mvv-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .process-container { gap: 40px; }
  .us-text-content h2 { font-size: 2.2rem; }
  .hero-content h1 { font-size: 3rem; }
}

@media (max-width: 768px) {
  .us-hero { height: 40vh; min-height: 300px; }
  .mvv-grid { grid-template-columns: 1fr; gap: 20px; }
  .process-container { grid-template-columns: 1fr; }
  .process-header { text-align: center; }
  .us-story-section { padding: 60px 20px; }
}

@media (max-width: 480px) {
  .us-text-content h2 { font-size: 1.8rem; }
  .hero-content h1 { font-size: 2.2rem; }
}
</style>
