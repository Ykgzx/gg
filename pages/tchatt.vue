<template>

    <div class="chat-container">
      <!-- Chat Tabs -->
      <div class="chat-tabs">   
        <div class="chatbg flex">
            <!-- h-649 w-513 -->
                <div class="chat h-[100px] w-[286px] flex justify-between px-6 py-4">
                    <h1 class="text-xl font-bold">Chat</h1>
                    <a href="/profile"><i class="fa-solid fa-x pt-[3px]"></i></a>
                </div>
        </div>

        <div class="flex justify-center items-center mb-6">
          <input
          type="text"
          placeholder="Search your friend. . ."
          class="rounded-full p-2 border-none w-[250px]"
        />
        </div>

        <button
          v-for="(tab, index) in chatTabs"
          :key="index"
          :class="{ active: selectedTab === tab }"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </button>
      </div>
  
      <!-- Chat Window (only render if selectedTab is defined) -->
      <div v-if="selectedTab" class="chat-window flex flex-col gap-12">
        <component :is="selectedTab.component" />
        <div class="flex justify-center items-center gap-10">
            <i class="fa-solid fa-circle-plus text-3xl"></i>
            <i class="fa-solid fa-face-smile text-3xl"></i>
            <input
              type="text"
              placeholder="Type your text. . ."
              class="rounded-full p-2 border-none shadow-md h-[56px] w-[606px]"
            />
            <i class="fa-solid fa-microphone text-3xl"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChatA from '@/components/ChatA.vue'
  import ChatB from '@/components/ChatB.vue'
  import ChatC from '@/components/ChatC.vue'
  
  export default {
    data() {
      return {
        // Define the chat tabs with names and corresponding components
        chatTabs: [
          { name: 'Julia', component: ChatA },
          { name: 'Peter', component: ChatB },
          { name: 'Rebekka', component: ChatC }
        ],
        selectedTab: null
      };
    },
    mounted() {
      // Default to the first chat tab
      this.selectedTab = this.chatTabs[0];
    },
    methods: {
      selectTab(tab) {
        this.selectedTab = tab;
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%; /* Adjust height as necessary */
  }
  
  .chat-tabs {
    width: 20%; /* Width for the chat tabs section */
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    background-color: #e9d5ae;
  }
  
  .chat-tabs button {
    padding: 10px 15px;
    background: #e9d5ae;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    margin-bottom: 5px;
  }
  
  .chat-tabs button.active {
    background-color: #FBB4B4;
    color: white;
  }
  
  .chat-window {
    width: 80%; /* Width for the chat window section */
    padding: 20px;
    background: #FBB4B4;
    
  }

  .chatbg{
    background-color: #e9d5ae;
  }

.bgchat{
    background: #FBB4B4;
}

  .text{
    border-radius: 28px;
  }
  </style>
  