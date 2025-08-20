<template>
  <div id="page-project-details">
    <div v-if="projet" class="presentation">
      <div class="hero-card">
        <!-- Titre & description visibles -->
        <div class="hero-heading-wrapper visible">
          <div class="hero-heading-left">
            <h1 class="intro">{{ projet.titre }}</h1>
            <p id="animated-text">{{ projet.description }}</p>
          </div>
        </div>

        <!-- Fonctionnalités -->
        <div class="section-header">
          <h2 class="section-title">Fonctionnalités</h2>
        </div>
        <ul class="hero-bullets">
          <li v-for="(item, idx) in projet.fonctionnalites" :key="idx">
            <span class="bullet-star">★</span>{{ item }}
          </li>
        </ul>

        <!-- Compétences -->
        <div class="section-header">
          <h2 class="section-title">Compétences mises en œuvre</h2>
        </div>
        <ul class="hero-bullets">
          <li v-for="(comp, idx) in projet.competences" :key="idx">
            <span class="bullet-star">★</span>{{ comp }}
          </li>
        </ul>

        <!-- Technologies -->
        <div class="section-header">
          <h2 class="section-title">Technologies</h2>
        </div>
        <ul class="tech-chips">
          <li v-for="(tech, idx) in projet.technos" :key="idx" class="chip">
            <img :src="tech.logo" :alt="tech.nom" class="tech-icon large" /> {{ tech.nom }}
          </li>
        </ul>

        <!-- Galerie avec flèches -->
        <div class="section-header">
          <h2 class="section-title">Galerie</h2>
        </div>
        <div class="carousel">
          <button @click="prevImage" class="arrow">⬅</button>
          <img :src="projet.images[activeImage]" :alt="'Capture ' + (activeImage + 1)" class="carousel-image" />
          <button @click="nextImage" class="arrow">➡</button>
        </div>

        <!-- Retour -->
        <router-link to="/projets" class="btn-cv" style="display:inline-block; margin-top:32px">
          ⬅ Retour aux projets
        </router-link>
      </div>
    </div>

    <!-- Si projet non trouvé -->
    <div v-else class="presentation">
      <div class="hero-card">
        <h1 class="intro">Projet introuvable</h1>
        <router-link to="/projets" class="btn-cv" style="display:inline-block; margin-top:20px">
          ⬅ Retour
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import projectDetails from '@/assets/data/projectDetails.json'

const route = useRoute()
const projet = projectDetails.find(p => p.id === route.params.id)
const activeImage = ref(0)

function nextImage() {
  if (!projet) return
  activeImage.value = (activeImage.value + 1) % projet.images.length
}

function prevImage() {
  if (!projet) return
  activeImage.value = (activeImage.value - 1 + projet.images.length) % projet.images.length
}
</script>

<style scoped>
#page-project-details {
  background-image: url("/images/mur1.jpg"); /* chemin corrigé */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 2rem;
  color: white;
}

.hero-card {
  background-color: rgba(0, 0, 0, 0.6); /* ← fond sombre semi-transparent */
  padding: 2rem;
  border-radius: 16px;
}
.tech-icon.large {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.carousel-image {
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
}

.arrow {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}
</style>
