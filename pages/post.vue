<template>
    <div class="flex flex-col gap-24">
     <div class="sh flex justify-center gap-[1000px] ">
        <div class="flex justify-start items-center gap-8">
           <h1 class="text-xl">สร้างโพสต์</h1>
        </div>
        <div class="text-xl">
          โพสต์
        </div>
      </div>
      <div class="flex gap-4 mx-auto">
        <div class="">
        <div class="flex gap-6">
        <img class="w-12 h-12" src="/Group.png" alt="">
        <div class="flex gap-[700px]">
          <div>
          <div>
            <h1 class="dd">Username</h1> 
          </div>
          <div>
            <label class="" for="options">ตั้งค่าความเป็นส่วนตัว</label>
            <select id="options" v-model="selectedOption">
              <option v-for="option in options" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
            <p></p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <a class="flex font-bold text-xl gap-4" href=""><img src="/Group 161.png" alt=""> setting</a>
          <div class="sw flex gap-4 border border-purple-800 w-[115px]">
          <a href=""><img src="/Group 164.png" alt=""></a>
          <div>
            <h1></h1>
            <label class="switch">
              <input type="checkbox" v-model="isOn">
              <span class="slider round"></span>
            </label>
            
          </div>
          </div>
        </div>
        </div>
        </div>
        <div class="">
          <div>
            <h1></h1>
            <input type="text" v-model="text" placeholder="คุณกำลังคิดอะไรอยู่...?" class="text-box" />
            <p>{{  }}</p>
          </div>
        </div>
        </div>
      </div>
      <div class="flex justify-start items-end gap-4">
        <a href=""><img src="/Group 171.png" alt=""></a>
        <a href=""><img src="/Group 172.png" alt=""></a>
        <a href="/tag"><img src="/Group 173.png" alt=""></a>
      </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      options: ['เฉพาะฉัน', 'สาธารณะ', 'แชร์กับ', 'เพื่อนยกเว้น'],
      isOn: false,
    };
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

.sh{
  padding: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
}

select {
  padding: 8px;
  font-size: 16px;
}

.text-box {
  padding: 8px;
  font-size: 16px;
  
  width: 100%;
  height: 100%;
}

</style>