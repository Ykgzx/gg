<template>
    <div class="mt-6">
       <div class="text-2xl text-green-700 font-bold">
        Education
      </div>
       <div class="ml-5 mt-2">
        <ul>
          <li
            class="list-disc"
            v-for="(Education, index) in Education"
            :key="index"
          >
            {{ Education }}
          </li>
        </ul>
      </div>
    </div>
  </template>
   
  <script setup>
  const Education = ref([
    "Chicken Farm",
    "Hay Day"
  ])
  </script>