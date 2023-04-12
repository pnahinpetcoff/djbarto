import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'
import Bio from '../views/BioView.vue'
import Merch from '../views/MerchView.vue'
import Music from '../views/MusicView.vue'
import Academy from '../views/AcademyView.vue'
import Agency from '../views/AgencyView.vue'
import Todo from '../views/TodoView.vue'


const routes = [
  {
    path: '/',
    name: 'TodoView',
    component: Todo
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/merch',
    name: 'merch',
    component: Merch
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/academy',
    name: 'academy',
    component: Academy
  },
  {
    path: '/agency',
    name: 'agency',
    component: Agency
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router