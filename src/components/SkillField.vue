<template>
    <div>
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-gray-500 text-sm">
            {{ description }}
        </p>
    </div>

    <div ref="parent" class="mt-3">
        <div v-for="(item, index) in localSkills" :key="index" class="flex items-center gap-4 mb-3">
            <input type="text" v-model="localSkills[index].name" :placeholder="fieldName"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-amber-400" />

            <div v-if="type === 'dropdown'" class="relative w-1/3">
                <select  v-model="localSkills[index].level"
                    class="col-start-1 row-start-1 appearance-none rounded-md px-3 py-2 w-1/3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-400 sm:text-sm/6 w-full">
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>

                <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>


            <input v-else-if="type === 'year'" v-model="localSkills[index].level" type="text"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter Year" />

            <input v-else-if="type === 'link'" v-model="localSkills[index].level" type="text"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter Link" />

            <button @click="removeSkill(index)" class="text-red-500 text-lg">✖</button>
        </div>
    </div>

    <button @click="addSkill"
        class="border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
        + Add Skill
    </button>

    <FloatingButton text="Preview CV"/>
</template>

<script setup>
    import {
        ref,
        defineProps,
        defineEmits,
        watch,
        onMounted
    } from 'vue';
    import autoAnimate from '@formkit/auto-animate';
    import FloatingButton from "@/components/FloatingButton.vue"

    const props = defineProps({
        title: {
            type: String,
            default: 'Skills'
        },
        description: {
            type: String,
            default: 'Skills'
        },
        fieldName: {
            type: String,
            default: 'Skill Name'
        },
        type: {
            type: String,
            default: 'dropdown'
        },
        skills: {
            type: Array,
            default: () => []
        }
    });

    const emit = defineEmits(['update:skills']);
    const localSkills = ref([...props.skills]);

    const addSkill = () => {
        localSkills.value.push({
            name: '',
            level: ''
        });
        emit('update:skills', localSkills.value);
    };

    const removeSkill = (index) => {
        localSkills.value.splice(index, 1);
        emit('update:skills', localSkills.value);
    };

    watch(localSkills, (newSkills) => {
        emit('update:skills', newSkills);
    }, {
        deep: true
    });

    const parent = ref(null);
    onMounted(() => {
        if (parent.value) {
            autoAnimate(parent.value);
        }
    });
</script>
