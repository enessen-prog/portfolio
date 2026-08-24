<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Header from "@/components/Header.vue"
import type { Projets } from '@/models/Projets'
import projetsData from '@/assets/data/projects.json'
import projectDetails from '@/assets/data/projectDetails.json' // <-- JSON fourni

const projets = projetsData as Projets[]

// ---- État modal
type Detail = {
  id: string
  titre: string
  description: string
  technos: { name: string; logo: string }[]
  fonctionnalites: string[]
  images: string[]
  competences: string[]
  image?: string
}

const detailsById = new Map<string, Detail>()
for (const d of projectDetails as Detail[]) {
  detailsById.set(d.id, d)
}

const selectedId = ref<string | null>(null)
const activeImage = ref(0)

const detail = computed<Detail | null>(() => {
  if (!selectedId.value) return null
  return detailsById.get(selectedId.value) ?? null
})

function openModalFromCard(altOrId: string) {
  selectedId.value = altOrId
  activeImage.value = 0
}
function closeModal() {
  selectedId.value = null
  activeImage.value = 0
}
function nextImage() {
  if (!detail.value?.images?.length) return
  activeImage.value = (activeImage.value + 1) % detail.value.images.length
}
function prevImage() {
  if (!detail.value?.images?.length) return
  activeImage.value = (activeImage.value - 1 + detail.value.images.length) % detail.value.images.length
}

// Échap pour fermer
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && selectedId.value) closeModal()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div id="app-container">
    <div id="header-container"></div>
    <Header/>
    <main>
      <h1>Mes Projets</h1>

      <div class="projects-container">
        <div class="bounty" v-for="(projet, index) in projets" :key="index">
          <!-- On garde un <a> pour bénéficier de tes styles .bounty a {...} -->
          <a href="#" @click.prevent="openModalFromCard(projet.alt)">
            <img :alt="projet.alt" :src="projet.src" />
            <div class="bounty-text">{{ projet.texte }}</div>
          </a>
        </div>
      </div>
    </main>

    <!-- ==================== MODAL DÉTAIL ==================== -->
    <div
      v-if="detail"
      class="proj-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="proj-modal-title"
      @click.self="closeModal"
    >
      <div class="proj-modal-card">
        <button class="proj-modal-close" type="button" aria-label="Fermer" @click="closeModal">✕</button>

        <!-- En-tête -->
        <header class="proj-header">
          <h2 id="proj-modal-title" class="proj-title">{{ detail.titre }}</h2>
          <p class="proj-desc">{{ detail.description }}</p>
        </header>

        <!-- Galerie -->
        <section v-if="detail.images?.length" class="proj-gallery">
          <button class="proj-arrow left" @click="prevImage" aria-label="Image précédente">❮</button>
          <img
            class="proj-gallery-image"
            :src="detail.images[activeImage]"
            :alt="`${detail.titre} - capture ${activeImage + 1}`"
          />
          <button class="proj-arrow right" @click="nextImage" aria-label="Image suivante">❯</button>
          <div class="proj-gallery-count">{{ activeImage + 1 }} / {{ detail.images.length }}</div>
        </section>

        <!-- Fonctionnalités -->
        <section v-if="detail.fonctionnalites?.length" class="proj-section">
          <h3 class="proj-section-title">Fonctionnalités</h3>
          <ul class="proj-bullets">
            <li v-for="(f, i) in detail.fonctionnalites" :key="i">
              <span class="star">★</span>{{ f }}
            </li>
          </ul>
        </section>

        <!-- Compétences (cards) -->
        <section v-if="detail.competences?.length" class="proj-section">
          <h3 class="proj-section-title">Compétences mises en œuvre</h3>
          <div class="proj-competences">
            <div class="proj-competence-card" v-for="(c, i) in detail.competences" :key="i">
              {{ c }}
            </div>
          </div>
        </section>

        <!-- Technos (logos visibles) -->
        <section v-if="detail.technos?.length" class="proj-section">
          <h3 class="proj-section-title">Technologies</h3>
          <ul class="proj-tech-chips">
            <li class="proj-chip" v-for="(t, i) in detail.technos" :key="i">
              <img class="proj-tech-logo" :src="t.logo" :alt="t.name" />
              <span>{{ t.name }}</span>
            </li>
          </ul>
        </section>

        <!-- Actions -->
        <footer class="proj-actions">
          <button class="proj-btn" type="button" @click="closeModal">Fermer</button>
        </footer>
      </div>
    </div>
    <!-- ====================================================== -->
  </div>
</template>

<style>
/* ======== TON CSS ORIGINAL (inchangé) ======== */
/* ===== Base ===== */
* { box-sizing: border-box; }
html, body {
  height: 100%;
  margin: 0;
  overflow-y: auto;
}
#app-container {
  margin: 0;
  padding: 0;
  font-family: 'MonSuperFont', sans-serif;
  background: url('../../public/images/mur1.jpg') no-repeat center center fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;
  color: white;
  overflow-y: auto;
    min-height: 100vh;
}
.proj-modal-card {
  font-family: 'Inter', sans-serif;

}
.proj-desc{
    font-family: 'MonSuperFont', sans-serif;
     color: #e94c5a; /* rose */
}
/* Compétences en rose + police Inter */
.proj-competence-card {
  color: #e94c5a; /* rose */
  font-family: 'MonSuperFont', sans-serif;
}

/* Noms des technos en Inter */
.proj-chip span {
  font-family: 'Inter', sans-serif;
}
/* Hauteur visuelle du header (si ton <Header> est fixe) */
:root { --header-height: 12vh; } /* ajuste 10–14vh selon ton header */

/* ===== Structure ===== */
main {
  /* on pousse le contenu sous le header + padding latéral/bas */
  margin-top: var(--header-height);
  padding: 0 5% 8%;
}

/* Titre simple, dans le flux, sans positionnement spécial */
h1 {
  position: relative;          /* pas de fixed */
  display: block;              /* pour éviter les effets grid/flex hérités */
  width: 100%;                 /* occupe toute la largeur */
  text-align: center;          /* centre le texte */
  margin: 0 auto 5% auto;       /* marge auto gauche/droite */
  font-size: 300%;
  line-height: 1.15;
  z-index: 1;    
    color: #C79D77;               /* au-dessus du fond si besoin */
}


/* ===== Grille ===== */
.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
  justify-items: center;
  width: 100%;
}

/* ===== Carte (prime) ===== */
.bounty {
  width: 60%;            /* plus petite qu'avant */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  transform-origin: top center;  /* grossit vers le bas au hover */
  position: relative;
}

.bounty:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 8px 24px rgba(199, 157, 119, 0.4));
}

.bounty:focus-within {
  outline: 2px solid var(--gold, #c79d77);
  outline-offset: 4px;
  border-radius: 4%;
}

.bounty img {
  width: 100%;
  height: auto;
  border-radius: 4%;
  object-fit: cover;
}

.bounty-text {
  font-size: 120%;
  font-weight: bold;
  color: #C79D77;
  text-align: center;
  margin-top: 3%;
  text-shadow: 0.1em 0.1em 0.25em rgba(0, 0, 0, 0.8);
}

/* Liens neutres */
.bounty a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bounty a:visited,
.bounty a:hover,
.bounty a:active,
.bounty a:focus { color: inherit; outline: none; }

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  h1 { font-size: clamp(32px, 6vw, 48px); margin-bottom: 6%; }
  .projects-container { grid-template-columns: repeat(2, 1fr); gap: 4%; }
  .bounty { width: 70%; padding-top: 3%; }
  .bounty-text { font-size: clamp(16px, 3vw, 20px); margin-top: 4%; }
  main { padding: 0 4% 6%; }
}

@media (max-width: 768px) {
  h1 { font-size: clamp(28px, 5vw, 40px); margin-bottom: 7%; }
  .projects-container { grid-template-columns: 1fr; gap: 6%; }
  .bounty { width: 75%; padding-top: 4%; }
  .bounty-text { font-size: clamp(18px, 4vw, 24px); margin-top: 5%; }
  main { margin-top: calc(var(--header-height) - 2vh); padding: 0 3% 5%; }
}

@media (max-width: 480px) {
  h1 { font-size: clamp(24px, 7vw, 32px); margin-bottom: 8%; }
  .bounty { width: 85%; padding-top: 5%; }
  .bounty-text { font-size: clamp(16px, 5vw, 22px); }
  main { padding: 0 2% 4%; }
}

/* ======== AJOUTS (nouveaux sélecteurs seulement) ======== */
/* Palette inspirée de ta DA */
.proj-modal-card { --accent:#e94c5a; --gold:#c79d77; }

/* Overlay + carte */
.proj-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.58);
  display: grid;
  place-items: center;
  padding: 2rem;
  z-index: 1000;
}
.proj-modal-card {
  width: min(980px, 94vw);
  max-height: 90vh;
  overflow: auto;
  background: rgba(0,0,0,0.78);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35);
  padding: clamp(16px, 3vw, 28px);
  position: relative;
  color: #fff;
}
.proj-modal-close {
  position: sticky;
  top: 0;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(233, 76, 90, 0.15);
  border: 1px solid rgba(233, 76, 90, 0.3);
  border-radius: 50%;
  color: #e94c5a;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.proj-modal-close:hover {
  background: rgba(233, 76, 90, 0.25);
  border-color: rgba(233, 76, 90, 0.5);
  transform: scale(1.1);
}

.proj-modal-close:focus {
  outline: 2px solid #e94c5a;
  outline-offset: 2px;
}

/* En-tête */
.proj-header { margin-bottom: 10px; }
.proj-title {
  margin: 0 0 6px 0;
  font-family: "MonSuperFont", sans-serif;
  color: var(--gold);
  font-size: clamp(22px, 4.2vw, 36px);
  line-height: 1.15;
}
.proj-desc { margin: 0; opacity: .95; }

/* Galerie */
.proj-gallery {
  position: relative;
  margin: 18px 0 8px;
  display: grid;
  place-items: center;
}

.proj-gallery-image {
  width: auto;
  max-width: 90%;
  max-height: 420px;     /* ✅ limite la hauteur des images */
  border-radius: 12px;
  display: block;
  object-fit: contain;   /* ✅ garde les proportions */
}
.proj-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid rgba(233, 76, 90, 0.3);
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 26px;
  line-height: 1;
  color: var(--accent);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}
.proj-arrow:hover {
  transform: translateY(-50%) scale(1.12);
  background: rgba(233, 76, 90, 0.2);
  border-color: rgba(233, 76, 90, 0.5);
}
.proj-arrow:focus {
  outline: 2px solid #e94c5a;
  outline-offset: 2px;
}
.proj-arrow.left { left: 6px; }
.proj-arrow.right { right: 6px; }
.proj-gallery-count {
  margin-top: 8px;
  font-size: 13px;
  opacity: .85;
}

/* Sections */
.proj-section { margin-top: 22px; }
.proj-section-title {
  margin: 0 0 10px 0;
  color: var(--gold);
  font-family: "MonSuperFont", sans-serif;
  font-size: clamp(18px, 3.6vw, 28px);
}

/* Puces fonctionnalités */
.proj-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
  line-height: 1.55;
}
.proj-bullets .star { color: var(--gold); margin-right: 8px; }

/* Compétences en cards */
.proj-competences {
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(160px, 1fr) );
  gap: 12px;
}
.proj-competence-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 12px;
  padding: 10px 12px;
  text-align: center;
  font-weight: 600;
}

/* Technos */
.proj-tech-chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display:flex; flex-wrap:wrap; gap: 10px;
}
.proj-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 12px; border-radius: 999px;
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.25);
  white-space: nowrap;
}
.proj-tech-logo {
  width: 40px; height: 40px; object-fit: contain; /* logos bien visibles */
}

/* Actions */
.proj-actions {
  display: flex; justify-content: flex-end;
  margin-top: 18px;
}
.proj-btn {
  background: linear-gradient(135deg, var(--gold) 0%, #d4ab88 100%);
  color: #111;
  border: 0;
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(199, 157, 119, 0.3);
}

.proj-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(199, 157, 119, 0.5);
}

.proj-btn:focus {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}

.proj-btn:active {
  transform: translateY(0);
}

/* Mobile tweaks */
@media (max-width: 768px) {
  .proj-modal-card {
    width: 96vw;
    max-height: 94vh;
    padding: clamp(12px, 2.5vw, 20px);
  }

  .proj-gallery-image {
    max-width: 95%;
    max-height: 320px;
  }

  .proj-arrow {
    padding: 8px 10px;
    font-size: 22px;
  }

  .proj-competences {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@media (max-width: 520px) {
  .proj-tech-logo { width: 34px; height: 34px; }

  .proj-modal-overlay {
    padding: 1rem;
  }

  .proj-title {
    font-size: clamp(20px, 5vw, 28px);
  }

  .proj-section-title {
    font-size: clamp(16px, 4vw, 22px);
  }

  .proj-arrow {
    padding: 6px 8px;
    font-size: 20px;
  }

  .proj-gallery-image {
    max-height: 240px;
  }

  .proj-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
