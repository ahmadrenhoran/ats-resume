<template>
    <button
      @click="onClick"
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-2xl shadow-xl font-medium transition-all duration-300 flex items-center gap-2"
      :class="[bgColor, hoverBgColor, textColor]"
    >
      <slot>
        <span v-if="icon" v-html="icon"></span>
        <span>{{ text }}</span>
      </slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, computed } from "vue";
  
  const props = defineProps({
    text: {
      type: String,
      default: "Button",
    },
    onClick: Function,
    bgColor: {
      type: String,
      default: "bg-amber-500",
    },
    hoverBgColor: {
      type: String,
      default: "hover:bg-amber-700", 
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    icon: {
      type: String,
      default: "", 
    },
  });
  </script>
  