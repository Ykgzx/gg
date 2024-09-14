<template>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
        async login() {
  try {
    const response = await fetch('http://localhost:3002/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.username, password: this.password })
    });

    // Ensure that the response is JSON
    const data = await response.json();
    
    if (response.ok) {
      alert(data.message); // Alerting the result from the server
    } else {
      alert(data.error); // Show error message
    }
    } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging in.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  