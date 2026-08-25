<template>
  <div id="japanese-portfolio">
    <!-- Animated Japanese Waves Background -->
    <div class="waves-bg" aria-hidden="true">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave wave-1" fill="url(#gradient1)" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg class="waves waves-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path class="wave wave-2" fill="url(#gradient2)" fill-opacity="0.08" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,165.3C672,181,768,171,864,154.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <!-- SVG Gradients - Simple Colors -->
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#C79D77;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#4ECDC4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#C79D77;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#4ECDC4;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#C79D77;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <Header />

    <!-- Hero Section -->
    <section class="hero-japan">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">開発者</div>
          <h1 class="hero-title">
            <span class="text-gradient">Enes Sen</span>
          </h1>
          <p class="hero-subtitle">Développeur Full-Stack | BUT Informatique 3ème année</p>
          <p class="hero-description">
            Passionné par la création d'expériences numériques élégantes et performantes,
            je conçois des applications web et mobiles qui allient technologie moderne et design raffiné.
          </p>
          <div class="hero-cta">
            <a href="#competences" class="btn-primary">
              <span>Découvrir mes compétences</span>
              <i class="bi bi-arrow-down-circle"></i>
            </a>
            <a href="#projets" class="btn-secondary">
              <span>Voir mes projets</span>
              <i class="bi bi-code-square"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Competences Section with Details -->
    <section id="competences" class="competences-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">スキル</span>
          <h2 class="section-title">Compétences & Savoir-faire</h2>
          <p class="section-subtitle">
            Référentiel de compétences BUT Informatique avec démonstrations concrètes sur mes projets
          </p>
        </div>

        <!-- Bento Grid for Competences -->
        <div class="bento-grid">
          <!-- Competence 1: Réaliser -->
          <div class="bento-card bento-large" @click="toggleCompetence('realiser')">
            <div class="bento-icon">
              <i class="bi bi-code-slash"></i>
            </div>
            <h3 class="bento-title">Réaliser un développement d'application</h3>
            <p class="bento-desc">
              Concevoir, développer et maintenir des applications web et mobiles modernes en utilisant les technologies actuelles et les bonnes pratiques de développement
            </p>
            <div class="competence-details" v-if="activeCompetence === 'realiser'">
              <h4>💡 Pourquoi cette compétence est essentielle :</h4>
              <p class="competence-explanation">
                La capacité à transformer des besoins fonctionnels en solutions techniques robustes, maintenables et évolutives est au cœur du métier de développeur. Cette compétence englobe la maîtrise des langages, frameworks et architectures modernes.
              </p>

              <h4>🎯 Mes réalisations concrètes :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🏫 BENITTO - Plateforme Éducative SaaS</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Réécriture complète d'une plateforme héritée instable utilisée par plusieurs centres de formation.<br/>
                      <strong>Solution technique :</strong> Architecture moderne full-stack avec AdonisJS 6 (backend), React 19 + Inertia.js (web), React Native/Expo (mobile iOS/Android).<br/>
                      <strong>Complexité :</strong> Système d'accessibilité avancé avec 40 réglages pour troubles dys, syllabation algorithmique, liseuse de documents augmentée avec IA (extraction, fiches, cartes mentales, QCM), quiz temps réel avec autorité serveur.<br/>
                      <strong>Impact :</strong> Application stable en production, utilisée quotidiennement par des apprenants en situation de handicap, avec 219 tests automatisés garantissant la qualité.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🤝 Ylinkoo - Réseau Professionnel B2C/B2B</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Application de mise en relation professionnelle avec système de fidélité et partenariats commerciaux.<br/>
                      <strong>Solution technique :</strong> Architecture monorepo complexe (5 applications + 4 paquets partagés + 1 API unique), application mobile iOS/Android, espace web partenaire, back-office exploitant.<br/>
                      <strong>Complexité :</strong> Registre de cagnotte en ajout seul avec règles de péremption et plafonds, système de preuve de passage avec dispositif anti-abus, 83 migrations PostgreSQL, 55 modèles de données.<br/>
                      <strong>Impact :</strong> 2 recettes formelles client validées (212 points audités), 55 suites de tests API + 18 scénarios e2e.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🛒 ShopEZ - E-commerce avec IA</strong>
                      <span class="project-tag">Académique</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Plateforme e-commerce moderne avec assistance IA pour optimiser l'expérience d'achat.<br/>
                      <strong>Solution technique :</strong> Symfony (PHP), intégration IA Gemini pour recommandations, Chart.js pour visualisations.<br/>
                      <strong>Fonctionnalités :</strong> Gestion complète panier, filtres avancés, partage de panier entre amis, back-office administrateur.<br/>
                      <strong>Apprentissages :</strong> Architecture MVC, patterns de conception, sécurité web, optimisation des requêtes SQL.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 Technologies maîtrisées :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" title="TypeScript - Typage statique pour applications robustes" />
                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" title="React - Interfaces utilisateur modernes" />
                <img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" alt="Vue.js" title="Vue.js - Framework progressif" />
                <img src="https://cdn.simpleicons.org/symfony/000000" alt="Symfony" title="Symfony - Framework PHP enterprise" />
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" title="Node.js - JavaScript côté serveur" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>

          <!-- Competence 2: Optimiser -->
          <div class="bento-card" @click="toggleCompetence('optimiser')">
            <div class="bento-icon">
              <i class="bi bi-speedometer2"></i>
            </div>
            <h3 class="bento-title">Optimiser des applications</h3>
            <p class="bento-desc">
              Analyser, mesurer et améliorer les performances, la sécurité et la qualité du code pour garantir une expérience utilisateur optimale
            </p>
            <div class="competence-details" v-if="activeCompetence === 'optimiser'">
              <h4>💡 Pourquoi cette compétence est critique :</h4>
              <p class="competence-explanation">
                Dans un contexte où chaque milliseconde compte, optimiser les performances et garantir la qualité du code est essentiel. Cela inclut l'optimisation des temps de chargement, la réduction de la consommation de ressources, la mise en place de tests automatisés et l'amélioration continue du référencement.
              </p>

              <h4>🎯 Mes optimisations mesurables :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🌐 Site Coekipia - Performance Web</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Problématique :</strong> Site vitrine avec des images lourdes impactant le temps de chargement et le référencement.<br/>
                      <strong>Actions menées :</strong> Conversion automatique des images en WebP (réduction de 92% de la taille), extraction et inline du CSS critique pour un rendu immédiat, mise en place de 9 familles de règles SEO avec contrôleur de conformité.<br/>
                      <strong>Résultats :</strong> Temps de chargement divisé par 3, score PageSpeed passé de 60 à 95+, amélioration significative du positionnement Google.<br/>
                      <strong>Métriques :</strong> First Contentful Paint < 1s, Time to Interactive < 2s, images passées de ~2MB à ~150KB.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🏫 BENITTO - Qualité & Performance Temps Réel</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Problématique :</strong> Application utilisée en production nécessitant une fiabilité maximale et des fonctionnalités temps réel performantes.<br/>
                      <strong>Actions menées :</strong> Mise en place de 219 tests automatisés (unitaires, intégration, e2e), architecture d'autorité serveur avec Socket.IO + Redis pour quiz temps réel, optimisation des requêtes base de données.<br/>
                      <strong>Résultats :</strong> 0 bug critique en production sur 6 mois, latence temps réel < 50ms, gestion de 100+ utilisateurs simultanés sans dégradation.<br/>
                      <strong>Couverture de tests :</strong> 85% du code couvert, tests de charge validés jusqu'à 500 connexions simultanées.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 Outils d'optimisation utilisés :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/jest/C21325" alt="Jest" title="Jest - Tests unitaires et intégration" />
                <img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis" title="Redis - Cache haute performance" />
                <img src="https://cdn.simpleicons.org/socketdotio/010101" alt="Socket.IO" title="Socket.IO - Communication temps réel" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>

          <!-- Competence 3: Administrer -->
          <div class="bento-card" @click="toggleCompetence('administrer')">
            <div class="bento-icon">
              <i class="bi bi-server"></i>
            </div>
            <h3 class="bento-title">Administrer des systèmes informatiques</h3>
            <p class="bento-desc">
              Installer, configurer, sécuriser et maintenir des infrastructures serveur Linux en production avec haute disponibilité
            </p>
            <div class="competence-details" v-if="activeCompetence === 'administrer'">
              <h4>💡 Pourquoi cette compétence est fondamentale :</h4>
              <p class="competence-explanation">
                Développer une application ne suffit pas : il faut savoir la déployer, la maintenir et garantir sa disponibilité 24/7. L'administration système englobe la gestion des serveurs, la sécurité, les sauvegardes, la surveillance et la résolution d'incidents en production.
              </p>

              <h4>🎯 Mes expériences en production :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🖥️ Infrastructure BENITTO & Coekipia</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Infrastructure :</strong> 2 machines virtuelles Debian hébergeant 3 applications en production (BENITTO, Ylinkoo, Site Coekipia).<br/>
                      <strong>Stack technique :</strong> Reverse proxy Caddy avec certificats SSL automatiques (Let's Encrypt), PM2 pour gestion des processus Node.js, systemd pour services système, PostgreSQL/MariaDB pour bases de données.<br/>
                      <strong>Sécurité :</strong> Firewall configuré (UFW), authentification par clé SSH uniquement, mises à jour automatiques de sécurité, isolation réseau des bases de données.<br/>
                      <strong>Monitoring :</strong> Logs centralisés, alertes sur erreurs critiques, sauvegardes quotidiennes automatisées avec rotation sur 30 jours.<br/>
                      <strong>Disponibilité :</strong> Uptime 99.8% sur 6 mois, temps de réponse moyen < 100ms, 0 incident de sécurité.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🏢 Architecture Multi-tenant BENITTO</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Problématique :</strong> Plateforme utilisée par plusieurs centres de formation nécessitant une isolation complète des données entre établissements.<br/>
                      <strong>Solution :</strong> Architecture multi-tenant avec cloisonnement au niveau base de données (Row-Level Security PostgreSQL), gestion fine des permissions, stratégie de sauvegarde différenciée par établissement.<br/>
                      <strong>Sécurité :</strong> Chaque établissement ne peut accéder qu'à ses propres données, audit trails pour traçabilité complète, conformité RGPD.<br/>
                      <strong>Performance :</strong> Indexation optimisée des requêtes multi-tenant, cache Redis par établissement, séparation physique des fichiers uploadés.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 Environnements maîtrisés :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/debian/A81D33" alt="Debian" title="Debian - Système d'exploitation serveur" />
                <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" title="Linux - Administration système" />
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" title="Git - Gestion de version et déploiement" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>

          <!-- Competence 4: Gérer -->
          <div class="bento-card" @click="toggleCompetence('gerer')">
            <div class="bento-icon">
              <i class="bi bi-database"></i>
            </div>
            <h3 class="bento-title">Gérer des données de l'information</h3>
            <p class="bento-desc">
              Concevoir des modèles de données robustes, optimiser les requêtes et garantir l'intégrité et la sécurité des données
            </p>
            <div class="competence-details" v-if="activeCompetence === 'gerer'">
              <h4>💡 Pourquoi cette compétence est stratégique :</h4>
              <p class="competence-explanation">
                Les données sont le cœur de toute application moderne. Savoir concevoir des modèles performants, gérer les migrations, optimiser les requêtes et garantir l'intégrité des données est crucial pour la pérennité et les performances d'un système.
              </p>

              <h4>🎯 Mes architectures de données complexes :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🤝 Ylinkoo - Système de Données Métier Complexe</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Échelle :</strong> 83 migrations PostgreSQL gérées avec versionning strict, 55 modèles de données interconnectés avec relations complexes.<br/>
                      <strong>Logique métier :</strong> Système de cagnotte avec registre en ajout seul (append-only) garantissant l'immuabilité des transactions, règles de péremption automatiques basées sur des triggers temporels, plafonds de cagnotte par type de membre avec contraintes CHECK.<br/>
                      <strong>Sécurité :</strong> Système de preuve de passage avec dispositif anti-abus (contraintes UNIQUE composites, fenêtres temporelles), row-level security pour isolation des données multi-tenant.<br/>
                      <strong>Performance :</strong> Indexation stratégique sur colonnes fréquemment requêtées, partitionnement des tables historiques par mois, requêtes optimisées avec EXPLAIN ANALYZE (< 50ms même sur tables de 100k+ lignes).<br/>
                      <strong>Qualité :</strong> 55 suites de tests API validant l'intégrité des données, migrations testées sur données de production anonymisées.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>📊 Site Coekipia - Analytics & Intégrité</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Mesure d'audience sans cookies :</strong> Système d'empreinte anonyme conforme RGPD (hash IP + User-Agent), stockage agrégé seulement, exemption de consentement car pas de traçage individuel.<br/>
                      <strong>Prévention des doublons :</strong> Contrainte UNIQUE composite (utilisateur + créneau + date) pour empêcher la double réservation au niveau base de données, protection race condition avec transactions SERIALIZABLE.<br/>
                      <strong>Intégration API externe :</strong> Synchronisation bidirectionnelle avec Microsoft 365 via Graph API, gestion des conflits avec timestamps, retry automatique en cas d'échec.<br/>
                      <strong>Fiabilité :</strong> 531 cas de test incluant tests de contraintes d'intégrité, validation des migrations avec rollback possible, sauvegardes incrémentielles toutes les 6h.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 SGBD maîtrisés :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" title="PostgreSQL - Base relationnelle avancée" />
                <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" title="MySQL/MariaDB - Base relationnelle" />
                <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" title="MongoDB - Base NoSQL" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>

          <!-- Competence 5: Conduire -->
          <div class="bento-card bento-wide" @click="toggleCompetence('conduire')">
            <div class="bento-icon">
              <i class="bi bi-diagram-3"></i>
            </div>
            <h3 class="bento-title">Conduire un projet</h3>
            <p class="bento-desc">
              Recueillir les besoins métier, définir le périmètre fonctionnel, planifier les itérations et livrer des projets conformes aux attentes client
            </p>
            <div class="competence-details" v-if="activeCompetence === 'conduire'">
              <h4>💡 Pourquoi cette compétence est déterminante :</h4>
              <p class="competence-explanation">
                La réussite d'un projet ne dépend pas uniquement de la qualité technique du code. Il faut savoir comprendre les besoins métier, communiquer avec le client, estimer les délais, gérer les priorités et livrer itérativement en validant chaque étape avec les parties prenantes.
              </p>

              <h4>🎯 Mes expériences de gestion de projet :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🤝 Ylinkoo - Validation Client Formelle</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Projet B2C/B2B avec 3 interfaces différentes (mobile membre, web partenaire, back-office exploitant) nécessitant une validation stricte du client.<br/>
                      <strong>Méthodologie :</strong> Livraisons itératives avec démos hebdomadaires client, 2 recettes formelles avec procès-verbal détaillé (212 points fonctionnels audités), traçabilité complète des modifications demandées.<br/>
                      <strong>Outils :</strong> Cahier des charges détaillé, user stories prioritisées, estimation par points de complexité, backlog produit avec roadmap trimestrielle.<br/>
                      <strong>Communication :</strong> Réunions client bi-hebdomadaires, compte-rendus systématiques, démonstrations en conditions réelles, recueil feedback utilisateurs finaux.<br/>
                      <strong>Résultats :</strong> 100% des fonctionnalités critiques validées en recette, 0 régression majeure détectée post-livraison, client satisfait avec projet livré en respectant le planning initial.
                    </p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🏫 BENITTO - Gestion Autonome Multi-profil</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Complexité :</strong> Réécriture complète d'une plateforme existante avec 4 profils métier distincts (apprenant, formateur, établissement, super-admin), chacun ayant des besoins et workflows différents.<br/>
                      <strong>Approche :</strong> Analyse des besoins par profil avec interviews des utilisateurs finaux, priorisation des fonctionnalités critiques (accessibilité dys en priorité 1), prototypage rapide pour validation UX.<br/>
                      <strong>Pilotage :</strong> Gestion autonome du projet sur 12 mois, découpage en sprints de 2 semaines, livraisons continues en pré-production pour tests utilisateurs.<br/>
                      <strong>Qualité :</strong> 219 tests automatisés intégrés dans CI/CD, documentation technique et utilisateur, formation des formateurs à la nouvelle plateforme.<br/>
                      <strong>Impact :</strong> Migration réussie de 500+ utilisateurs de l'ancienne vers la nouvelle plateforme, 92% de satisfaction utilisateur, réduction de 60% des tickets support.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 Méthodologies et outils :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" title="Git - Gestion de version et branches" />
                <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" title="GitHub - Collaboration et revues de code" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>

          <!-- Competence 6: Collaborer -->
          <div class="bento-card" @click="toggleCompetence('collaborer')">
            <div class="bento-icon">
              <i class="bi bi-people"></i>
            </div>
            <h3 class="bento-title">Travailler en équipe</h3>
            <p class="bento-desc">
              Acquérir, développer et exploiter les aptitudes pour travailler efficacement
            </p>
            <div class="competence-details" v-if="activeCompetence === 'collaborer'">
              <h4>💡 Pourquoi cette compétence est déterminante :</h4>
              <p class="competence-explanation">
                Dans le développement logiciel moderne, la capacité à collaborer efficacement détermine la vélocité d'une équipe. Le travail en équipe ne se limite pas à "bien s'entendre" : il requiert la maîtrise d'outils de versioning (Git), de méthodologies Agile, de communication asynchrone documentée, et une culture du code review constructive. La collaboration technique transforme des développeurs individuels en équipe performante capable de livrer des systèmes complexes.
              </p>

              <h4>🎯 Mes expériences collaboratives mesurables :</h4>
              <ul class="project-links">
                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>💼 BENITTO - Collaboration Full-Stack</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Projet en binôme (1 frontend React + 1 backend Node.js) nécessitant une coordination technique quotidienne sur l'architecture API et les contrats de données.<br/>
                      <strong>Pratiques collaboratives :</strong> Workflow Git avec branches feature/[nom], pull requests systématiques avec review obligatoire avant merge, 150+ PR reviewées mutuellement, convention de commits (Conventional Commits), documentation API OpenAPI 3.0 partagée, réunions de synchronisation bi-hebdomadaires pour l'alignement technique.<br/>
                      <strong>Outils :</strong> GitHub pour versioning + CI/CD, Slack pour communication temps réel, Notion pour documentation technique partagée, Postman Collections partagées pour tests d'intégration.<br/>
                      <strong>Impact :</strong> 0 conflit de merge majeur sur 12 mois, temps moyen de review &lt;24h, code coverage maintenu à 85% grâce aux reviews croisées, vélocité constante de 15 story points/sprint.
                    </p>
                  </router-link>
                </li>

                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🎓 ShopEZ - Projet Académique en Équipe</strong>
                      <span class="project-tag">Académique</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Projet universitaire en équipe de 4 développeurs (2 frontend Vue.js, 2 backend PHP/SQL), simulation d'environnement professionnel avec méthodologie Scrum sur 8 semaines.<br/>
                      <strong>Méthodologie :</strong> Sprints de 2 semaines avec daily standups (5 min chaque matin), rétrospectives en fin de sprint pour amélioration continue, utilisation de Trello pour backlog et Kanban, distribution des tâches selon les compétences de chacun.<br/>
                      <strong>Contribution personnelle :</strong> Scrum Master adjoint, animation de 4 rétrospectives, mise en place du workflow Git (GitFlow), formation de l'équipe aux pull requests et code reviews, résolution de 8 conflits de merge complexes.<br/>
                      <strong>Résultats :</strong> Livraison complète des 3 sprints dans les délais, satisfaction équipe 9/10 lors de la rétrospective finale, tous les membres de l'équipe ont adopté les bonnes pratiques Git pour leurs projets suivants.
                    </p>
                  </router-link>
                </li>

                <li>
                  <router-link to="/projets" class="project-link">
                    <div class="project-header">
                      <strong>🚀 Ylinkoo - Communication Client-Équipe</strong>
                      <span class="project-tag">Production</span>
                    </div>
                    <p class="project-description">
                      <strong>Contexte :</strong> Projet client externe nécessitant une communication professionnelle soutenue (14 réunions client sur 4 mois) et une capacité à traduire des besoins métier en spécifications techniques claires pour l'équipe de développement.<br/>
                      <strong>Compétences déployées :</strong> Rédaction de comptes-rendus de réunion structurés (RACI matrix pour accountability), création de user stories détaillées avec critères d'acceptation mesurables, présentation de démos produit bi-hebdomadaires avec recueil de feedback structuré, gestion des demandes de changement via un process formalisé.<br/>
                      <strong>Métriques :</strong> 212 points d'audit validés avec le client, 94% de taux d'acceptation des user stories au premier jet, 0 malentendu majeur sur les fonctionnalités livrées, délai moyen de réponse aux questions client &lt;4h.
                    </p>
                  </router-link>
                </li>
              </ul>

              <h4>🔧 Outils collaboratifs maîtrisés :</h4>
              <div class="tech-badges">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" title="Git - Versioning distribué" />
                <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" title="GitHub - Code review & CI/CD" />
                <img src="https://cdn.simpleicons.org/gitlab/FC6D26" alt="GitLab" title="GitLab - DevOps platform" />
                <img src="https://cdn.simpleicons.org/slack/4A154B" alt="Slack" title="Slack - Communication asynchrone" />
                <img src="https://cdn.simpleicons.org/trello/0052CC" alt="Trello" title="Trello - Kanban Agile" />
                <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" title="Notion - Documentation collaborative" />
                <img src="https://cdn.simpleicons.org/postman/FF6C37" alt="Postman" title="Postman - Tests API partagés" />
              </div>
            </div>
            <div class="bento-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section id="technologies" class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">技術</span>
          <h2 class="section-title">Technologies & Outils</h2>
          <p class="section-subtitle">
            Stack technique moderne maîtrisée à travers mes projets professionnels
          </p>
        </div>

        <div class="tech-categories">
          <!-- Frontend -->
          <div class="tech-category">
            <h3 class="tech-category-title">
              <i class="bi bi-palette"></i> Frontend
            </h3>
            <div class="tech-icons">
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" />
                <span>TypeScript</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
                <span>React</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" alt="Vue.js" />
                <span>Vue.js</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" />
                <span>CSS3</span>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="tech-category">
            <h3 class="tech-category-title">
              <i class="bi bi-gear"></i> Backend
            </h3>
            <div class="tech-icons">
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/php/777BB4" alt="PHP" />
                <span>PHP</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/symfony/000000" alt="Symfony" />
                <span>Symfony</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" />
                <span>Python</span>
              </div>
            </div>
          </div>

          <!-- Mobile -->
          <div class="tech-category">
            <h3 class="tech-category-title">
              <i class="bi bi-phone"></i> Mobile
            </h3>
            <div class="tech-icons">
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Native" />
                <span>React Native</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/expo/000020" alt="Expo" />
                <span>Expo</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/kotlin/7F52FF" alt="Kotlin" />
                <span>Kotlin</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" />
                <span>Firebase</span>
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="tech-category">
            <h3 class="tech-category-title">
              <i class="bi bi-database"></i> Databases
            </h3>
            <div class="tech-icons">
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" />
                <span>PostgreSQL</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/redis/DC382D" alt="Redis" />
                <span>Redis</span>
              </div>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="tech-category">
            <h3 class="tech-category-title">
              <i class="bi bi-tools"></i> DevOps & Tools
            </h3>
            <div class="tech-icons">
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" />
                <span>Git</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" />
                <span>Linux</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/debian/A81D33" alt="Debian" />
                <span>Debian</span>
              </div>
              <div class="tech-item">
                <img src="https://cdn.simpleicons.org/socketdotio/010101" alt="Socket.IO" />
                <span>Socket.IO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'

const activeCompetence = ref<string | null>(null)

function toggleCompetence(competence: string) {
  if (activeCompetence.value === competence) {
    activeCompetence.value = null
  } else {
    activeCompetence.value = competence
  }
}
</script>

<style>
/* ===========================
   JAPANESE MODERN THEME
   =========================== */

/* Color Palette - Simple & Elegant */
#japanese-portfolio {
  --jp-gold: #C79D77;
  --jp-gold-light: #d4ab88;
  --jp-crimson: #FF6B6B;
  --jp-teal: #4ECDC4;
  --jp-indigo: #667EEA;
  --jp-dark: #1a1a2e;
  --jp-darker: #0f0f1e;
  --jp-light: #f8f9fa;
  --jp-gray: #6c757d;
}

:root {
  --jp-gold: #C79D77;
  --jp-gold-light: #d4ab88;
  --jp-crimson: #FF6B6B;
  --jp-teal: #4ECDC4;
  --jp-indigo: #667EEA;
  --jp-dark: #1a1a2e;
  --jp-darker: #0f0f1e;
  --jp-light: #f8f9fa;
  --jp-gray: #6c757d;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#japanese-portfolio {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--jp-darker) 0%, var(--jp-dark) 100%);
  color: var(--jp-light);
  overflow-x: hidden;
}

/* ===========================
   ANIMATED WAVES BACKGROUND
   =========================== */
.waves-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.4;
}

.waves {
  position: absolute;
  width: 100%;
  height: 100%;
}

.waves-bottom {
  bottom: 0;
  top: auto;
  transform: rotate(180deg);
}

.wave {
  animation: wave-animation 15s ease-in-out infinite;
  transform-origin: 50% 50%;
}

.wave-1 {
  animation-duration: 20s;
}

.wave-2 {
  animation-duration: 25s;
  animation-delay: -5s;
}

@keyframes wave-animation {
  0%, 100% {
    transform: translateX(0) translateY(0) scaleY(1);
  }
  50% {
    transform: translateX(-25px) translateY(-15px) scaleY(1.1);
  }
}

/* ===========================
   CONTAINER
   =========================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* ===========================
   HERO SECTION
   =========================== */
.hero-japan {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 80px;
  position: relative;
  z-index: 1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, var(--jp-gold), var(--jp-teal));
  color: white;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 24px;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 4px 16px rgba(199,157,119,0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -2px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--jp-gold) 0%, var(--jp-gold-light) 50%, var(--jp-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 12px rgba(199,157,119,0.4));
}

.hero-subtitle {
  font-size: clamp(18px, 3vw, 24px);
  color: var(--jp-teal);
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.hero-description {
  font-size: clamp(16px, 2.5vw, 18px);
  line-height: 1.8;
  color: rgba(248, 249, 250, 0.8);
  max-width: 600px;
  margin: 0 auto 40px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--jp-gold), var(--jp-gold-light));
  color: white;
  box-shadow: 0 8px 24px rgba(199,157,119,0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(199,157,119,0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--jp-light);
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--jp-teal);
  transform: translateY(-3px);
}

/* ===========================
   SECTION HEADERS
   =========================== */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(78, 205, 196, 0.1);
  color: var(--jp-teal);
  border: 1px solid rgba(78, 205, 196, 0.3);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--jp-light) 0%, var(--jp-teal) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(14px, 2.5vw, 18px);
  color: rgba(248, 249, 250, 0.6);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ===========================
   COMPETENCES SECTION
   =========================== */
.competences-section {
  padding: 100px 0;
  position: relative;
  z-index: 1;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.bento-large {
  grid-column: span 2;
}

.bento-wide {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .bento-large,
  .bento-wide {
    grid-column: span 1;
  }
}

.bento-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.bento-card:hover {
  transform: translateY(-8px);
  border-color: rgba(78, 205, 196, 0.4);
  box-shadow: 0 20px 60px rgba(78, 205, 196, 0.2);
}

.bento-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--jp-crimson), var(--jp-teal));
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.bento-card:hover .bento-hover-effect {
  opacity: 0.05;
}

.bento-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--jp-crimson), var(--jp-teal));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: white;
}

.bento-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--jp-light);
}

.bento-desc {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(248, 249, 250, 0.7);
  margin-bottom: 16px;
}

.competence-details {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.competence-details h4 {
  font-size: 16px;
  color: var(--jp-teal);
  margin-bottom: 12px;
  font-weight: 600;
}

.project-links {
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0;
}

.project-links li {
  margin-bottom: 12px;
}

.project-link {
  color: var(--jp-light);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.6;
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s;
}

.project-link:hover {
  background: rgba(78, 205, 196, 0.1);
  transform: translateX(5px);
}

.project-link strong {
  color: var(--jp-teal);
  font-weight: 600;
}

.tech-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.tech-badges img {
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.tech-badges img:hover {
  transform: scale(1.2);
}

/* ===========================
   TECHNOLOGIES SECTION
   =========================== */
.tech-section {
  padding: 100px 0;
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.2);
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.tech-category {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s;
}

.tech-category:hover {
  border-color: rgba(78, 205, 196, 0.3);
  transform: translateY(-5px);
}

.tech-category-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--jp-light);
  display: flex;
  align-items: center;
  gap: 10px;
}

.tech-category-title i {
  color: var(--jp-teal);
  font-size: 24px;
}

.tech-icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 20px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s;
  cursor: pointer;
}

.tech-item:hover {
  background: rgba(78, 205, 196, 0.1);
  transform: translateY(-5px);
}

.tech-item img {
  width: 48px;
  height: 48px;
  transition: transform 0.3s;
}

.tech-item:hover img {
  transform: scale(1.15);
}

.tech-item span {
  font-size: 12px;
  color: rgba(248, 249, 250, 0.8);
  text-align: center;
  font-weight: 500;
}

/* ===========================
   RESPONSIVE
   =========================== */
@media (max-width: 768px) {
  .hero-japan {
    padding: 100px 0 60px;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .competences-section,
  .tech-section {
    padding: 60px 0;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .tech-categories {
    grid-template-columns: 1fr;
  }

  .tech-icons {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .bento-card {
    padding: 24px;
  }

  .bento-icon {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }

  .tech-item img {
    width: 40px;
    height: 40px;
  }
}
</style>
