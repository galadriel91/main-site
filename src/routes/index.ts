import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/intro'
        },
        {
            path:'/intro',
            component: () => import('@/pages/IntroPage.vue')
        }
    ]
})