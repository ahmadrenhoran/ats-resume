<template>
    <div class="container m-auto max-w-2xl py-24">
        <div class="grid grid-cols-2 gap-4">
            <h1 class="text-xl font-semibold col-span-2">Your Details</h1>
            <div class="col-span-2">
                <label for="job-title" class="block text-sm font-semibold text-gray-900 mb-1">Job Title</label>
                <input type="text" id="job-title" placeholder="Enter Job Title"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600">
            </div>
            <div class="col-span-1">
                <label for="first-name" class="block text-sm font-semibold text-gray-900 mb-1">First Name</label>
                <input type="text" id="first-name" autocomplete="given-name" placeholder="Enter First Name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600">
            </div>
            <div class="col-span-1">
                <label for="last-name" class="block text-sm font-semibold text-gray-900 mb-1">Last Name</label>
                <input type="text" id="last-name" autocomplete="family-name" placeholder="Enter Last Name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600">
            </div>
            <div class="col-span-1">
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input type="email" id="email" autocomplete="email" placeholder="Enter Email"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600">
            </div>
            <div class="col-span-1">
                <label for="location" class="block text-sm font-semibold text-gray-900 mb-1">Location</label>
                <input type="text" id="location" autocomplete="address-level1" placeholder="Enter Location"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600">
            </div>
            <div class="col-span-2">
                <label for="bio" class="block text-sm font-semibold text-gray-900 mb-1">Bio</label>
                <textarea id="bio" rows="4" placeholder="Enter Bio"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"></textarea>
            </div>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
        <div class="grid grid-cols-1 gap-4">
            <h1 class="text-xl font-semibold col-span-1">Experience</h1>
            <div ref="experienceContainer" class="grid gap-4">
                <Experience v-for="(experience, index) in experiences" :key="index" :experience="experience"
                    :index="index" :deleteExp="() => deleteExp(index)" />
            </div>
            <button @click="addExp"
                class="border border-indigo-600 hover:bg-indigo-700 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Experience
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
        <div class="grid grid-cols-1 gap-4">
            <h1 class="text-xl font-semibold col-span-1">Education</h1>
            <div ref="educationContainer" class="grid gap-4">
                <Education v-for="(education, index) in educations" :key="index" :education="education"
                    :index="index" :deleteEdu="() => deleteEdu(index)" />
            </div>
            <button @click="addEdu"
                class="border border-indigo-600 hover:bg-indigo-700 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Education
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import autoAnimate from '@formkit/auto-animate';
    import Experience from './ExperienceField.vue';
    import Education from './EducationField.vue';

    const experiences = ref([{
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        city: '',
        country: '',
        description: ''
    }]);

    const experienceContainer = ref(null);

    const addExp = () => {
        experiences.value.push({
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            city: '',
            country: '',
            description: '',
        });
    };

    const deleteExp = (index) => {
        experiences.value.splice(index, 1);
    };

    const educations = ref([{
        school: '',
        major: '',
        degree: '',
        startDate: '',
        endDate: '',
        city: '',
        country: '',
        description: ''
    }]);

    const educationContainer = ref(null);

    const addEdu = () => {
        educations.value.push({
            school: '',
            major: '',
            degree: '',
            startDate: '',
            endDate: '',
            city: '',
            country: '',
            description: ''
        });
    };

    const deleteEdu = (index) => {
        educations.value.splice(index, 1);
    };



    onMounted(() => {
        if (experienceContainer.value) {
            autoAnimate(experienceContainer.value);
        }

        if (educationContainer.value) {
            autoAnimate(educationContainer.value);
        }
    });
</script>
