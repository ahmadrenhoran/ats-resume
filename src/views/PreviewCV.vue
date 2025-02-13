<template>
    <div class="bg-gray-900 min-h-screen p-8">
        <div class="cv-preview bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 ">
            <h1 class="text-2xl font-bold text-center">
                {{ personalDetails?.firstName + ' ' + personalDetails?.lastName }}
            </h1>
            <p class="text-center text-gray-500">
                {{ personalDetails?.jobTitle }}
            </p>
            <p class="text-center text-gray-600">
                {{ personalDetails?.city + ', ' + personalDetails?.country + ' | ' + personalDetails?.email }}
            </p>
            <div class="ql-editor text-sm mt-4 text-gray-700 text-center" v-html="personalDetails.bio"></div>


            <!-- <div class="mt-6 border-t pt-4">
                <h2 class="text-xl font-semibold">Experiences</h2>
                <div class="mt-3" v-for="(experience, index) in experiences" :key="index">
                    <h3 class="font-bold">{{ experience.title }} - {{ experience.company }}</h3>
                    <p class="text-sm text-gray-600">
                        {{ experience.startDate }} - {{ experience.endDate }} | {{ experience.city }}, {{ experience.country }}
                    </p>
                </div>
                <div class="ql-editor mt-4 text-gray-700 text-center" v-html="experience.description"></div>
            </div>

            <div class="mt-6 border-t pt-4">
                <h2 class="text-xl font-semibold">Education</h2>
                <div class="mt-3" v-for="(education, index) in educations" :key="index">
                    <h3 class="font-bold">{{ education.education }} - {{ education.school }}</h3>
                    <p class="text-sm text-gray-600">
                        {{ education.startDate }} - {{ education.endDate }} | {{ education.city }}, {{ education.country }}
                    </p>
                    <div class="ql-editor mt-4 text-gray-700 text-center" v-html="experience.description"></div>
                </div>
            </div> -->

            <div class="mt-6 border-t pt-4 grid grid-cols-3 gap-4">
                <div v-if="languages">
                    <h2 class="text-lg font-semibold">Languages</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Bahasa Indonesia</li>
                        <li>English (IELTS 7.0)</li>
                    </ul>
                </div>
                <div v-if="hardSkills">
                    <h2 class="text-lg font-semibold">Hard Skills</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Financial Planning</li>
                        <li>Accounting Skills</li>
                    </ul>
                </div>
                <div v-if="softSkills">
                    <h2 class="text-lg font-semibold">Soft Skills</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Komunikasi</li>
                        <li>Kepemimpinan</li>
                    </ul>
                </div>

                <div v-if="certSkills">
                    <h2 class="text-lg font-semibold">Certificates</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Financial Planning</li>
                        <li>Accounting Skills</li>
                    </ul>
                </div>

                <div v-if="socialsSkills">
                    <h2 class="text-lg font-semibold">Websites & Socials</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Financial Planning</li>
                        <li>Accounting Skills</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    onMounted,
    ref,
    computed
} from 'vue';
import {
    useCvStore
} from '@/stores/CvStore.js';
import {
    isArrayEmpty
} from '@/utils/helper.js'

const cvStore = useCvStore();

const personalDetails = computed(() => cvStore.personalDetails);
const experiences = computed(() => cvStore.experiences);
const educations = computed(() => cvStore.educations);

onMounted(() => {
    console.log(personalDetails.bio);
})

// Template Data
/**
const personalDetails = ref({
jobTitle: 'Software Engineer',
firstName: 'John',
lastName: 'Doe',
email: 'john.doe@example.com',
phone: '+1234567890',
city: 'New York',
country: 'USA',
bio: 'Experienced software engineer with a passion for building scalable web applications.',
});

const experiences = ref([{
title: 'Senior Software Engineer',
company: 'Tech Corp',
startDate: '2018-06-01',
endDate: '2023-05-31',
city: 'San Francisco',
country: 'USA',
description: 'Led a team of developers to build and maintain the company\'s flagship product.',
}]);

const educations = ref([{
school: 'University of California, Berkeley',
major: 'Computer Science',
degree: 'Bachelor of Science',
startDate: '2014-09-01',
endDate: '2018-05-31',
city: 'Berkeley',
country: 'USA',
description: 'Graduated with honors, focusing on software development and algorithms.'
}]);

const langSkills = ref([{
name: 'English',
level: 'Fluent'
}]);

const hardSkills = ref([{
name: 'JavaScript',
level: 'Advanced'
}]);

const softSkills = ref([{
name: 'Communication',
level: 'Advanced'
}]);

const certSkills = ref([{
name: 'AWS Certified Solutions Architect',
level: 'Associate'
}]);

const socialsSkills = ref([{
name: 'Teamwork',
level: 'Advanced'
}]);
*/
</script>

<style scoped>
.cv-preview {
    font-family: Arial, sans-serif;
}
</style>
