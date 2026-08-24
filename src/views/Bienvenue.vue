<template>
  <div class="page" :style="{ backgroundImage: `url(${base}images/wanokuni.jpg)` }">
    <div class="content-wrapper">
      <h1 class="hero-title fade-in-down">Bienvenue dans mon Portfolio</h1>
      <p class="hero-subtitle fade-in-up">Développeur Full-Stack | BUT Informatique 3ème année</p>
    </div>

    <div id="petals-container"></div>

    <router-link to="/accueil" class="button-78 pulse">
      <span class="button-text">Découvrir mon parcours</span>
      <span class="button-icon">→</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

// BASE_URL de Vite : "/" en dev, "/<repo>/" sur GitHub Pages
const base = import.meta.env.BASE_URL

onMounted(() => {
  const petalContainer = document.getElementById("petals-container")
  if (!petalContainer) return

  const petalCount = 40

  // créer les conteneurs
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div")
    petal.classList.add("petal")
    petalContainer.appendChild(petal)
  }

  // anime chaque pétale
  const petals = document.querySelectorAll<HTMLDivElement>(".petal")
  for (let i = 0; i < petals.length; i++) {
    const petal = petals[i]
    const petalNumber = Math.floor(Math.random() * 7) + 1

    // IMPORTANT : chemin compatible GH Pages
    petal.innerHTML = `
      <div class="rotate">
        <img src="${base}images/petale${petalNumber}.png" class="askew" alt="" />
      </div>
    `

    const scale = Math.random() * 1.5 + 0.4

    petal.animate(
      [
        {
          transform: `translate3d(${(i / petals.length) * 100}vw,0,0) scale(${scale})`,
          opacity: scale
        },
        {
          transform: `translate3d(${(i / petals.length) * 100 + 10}vw,150vh,0) scale(${scale})`,
          opacity: 1
        }
      ],
      {
        duration: Math.random() * 90000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000)
      }
    )
  }
})
</script>

<style>
/* Police (Vite résout ce chemin car le fichier est dans src/assets/fonts) */
@font-face {
  font-family: 'MonSuperFont';
  src: url('../assets/fonts/GangOfThree-nRL8M.ttf') format('truetype');
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: transparent;
  box-sizing: border-box;
}

.page {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  /* backgroundImage est injecté depuis le template (voir :style) */
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  font-family: 'Inter', 'Segoe UI', Roboto, Arial, sans-serif;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.page::before {
  content: "";
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 0;
  backdrop-filter: blur(2px);
}

.content-wrapper {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 90%;
  margin-bottom: 60px;
}

/* ----------- Animations ----------- */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fade-in-down {
  animation: fadeInDown 1s ease-out;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* ----------- Titre responsive ----------- */
.hero-title {
  font-family: 'MonSuperFont', sans-serif;
  background: linear-gradient(135deg, #C79D77 0%, #d4ab88 50%, #C79D77 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(32px, 9vw, 84px);
  line-height: 1.2;
  white-space: normal;
  text-wrap: balance;
  word-break: normal;
  text-align: center;
  max-width: 95%;
  padding: 0 20px;
  margin: 0 0 16px 0;
  filter: drop-shadow(0 4px 12px rgba(199,157,119,0.5));
}

.hero-subtitle {
  font-size: clamp(16px, 3vw, 24px);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

@media (max-width: 480px){
  .hero-title{
    font-size: clamp(28px, 10vw, 42px);
    padding: 0 20px;
    margin-bottom: 12px;
  }

  .hero-subtitle {
    font-size: clamp(14px, 4vw, 18px);
  }
}

/* ----------- Pétales ----------- */
.petal {
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.8;
  pointer-events: none;
  background-size: cover;
  animation: fall linear infinite, sway ease-in-out infinite;
  z-index: 150; /* mettre < 2 si tu veux que le titre passe AU-DESSUS */
}

.petal .rotate {
  animation: driftyRotate 1s infinite both ease-in-out;
  perspective: 1000;
}
.petal .askew {
  background: transparent;
  transform: skewY(10deg);
  display: block;
  width: 2rem;
  height: 2rem;
  animation: drifty 1s infinite alternate both ease-in-out;
  perspective: 1000;
  border: none;
  outline: none;
}

/* variations de timing */
.petal:nth-of-type(7n) .askew { animation-delay: -.6s; animation-duration: 2.25s; }
.petal:nth-of-type(7n + 1) .askew { animation-delay: -.879s; animation-duration: 3.5s; }
.petal:nth-of-type(7n + 2) .askew { animation-delay: -.11s; animation-duration: 1.95s; }
.petal:nth-of-type(7n + 3) .askew { animation-delay: -.246s; animation-duration: .85s; }
.petal:nth-of-type(7n + 4) .askew { animation-delay: -.43s; animation-duration: 2.5s; }
.petal:nth-of-type(7n + 5) .askew { animation-delay: -.56s; animation-duration: 1.75s; }
.petal:nth-of-type(7n + 6) .askew { animation-delay: -.76s; animation-duration: 1.5s; }

.petal:nth-of-type(9n) .rotate { animation-duration: 2s; }
.petal:nth-of-type(9n + 1) .rotate { animation-duration: 2.3s; }
.petal:nth-of-type(9n + 2) .rotate { animation-duration: 1.1s; }
.petal:nth-of-type(9n + 3) .rotate { animation-duration: .75s; }
.petal:nth-of-type(9n + 4) .rotate { animation-duration: 4.3s; }
.petal:nth-of-type(9n + 5) .rotate { animation-duration: 3.05s; }
.petal:nth-of-type(9n + 6) .rotate { animation-duration: 2.76s; }
.petal:nth-of-type(9n + 7) .rotate { animation-duration: 7.6s; }
.petal:nth-of-type(9n + 8) .rotate { animation-duration: 1.78s; }

@keyframes drifty {
  0%   { transform: skewY(10deg)  translate3d(-250%, 0, 0); }
  100% { transform: skewY(-12deg) translate3d(250%, 0, 0); }
}
@keyframes driftyRotate {
  0%   { transform: rotateX(0); }
  100% { transform: rotateX(359deg); }
}

/* ----------- Bouton ----------- */
.button-78 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 10;
  padding: 18px 48px;
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(135deg, #C79D77 0%, #d4ab88 100%);
  box-shadow: 0 8px 32px rgba(199,157,119,0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.button-78::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.button-text {
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}

.button-icon {
  position: relative;
  z-index: 1;
  font-size: 24px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-78:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 48px rgba(199,157,119,0.6);
  border-color: rgba(255,255,255,0.4);
}

.button-78:hover::before {
  opacity: 1;
}

.button-78:hover .button-icon {
  transform: translateX(6px);
}

.button-78:active {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 24px rgba(199,157,119,0.5);
}

.button-78:focus {
  outline: 2px solid var(--gold, #c79d77);
  outline-offset: 3px;
}

/* bouton responsive */
@media (max-width: 768px){
  .content-wrapper {
    margin-bottom: 50px;
  }

  .button-78{
    padding: 17px 44px;
    font-size: 17px;
  }

  .button-icon {
    font-size: 22px;
  }
}

@media (max-width: 480px){
  .content-wrapper {
    margin-bottom: 40px;
    max-width: 95%;
  }

  .button-78{
    padding: 16px 40px;
    font-size: 16px;
    gap: 10px;
  }

  .button-icon {
    font-size: 20px;
  }

  .page {
    justify-content: space-around;
  }
}
</style>
