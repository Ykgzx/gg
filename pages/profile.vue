<template>
  <div class="bg-pippin-100">
    <div class="bg-sweet-pink-300 rounded-bl-full h-[278px]">
      <div class="py-5 px-[6%] flex justify-between items-center mb-3">
        <div class="flex items-center gap-8">
          <button @click="toggleSidebar"><div class=""><img src="/Group 1.png" alt=""></div></button>
          <a href="/"><div class="text-xl font-bold text-white">Logo</div></a>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search...."
            class="rounded-full p-2 border-none shadow-md w-[250px]"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
      <div class="text-xl">
        <friend-recomment
          profile="https://via.placeholder.com/135"
          pet_type="🐶"
          username="Biw love dog"
        />
      </div>
      <div class="flex gap-12">
        <h1 class="bg-white rounded-[10px] border border-black">เพิ่มเพื่อน</h1>
        <h1 class="bg-white rounded-[10px] border border-black">ส่งข้อความ</h1>
      </div>
      </div>

    </div>
    <div
      :class="[
        'fixed top-0 left-0 h-full bg-sweet-pink-200 transition-transform duration-300 border border-black border-t-0',
        { 'transform -translate-x-full': !sidebarOpen },
      ]"
      style="width: 250px"
      aria-label="Sidebar"
    >
      <div class="flex justify-end py-2 px-3">
        <button
          class="fa-solid fa-xmark text-2xl cursor-pointer"
          @click="toggleSidebarOff"
          aria-label="Close sidebar"
        ></button>
      </div>
      <div class="mx-9">
        <ul class="flex flex-col gap-3">
          <a href="/postcorrect" ><li class="">หน้าหลัก</li></a>
          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <li>แชท</li>
          <li>ตระกร้า</li>
          <li>ตั้งค่า</li>
          <li>ประวัติการรายงาน</li>
          <li>ขอความช่วยเหลือ</li>
          <li>ส่งความคิดเห็น</li>
        </ul>

      </div>
    </div>
  </div>
  <div class="bg-pippin-100">
    <content />
    <content />
  </div>

  
</template>

<script>

export default {
  
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebarOff() {
      this.sidebarOpen = false;
    },
  },
}
</script>