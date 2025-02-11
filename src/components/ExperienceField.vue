<template>
    <div v-if="index !== 0" class="flex justify-end w-full mt-4">
        <button @click="deleteExp" class="text-red-500 hover:text-red-700 text-lg font-bold">
            x
        </button>
    </div>
    <div class="grid md:grid-cols-2 gap-4">

        <div class="col-span-1">
            <label for="title" class="block text-sm font-semibold text-gray-900 mb-2">Job Title</label>
            <input type="text" id="title" v-model="experience.title" placeholder="Enter Job Title"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="company" class="block text-sm font-semibold text-gray-900 mb-2">Company/Employer</label>
            <input type="text" id="company" v-model="experience.company" placeholder="Enter Company Name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="startDate" class="block text-sm font-semibold text-gray-900 mb-2">Start Date</label>
            <input type="date" id="startDate" v-model="experience.startDate"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="endDate" class="block text-sm font-semibold text-gray-900 mb-2">End Date</label>
            <input type="date" id="endDate" v-model="experience.endDate"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="city" class="block text-sm font-semibold text-gray-900 mb-2">City</label>
            <input type="text" id="city" v-model="experience.city" placeholder="Enter City"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="country" class="block text-sm font-semibold text-gray-900 mb-2">Country</label>
            <input type="text" id="country" v-model="experience.country" placeholder="Enter Country"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-2">
            <label for="description" class="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <TextEditor v-model="experience.description" />
        </div>
    </div>
</template>

<script setup>
    import {
        defineProps
    } from 'vue';
    import TextEditor from './TextEditor.vue';

    defineProps({
        experience: Object,
        index: Number,
        deleteExp: Function,
    });
</script>
