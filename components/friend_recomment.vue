<template>
    <div class="w-[135px]">
      <div class="bg-sweet-pink-300 h-[135px] rounded-3xl">
        <div>
          <div
            :style="{ backgroundImage: `url('${profile}')` }"
            class="h-[90px] rounded-3xl bg-cover"
          ></div>
          <div class="flex justify-center -mt-[20px]">
            <div
              class="flex justify-center bg-white w-[40px] h-[40px] rounded-full items-center"
            >
              {{ pet_type }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-2">
        {{ username }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      profile: {
        type: String,
        required: true,
      },
      pet_type: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
  };
  </script>
