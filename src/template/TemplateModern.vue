<template>
    <div ref="cvContent" class="p-6">
        <header class="text-center mb-6">
            <h1 class="text-2xl font-bold">
                {{ fullName }}
            </h1>
            <p v-if="personalDetails?.jobTitle">{{ personalDetails.jobTitle }}</p>
            <p v-if="formattedAddress">{{ formattedAddress }}</p>
        </header>

        <section v-if="personalDetails?.bio" class="mb-6">
            <h2 class="text-xl font-semibold">Summary</h2>
            <p class="text-sm mt-2" v-html="personalDetails.bio"></p>
        </section>

        <section v-if="experiences.length" class="mb-6">
            <h2 class="text-xl font-semibold">Experience</h2>
            <div v-for="(experience, index) in experiences" :key="index" class="mt-3">
                <h3 class="font-bold">{{ experience.title }} - {{ experience.company }}</h3>
                <p class="text-sm">{{ experience.startDate }} - {{ experience.endDate }} | {{ experience.city }}, {{ experience.country }}</p>
                <p class="text-sm mt-1" v-html="experience.description"></p>
            </div>
        </section>

        <section v-if="educations.length" class="mb-6">
            <h2 class="text-xl font-semibold">Education</h2>
            <div v-for="(education, index) in educations" :key="index" class="mt-3">
                <h3 class="font-bold">{{ education.education }} - {{ education.school }}</h3>
                <p class="text-sm">{{ education.startDate }} - {{ education.endDate }} | {{ education.city }}, {{ education.country }}</p>
                <p class="text-sm mt-1" v-html="education.description"></p>
            </div>
        </section>

        <section v-if="selectLangSection || selectHardSklSection || selectSoftSklSection || selectCertSection" class="grid grid-cols-2 gap-4">
            <div v-if="selectLangSection">
                <h2 class="text-lg font-semibold">Languages</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in langSkills" :key="index">{{ skill.name }} - {{ skill.level }}</li>
                </ul>
            </div>

            <div v-if="selectHardSklSection">
                <h2 class="text-lg font-semibold">Hard Skills</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in hardSkills" :key="index">{{ skill.name }}</li>
                </ul>
            </div>

            <div v-if="selectSoftSklSection">
                <h2 class="text-lg font-semibold">Soft Skills</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in softSkills" :key="index">{{ skill.name }}</li>
                </ul>
            </div>

            <div v-if="selectCertSection">
                <h2 class="text-lg font-semibold">Certificates</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(cert, index) in certSkills" :key="index">{{ cert.name }} - {{ cert.year }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCvStore } from "@/stores/CvStore.js";
import { useSectionStore } from "@/stores/SectionsStore.js";

const cvStore = useCvStore();
const sectionsStore = useSectionStore();

const { personalDetails, experiences, educations, langSkills, hardSkills, softSkills, certSkills } = storeToRefs(cvStore);
const { selectLangSection, selectHardSklSection, selectSoftSklSection, selectCertSection } = storeToRefs(sectionsStore);

const fullName = computed(() => {
    const first = personalDetails.value?.firstName || "";
    const last = personalDetails.value?.lastName || "";
    return first || last ? `${first} ${last}`.trim() : "Your Name";
});

const formattedAddress = computed(() => {
    const city = personalDetails.value?.city;
    const country = personalDetails.value?.country;
    const email = personalDetails.value?.email;
    return [city, country, email].filter(Boolean).join(" | ");
});
</script>

<style scoped>
.cv-preview {
    font-family: Arial, sans-serif;
}
</style>
