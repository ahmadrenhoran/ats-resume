<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="flex flex-col justify-center items-center h-screen font-mono text-center">
        <img src="/images/notfound.png" alt="" width="200" height="100">
        <i class="pi pi-exclamation-triangle text-yellow-400 text-7xl"></i>
        <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
        <p class="text-xl mb-5">This page does not exist</p>
        <RouterLink to="/" class="text-white bg-amber-400 hover:bg-amber-600 rounded-full px-4 py-2 mt-4">Go Back</RouterLink>
    </section>
</template>

