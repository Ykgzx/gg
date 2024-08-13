<template>
    <div class="flex flex-col gap-16">
     <div class="sh flex justify-center gap-[1000px] ">
        <div class="flex justify-start items-center gap-6">
          <a href="/"><img src="/arrow.png" alt=""></a> <h1 class="text-xl">สร้างโพสต์</h1>
        </div>
        <div class="text-xl">
          <a href="/"><img class="h-7 w-16" src="/Group 154.png" alt=""></a>
        </div>
      </div>
      <div class="flex flex-col gap-4 mx-auto">
        
        <div class="flex gap-6">
        <img class="w-12 h-12" src="/Group.png" alt="">
        <div class="flex gap-[700px]">
          <div>
          <div>
            <h1 class="dd">Username</h1> 
          </div>
          <div>
            <label class="" for="options">ตั้งค่าความเป็นส่วนตัว</label>
            <select id="options" v-model="selectedOption">
              <option v-for="option in options" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
            <p></p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          
          <div>
          <!-- Button to Show Overlay -->
          <button class="flex gap-4 text-xl font-bold" @click="showOverlay = true"><img src="/Group 161.png" alt=""> การตั้งค่าขั้นสูงสุด</button>
          <!-- Overlay -->
          <div v-if="showOverlay" class="overlay" @click="closeOverlay">
            <div class="overlay-content border border-black" @click.stop>
              <button class="text-xl font-bold flex ml-auto" @click="closeOverlay"><img src="/X.png" alt=""></button>
              <div class="flex flex-col gap-4">
                <div class="flex gap-12">
                  <label class="switch">
                    <input type="checkbox" v-model="isOn1">
                    <span class="slider round"></span>
                  </label>
                  <h1>ปิดการแสดงความคิดเห็น</h1>
                </div>
                <div class="flex gap-12">
                  <label class="switch">
                    <input type="checkbox" v-model="isOn2">
                    <span class="slider round"></span>
                  </label>
                  <h1>ซ้อนจำนวนคนกดใจ</h1>
                </div>
              </div>           
            </div>
            </div>
          </div>
          
          <div class="sw flex gap-4 border border-purple-800 w-[115px]">
          <img src="/Group 164.png" alt="">
          <div>
            <h1></h1>
            <label class="switch">
              <input type="checkbox" v-model="isOn">
              <span class="slider round"></span>
            </label>
            
          </div>
          </div>
        </div>
        </div>
        </div>
        
          <div>
            <h1></h1>
            <input type="text" v-model="text" placeholder="คุณกำลังคิดอะไรอยู่...?" class="text-box" />
            <p>{{  }}</p>
          </div>
        
        
      </div>
      <div class="flex justify-start items-end gap-4">
        
        <div class="pc pt-[320px]">
  
          <!-- Customized Upload Button -->
          <label class="upload-button ">
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
        <div class="flex gap-4 mb-1">
        <a href=""><img src="/Group 172.png" alt=""></a>
        <a href="/tag"><img src="/Group 173.png" alt=""></a>
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

.sh{
  padding: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
}

select {
  padding: 8px;
  font-size: 16px;
}

.text-box {
  padding: 8px;
  font-size: 16px;
  
  width: 100%;
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

  .overlay {
  position: fixed;
  top: -120px;
  left: 280px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
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
    height: auto;
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
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 2px solid #ccc;
  }

</style>