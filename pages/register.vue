<template>
    <div>
      <h1>Users List</h1>
      <ul>
        <li v-for="user in users" :key="user.user_id">{{ user.username }} - {{ user.email }}</li>
      </ul>
      <form @submit.prevent="addUser">
        <input v-model="newUser.username" placeholder="Username" required />
        <input v-model="newUser.email" placeholder="Email" required />
        <input v-model="newUser.password" placeholder="Password" required type="password" />
        <button type="submit">Add User</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  const newUser = ref({
    username: '',
    email: '',
    password: ''
  });
  
  const apiUrl = 'http://localhost:3000/api/users'; // URL to your PHP API
  
  // Fetch users when the component is mounted
  onMounted(async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      users.value = data;
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  });
  
  // Function to add a new user
  async function addUser() {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser.value)
      });
      const result = await response.json();
      if (result.user_id) {
        users.value.push(result); // Add the new user to the users list
        newUser.value = { username: '', email: '', password: '' }; // Reset the form
      } else {
        console.error('Error adding user:', result.error);
      }
    } catch (err) {
      console.error('Error adding user:', err);
    }
  }
  </script>
  