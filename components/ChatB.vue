<!-- components/ChatA.vue -->
<template>
    <div>
      <div class="flex justify-start items-center gap-4 pb-6">
        <i class="fa-solid fa-circle-user text-3xl"></i>
        <h1 class="text-xl font-bold">Peter</h1>
      </div>
      <div class="chat-messages bg-white">
        <div class="flex flex-col gap-[52px]">
        <div class="flex">
            <i class="fa-solid fa-circle-user flex items-end"></i>
            <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Hi John, do you have any pet?</p>
        </div>
        <div class="flex justify-end">
            <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">Yes, I have a cat</p>
            <i class="fa-solid fa-circle-user flex items-end"></i>
        </div>
        <div class="flex">
            <i class="fa-solid fa-circle-user flex items-end"></i>
            <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Can I see?</p>
        </div>
        <div class="flex justify-end">
            <div class="flex flex-col items-center gap-2">
                <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">Sure</p>
                <img class="h-36 w-40" src="/cat.jpg" alt="">
            </div>
            <i class="fa-solid fa-circle-user flex items-end"></i>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Peter'
  }
  </script>
  
  <style scoped>
  .chat-messages {
    padding: 50px;
    
  }
  </style>
  