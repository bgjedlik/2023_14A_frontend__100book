import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import BooksByAuthor from '../views/BooksByAuthor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/konyvek', component: BooksView },
    { path: '/konyv-kereses', component: BooksByAuthor },
    
  ]
})

export default router
