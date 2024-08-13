<template>
  <div>
    <h1>รายชื่อผู้ใช้</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [], // เก็บข้อมูลผู้ใช้ที่ดึงมาจาก API
    };
  },
  created() {
    // ดึงข้อมูลเมื่อ component ถูกสร้าง
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        this.users = response.data; // เก็บข้อมูลที่ได้จาก API ลงในตัวแปร users
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล', error);
      }
    },
  },
};
</script>

<style scoped>
/* คุณสามารถใส่สไตล์ที่นี่ได้ */
</style>
