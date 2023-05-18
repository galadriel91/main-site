import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: () => import('@/pages/IntroPage.vue')
        },
        {
            path:'/about',
            component: () => import('@/pages/AboutPage.vue')
        },
        {
            path:'/contact',
            component: () => import('@/pages/ContactPage.vue')
        }
    ]
})