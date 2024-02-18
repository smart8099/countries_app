import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/country/:name',
    name: 'countryDetails',
    component: () => import('../views/CountryDetails.vue'),
    props:true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

})

export default router
