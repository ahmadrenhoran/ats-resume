<template>
    <div class="container m-auto max-w-2xl py-24 font-mono">
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
                <h1 class="text-xl font-semibold">Your Details</h1>
                <p class="text-gray-500 text-sm">
                    Include your basic information to help employers get to know you
                    better.
                </p>
            </div>

            <div class="col-span-2">
                <label for="job-title" class="block text-sm font-semibold text-gray-900 mb-2">Job Title</label>
                <input type="text" id="job-title" placeholder="Enter Job Title" v-model="personalDetails.jobTitle"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="first-name" class="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                <input type="text" id="first-name" autocomplete="given-name" placeholder="Enter First Name"
                    v-model="personalDetails.firstName"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="last-name" class="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                <input type="text" id="last-name" autocomplete="family-name" placeholder="Enter Last Name"
                    v-model="personalDetails.lastName"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input type="email" id="email" autocomplete="email" placeholder="Enter Email"
                    v-model="personalDetails.email"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                <input type="text" id="phone" autocomplete="tel" placeholder="Enter Phone Number"
                    v-model="personalDetails.phone"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="city" class="block text-sm font-semibold text-gray-900 mb-2">City</label>
                <input type="text" id="city" autocomplete="address-level2" placeholder="Enter City"
                    v-model="personalDetails.city"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-1">
                <label for="country" class="block text-sm font-semibold text-gray-900 mb-2">Country</label>
                <input type="text" id="country" autocomplete="country-name" placeholder="Enter Country"
                    v-model="personalDetails.country"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500" />
            </div>

            <div class="col-span-2">
                <label for="bio" class="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                <TextEditor v-model="personalDetails.bio" placeholder="Enter your professional bio here..." />
            </div>
        </div>
        <hr class="mt-8 mb-8 border-gray-300" />
        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Experience</h1>
                <p class="text-gray-500 text-sm">
                    List your work history, including roles and responsibilities in each
                    position.
                </p>
            </div>
            <div ref="experienceContainer" class="grid gap-4">
                <Experience v-for="(experience, index) in experiences" :key="index" :experience="experience"
                    :index="index" :deleteExp="() => deleteExp(index)" />
            </div>
            <button @click="addExp"
                class="mb-4 border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Experience
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300" />
        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Education</h1>
                <p class="text-gray-500 text-sm">
                    Provide details about your educational background, including schools
                    and degrees earned.
                </p>
            </div>

            <div ref="educationContainer" class="grid gap-4">
                <Education v-for="(education, index) in educations" :key="index" :education="education" :index="index"
                    :deleteEdu="() => deleteEdu(index)" />
            </div>
            <button @click="addEdu" 
                class="border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Education
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300" />
        <div ref="selectionContainer">
            <div v-if="selectLangSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Languages" v-model:skills="langSkills" fieldName="Language"
                    description="Languages you speak fluently or are learning." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300" />
            </div>

            <div v-if="selectHardSklSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Hard Skills" v-model:skills="hardSkills"
                    description="Technical skills such as programming, design, or data analysis." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300" />
            </div>

            <div v-if="selectSoftSklSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Soft Skills" v-model:skills="softSkills"
                    description="Interpersonal skills like communication, leadership, and teamwork." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300" />
            </div>

            <div v-if="selectCertSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Certifications" v-model:skills="certSkills" fieldName="Certification Name"
                    description="List your certifications along with the year obtained." type="year" />
                <hr class="mt-8 mb-8 border-gray-300" />
            </div>

            <div v-if="selectSocialSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Website & Social" v-model:skills="socialSkills" fieldName="Social Media Name"
                    description="Add links to your portfolio, LinkedIn, GitHub, or other social profiles."
                    type="link" />
                <hr class="mt-8 mb-8 border-gray-300" />
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Additional Sections</h1>
                <p class="text-gray-500 text-sm">
                    These are all optional sections you might want to add to fulfill your
                    CV
                </p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-5">
                <Additional :imgPath="'/images/elearning.png'" :alt="'Language'" :title="'Languages'"
                    :isActive="sectionsStore.selectLangSection"
                    :onClick="() => sectionsStore.toggleSection('selectLangSection')" />
                <Additional :imgPath="'/images/hardskill.png'" :alt="'Hard Skills'" :title="'Hard Skills'"
                    :isActive="selectHardSklSection"
                    :onClick="() => sectionsStore.toggleSection('selectHardSklSection')" />
                <Additional :imgPath="'/images/softskill.png'" :alt="'Soft Skills'" :title="'Soft Skills'"
                    :isActive="sectionsStore.selectSoftSklSection"
                    :onClick="() => sectionsStore.toggleSection('selectSoftSklSection')" />
                <Additional :imgPath="'/images/certificate.png'" :alt="'Certificates'" :title="'Certificates'"
                    :isActive="sectionsStore.selectCertSection"
                    :onClick="() => sectionsStore.toggleSection('selectCertSection')" />
                <Additional :imgPath="'/images/social.png'" :alt="'Socials'" :title="'Website & Socials'"
                    :isActive="sectionsStore.selectSocialSection"
                    :onClick="() => sectionsStore.toggleSection('selectSocialSection')" />

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, defineExpose, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCvStore } from "@/stores/CvStore.js";
import { useSectionStore } from "@/stores/SectionsStore.js"
import { useRouter } from "vue-router"
import autoAnimate from "@formkit/auto-animate";
import Experience from "./ExperienceField.vue";
import Education from "./EducationField.vue";
import Additional from "./AdditionalCard.vue";
import SkillInput from "./SkillField.vue";
import TextEditor from "./TextEditor.vue";

const cvStore = useCvStore();
const sectionsStore = useSectionStore();
const router = useRouter();

const { personalDetails, experiences, educations, langSkills, hardSkills, softSkills, certSkills, socialSkills } = storeToRefs(cvStore);


const experienceContainer = ref(null);
const educationContainer = ref(null);

const {
    selectLangSection,
    selectHardSklSection,
    selectSoftSklSection,
    selectCertSection,
    selectSocialSection,
} = storeToRefs(sectionsStore);

const selectionContainer = ref(null);

const addExp = cvStore.addExp;
const deleteExp = (index) => cvStore.deleteExp(index);
const addEdu = cvStore.addEdu;
const deleteEdu = (index) => cvStore.deleteEdu(index);

const previewCv = () => {
    router.push('/preview')
};


defineExpose({
    previewCv,
});
onMounted(() => {

    if (experienceContainer.value) {
        autoAnimate(experienceContainer.value);
    }

    if (educationContainer.value) {
        autoAnimate(educationContainer.value);
    }

    if (selectionContainer.value) {
        autoAnimate(selectionContainer.value);
    }
});
</script>
