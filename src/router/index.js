import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../view/Homepage.vue'
import Agb from '../view/Agb.vue'
import About from '../view/About.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/agb',
      name: 'Agb',
      component: Agb,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },

  ]
})

export default router