<template>
    <div v-if="index !== 0" class="flex justify-end w-full mt-4">
        <button @click="deleteEdu" class="text-red-500 hover:text-red-700 text-lg font-bold">
            x
        </button>
    </div>
    <div class="grid md:grid-cols-2 gap-4">

        <div class="col-span-2">
            <label for="title" class="block text-sm font-semibold text-gray-900 mb-1">School Name</label>
            <input type="text" id="title" v-model="education.school" placeholder="Enter School Name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="major" class="block text-sm font-semibold text-gray-900 mb-1">Major</label>
            <input type="text" id="major" v-model="education.major" placeholder="Enter Major Name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>
        <div class="col-span-1">
            <label for="degree" class="block text-sm font-semibold text-gray-900 mb-1">Degree</label>
            <input type="text" id="degree" v-model="education.degree" placeholder="Enter Degree"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="startDate" class="block text-sm font-semibold text-gray-900 mb-1">Start Date</label>
            <input type="date" id="startDate" v-model="education.startDate"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="endDate" class="block text-sm font-semibold text-gray-900 mb-1">End Date</label>
            <input type="date" id="endDate" v-model="education.endDate"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="city" class="block text-sm font-semibold text-gray-900 mb-1">City</label>
            <input type="text" id="city" v-model="education.city" placeholder="Enter City"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-1">
            <label for="country" class="block text-sm font-semibold text-gray-900 mb-1">Country</label>
            <input type="text" id="country" v-model="education.country" placeholder="Enter Country"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
        </div>

        <div class="col-span-2">
            <label for="description" class="block text-sm font-semibold text-gray-900 mb-1">Description</label>
            <textarea id="description" v-model="education.description" rows="4" placeholder="Enter Your achievement, gpa, or what you do in school"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500"></textarea>
        </div>
    </div>
</template>

<script setup>
    import {
        defineProps
    } from 'vue';

    defineProps({
        education: Object,
        index: Number,
        deleteEdu: Function,
    });
</script>
