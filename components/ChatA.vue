<!-- components/ChatA.vue -->
<template>
  <div>
      <div class="flex justify-start items-center gap-4 pb-6">
        <i class="fa-solid fa-circle-user text-3xl"></i>
        <h1 class="text-xl font-bold">Julia</h1>
      </div>
      <div class="chat-messages bg-white">
      <div class="flex flex-col gap-[52px]">
      <div class="flex">
        <i class="fa-solid fa-circle-user flex items-end"></i>
        <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Hi John, I heard that you have a cat?</p>
      </div>
      <div class="flex justify-end">
        <div class="flex flex-col items-center gap-2">
          <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">Yes, his name is Bob</p>
          <img class="h-36 w-40" src="/cat.jpg" alt="">
        </div>
        <i class="fa-solid fa-circle-user flex items-end"></i>
      </div>
      <div class="flex">
        <i class="fa-solid fa-circle-user flex items-end"></i>
        <p class="bg-purple-200 rounded-[10px] flex justify-start items-center h-[50px] w-[200px]">Ohh he's so cute!!!</p>
      </div>
      <div class="flex justify-end">
        <p class="bg-green-200 rounded-[10px] flex justify-end items-center h-[50px] w-[160px]">Thank you</p>
        <i class="fa-solid fa-circle-user flex items-end"></i>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Julia'
}
</script>

<style scoped>
.chat-messages {
  padding: 50px;
  
}
</style>
