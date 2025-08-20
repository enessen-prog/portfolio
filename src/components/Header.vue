<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// Sections internes (pour le scroll fluide)
const sections = [
  { id: "apropos", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "tech-skills", label: "Technologies" }
]

// Etat section active
const activeSection = ref<string | null>(null)

// Etat menu hamburger
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

// Scroll fluide avec offset du header
function scrollToWithOffset(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const nav = document.getElementById("site-nav")
  const offset = (nav?.offsetHeight ?? 80) + 10
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({ top, behavior: "smooth" })
}

// Gestion navigation interne
async function goToSection(id: string) {
  closeMenu() // ferme le menu après clic
  if (document.getElementById(id)) {
    scrollToWithOffset(id)
    return
  }
  await router.push({ name: "accueil", hash: `#${id}` })
  const tryScroll = () => {
    const el = document.getElementById(id)
    if (el) {
      scrollToWithOffset(id)
    } else {
      setTimeout(tryScroll, 100)
    }
  }
  tryScroll()
}

// Observer pour surligner la section active
let observer: IntersectionObserver | null = null
function setupObserver() {
  observer?.disconnect()
  observer = new IntersectionObserver(
    entries => {
      for (const e of entries) {
        if (e.isIntersecting) activeSection.value = (e.target as HTMLElement).id
      }
    },
    { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
  )
  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer!.observe(el)
  })
}

onMounted(() => setupObserver())
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <nav id="site-nav" class="nav">
    <!-- Bouton hamburger (mobile) -->
    <button class="hamburger" @click="toggleMenu" aria-label="Menu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Menu -->
    <ul :class="{ open: isOpen }">
      <li>
        <RouterLink
          :to="{ name: 'accueil' }"
          class="nav-link"
          :class="{ active: !activeSection }"
          @click="closeMenu"
        >
          Accueil
        </RouterLink>
      </li>

      <li v-for="s in sections" :key="s.id">
        <a
          href="#"
          class="nav-link"
          :class="{ active: activeSection === s.id }"
          @click.prevent="goToSection(s.id)"
        >
          {{ s.label }}
        </a>
      </li>

      <li>
        <RouterLink :to="{ name: 'projets' }" class="nav-link" @click="closeMenu">
          Projets
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 40px;
  background: rgba(30, 30, 40, 0.95);
  backdrop-filter: blur(6px);
  border-bottom: 2px solid #c79d77;
  z-index: 1000;
  font-family: 'MonSuperFont', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Menu de base */
.nav ul {
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
  transition: transform 0.3s ease;
}

/* Liens */
.nav-link {
  position: relative;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease, color 0.3s ease;
  padding: 6px 0;
}

/* Animation soulignement */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 3px;
  background: #e94c5a;
  transition: width 0.3s ease;
}

/* Lien actif */
.nav-link.active,
.router-link-active {
  color: #e94c5a;
  opacity: 1;
}
.nav-link.active::after,
.router-link-active::after {
  width: 100%;
}

/* --- Hamburger --- */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}
.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.hamburger span.open:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* --- Responsive --- */
@media (max-width: 560px) {
  .hamburger {
    display: flex;
  }

  .nav ul {
    position: fixed;
    top: 60px; /* hauteur du nav */
    right: 0;
    background: rgba(30,30,40,0.97);
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    transform: translateX(100%);
    height: calc(100vh - 60px);
    width: 70%;
  }
  .nav ul.open {
    transform: translateX(0);
  }
}
</style>
