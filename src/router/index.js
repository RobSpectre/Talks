import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import FieldOfDreams from '@/views/FieldOfDreams.vue'
import childsafeaiAssets from '@/views/childsafeaiAssets.vue'
import CustomerMoat from '@/views/CustomerMoat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/finding-your-audience-2024',
    name: 'The Field of Dreams Got Clear Cut: Finding Your Audience in 2024',
    component: FieldOfDreams
  },
  {
    path: '/childsafe-ai-tech',
    name: 'childsafe.ai Core Technology',
    component: childsafeaiAssets
  },
  {
    path: '/childsafe-ai-assets',
    name: 'childsafe.ai Asset Sale',
    component: childsafeaiAssets
  },
  {
    path: '/building-your-customer-moat',
    name: 'Building Your Customer Moat',
    component: CustomerMoat
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes }

export default router
