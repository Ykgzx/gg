<template>
  <div class="mx-20 mt-3">
    <div class="border border-black p-3 rounded-xl">
      <div class="flex items-center gap-3 pb-2">
        <i class="fa-regular fa-user"></i>
        <div class="flex items-end gap-2">
          <div class="text-xs">{{ post.username }}</div>
          <div class="text-xs">{{ post.time_upload }}</div>
        </div>
        <div class="ml-auto">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <p>{{ post.text }}</p>
      <img v-if="post.image" :src="post.image" alt="picture" class="mt-2" />
      <div class="flex items-center">
        <div
          class="border border-black px-1 flex items-center rounded-lg gap-2 w-max"
        >
          <div class="">
            <button class="fa-solid fa-thumbs-up"></button> 10{{
              post.likescount
            }}
          </div>
          <button class="fa-solid fa-thumbs-down p-1 flex items-end"></button>
          <div
            class="border p-1 border-l-1 border-black border-t-0 border-r-0 border-b-0"
          >
            <button class="fa-solid fa-comments"></button> 10
            {{ post.commentscount }}
          </div>
        </div>
        <div class="flex ml-auto border border-black p-1 rounded-lg">
          <button class="fa-solid fa-share" @click="toggleOverlay"></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay -->
  <div
    v-if="overlayOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-5 rounded w-[400px]">
      <div class="flex">
        <p class="ml-[40%] mb-3">ส่งไปยัง</p>

        <button class="ml-auto rounded" @click="toggleOverlay">
          <div class="font-bold text-lg -mt-3"> X </div>
        </button>
      </div>
      <div>
        <ul class="flex gap-10 justify-center">
          <li><div class="flex flex-col"><img src="public/Pro.png" alt="" width="40px"> <p> sfsdfgmdgfk{{ share.username }} </p> </div></li>
          <li><div><img src="public/Pro.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><img src="public/Pro.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><img src="public/Pro.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><i class="fa-solid fa-ellipsis"></i> <div class="text-xs flex justify-center"> เพิ่มเติม </div> </div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        username: "oat",
        time_upload: "เมื่อ 8 ปีที่แล้ว",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam soluta obcaecati fuga nobis in! Dolorum impedit vitae dignissimos dicta eligendi libero soluta, quibusdam esse? Praesentium sit eaque alias blanditiis veniam.",
        image: "",
      },
      share: {
        profile_picture: "",
      },
      overlayOpen: false,
    };
  },
  // mounted() {
  //   // Assuming you're using a method to fetch data from your backend
  //   this.fetchPost();
  // },
  methods: {
    // async fetchPost() {
    //   try {
    //     // Replace with your actual API endpoint
    //     const response = await fetch("https://your-backend-api.com/post");
    //     const data = await response.json();

    //     // Assuming your backend returns a post object with username, time_upload, text, and image fields
    //     this.post = data;
    //   } catch (error) {
    //     console.error("Error fetching post data:", error);
    //   }
    // },
    toggleOverlay() {
      this.overlayOpen = !this.overlayOpen;
    },
  },
};
</script>

<style>
/* Add any additional styles if needed */
</style>
