<template>
    <div ref="cvContent">
        <h1 class="text-2xl font-bold text-center">
            {{ fullName }}
        </h1>
        <p class="text-center" v-if="personalDetails?.jobTitle">
            {{ personalDetails.jobTitle }}
        </p>
        <p class="text-center" v-if="formattedAddress">
            {{ formattedAddress }}
        </p>
        <div class="ql-editor text-sm mt-4 text-center" v-html="personalDetails?.bio"></div>

        <div class="mt-6 border-t pt-4">
            <h2 class="text-xl font-semibold">Experiences</h2>
            <div class="mt-3" v-for="(experience, index) in experiences" :key="index">
                <h3 class="font-bold">
                    {{ experience.title }} - {{ experience.company }}
                </h3>
                <p class="text-sm">
                    {{ experience.startDate }} - {{ experience.endDate }} |
                    {{ experience.city }}, {{ experience.country }}
                </p>
                <div class="ql-editor text-sm text-start -m-3" v-html="experience.description"></div>
            </div>
        </div>

        <div class="mt-6 border-t pt-4">
            <h2 class="text-xl font-semibold">Education</h2>
            <div class="mt-3" v-for="(education, index) in educations" :key="index">
                <h3 class="font-bold">
                    {{ education.education }} - {{ education.school }}
                </h3>
                <p class="text-sm">
                    {{ education.startDate }} - {{ education.endDate }} |
                    {{ education.city }}, {{ education.country }}
                </p>
                <div class="ql-editor text-sm text-start -m-3" v-html="education.description"></div>
            </div>
        </div>

        <div class="mt-6 border-t pt-4 grid grid-cols-3 gap-4">
            <div v-if="selectLangSection">
                <h2 class="text-lg font-semibold">Languages</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in langSkills" :key="index">
                        {{ skill.name }} - {{ skill.level }}
                    </li>
                </ul>
            </div>

            <div v-if="selectHardSklSection">
                <h2 class="text-lg font-semibold">Hard Skills</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in hardSkills" :key="index">
                        {{ skill.name }} - {{ skill.level }}
                    </li>
                </ul>
            </div>

            <div v-if="selectSoftSklSection">
                <h2 class="text-lg font-semibold">Soft Skills</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(skill, index) in softSkills" :key="index">
                        {{ skill.name }}
                    </li>
                </ul>
            </div>

            <div v-if="selectCertSection">
                <h2 class="text-lg font-semibold">Certificates</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(cert, index) in certSkills" :key="index">
                        {{ cert.name }} - {{ cert.level }}
                    </li>
                </ul>
            </div>

            <div v-if="selectSocialSection">
                <h2 class="text-lg font-semibold">Websites & Socials</h2>
                <ul class="list-disc ml-5 mt-2">
                    <li v-for="(social, index) in socialSkills" :key="index">
                        <a :href="social.level" target="_blank" class="hover:underline">
                            {{ social.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCvStore } from "@/stores/CvStore.js";
import { useSectionStore } from "@/stores/SectionsStore.js";

const cvStore = useCvStore();
const sectionsStore = useSectionStore();

const {
    personalDetails,
    experiences,
    educations,
    langSkills,
    hardSkills,
    softSkills,
    certSkills,
    socialSkills,
} = storeToRefs(cvStore);
const {
    selectLangSection,
    selectHardSklSection,
    selectSoftSklSection,
    selectCertSection,
    selectSocialSection,
} = storeToRefs(sectionsStore);

const fullName = computed(() => {
    const first = personalDetails.value?.firstName || "";
    const last = personalDetails.value?.lastName || "";
    return first || last ? `${first} ${last}`.trim() : "Your Name";
});

const formattedAddress = computed(() => {
    const city = personalDetails.value?.city;
    const country = personalDetails.value?.country;
    const email = personalDetails.value?.email;

    const parts = [city, country].filter(Boolean).join(", ");
    return [parts, email].filter(Boolean).join(" | ");
});
</script>

<style scoped>
.cv-preview {
    font-family: Arial, sans-serif;
}
</style>
