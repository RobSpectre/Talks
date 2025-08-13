import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import FieldOfDreams from '@/views/FieldOfDreams.vue'
import childsafeaiAssets from '@/views/childsafeaiAssets.vue'
import CustomerMoat from '@/views/CustomerMoat.vue'

import LaunchDarklyQuickstart from '@/views/LaunchDarklyQuickstart.vue'
import LaunchDarklyQuickstartAnalysis from '@/views/LaunchDarklyQuickstartAnalysis.vue'

import OsoDiscovery from '@/views/OsoDiscovery.vue'
import OsoIntroduction from '@/views/OsoIntroduction.vue'
import OsoMessagingSurvey from '@/views/OsoMessagingSurvey.vue'
import OsoContentPerformance from '@/views/OsoContentPerformance.vue'

import ClarifaiDiscovery from '@/views/ClarifaiDiscovery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    private: true
  },
  {
    path: '/finding-your-audience-2024',
    name: 'The Field of Dreams Got Clear Cut: Finding Your Audience in 2024',
    description: 'A talk highlighting the difficulty in growing name ID in the current market and what to do about it.',
    component: FieldOfDreams,
    img: '/images/finding-your-audience-in-2024/search_graph.png'
  },
  {
    path: '/childsafe-ai-tech',
    name: 'childsafe.ai Core Technology',
    component: childsafeaiAssets,
    private: true
  },
  {
    path: '/childsafe-ai-assets',
    name: 'childsafe.ai Asset Sale',
    component: childsafeaiAssets,
    private: true
  },
  {
    path: '/building-your-customer-moat',
    name: 'Building Your Customer Moat',
    description: 'Building a defensible moat is tough in this market - this talk explores how to make one out of an enthusiastic critical mass of customers.',
    img: '/images/building-your-customer-moat/crowd.gif',
    component: CustomerMoat
  },
  {
    path: '/launchdarkly-quickstart',
    name: 'LaunchDarkly Quickstart Engagement Wrap',
    component: LaunchDarklyQuickstart,
    private: true
  },
  {
    path: '/launchdarkly-quickstart-analysis',
    name: 'LaunchDarkly Quickstart Analysis',
    component: LaunchDarklyQuickstartAnalysis,
    private: true
  },
  {
    path: '/oso-discovery',
    name: 'Oso Discovery Wrap',
    component: OsoDiscovery,
    private: true
  },
  {
    path: '/oso-messaging-survey',
    name: 'Oso Messaging Survey',
    component: OsoMessagingSurvey,
    private: true
  },
  {
    path: '/oso-introduction',
    name: 'Oso Introduction',
    component: OsoIntroduction,
    private: true
  },
  {
    path: '/oso-content-performance',
    name: 'Oso Content Performance',
    component: OsoContentPerformance,
    private: true
  },
  {
    path: '/clarifai-discovery',
    name: 'Clarifai Discovery',
    component: ClarifaiDiscovery,
    private: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes }

export default router
