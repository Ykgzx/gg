<template>
  <div>
    <div class="py-3 mx-20 flex">
      <div class="flex gap-10 items-center justify-start">
        <i
          class="fa-solid fa-bars text-2xl cursor-pointer"
          @click="toggleSidebar"
        ></i>
        <div>Logo</div>
      </div>
      <div class="flex gap-10 text-2xl items-center ml-auto">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-regular fa-user"></i>
      </div>
    </div>

    <!-- Sidebar -->
    <div
      :class="[
        'fixed top-0 left-0 h-full bg-white transition-transform duration-300 border border-black border-t-0',
        { 'transform -translate-x-full': !sidebarOpen },
      ]"
      style="width: 250px"
    >
      <div class="flex justify-end py-2 px-3">
        <i class="fa-solid fa-xmark text-2xl cursor-pointer" @click="toggleSidebarOff"></i>
      </div>
      <div class="mx-9">
        <ul class="flex flex-col gap-3">
          <li>หน้าหลัก</li>
          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <li>แชท</li>
          <li>ตระกร้า</li>
          <li>ตั่งค่า</li>
          <li>ประวัติการรายงาน</li>
          <li>ขอความช่วยเหลือ</li>
          <li>ส่งความคิดเห็น</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebarOff() {
      this.sidebarOpen = false;
    }

  },

}
</script>

<style>
/* Add a CSS class to handle the transition for showing/hiding the sidebar */
.sidebar-transition {
  transition: transform 0.3s ease;
}
</style>
