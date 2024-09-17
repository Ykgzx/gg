<!-- components/ChatA.vue -->
<template>
    <div>
      <div class="flex justify-start items-center gap-4 pb-6">
        <i class="fa-solid fa-circle-user text-3xl"></i>
        <h1 class="text-xl font-bold">Rebekka</h1>
      </div>
      <div class="chat-messages bg-white">
        <div class="flex flex-col gap-[52px]">
      <div class="flex">
        <i class="fa-solid fa-circle-user flex items-end"></i>
        <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Hi John, how are you?</p>
      </div>
      <div class="flex justify-end">
        <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">I'm good, thanks</p>
        <i class="fa-solid fa-circle-user flex items-end"></i>
      </div>
      <div class="flex">
        <i class="fa-solid fa-circle-user flex items-end"></i>
        <div class="flex flex-col gap-2">
            <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">I have something to tell you</p>
            <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">I have a new cat</p>
        </div>
      </div>
      <div class="flex justify-end">
        <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">Really, can I see?</p>
        <i class="fa-solid fa-circle-user flex items-end"></i>
      </div>
      <div class="flex">
        <i class="fa-solid fa-circle-user flex items-end"></i>
        <div class="flex flex-col items-center gap-2">
            <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Sure</p>
            <img class="h-40 w-36" src="/kitty.jpeg" alt="">
        </div>
      </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rebekka'
  }
  </script>
  
  <style scoped>
  .chat-messages {
    padding: 50px;
    
  }
  </style>
  