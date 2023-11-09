import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/mentionLegale',
        name: 'mention-legale',
        // route level code-splitting
        // this generates a separate chunk (contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "MentionLegale" */ '../views/MentionLegaleView.vue')
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASA_URL),
    routes
})

export default router
