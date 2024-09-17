<template>
  <div class="bg-pippin-100">
    <div class="bg-sweet-pink-300 rounded-bl-full h-[278px]">
<<<<<<< HEAD
      <div class="py-5 px-[6%] flex justify-between items-center mb-3">
        <div class="flex items-center gap-8">
          <button @click="toggleSidebar"><div class=""><img src="/Group 1.png" alt=""></div></button>
          <a href="/"><div class="text-xl font-bold text-white">Logo</div></a>
        </div>
        <div>
=======
      <div class="py-4 px-[6%] flex justify-between items-center mb-3">
        <div class="flex items-center gap-6">
          <button @click="toggleSidebar"><div class=""><img src="/Group 1.png" alt=""></div></button>
          <a href="/"><div class=""><img class="h-16 w-36" src="/logo.jpg" alt=""></div></a>
        </div>
        <div class="flex justify-center items-center gap-6">
          <button @click="toggleOverlay"><img class="h-8 w-8" src="/icons bell.png" alt=""></button>
          <div v-if="isOverlayVisible" class="overlay" @click="toggleOverlay">
            <div class="overlay-content bg-pippin-100 border border-sweet-pink-300" @click.stop>
              <button class="flex ml-auto" @click="toggleOverlay"><img src="/X.png" alt=""></button>
              <div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="text-xl font-bold">กดไลค์</h1>
                        <h1 class="">บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>31 Aug 2567</h1><h1>12:20</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="text-xl font-bold">คอมเมนท์</h1>
                        <h1 class="">บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>28 Aug 2567</h1><h1>18:22</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="text-xl font-bold">ติดตาม</h1>
                        <h1 class="">คุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>22 Aug 2567</h1><h1>08:39</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="text-xl font-bold">กดไลค์</h1>
                        <h1 class="">บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>11 Aug 2567</h1><h1>10:51</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="text-xl font-bold">กดไลค์</h1>
                        <h1 class="">บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>10 Aug 2567</h1><h1>12:38</h1></div>
                </div>

              </div>
              
            </div>
          </div>

>>>>>>> ykg-working-space
          <input
            type="text"
            placeholder="Search...."
            class="rounded-full p-2 border-none shadow-md w-[250px]"
          />
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
      <div class="text-xl">
<<<<<<< HEAD
        <friend-recomment
          profile="https://via.placeholder.com/135"
=======
        <prof
          profile="/Rectangle 262.png"
>>>>>>> ykg-working-space
          pet_type="🐶"
          username="Biw love dog"
        />
      </div>
      <div class="flex gap-12">
<<<<<<< HEAD
        <h1 class="bg-white rounded-[10px] border border-black">เพิ่มเพื่อน</h1>
        <h1 class="bg-white rounded-[10px] border border-black">ส่งข้อความ</h1>
=======
        <a href=""><h1 class="bg-white rounded-[10px] border border-black w-20 flex justify-center items-center">เพิ่มเพื่อน</h1></a>
        <a href="/tchatt"><h1 class="bg-white rounded-[10px] border border-black w-24 flex justify-center items-center">ส่งข้อความ</h1></a>
>>>>>>> ykg-working-space
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
<<<<<<< HEAD
          <a href="/postcorrect" ><li class="">หน้าหลัก</li></a>
          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <li>แชท</li>
          <li>ตระกร้า</li>
          <li>ตั้งค่า</li>
=======
          <a href="/" ><li class="">หน้าหลัก</li></a>
          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <a href="/tchatt"><li>แชท</li></a>
          <a href="/setting"><li>ตั้งค่า</li></a>
>>>>>>> ykg-working-space
          <li>ประวัติการรายงาน</li>
          <li>ขอความช่วยเหลือ</li>
          <li>ส่งความคิดเห็น</li>
        </ul>

      </div>
    </div>
  </div>
<<<<<<< HEAD
  <div class="bg-pippin-100">
    <content />
    <content />
  </div>

  
=======

  <div class="bg-sweet-pink-300">
    <div class="bg-pippin-100 rounded-tr-[200px]">
      <content />
      <content />
    </div>
  </div>

>>>>>>> ykg-working-space
</template>

<script>

export default {
  
  data() {
    return {
      sidebarOpen: false,
<<<<<<< HEAD
=======
      showOverlay: false,
      isOverlayVisible: false,
>>>>>>> ykg-working-space
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebarOff() {
      this.sidebarOpen = false;
    },
<<<<<<< HEAD
  },
}
</script>
=======
    toggleOverlay() {
      this.isOverlayVisible = !this.isOverlayVisible
    }
    
  },
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: -120px;
  left: 160px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  
  padding: 20px;
  border-radius: 8px;
}
</style>
>>>>>>> ykg-working-space
