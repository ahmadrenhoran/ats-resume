<template>
    <div 
        @click="onClick"
        class="group flex justify-start items-center border w-fit p-4 rounded border-gray-200 transition duration-300 cursor-pointer"
        :class="{'bg-gray-200': isActive, 'hover:bg-gray-200': !isActive}"
    >
        <div class="flex flex-col items-center text-center gap-2">
            <div class="relative">
                <img 
                    :src="imgPath" 
                    :alt="alt" 
                    width="150" 
                    height="100"
                    class="transition duration-300"
                    :class="{'opacity-50': isActive, 'group-hover:opacity-50': !isActive}"
                >
                <div 
                    class="absolute inset-0 bg-gray-200 opacity-0 transition duration-300" 
                    :class="{'opacity-50': isActive, 'group-hover:opacity-50': !isActive}"
                ></div>

                <!-- Ikon ceklis abu-abu -->
                <div 
                    v-if="isActive"
                    class="absolute top-1 right-1 bg-gray-400 text-white rounded-full p-1 flex items-center justify-center"
                >
                    ✔
                </div>
            </div>
            <p 
                class="font-semibold text-sm mt-2 font-mono transition duration-300"
                :class="{'opacity-50': isActive, 'group-hover:opacity-50': !isActive}"
            >
                {{ title }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    imgPath: String,
    alt: String,
    title: String,
    isActive: Boolean,
    onClick: Function,
});
</script>
