import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Posts from "../components/Posts.vue";

const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;