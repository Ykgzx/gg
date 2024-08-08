<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user">
          {{ user }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      };
    },
    mounted() {
      fetch('/api/users')
        .then(response => response.json())
        .then(data => {
          this.users = data.users;
        });
    }
  };
  </script>
  