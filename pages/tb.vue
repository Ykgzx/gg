<template>
    <div class="toggle-switch">
      <input type="checkbox" id="toggle" v-model="isToggled" />
      <label for="toggle" class="switch"></label>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isToggled: false // สถานะเริ่มต้นเป็นปิด
      };
    }
  };
  </script>
  
  <style scoped>
  /* สไตล์ของ Toggle Switch */
  .toggle-switch {
    display: flex;
    align-items: center;
    gap: 10px;
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
  