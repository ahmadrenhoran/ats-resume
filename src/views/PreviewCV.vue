<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <div id="cvContent" class="cv-preview rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 class="text-2xl font-bold text-center">
                {{ personalDetails?.firstName + " " + personalDetails?.lastName }}
            </h1>
            <p class="text-center">
                {{ personalDetails?.jobTitle }}
            </p>
            <p class="text-center">
                {{
                    personalDetails?.city +
                    ", " +
                    personalDetails?.country +
                    " | " +
                personalDetails?.email
                }}
            </p>
            <div class="ql-editor text-sm mt-4 text-center" v-html="personalDetails.bio"></div>

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
                    <div class="ql-editor text-sm text-start -mx-3" v-html="experience.description"></div>
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
                            {{ skill.name }}
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
                            {{ cert.name }} - {{ cert.year }}
                        </li>
                    </ul>
                </div>

                <div v-if="selectSocialSection">
                    <h2 class="text-lg font-semibold">Websites & Socials</h2>
                    <ul class="list-disc ml-5 mt-2">
                        <li v-for="(social, index) in socialSkills" :key="index">
                            <a :href="social.link" target="_blank" class="hover:underline">
                                {{ social.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <FloatingButton :onClick="downloadCV" text="Download CV" />
</template>

<script setup>
import { onMounted, ref, computed, nextTick } from "vue";
import html2pdf from "html2pdf.js";
import { storeToRefs } from "pinia";
import { useCvStore } from "@/stores/CvStore.js";
import { useSectionStore } from "@/stores/SectionsStore.js";
import { isArrayEmpty } from "@/utils/helper.js";
import FloatingButton from "@/components/FloatingButton.vue";

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

const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

const downloadCV = async () => {
    await nextTick(); 

    const cvContent = document.getElementById("cvContent");
    if (!cvContent) {
        console.error("cvContent not found!");
        return;
    }

    try {
        await html2pdf().set(opt).from(cvContent).save();
        console.log("PDF generated successfully!");
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
};


onMounted(() => {
    console.log(educations);
});

// Template Data
/**
const personalDetails = ref({
    jobTitle: "Software Engineer",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    city: "New York",
    country: "USA",
    bio: "Experienced software engineer with a passion for building scalable web applications.",
});

const experiences = ref([
    {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        startDate: "2018-06-01",
        endDate: "2023-05-31",
        city: "San Francisco",
        country: "USA",
        description:
            "Led a team of developers to build and maintain the company's flagship product.",
    },
]);

const educations = ref([
    {
        school: "University of California, Berkeley",
        major: "Computer Science",
        degree: "Bachelor of Science",
        startDate: "2014-09-01",
        endDate: "2018-05-31",
        city: "Berkeley",
        country: "USA",
        description:
            "Graduated with honors, focusing on software development and algorithms.",
    },
]);

const langSkills = ref([
    {
        name: "English",
        level: "Fluent",
    },
]);

const hardSkills = ref([
    {
        name: "JavaScript",
        level: "Advanced",
    },
]);

const softSkills = ref([
    {
        name: "Communication",
        level: "Advanced",
    },
]);

const certSkills = ref([
    {
        name: "AWS Certified Solutions Architect",
        level: "Associate",
    },
]);

const socialsSkills = ref([
    {
        name: "Teamwork",
        level: "Advanced",
    },
]);
*/
</script>

<style scoped>
.cv-preview {
    font-family: Arial, sans-serif;
}
</style>
