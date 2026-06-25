<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Logo y Redes Sociales -->
        <div class="footer-brand">
          <img src="/logo.png" alt="Crunchy Snacks Logo" class="footer-logo" />
          <p class="footer-desc">{{ t('footer.desc') }}</p>
          <div class="contact-list">
            <a href="https://www.facebook.com/profile.php?id=61575244983088" target="_blank" class="contact-item" aria-label="Facebook">
              <span class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </span>
            </a>
            <a href="https://www.instagram.com/crunchysnacks.mx?igsh=ZXNnd280Zm94amUy" target="_blank" class="contact-item" aria-label="Instagram">
              <span class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
            </a>
            <a href="mailto:info@crunchysnacks.com" class="contact-item" aria-label="Email">
              <span class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
            </a>
            <a href="https://wa.me/554424903449" class="contact-item" aria-label="WhatsApp" target="_blank">
              <span class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <!-- Mapa del Sitio -->
        <div class="footer-links-group">
          <h4 class="footer-heading">{{ t('footer.siteMap') }}</h4>
          <ul class="footer-links">
            <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/tiendas">{{ t('nav.stores') }}</router-link></li>
            <li><router-link to="/nosotros">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/contacto">{{ t('nav.contact') }}</router-link></li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="footer-links-group">
          <h4 class="footer-heading">{{ t('footer.legal') }}</h4>
          <ul class="footer-links">
            <li><router-link to="/aviso-privacidad">{{ t('footer.privacy') }}</router-link></li>
            <li><router-link to="/terminos">{{ t('footer.terms') }}</router-link></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLocale } from '../composables/useLocale.js'
const { t } = useLocale()
</script>

<style scoped>
.site-footer {
  background-color: var(--primary-color);
  color: white;
  padding: 80px 0 24px;
  position: relative;
  overflow: hidden;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  background: rgba(246, 178, 0, 0.05);
  border-radius: 50%;
  pointer-events: none;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  margin-bottom: 64px;
}

.footer-logo {
  height: 60px;
  width: auto;
  margin-bottom: 24px;
  background-color: white;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.footer-desc {
  font-family: 'Nunito Sans', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 350px;
  margin-bottom: 32px;
}

.contact-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: white;
  transition: transform 0.2s;
}

.contact-item:hover {
  transform: translateY(-4px);
}

.social-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .social-icon {
  background-color: var(--secondary-color);
  color: #111;
  box-shadow: 0 4px 12px rgba(246, 178, 0, 0.3);
}

.contact-text {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
}

.footer-heading {
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 24px;
  color: var(--secondary-color);
}

.footer-text {
  font-family: 'Nunito Sans', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-family: 'Nunito Sans', sans-serif;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.05rem;
  transition: color 0.2s, padding-left 0.2s;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--secondary-color);
  padding-left: 6px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  text-align: center;
}

.copyright {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
