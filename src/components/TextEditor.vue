<script setup>
    import {
        defineProps,
        defineEmits
    } from 'vue'
    import {
        QuillEditor
    } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'

    const props = defineProps({
        modelValue: String
    })

    const emit = defineEmits(['update:modelValue'])
</script>

<style>
    .ql-toolbar {
        border-radius: 10px 10px 0 0 !important;
    }

    .ql-container {
        border-radius: 0 0 10px 10px !important;
    }
</style>

<template>
    <div>
        <QuillEditor :content="modelValue" @update:content="emit('update:modelValue', $event)" theme="snow"
            style="height: 100px;" />
    </div>
</template>
