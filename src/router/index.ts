import Accueil from '@/views/Accueil.vue'
import Bienvenue from '@/views/Bienvenue.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import Projets from '@/views/Projets.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bienvenue',
      component: Bienvenue,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
     {
      path: '/accueil',
      name: 'accueil',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Accueil,
    },
    {
      path: '/projets',
      name: 'projets',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Projets,
    },
    {
    path: '/projet/:id',
    name: 'project-detail',
    component: ProjectDetail,
    props: true
      }
  ],

})

export default router
