<template>
    <div class="px-8 py-6">
        <FormResume ref="formRef" />
        <FloatingButton :onClick="childPreviewCv" text="Preview CV"/>
    </div>
</template>

<script setup>
import FormResume from "@/components/FormResume.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import { ref } from "vue";

const formRef = ref(null);

const childPreviewCv = () => {
    if (formRef.value !== null) {
        formRef.value.previewCv();
    }
};
</script>
