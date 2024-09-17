<template>
    <div class="py-4 flex justify-center items-center border-b border-black gap-[500px]">
        <h1 class="text-xl font-bold pl-[500px]">Setting</h1>
        <i class="pt-1 fa-solid fa-x"></i>
    </div>
    <div class="py-5 flex flex-col ml-24 gap-6">
        <button @click="toggleOverlay1">
            <div class="flex items-center">
                <h1 class="text-xl font-bold">การแจ้งเตือน</h1>
            </div>
        </button>
        <div v-if="showOverlay1" class="ovl flex flex-col" @click="toggleOverlay1">
            <div class="ovlct bg-white flex flex-col gap-4" @click.stop>
                <button @click="toggleOverlay1"><div class="flex justify-end items-center"><i class="fa-solid fa-x"></i></div></button>
                <div class="flex flex-col gap-6">
                    <div class="flex gap-[34px]">
                        <h1>ปิดแจ้งเตือนการกดไลค์</h1>
                        <div class="toggle-switch">
                            <input type="checkbox" id="toggle" v-model="isToggled" />
                            <label for="toggle" class="switch"></label>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <h1>ปิดแจ้งเตือนการคอมเมนท์</h1>
                        <div class="toggle-switch">
                            <input type="checkbox" id="toggle1" v-model="isToggled1" />
                            <label for="toggle1" class="switch"></label>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <h1>ปิดแจ้งเตือนการกดติดตาม</h1>
                        <div class="toggle-switch">
                            <input type="checkbox" id="toggle2" v-model="isToggled2" />
                            <label for="toggle2" class="switch"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="toggleOverlay2">
            <div>
                <h1 class="text-xl font-bold flex">การบล็อค</h1>
            </div>
        </button>
        <div v-if="showOverlay2" class="ovl1 fixed flex justify-center items-center h-[100%] w-[100%] z-[1000] top-0 left-0" @click="toggleOverlay2">
            <div class="ovlct1 bg-white" @click.stop>
                <div class="flex justify-center items-center gap-32 border-b border-black">
                  <h1 class="text-xl font-bold pl-32">บัญชีที่คุณบล็อคอยู่</h1>
                  <button @click="toggleOverlay2"><i class="fa-solid fa-x"></i></button>
                </div>
                <div class="border-b border-gray-400">
                  <h1 class="text-xl font-bold pt-4">บัญชีที่บล็อคอยู่</h1>
                  <h1 class="text-gray-500">บัญชีที่ถูกคุณบล็อคอยู่จะไม่สามารถเห็นโพสต์บนไทม์ไลน์ของคุณได้ <br> ไม่สามารถเพิ่มเพื่อนหรือเพิ่มคุณเข้าร่วมกลุ่มได้ <br> และไม่สามารถแท็กหรือส่งข้อความถึงกันได้</h1>
                </div> 
                <div class="flex justify-center items-center mt-4 gap-4">
                  <h1 class="text-xl font-bold">คุณบล็อค</h1>
                  <div class="flex justify-center items-center gap-2">
                    <i class="fa-solid fa-circle-user text-xl"></i>
                    <h1 class="text-xl font-bold">John Doe</h1>
                  </div>
                  <h1 class="text-xl font-bold">แล้ว</h1>
                  <div class="bg-blue-700 border border-black rounded-[10px] w-36 h-10 flex justify-center items-center">
                    <a href=""><h1 class="font-bold text-white">ยกเลิกการบล็อค</h1></a>
                  </div>
                </div>
            </div>
        </div>
        <div>
            <h1 class="text-xl font-bold">สถานะกำลังใช้งาน</h1>
        </div>
        <div>
            <h1 class="text-xl font-bold">ปิดบัญชี</h1>
        </div>
        <div>
            <h1 class="text-xl font-bold">ออกจากระบบ</h1>
        </div>
    </div>
</template>

<script>

export default {
  
  data() {
    return {
      showOverlay1: false,
      showOverlay2: false,
      isToggled: false,
      isToggled1: false,
      isToggled2: false, // สถานะเริ่มต้นเป็นปิด
    }
  },
  methods: {
    toggleOverlay1() {
      this.showOverlay1 = !this.showOverlay1
    },
    toggleOverlay2() {
        this.showOverlay2 = !this.showOverlay2
    }
  },
}
</script>

<style scoped>
.ovl {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.ovlct {
  
  padding: 20px;
  border-radius: 8px;
}

.ovl1 {
    background-color: rgba(0, 0, 0, 0.5);
}

 /* สไตล์ของ Toggle Switch */
 .toggle-switch {
    display: flex;
    align-items: center;
    gap: 10px;
  }

.ovlct1 {
  padding: 20px;
  border-radius: 8px;
}
  
  .switch {
    width: 60px;
    height: 25px;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .switch:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  
  input[type='checkbox'] {
    display: none;
  }
  
  input[type='checkbox']:checked + .switch {
    background-color: #4caf50;
  }
  
  input[type='checkbox']:checked + .switch:before {
    transform: translateX(30px);
  }
</style>