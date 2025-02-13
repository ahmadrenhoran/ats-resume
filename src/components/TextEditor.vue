<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const props = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: "Write something..."
  }
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <QuillEditor
      :content="modelValue"
      content-type="html"
      theme="snow"
      :placeholder="placeholder"
      @update:content="emit('update:modelValue', $event)"
      style="height: 100px;"
    />
  </div>
</template>

<style>
.ql-toolbar {
  border-radius: 10px 10px 0 0 !important;
}

.ql-container {
  border-radius: 0 0 10px 10px !important;
}
</style>