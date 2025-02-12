<template>
    <div class="bg-gray-900 min-h-screen p-8">
        <div class="cv-preview bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-8">
            <!-- Header Section -->
            <div class="header text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800">{{ cv . name }}</h1>
                <p class="text-gray-600">{{ cv . title }}</p>
            </div>

            <!-- Contact Information -->
            <div class="contact-info mb-8">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <p class="text-gray-700"><span class="font-medium">Email:</span> {{ cv . email }}</p>
                <p class="text-gray-700"><span class="font-medium">Phone:</span> {{ cv . phone }}</p>
                <p class="text-gray-700"><span class="font-medium">LinkedIn:</span> {{ cv . linkedin }}</p>
            </div>

            <!-- Experience Section -->
            <div class="experience mb-8">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Experience</h2>
                <div v-for="(exp, index) in cv.experience" :key="index" class="mb-6">
                    <h3 class="text-lg font-medium text-gray-800">{{ exp . position }} at {{ exp . company }}</h3>
                    <p class="text-gray-600 text-sm">{{ exp . startDate }} - {{ exp . endDate }}</p>
                    <p class="text-gray-700 mt-2">{{ exp . description }}</p>
                </div>
            </div>

            <!-- Education Section -->
            <div class="education">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Education</h2>
                <div v-for="(edu, index) in cv.education" :key="index" class="mb-6">
                    <h3 class="text-lg font-medium text-gray-800">{{ edu . degree }} at {{ edu . school }}</h3>
                    <p class="text-gray-600 text-sm">{{ edu . startDate }} - {{ edu . endDate }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
      onMounted,
        ref
    } from 'vue';
    import {
        useCvStore
    } from '@/stores/CvStore.js';

    const cvStore = useCvStore();

    const cv = ref({
        name: "John Doe",
        title: "Software Engineer",
        email: "john.doe@example.com",
        phone: "+123 456 7890",
        linkedin: "linkedin.com/in/johndoe",
        experience: [{
                position: "Senior Software Engineer",
                company: "Tech Corp",
                startDate: "Jan 2018",
                endDate: "Present",
                description: "Developed and maintained web applications using Vue.js and Node.js.",
            },
            {
                position: "Software Engineer",
                company: "Dev Solutions",
                startDate: "Jun 2015",
                endDate: "Dec 2017",
                description: "Worked on front-end development using React and Redux.",
            },
        ],
        education: [{
            degree: "Bachelor of Science in Computer Science",
            school: "University of Tech",
            startDate: "2011",
            endDate: "2015",
        }, ],
    });
    onMounted(() => {
        console.log(cvStore.cv);
    })
</script>

<style scoped>
    .cv-preview {
        font-family: Arial, sans-serif;
    }
</style>
