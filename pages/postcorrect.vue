<template>
<<<<<<< Updated upstream
    <div>
        
    </div>
</template>
=======
    <div class="bg-pippin-100">
      <div class="px-[4%] py-4 bg-sweet-pink-300 rounded-bl-full h-[100px]">
        <div class="flex justify-center gap-[1000px]">
          <div class="flex justify-start items-center gap-6">
            <a href="/"><img src="/arrow.png" alt="Back"></a> 
            <h1 class="text-xl">สร้างโพสต์</h1>
          </div>
          <button @click="createPost" class="text-xl text-white border border-white rounded-full w-24 h-9 flex justify-center items-center">
            โพสต์
          </button>
        </div>
      </div>
  
      <div class="bg-sweet-pink-300">
        <div class="bg-pippin-100 rounded-tr-full rounded-bl-2xl">
          <div class="flex flex-col gap-12">
            <div class="flex justify-start items-center mt-16 ml-24">
              <div class="flex gap-6">
                <img class="w-12 h-12" src="/Pro.png" alt="Profile">
                <div class="flex flex-col gap-3">
                  <h1 class="ddd text-sweet-pink-300">Username</h1>
                  <select v-model="selectedOption">
                    <option v-for="option in options" :key="option" :value="option">
                      {{ option }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="flex justify-start items-center ml-24">
              <input type="text" v-model="text" placeholder="คุณกำลังคิดอะไรอยู่...?" class="text-box" />
            </div>
          </div>
        </div>
      </div>
  
      <div class="bg-sweet-pink-300 h-[250px]">
        <div class="bg-pippin-100 h-[250px] rounded-bl-[100px]"> </div>
      </div>
  
      <div class="bg-pippin-100 h-[138px]">
        <div class="bg-sweet-pink-300 rounded-tr-full h-[138px]">
          <div class="flex justify-start items-center gap-4 ml-20 mt-10">
            <label class="upload-button">
              <img src="/Group 171.png" alt="Upload">
              <input type="file" @change="onFileChange" accept="image/*" multiple style="display: none;" />
            </label>
  
            <div v-if="images.length" class="image-container">
              <div v-for="(image, index) in images" :key="index" class="image-wrapper flex flex-col justify-center items-end gap-4">
                <button @click="removeImage(index)" class="delete-button">
                  <img src="/X.png" alt="Delete">
                </button>
                <img :src="image.data" :alt="`Image ${index + 1}`" class="image-preview" />
              </div>
            </div>
  
            <div class="flex gap-4">
              <a href="/post"><img src="/Group 227.png" alt="Post"></a>
              <a href="/re"><img src="/Group 260.png" alt="React"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        text: '', // For post content
        selectedOption: 'สาธารณะ', // Default selected option
        options: ['สาธารณะ', 'เฉพาะฉัน', 'เพื่อน', 'เพื่อนยกเว้น'],
        images: [], // To store selected images
      };
    },
    methods: {
        async createPost() {
            const formData = new FormData();
            formData.append('user_id', 1);  // เปลี่ยน user_id ตามความเหมาะสม
            formData.append('content', this.text);
            formData.append('visibility', this.selectedOption);

            this.images.forEach((image, index) => {
                formData.append(`image_${index}`, image.file);  // ส่งไฟล์จริง
            });

            try {
                const response = await axios.post('http://localhost:3002/api/uploads/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });

                if (response.status === 201) {
                alert('โพสต์เรียบร้อยแล้ว!');
                this.resetForm();
                this.$router.push('/'); // Navigate to the main page
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
            },

      onFileChange(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.images.push({ data: e.target.result, file: file });  // เก็บทั้ง Base64 และไฟล์
            };
            reader.readAsDataURL(file);
            } else {
            alert('Please select image files only.');
            }
        }
        },

      removeImage(index) {
        this.images.splice(index, 1);
      },
      resetForm() {
        this.text = '';
        this.selectedOption = this.options[0];
        this.images = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .ddd {
    font-size: 18px;
    font-weight: bold;
  }
  
  .text-box {
    padding: 8px;
    font-size: 16px;
    border-radius: 40px;
    border: 1px solid #ccc;
    width: 50%;
  }
  
  .upload-button {
    cursor: pointer;
  }
  
  .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
  }
  
  .image-wrapper {
    max-width: 200px;
    position: relative;
  }
  
  .image-preview {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .delete-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: white;
    border: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .delete-button:hover {
    background-color: red;
  }
  
  .image-display {
    position: absolute;
    top: 200px;
    left: 600px;
    max-width: 200px;
    z-index: 1000;
  }
  
  .image-display img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 2px solid #ccc;
  }
  </style>
  
>>>>>>> Stashed changes
