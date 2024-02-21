<template>
    <div>
      <div class="font-bold">{{ props.title }}</div>
      <div class="ml-5 mt-2">
        <ul>
          <li
            class="list-disc"
            v-for="(skill, index) in props.skills"
            :key="index"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </template>
   
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => ([])
    }
  })
  </script>