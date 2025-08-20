<template>
  <div id="page-root">
    <div class="background-overlay"></div>
    <Header />

    <!-- Présentation (HERO) -->
    <section class="presentation">
      <div class="hero">
        <!-- Bandeau gauche : Bonjour + Nom/Prénom -->
        <div class="hero-heading-wrapper">
          <div class="hero-heading-left">
            <div class="title-with-icon">
              <i class="bi bi-person-circle pink-icon"></i>
              <h1 class="intro">Bonjour, je m'appelle</h1>
            </div>
            <h1 id="animated-text">{{ displayText }}</h1>
          </div>
        </div>

        <!-- Carte glass centrée -->
        <div class="hero-card">
          <span class="hero-shine" aria-hidden="true"></span>
          <ul class="hero-bullets">
            <li>
              <i class="bi bi-star-fill bullet-star" aria-hidden="true"></i>
              Étudiant en deuxième année de BUT Informatique à l'IUT Lyon 1, je suis à la recherche d’une
              alternance pour ma troisième année dans le domaine du développement informatique.
            </li>
            <li>
              <i class="bi bi-star-fill bullet-star" aria-hidden="true"></i>
              Mon objectif est de poursuivre mes études en Master, avec une spécialisation en
              développement Full Stack. Sérieux, motivé et dynamique, je suis prêt à m’investir
              pleinement dans les missions qui me seront confiées.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- À propos (contient CV + timelines) -->
    <section class="about-section" id="apropos">
      <div class="title-with-icon section-header">
        <i class="bi bi-info-circle pink-icon"></i>
        <h2 class="section-title">À propos</h2>
      </div>

      <!-- Carte CV (1 par ligne) -->
      <div class="info-section">
        <div class="info-box">
          <div class="title-with-icon">
            <i class="bi bi-file-earmark-person pink-icon"></i>
            <h2 class="card-title">Mon CV</h2>
          </div>
          <p>Consultez ou téléchargez mon CV.</p>
          <button class="btn-cv" @click="openModalCV">Afficher le CV</button>
        </div>
      </div>

      <!-- Expérience professionnelle (TIMELINE) -->
      <section id="experiences" class="timeline-section">
        <div class="title-with-icon section-header">
          <i class="bi bi-briefcase pink-icon"></i>
          <h2 class="section-title">Expérience professionnelle</h2>
        </div>

        <div class="timeline">
          <div
            class="tl-row"
            v-for="(exp, idx) in experiences"
            :key="exp.id"
            :class="{ left: idx % 2 === 0, right: idx % 2 === 1 }"
          >
            <div class="tl-dot"><i class="bi bi-briefcase-fill"></i></div>
            <div class="tl-card">
              <div class="tl-date">{{ exp.period }}</div>
              <h3 class="tl-title">{{ exp.role }} — {{ exp.company }}</h3>
              <p class="tl-location"><strong>{{ exp.location }}</strong></p>
              <ul class="tl-points">
                <li v-for="point in exp.missions" :key="point">{{ point }}</li>
              </ul>
              <div class="tl-techs">
                <span class="tech" v-for="t in exp.techs" :key="t.name">
                  <img :src="t.logo" :alt="t.name" class="tech-logo" />
                  {{ t.name }}
                </span>
                <span class="tech tech-plain" v-for="t in exp.extraTechs" :key="t">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Parcours scolaire (TIMELINE compacte) -->
      <section id="formations" class="edu-section">
        <div class="title-with-icon section-header">
          <i class="bi bi-mortarboard pink-icon"></i>
          <h2 class="section-title">Parcours scolaire</h2>
        </div>

        <div class="edu-timeline">
          <div class="edu-item" v-for="e in studies" :key="e.id">
            <div class="edu-badge">{{ e.year }}</div>
            <div class="edu-card">
              <h3 class="edu-title">{{ e.title }}</h3>
              <p class="edu-school">{{ e.school }}</p>
              <p class="edu-meta">{{ e.city }}</p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- Compétences (soft / transverses) -->
    <section id="skills" class="skills-section">
      <div class="title-with-icon section-header">
        <i class="bi bi-cpu pink-icon"></i>
        <h2 class="section-title">Compétences</h2>
      </div>

      <div class="skills-grid">
        <article class="skill-card" v-for="s in skills" :key="s.name">
          <h3 class="skill-name">{{ s.name }}</h3>
          <p class="skill-desc">{{ s.desc }}</p>
          <div class="skill-meter">
            <span class="skill-fill" :style="{ width: s.level + '%' }"></span>
            <span class="skill-label">{{ s.level }}%</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Compétences techniques -->
    <section id="tech-skills" class="tech-skills-section">
      <div class="title-with-icon section-header">
        <i class="bi bi-tools pink-icon"></i>
        <h2 class="section-title">Technologies</h2>
      </div>

      <div class="tech-grid">
        <div class="tech-group" v-for="g in techSkills" :key="g.title">
          <h3 class="tech-group-title">{{ g.title }}</h3>
          <ul class="tech-chips">
            <li v-for="t in g.items" :key="t.name" class="chip">
              <img :src="t.logo" :alt="t.name" class="tech-icon" />
              {{ t.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
      <!-- ======== FOOTER CONTACT (NOUVEAU) ======== -->
    <footer id="contact" class="site-footer">
      <div class="footer-inner">
        <h2 class="footer-title">Contact</h2>

        <div class="footer-items">
          <!-- LinkedIn -->
          <a
            class="footer-link"
            href="www.linkedin.com/in/sen-enes-702506296"
            target="_blank"
            rel="noopener"
            aria-label="Mon LinkedIn"
            title="LinkedIn"
          >
            <i class="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <!-- Email -->
          <a
            class="footer-link"
            href="mailto:ton.email@domaine.com"
            aria-label="M'envoyer un e-mail"
            title="Email"
          >
            <i class="bi bi-envelope-fill"></i>
            <span>muh.enes.sen@gmail.com</span>
          </a>
        </div>

        <small class="footer-copy">© {{ new Date().getFullYear() }} Enes SEN — Tous droits réservés.</small>
      </div>
    </footer>
    <!-- ========================================== -->

    <!-- Modal CV -->
    <div v-if="showCV" class="modal-overlay" @click.self="closeModalCV">
      <div class="modal-content">
        <div class="title-with-icon" style="margin-bottom:12px">
          <i class="bi bi-file-earmark-person pink-icon"></i>
          <h2 style="margin:0">Mon CV</h2>
        </div>

        <embed
          :src="cvSrc"
          type="application/pdf"
          width="100%"
          height="600px"
          style="border-radius:10px;background:#fff"
        />

        <div class="modal-actions">
          <a :href="cvSrc" download class="btn-download">
            <i class="bi bi-download"></i> Télécharger le CV
          </a>
          <button class="btn-close" @click="closeModalCV">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import Header from "@/components/Header.vue"

import type { Skill } from "@/models/Skill"
import skillsData from "@/assets/data/skills.json"

import type { TechSkillsData } from "@/models/TechSkills"
import techSkillsJson from "@/assets/data/techSkills.json"

const skills = skillsData as Skill[]
const techSkills = (techSkillsJson as TechSkillsData).groups

/* Map des technos (pour récupérer noms + logos dans expériences) */
type TechItem = { name: string; logo: string }
const techMap = new Map<string, TechItem>()
techSkills.forEach(g => g.items.forEach(it => techMap.set(it.name, it)))
const resolveTech = (names: string[]): TechItem[] =>
  names.map(n => techMap.get(n)).filter((t): t is TechItem => !!t)

/* Texte animé (Nom Prénom) */
const fullText = "SEN Enes"
const displayText = ref("")
const typingSpeed = 150
let i = 0, deleting = false, timer: number | null = null
const typeEffect = () => {
  displayText.value = fullText.slice(0, i)
  i += deleting ? -1 : 1
  if (i > fullText.length) { deleting = true; timer = window.setTimeout(typeEffect, 900); return }
  if (i < 0) { deleting = false; i = 0 }
  timer = window.setTimeout(typeEffect, deleting ? typingSpeed / 2 : typingSpeed)
}
onMounted(() => typeEffect())
onUnmounted(() => { if (timer) clearTimeout(timer) })

/* Expériences */
type Experience = {
  id: string; company: string; role: string; location: string; period: string;
  missions: string[]; techs: TechItem[]; extraTechs?: string[]
}
const experiences: Experience[] = [
  {
    id: "optimis",
    company: "OPTIMIS SAS",
    role: "Stagiaire développement",
    location: "Lyon",
    period: "Avril 2025 — 12 semaines",
    missions: [
      "Formulaire exécutable (PySide6) avec paramètres dynamiques via ligne de commande.",
      "Persistance des données en SQL Server.",
      "Dashboards interactifs Grafana + front HTML/CSS/JS alimentés par requêtes SQL avancées."
    ],
    techs: resolveTech(["Python", "SQL Server", "Grafana", "HTML5", "CSS", "JavaScript", "MySQL"]),
    extraTechs: ["PySide6", "DataGrip"]
  },
  {
    id: "interim",
    company: "Intérim STS",
    role: "Manutentionnaire",
    location: "Saint-Désirat",
    period: "Été 2023 & Été 2024",
    missions: ["Renfort saisonnier et logistique."],
    techs: []
  },
  {
    id: "cdd-experiences",
    company: "CDD Étés",
    role: "Employé commercial",
    location: "Davézieux",
    period: "Été 2022 & Été 2024 (1 mois chacun)",
    missions: [
      "CDD Action (Été 2024) : Relation client et tenue de rayon.",
      "CDD MR Bricolage (Été 2022) : Conseil et manutention."
    ],
    techs: []
  }
]

/* Études */
type Study = { id: string; title: string; school: string; city: string; year: string }
const studies: Study[] = [
  { id: "but", title: "BUT Informatique 2ème année", school: "Université Claude Bernard Lyon 1", city: "Lyon", year: "2025" },
  { id: "bac", title: "Bac STI2D (Mention Bien)",     school: "Lycée Boissy d’Anglas",           city: "Annonay", year: "2023" }
]

/* Modal CV */
const cvSrc = "/docs/CV_Enes_SEN.pdf"
const showCV = ref(false)
function openModalCV() { showCV.value = true }
function closeModalCV() { showCV.value = false }
</script>

<style>
/* =========================
   Base & variables
   ========================= */
:root{
  --bg:#0b0b0b;
  --text:#ffffff;
  --accent:#e94c5a;
  --gold:#c79d77;
  --glass: rgba(255,255,255,0.08);
}

*{ box-sizing:border-box; }

html,body{
  margin:0; padding:0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter','Segoe UI',Roboto,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* =========================
   Background
   ========================= */
#page-root{ position:relative; z-index:1; }
.background-overlay{
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background:url("/images/maison.jpg") no-repeat center / cover fixed;
  filter:brightness(30%);
}

/* =========================
   HERO
   ========================= */
.presentation{
  position:relative; z-index:1;
  min-height:100vh;
  padding: 24px clamp(16px, 5vw, 10%);
  display:grid; place-items:center;
}
.hero{
  width:100%;
  max-width:980px;
  display:flex; flex-direction:column;
  gap:24px;
}

/* Bandeau titre à gauche */
.hero-heading-wrapper{
  width:100%;
  display:flex; justify-content:flex-start;
}
.hero-heading-left{ text-align:left; }

.title-with-icon{ display:flex; align-items:center; gap:10px; }
.pink-icon{ font-size: clamp(22px, 4.5vw, 32px); color:var(--accent); }
.intro{
  margin:0;
  font-weight:700;
  color:var(--gold);
  font-size: clamp(22px, 4.8vw, 40px);
  line-height:1.15;
}
#animated-text{
  margin: 6px 0 0 0;
  width:fit-content;
  font-weight:800;
  color:var(--accent);
  border-right:3px solid rgba(133,41,53,.95);
  font-size: clamp(28px, 7.5vw, 54px);
  line-height:1.1;
  font-family:"MonSuperFont",sans-serif;
}

/* =========================
   Hero Card (centrée)
   ========================= */
.hero-card{
  position:relative;
  background: var(--glass);
  border:1px solid color-mix(in srgb, var(--gold) 45%, transparent);
  border-radius:16px;
  padding: clamp(16px, 3.2vw, 24px);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 35px rgba(0,0,0,.35);
  overflow:hidden;

  max-width: 880px;
  margin: 0 auto;
}
.hero-card::before{
  content:"";
  position:absolute; inset:-2px; border-radius:18px;
  background: conic-gradient(from 180deg at 50% 50%, rgba(233,76,90,.35), rgba(199,157,119,.45), rgba(233,76,90,.35));
  filter: blur(18px); opacity:.25; pointer-events:none;
}

/* Shine */
.hero-shine{
  position:absolute; inset:0; pointer-events:none;
  background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,.25) 45%, transparent 60%);
  transform: translateX(-100%);
  animation: shine 6s ease-in-out infinite;
}
@keyframes shine{
  0%{ transform:translateX(-120%); }
  50%{ transform:translateX(0); }
  100%{ transform:translateX(120%); }
}

/* Puces */
.hero-bullets{
  margin:0; padding:0; list-style:none;
  display:flex; flex-direction:column; gap:10px;
  line-height:1.55;
  font-size: clamp(14px, 1.9vw, 17px);
}
.bullet-star{ color:var(--gold); margin-right:8px; }

/* =========================
   Titres de section
   ========================= */
.section-header{ margin: 28px 0 18px; }
.section-title{
  margin:0; padding:0; display:inline-block;
  color:var(--gold);
  font-family:"MonSuperFont",sans-serif;
  font-size: clamp(22px, 4.5vw, 36px);
  line-height:1.1;
}

/* =========================
   À propos
   ========================= */
.about-section{ padding: 36px clamp(16px, 5vw, 8%); position:relative; z-index:1; }
.about-section .info-section{ display:flex; flex-direction:column; gap:24px; }
.about-section .info-box{
  width:100%; max-width:880px; margin:0 auto;
  background:var(--glass);
  border:2px solid color-mix(in srgb, var(--gold) 45%, transparent);
  border-radius:16px;
  padding: clamp(18px, 3.2vw, 32px);
  text-align:center; backdrop-filter: blur(10px);
}
.card-title{ margin:0; font-size: clamp(18px, 3.8vw, 24px); color:var(--accent); font-family:"MonSuperFont",sans-serif; }
.info-box p{ margin:10px 0 0; }
.btn-cv{
  margin-top:16px; padding:10px 16px; border:none; cursor:pointer;
  background:var(--gold); color:#fff; border-radius:8px; font-weight:600;
}

/* =========================
   Skills (soft)
   ========================= */
.skills-section{ padding:36px clamp(16px, 5vw, 8%); position:relative; z-index:1; }
.skills-grid{
  display:grid; gap:18px;
  grid-template-columns: 1fr; /* mobile par défaut */
}
.skill-card{
  background:var(--glass);
  backdrop-filter: blur(10px);
  border:2px solid color-mix(in srgb, var(--gold) 50%, transparent);
  border-radius:16px; padding: clamp(18px, 3.2vw, 28px);
  box-shadow:0 8px 24px rgba(0,0,0,0.25);
}
.skill-name{ margin:0 0 6px; font-size: clamp(18px, 3.5vw, 22px); color:var(--gold); }
.skill-desc{ margin:0 0 12px; opacity:.9; }
.skill-meter{ position:relative; height:14px; border-radius:999px; overflow:hidden; background:rgba(255,255,255,0.25); }
.skill-fill{ display:block; height:100%; background:var(--accent); transition:width .6s ease; }
.skill-label{ position:absolute; right:8px; top:50%; transform:translateY(-50%); font-size:12px; color:#0b0b0b; background:rgba(255,255,255,.85); padding:0 6px; border-radius:10px; }

/* =========================
   Compétences techniques
   ========================= */
.tech-skills-section{ padding:36px clamp(16px, 5vw, 8%); position:relative; z-index:1; }
.tech-grid{
  display:grid; gap:18px;
  grid-template-columns: 1fr; /* mobile */
}
.tech-group{
  background:var(--glass);
  border:2px solid color-mix(in srgb, var(--gold) 50%, transparent);
  border-radius:16px; padding:20px 20px 12px; backdrop-filter:blur(10px);
}
.tech-group-title{ margin:0 0 10px; font-size: clamp(16px, 3.2vw, 20px); color:var(--gold); font-family:"MonSuperFont",sans-serif; }
.tech-chips{ display:flex; flex-wrap:wrap; gap:10px; margin:0; padding:0; list-style:none; }
.chip{ display:inline-flex; align-items:center; gap:6px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.25); color:#fff; font-size:14px; white-space:nowrap; }
.tech-icon{ width:20px; height:20px; object-fit:contain; }

/* =========================
   Timeline Expériences
   ========================= */
.timeline-section{ padding:36px clamp(16px, 5vw, 8%); }
.timeline{ position:relative; margin:24px auto; max-width:1100px; }
.timeline:before{
  content:""; position:absolute; left:50%; top:0; bottom:0;
  width:3px; background:linear-gradient(180deg,rgba(233,76,90,.6),rgba(199,157,119,.7));
  transform:translateX(-50%);
}
.tl-row{ position:relative; display:flex; margin:28px 0; }
.tl-row.left{ justify-content:flex-start; }
.tl-row.right{ justify-content:flex-end; }

.tl-dot{
  position:absolute; left:50%; transform:translate(-50%,0);
  background:#1b1f2a; border:3px solid rgba(233,76,90,.8);
  width:30px; height:30px; border-radius:50%;
  display:flex; align-items:center; justify-content:center; color:#fff; z-index:2;
}
.tl-card{
  width:46%;
  background:var(--glass);
  border:2px solid color-mix(in srgb, var(--gold) 50%, transparent);
  border-radius:16px; padding:18px 18px 14px; backdrop-filter:blur(10px);
  box-shadow:0 8px 24px rgba(0,0,0,0.25);
}
.tl-date{ display:inline-block; background:rgba(199,157,119,0.5); border:1px solid rgba(199,157,119,0.5); font-size:12px; border-radius:8px; padding:6px 10px; margin-bottom:8px; }
.tl-title{ margin:4px 0 6px; font-size: clamp(16px, 3.2vw, 20px); color:var(--gold); font-family:"MonSuperFont",sans-serif; }
.tl-location{ font-weight:700; font-size: clamp(14px, 2.8vw, 17px); margin:0 0 10px; opacity:.95; }
.tl-points{ margin:0 0 10px 16px; }
.tl-points li{ margin-bottom:6px; line-height:1.4; }

/* Tech chips */
.tl-techs{ display:flex; flex-wrap:wrap; gap:8px; }
.tech{ display:inline-flex; align-items:center; gap:6px; font-size:12px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.25); }
.tech-logo{ width:18px; height:18px; object-fit:contain; }
.tech-plain{ background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.25); }

/* =========================
   Timeline Études
   ========================= */
.edu-section{ padding:36px clamp(16px, 5vw, 8%); }
.edu-timeline{
  max-width:1100px; margin:18px auto;
  display:flex; flex-direction:column; gap:14px; position:relative;
}
.edu-timeline:before{
  content:""; position:absolute; left:16px; top:0; bottom:0;
  width:3px; background:rgba(199,157,119,.6);
}
.edu-item{ display:flex; gap:12px; align-items:flex-start; position:relative; }
.edu-badge{ min-width:64px; text-align:center; background:rgba(199,157,119,.22); border:1px solid rgba(199,157,119,.45); padding:6px 8px; border-radius:999px; font-weight:700; }
.edu-card{ flex:1; background:var(--glass); border:2px solid color-mix(in srgb, var(--gold) 50%, transparent); border-radius:12px; padding:12px 14px; }
.edu-title{ margin:0 0 4px; color:var(--gold); font-family:"MonSuperFont",sans-serif; font-size: clamp(16px, 3.2vw, 20px); }
.edu-school{ margin:0 0 2px; }
.edu-meta{ margin:0; opacity:.85; }

/* =========================
   Modal
   ========================= */
.modal-overlay{ position:fixed; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:2000; }
.modal-content{ background:#fff; padding:16px; border-radius:12px; max-width:900px; width:92%; color:#000; }
.modal-actions{ display:flex; flex-wrap:wrap; gap:12px; justify-content:space-between; margin-top:12px; }
.btn-download,.btn-close{ display:inline-flex; align-items:center; gap:8px; padding:10px 14px; border-radius:8px; border:none; cursor:pointer; font-weight:600; text-decoration:none; }
.btn-download{ background:var(--accent); color:#fff; }
.btn-close{ background:#333; color:#fff; }

/* =========================================================
   BREAKPOINTS
   ========================================================= */

/* ≥ 640px (petites tablettes) */
@media (min-width:640px){
  .skills-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
  .tech-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}

/* ≥ 900px (tablettes/desktop) */
@media (min-width:900px){
  .tl-card{ width:46%; }
  .tl-row.left{ justify-content:flex-start; }
  .tl-row.right{ justify-content:flex-end; }
}

/* ≥ 1024px (desktop) */
@media (min-width:1024px){
  .skills-grid{ grid-template-columns: repeat(3, minmax(0,1fr)); }
  .tech-grid{ grid-template-columns: repeat(3, minmax(0,1fr)); }
}

/* <= 900px : timeline en colonne (mobile & petites tablettes) */
@media (max-width:900px){
  .timeline:before{ display:none; }
  .tl-dot{ left:24px; transform:none; top:0; }
  .tl-row{ margin:22px 0 28px 0; }
  .tl-card{
    width:100%;
    padding-left: 20px;
    margin-left: 0;
  }
  .tl-row.left,.tl-row.right{ justify-content:flex-start; }
  .tl-card{ margin-left: 44px; } /* espace pour le dot */
}

/* <= 480px : ajustements téléphone */
@media (max-width:480px){
  .presentation{ min-height:auto; padding-top: 28px; padding-bottom: 28px; }
  .hero{ gap:16px; }
  .hero-card{ border-radius:14px; }
  .edu-badge{ min-width:56px; }
}

.site-footer{
  background: rgba(30, 30, 40, 0.95); /* même couleur que le header */
  border-top: 2px solid var(--gold);  /* trait beige en haut */
  padding: 24px clamp(16px, 5vw, 10%);
  margin-top: 36px;
  position: relative;
  z-index: 1;
}

.footer-inner{
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
  justify-items: start;
}

.footer-title{
  margin: 0;
  color: var(--gold);
  font-family: "MonSuperFont", sans-serif;
  font-size: clamp(18px, 3.2vw, 22px);
}

.footer-items{
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.footer-link{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  transition: transform .15s ease, background .2s ease, border-color .2s ease, color .2s ease;
}

.footer-link i{
  font-size: 18px;
  color: var(--accent); /* rose */
}

.footer-link:hover{
  transform: translateY(-2px);
  background: rgba(255,255,255,0.12);
  border-color: color-mix(in srgb, var(--gold) 50%, transparent);
  color: #fff;
}

.footer-copy{
  opacity: .75;
  font-size: 12px;
}

/* Responsive footer */
@media (max-width: 560px){
  .footer-items{
    gap: 10px;
  }
  .footer-link{
    padding: 9px 10px;
  }
}
</style>
