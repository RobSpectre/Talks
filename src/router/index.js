import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import FieldOfDreams from '@/views/FieldOfDreams.vue'

const routes = [
  {
    path: '/',
    name: 'The Field of Dreams Got Clear Cut: Finding Your Audience in 2024',
    component: FieldOfDreams
  },
  {
    path: '/finding-your-audience-2024',
    name: 'The Field of Dreams Got Clear Cut: Finding Your Audience in 2024',
    component: FieldOfDreams
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes }

export default router
