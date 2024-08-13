<template>
  <div>
    <div class="py-3 mx-20 flex">
      <div class="flex gap-10 items-center justify-start">
        <i
          class="fa-solid fa-bars text-2xl cursor-pointer"
          @click="toggleSidebar"
        ></i>
        <div><a href="/postpic">Logo</a></div>
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
          <a href="/post"><li>หน้าหลัก</li></a>
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
      showOverlay: false,
      showOverlay1: false,
      selectedOption: '',
      options: ['เฉพาะฉัน', 'สาธารณะ', 'เพื่อน', 'เพื่อนยกเว้น'],
      searchQuery: '',
      items: ['', '', '', '', '', ''],
      text: '',
      isOn: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebarOff() {
      this.sidebarOpen = false;
    },
    closeOverlay() {
          this.showOverlay = false;
    },
    closeOverlay1() {
          this.showOverlay1 = false;
    },
   
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  

}
</script>

<style>
/* Add a CSS class to handle the transition for showing/hiding the sidebar */
.sidebar-transition {
  transition: transform 0.3s ease;
}
    
.dd{
      font-size: 18;
      font-weight: bold;
    }
    
    .hh{
      width: 150px;
      text-align: center;
      border-radius: 10%;
      background-color: blanchedalmond;
    }
    
    .kk{
      width: auto;
      text-align: center;
      border-radius: 10%;
      background-color: blanchedalmond;
    }
    
    .vv{
      font-size: larger;
      font-weight: bold;
    }
    
    .shadow{
      padding: 8px;
      font-size: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
    }
    
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    
    .overlay-content {
      background: white;
      padding: 30px;
      border-radius: 8px;
    }

    select {
  padding: 8px;
  font-size: 16px;
}

.ng{
  padding: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
}

<<<<<<< Updated upstream
.search-container {
  position: relative;
  width: 100%;
}
=======
.dd {
  font-size: 18px;
  font-weight: bold;
}

.hh {
  width: 150px;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.kk {
  width: auto;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.vv {
  font-size: larger;
  font-weight: bold;
}

select {
  padding: 8px;
  font-size: 16px;
}

>>>>>>> Stashed changes


</style>
