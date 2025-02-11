<template>
    <div class="container m-auto max-w-2xl py-24">
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
                <h1 class="text-xl font-semibold">Your Details</h1>
                <p class="text-gray-500 text-sm">
                    Include your basic information to help employers get to know you better.
                </p>
            </div>
            <div class="col-span-2">
                <label for="job-title" class="block text-sm font-semibold text-gray-900 mb-1">Job Title</label>
                <input type="text" id="job-title" placeholder="Enter Job Title"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
            </div>
            <div class="col-span-1">
                <label for="first-name" class="block text-sm font-semibold text-gray-900 mb-1">First Name</label>
                <input type="text" id="first-name" autocomplete="given-name" placeholder="Enter First Name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
            </div>
            <div class="col-span-1">
                <label for="last-name" class="block text-sm font-semibold text-gray-900 mb-1">Last Name</label>
                <input type="text" id="last-name" autocomplete="family-name" placeholder="Enter Last Name"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
            </div>
            <div class="col-span-1">
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input type="email" id="email" autocomplete="email" placeholder="Enter Email"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
            </div>
            <div class="col-span-1">
                <label for="location" class="block text-sm font-semibold text-gray-900 mb-1">Location</label>
                <input type="text" id="location" autocomplete="address-level1" placeholder="Enter Location"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500">
            </div>
            <div class="col-span-2">
                <label for="bio" class="block text-sm font-semibold text-gray-900 mb-1">Bio</label>
                <textarea id="bio" rows="4" placeholder="Enter Bio"
                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-amber-500"></textarea>
            </div>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Experience</h1>
                <p class="text-gray-500 text-sm">
                    List your work history, including roles and responsibilities in each position.
                </p>
            </div>
            <div ref="experienceContainer" class="grid gap-4">
                <Experience v-for="(experience, index) in experiences" :key="index" :experience="experience"
                    :index="index" :deleteExp="() => deleteExp(index)" />
            </div>
            <button @click="addExp"
                class="border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Experience
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Education</h1>
                <p class="text-gray-500 text-sm">
                    Provide details about your educational background, including schools and degrees earned.
                </p>
            </div>

            <div ref="educationContainer" class="grid gap-4">
                <Education v-for="(education, index) in educations" :key="index" :education="education"
                    :index="index" :deleteEdu="() => deleteEdu(index)" />
            </div>
            <button @click="addEdu"
                class="border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
                Add Education
            </button>
        </div>
        <hr class="mt-8 mb-8 border-gray-300">
        <div ref="selectionContainer">
            <div v-show="selectLangSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Languages" fieldName="Language"
                    description="Languages you speak fluently or are learning." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300">
            </div>

            <div v-show="selectHardSklSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Hard Skills"
                    description="Technical skills such as programming, design, or data analysis." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300">
            </div>

            <div v-show="selectSoftSklSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Soft Skills"
                    description="Interpersonal skills like communication, leadership, and teamwork." type="dropdown" />
                <hr class="mt-8 mb-8 border-gray-300">
            </div>

            <div v-show="selectCertSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Certifications" fieldName="Certification Name"
                    description="List your certifications along with the year obtained." type="year" />
                <hr class="mt-8 mb-8 border-gray-300">
            </div>

            <div v-show="selectSocialSection" class="grid grid-cols-1 gap-4">
                <SkillInput title="Website & Social" fieldName="Social Media Name"
                    description="Add links to your portfolio, LinkedIn, GitHub, or other social profiles."
                    type="link" />
                <hr class="mt-8 mb-8 border-gray-300">
            </div>

        </div>

        <div class="grid grid-cols-1 gap-4">
            <div>
                <h1 class="text-xl font-semibold col-span-1">Additional Sections</h1>
                <p class="text-gray-500 text-sm">
                    These are all optional sections you might want to add to fulfill your CV
                </p>
            </div>
            <div class="grid grid-cols-3 gap-y-5">
                <Additional :imgPath="'/images/elearning.png'" :alt="'Language'" :title="'Languages'"
                    :isActive="selectLangSection" :onClick="() => selectLangSection = !selectLangSection" />
                <Additional :imgPath="'/images/hardskill.png'" :alt="'Hard Skills'" :title="'Hard Skills'"
                    :isActive="selectHardSklSection" :onClick="() => selectHardSklSection = !selectHardSklSection" />
                <Additional :imgPath="'/images/softskill.png'" :alt="'Soft Skills'" :title="'Soft Skills'"
                    :isActive="selectSoftSklSection" :onClick="() => selectSoftSklSection = !selectSoftSklSection" />
                <Additional :imgPath="'/images/certificate.png'" :alt="'Certificates'" :title="'Certificates'"
                    :isActive="selectCertSection" :onClick="() => selectCertSection = !selectCertSection" />
                <Additional :imgPath="'/images/social.png'" :alt="'Socials'" :title="'Website & Socials'"
                    :isActive="selectSocialSection" :onClick="() => selectSocialSection = !selectSocialSection" />
            </div>
        </div>
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
    import Additional from './AdditionalCard.vue';
    import SkillInput from './SkillField.vue';

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

    const selectLangSection = ref(false);
    const selectHardSklSection = ref(false);
    const selectSoftSklSection = ref(false);
    const selectCertSection = ref(false);
    const selectSocialSection = ref(false);
    const selectionContainer = ref(null);

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

        if (selectionContainer.value) {
            autoAnimate(selectionContainer.value);
        }
    });
</script>
