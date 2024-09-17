<template>
<<<<<<< HEAD
    <div class="bg-pippin-100">
        <div class="px-[4%] py-4 bg-sweet-pink-300 rounded-bl-full h-[100px]">
            <div class="flex justify-center gap-[1000px] ">
                <div class="flex justify-start items-center gap-6">
                <a href="/"><img src="/arrow.png" alt=""></a> <h1 class="text-xl">สร้างโพสต์</h1>
                </div>
                <div class="text-xl text-white border border-white rounded-full w-24 h-9 flex justify-center items-center">
                <a href="/">โพสต์</a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-sweet-pink-300">
        <div class="bg-pippin-100 rounded-tr-full rounded-bl-2xl">
            
            <div class="flex flex-col gap-12">
                <div class="flex justify-center items-center gap-[960px] mt-16">
                    <div class="flex gap-6">
                        <img class="w-12 h-12" src="/Pro.png" alt="">
                        <div class="flex gap-[700px]">
                            <div>
                            <div>
                                <h1 class="ddd text-sweet-pink-300">Username</h1> 
                            </div>
                            <div>
                                <label class="" for="options"></label>
                                <select id="options" v-model="selectedOption">
                                <option v-for="option in options" :key="option" :value="option">
                                    {{ option }}
                                </option>
                                </select>
                                <p></p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="sw flex justify-center items-center gap-4 border border-purple-800 w-[115px] h-8">
                        <img class="h-6 w-6" src="/Group 164.png" alt="">
                        <div>
                            <h1></h1>
                            <label class="switch">
                            <input type="checkbox" v-model="isOn">
                            <span class="slider round"></span>
                            </label>
                            
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-start items-center ml-24">
                    <h1></h1>
                    <input type="text" v-model="text" placeholder="คุณกำลังคิดอะไรอยู่...?" class="text-box" />
                    <p>{{  }}</p>
                </div>
                
            </div>

        </div>
    </div>
    <div class="bg-sweet-pink-300 h-[250px]">
    <div class="bg-pippin-100 h-[250px] rounded-bl-[100px]"> </div>
    </div>
    <div class="bg-pippin-100 h-[138px]">
        <div class="bg-sweet-pink-300 rounded-tr-full h-[138px]">
            <div class="flex">
                <div class="flex mt-">
                    
                    
                    <div class="flex justify-start items-center gap-4 ml-20">
        
                        <div class="pc pt-[6px]">
                    
                            <!-- Customized Upload Button -->
                            <label class="upload-button flex mt-10">
                                <img src="/Group 171.png" alt="">
                                <input type="file" @change="onFileChange" accept="image/*" multiple style="display: none;" />
                            </label>

                            <div v-if="images.length">
                                <h2></h2>
                                <div class="image-container">
                                <div v-for="(image, index) in images" :key="index" class="image-wrapper flex flex-col justify-center items-end gap-4">
                                        <!-- Customized Delete Button -->
                                        <button @click="removeImage(index)" class="delete-button"><img src="/X.png" alt=""></button>
                                        <img :src="image.data" :alt="`Image ${index + 1}`" class="image-preview" />
                                        
                                </div>
                                </div>
                            </div>

                            <!-- Display the image at any part of the screen -->
                            <div v-if="imageData" class="image-display">
                                <img :src="imageData" alt="Uploaded Image" />
                            </div>
                        </div>
                        <div class="flex gap-4 mt-10">
                            <a href="/post"><img src="/Group 227.png" alt=""></a>
                            <a href="/re"><img src="/Group 260.png" alt=""></a>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['เฉพาะฉัน', 'สาธารณะ', 'เพื่อน', 'เพื่อนยกเว้น'],
      isOn: false,
      isOn1: false,
      isOn2: false,
      showOverlay: false,
      images: [], // To store the list of selected images
    };
  },
  methods: {
    closeOverlay() {
      this.showOverlay = false;
    },
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
    },
    uploadImages() {
        alert('Upload functionality can be implemented here.');
    },
  },
}
</script>

<style>

.ddd{
  font-size: 18;
  font-weight: bold;
}

.text-box {
  padding: 8px;
  font-size: 16px;
  border-radius: 40px;
  border: white;
  
  width: 50%;
  height: 100%;
}

.sw{ 
  border-radius: 40px;  
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}
  
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
  
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}
  
.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
  
input:checked + .slider {
    background-color: #65558F;
}
  
input:checked + .slider:before {
    transform: translateX(26px);
}
  
.content-box {
    padding: 20px;
    
}

.upload-button {
    display: inline-block;
    padding: 0px 0px;
    background-color: white;
    color: black;
    
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    
}
  
.upload-button:hover {
    background-color: white;
    border-color: white;
}
  
.image-container {
    display: flex;
    position: absolute;
    left: 100px;
    top: 230px;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
}
  
.image-wrapper {
    
    max-width: 200px;
}
  
.image-preview {
    max-width: 100%;
    height: 50%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
  
.delete-button {
    position: relative;
    top: 5px;
    right: 5px;
    background-color: white;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
}
  
.delete-button:hover {
    background-color: red;
}

/* Customize the image display position */
.image-display {
    position: absolute; /* or fixed, relative depending on your needs */
    top: 200px; /* Distance from the top of the screen */
    left: 600px; /* Distance from the left of the screen */
    max-width: 200px; /* Control the size of the image */
    z-index: 1000; /* Ensure it appears above other content */
}
  
.image-display img {
=======
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
>>>>>>> ykg-working-space
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 2px solid #ccc;
<<<<<<< HEAD
}

</style>
=======
  }
  </style>
  
>>>>>>> Stashed changes
>>>>>>> ykg-working-space
