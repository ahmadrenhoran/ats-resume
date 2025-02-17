<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <div class="flex justify-center mb-4">
            <label class="mr-2 font-semibold">Select Template:</label>
            <select v-model="selectedTemplate" class="border rounded px-2 py-1">
                <option v-for="(template, key) in templateOptions" :key="key" :value="key">
                    {{ template.name }}
                </option>
            </select>
        </div>

        <div class="cv-preview rounded-lg bg-white shadow-lg w-full max-w-[210mm] min-h-[297mm] mx-auto px-12 py-4 mb-4">
            <component :is="templateOptions[selectedTemplate].component" />
        </div>
    </div>
    <FloatingButton :onClick="downloadCV" text="Download CV" />
</template>

<script setup>
import { ref, nextTick, defineAsyncComponent } from "vue";
import html2pdf from "html2pdf.js";
import FloatingButton from "@/components/FloatingButton.vue";

const TemplateBasic = defineAsyncComponent(() => import("@/template/TemplateBasic.vue"));
const TemplateModern = defineAsyncComponent(() => import("@/template/TemplateModern.vue"));

const selectedTemplate = ref("basic");

const templateOptions = {
    basic: { name: "Basic Template", component: TemplateBasic },
    modern: { name: "Modern Template", component: TemplateModern },
};

const opt = {
    margin: [10, 20, 20, 20],
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    enablelinks: true,
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
};

const downloadCV = async () => {
    await nextTick();
    const cvContent = document.querySelector(".cv-preview");

    if (!cvContent) {
        console.error("cvContent not found!");
        return;
    }
    try {
        await html2pdf().set(opt).from(cvContent).toPdf().save();
        console.log("PDF generated successfully!");
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
};
</script>

<style scoped>
.cv-preview {
    font-family: Arial, sans-serif;
}
</style>
