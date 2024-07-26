<template>
    <div class="flex flex-col gap-24">
     <div class="flex justify-center gap-[1000px]">
        <div class="flex justify-start items-center gap-8">
          <a href="/">ddd</a> <h1 class="text-xl">สร้างโพสต์</h1>
        </div>
        <div class="kk border border-black text-xl flex justify-end">
          โพสต์
        </div>
      </div>
      <div class="flex gap-8 pl-24">
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
</template>

<script>
export default {
  data() {
    return {
      options: ['เฉพาะฉัน', 'สาธารณะ', 'แชร์กับ', 'เพื่อนยกเว้น'],
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

select {
  padding: 8px;
  font-size: 16px;
}
</style>