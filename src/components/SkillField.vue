<template>
    <div>
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p class="text-gray-500 text-sm">
            {{ description }}
        </p>
    </div>

    <div ref="parent" class="mt-3">
        <div v-for="(item, index) in skill" :key="index" class="flex items-center gap-4 mb-3">
            <input type="text" v-model="item.name" :placeholder="fieldName"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                
            <select v-if="type === 'dropdown'" v-model="item.level"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>

            <input v-else-if="type === 'year'" v-model="item.level" type="text"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter Year" />

            <input v-else-if="type === 'link'" v-model="item.level" type="text"
                class="border border-gray-300 rounded-md px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter Link" />

            <button @click="removeSkill(index)" class="text-red-500 text-lg">✖</button>
        </div>
    </div>

    <button @click="addSkill"
        class="border border-amber-500 hover:bg-amber-500 hover:text-white text-sm py-3 rounded-xl transition delay-150">
        + Add Skill
    </button>
</template>

<script setup>
    import {
        ref,
        defineProps,
        onMounted
    } from 'vue';
    import autoAnimate from '@formkit/auto-animate';

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
            default: 'dropdown' // Can be 'dropdown', 'year', 'link'
        }
    });

    const skill = ref([{
        name: '',
        level: ''
    }]);
    const parent = ref(null);

    const addSkill = () => {
        skill.value.push({
            name: '',
            level: ''
        });
    };

    const removeSkill = (index) => {
        skill.value.splice(index, 1);
    };

    onMounted(() => {
        if (parent.value) {
            autoAnimate(parent.value);
        }
    });
</script>
