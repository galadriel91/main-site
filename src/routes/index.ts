import { createRouter , createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/MainPage.vue'),
        },
        {
            path: '/about',
            component: () => import('../pages/AboutPage.vue'),
        },
    ],
})