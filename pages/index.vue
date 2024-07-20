<template>
  <div>
    <div class="w-1/6 h-[100%] bg-gray-700">
      <div class="text-white p-9 font-bold text-xl text-center">todofast</div>
      <div class="text-lg flex flex-col gap-4 pl-8">
        <div class="text-white font-semibold">My List</div>
        <div class="TodoFolder">
          Life
        </div>
        <div class="TodoFolder">
          Work
        </div>
        <div class="AddNew pl-2">
          + New List
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.TodoFolder {
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
}

.TodoFolder:hover {
  background-color: yellow;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 24px;
  padding-bottom: 24px;
  
}
</style>
   
  