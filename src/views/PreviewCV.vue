<template>
    <div class="bg-gray-900 min-h-screen p-8">
        <div class="cv-preview bg-white rounded-lg shadow-lg max-w-2xl mx-auto p-8">
            <h1 class="text-2xl font-bold text-center">Ronald Gunawan</h1>
            <p class="text-center text-gray-600">Jakarta, Indonesia | ronald_gunawan@yahoo.com</p>
            <p class="mt-4 text-gray-700 text-center">
                Mahasiswa Universitas Trisakti semester 7 dengan pengalaman magang sebagai analis kredit.
            </p>

            <div class="mt-6 border-t pt-4">
                <h2 class="text-xl font-semibold">Experiences</h2>
                <div class="mt-3">
                    <h3 class="font-bold">Staff Magang Analisis Kredit - Bank Central Asia (BCA)</h3>
                    <p class="text-sm text-gray-600">Juni 2022 - Agustus 2022 | Jakarta, Indonesia</p>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Mengumpulkan informasi serta melakukan wawancara.</li>
                        <li>Mengevaluasi rasio keuangan.</li>
                        <li>Melakukan analisis kredit terperinci.</li>
                    </ul>
                </div>
                <div class="mt-4">
                    <h3 class="font-bold">Bendahara BEM - Jurusan Manajemen Keuangan Universitas Trisakti</h3>
                    <p class="text-sm text-gray-600">2021-2022 | Jakarta, Indonesia</p>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Memastikan semua transaksi dicatat dengan akurat.</li>
                        <li>Mengelola dokumen keuangan.</li>
                    </ul>
                </div>
            </div>

            <div class="mt-6 border-t pt-4">
                <h2 class="text-xl font-semibold">Educations</h2>
                <p class="font-bold">Universitas Trisakti</p>
                <p class="text-gray-600">S1 Manajemen Keuangan | 2020 - sekarang</p>
            </div>

            <div class="mt-6 border-t pt-4 grid grid-cols-3 gap-4">
                <div>
                    <h2 class="text-lg font-semibold">Soft Skills</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Komunikasi</li>
                        <li>Kepemimpinan</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-lg font-semibold">Hard Skills</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Financial Planning</li>
                        <li>Accounting Skills</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-lg font-semibold">Bahasa</h2>
                    <ul class="list-disc ml-5 text-gray-700 mt-2">
                        <li>Bahasa Indonesia</li>
                        <li>English (IELTS 7.0)</li>
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
    const personalDetails = computed(() => cvStore.cv.personalDetails);
    const experiences = computed(() => cvStore.cv.experiences);
    const educations = computed(() => cvStore.cv.educations);
    const langSkills = computed(() => cvStore.cv.langSkills);
    const hardSkills = computed(() => cvStore.cv.hardSkills);
    const softSkills = computed(() => cvStore.cv.softSkills);
    const certSkills = computed(() => cvStore.cv.certSkills);
    const socialsSkills = computed(() => cvStore.cv.socialsSkills);
</script>

<style scoped>
    .cv-preview {
        font-family: Arial, sans-serif;
    }
</style>
