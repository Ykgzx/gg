<template>
    <div class="">
      <h1></h1>
      <input type="file" @change="onFileChange" accept="image/*" multiple />
  
      <div v-if="images.length">
        <h2></h2>
        <div class="image-container">
          <div v-for="(image, index) in images" :key="index" class="image-wrapper flex flex-col justify-center items-end gap-4">
            <button @click="removeImage(index)" class="delete-button"><img src="/X.png" alt=""></button>
            <img :src="image.data" alt="Image Preview" class="image-preview" />
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [] // To store the list of selected images
      };
    },
    methods: {
      onFileChange(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
              this.images.push({ data: e.target.result, name: file.name });
            };
            reader.readAsDataURL(file);
          } else {
            alert('Please select image files only.');
          }
        }
      },
      removeImage(index) {
        this.images.splice(index, 1);
      }
    }
  };
  </script>
  
  <style>
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .image-wrapper {
    position: relative;
    max-width: 150px;
  }
  
  .image-preview {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .delete-button {
    position: relative;
    top: 5px;
    right: 5px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background: none;
  }
  </style>
  