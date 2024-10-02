<script setup>

    import { RouterView, RouterLink } from 'vue-router';

</script>

<template>

    <nav class="navbar">
        <ul class="elements">
            <li class="element">
                <RouterLink :to="{name: 'home'}">Home</RouterLink>
            </li>
            <li class="element">
                <RouterLink :to="{name: 'about'}">About</RouterLink>
            </li>
            <li class="element">
                <RouterLink :to="{name: 'posts'}">Posts</RouterLink>
            </li>
        </ul>
    </nav>

</template>

<style scoped>

    .navbar {
        height: 20px;
        width: 100%;
    }

    .navbar .elements {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        list-style: none;
    }

    .elements .element {
        text-transform: uppercase;
    }

</style>