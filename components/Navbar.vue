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
          <button @click="showOverlay = true"><li class="flex justify-start">หน้าหลัก</li></button>
          <!-- //overlay// -->
          <div v-if="showOverlay" class="overlay" @click="closeOverlay">
          <div class="overlay-content h-full" @click.stop>
            <h2></h2>
            <button class="vv flex ml-auto" @click="closeOverlay">X</button>
            <div class="flex flex-col gap-24">
     <div class="flex justify-center gap-[1000px]">
        <div class="flex justify-start items-center gap-8">
          <a href="/"></a> <h1 class="text-xl">สร้างโพสต์</h1>
        </div>
        <div class="kk border border-black text-xl flex justify-end">
          โพสต์
        </div>
      </div>
      <div class="flex gap-8 pl-16">
        <img class="w-12 h-12" src="/Group.png" alt="">
        <div class="flex gap-[700px]">
          <div>
          <div>
            <h1 class="dd">Username</h1> 
          </div>
          <div>
            <label class="hh border border-black" for="options">ตั้งค่าความเป็นส่วนตัว</label>
            <select id="options" v-model="selectedOption">
              <option v-for="option in options" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
            <p></p>
          </div>
        </div>
        <div class="flex flex-col">
          <a class="flex font-bold text-xl gap-4" href=""><img src="/Group 161.png" alt=""> setting</a>
          <a href=""><img src="/Group 164.png" alt=""></a>
        </div>
        </div>
        </div>
      </div> 
          </div>
          </div>

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
      selectedOption: '',
      options: ['เฉพาะฉัน', 'สาธารณะ', 'แชร์กับ', 'เพื่อนยกเว้น'],
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
</style>
