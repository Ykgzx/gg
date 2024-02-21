<template>
    <div class="mt-6">
       <div class="text-2xl text-green-700 font-bold">
        Experience
      </div>
       <div class="ml-5 mt-2">
        <ul>
          <li
            class="list-disc"
            v-for="(experience, index) in experiences"
            :key="index"
          >
            {{ experience }}
          </li>
        </ul>
      </div>
    </div>
  </template>
   
  <script setup>
  const experiences = ref([
    "KFC",
    "ไก่ทอดหาดใหญ่",
    "ไก่ทอดซอสเกาหลี",
    "Chick And Roll",
    "ข้าวมันไก่"
  ])
  </script>