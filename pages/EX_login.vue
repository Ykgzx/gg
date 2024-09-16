<template>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
  
      <div class="password-container">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          required
        />
        <button type="button" @click="togglePassword">{{ showPassword ? 'Hide' : 'Show' }}</button>
      </div>
  
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        showPassword: false, // state to toggle password visibility
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      async login() {
        try {
          const response = await fetch('http://localhost:3002/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.username, password: this.password }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            alert(data.message);
          } else {
            alert(data.error);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while logging in.');
        }
      },
    },
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
  
  .password-container {
    display: flex;
    align-items: center;
  }
  
  .password-container input {
    flex: 1;
  }
  
  .password-container button {
    margin-left: 10px;
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .password-container button:hover {
    background-color: #0056b3;
  }
  
  button[type='submit'] {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button[type='submit']:hover {
    background-color: #0056b3;
  }
  </style>
  