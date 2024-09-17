<template>
<<<<<<< Updated upstream
  <div>
    <div class="py-3 mx-20 flex">
      <div class="flex gap-10 items-center justify-start">
        <i
          class="fa-solid fa-bars text-2xl cursor-pointer"
          @click="toggleSidebar"
          aria-label="Toggle sidebar"
        ></i>
        <div>Logo</div>
      </div>
      <div class="flex gap-10 text-2xl items-center ml-auto">
        <div class="relative flex gap-2 items-center">
          <i
            v-if="!searchOpen"
            class="fa-solid fa-magnifying-glass cursor-pointer"
            @click="toggleSearch"
            aria-label="Open search"
          ></i>
          <div v-show="searchOpen" class="relative">
            <input
              type="text"
              class="rounded-xl w-80 border border-black px-2 text-lg search-input"
              placeholder="ค้นหา"
              ref="searchInput"
              @input="handleSearchInput"
              @focus="showSearchResults = true"
              v-model="searchValue"
              @keydown.enter="handleSearchSubmit"
              aria-label="Search input"
            />
            <button
              class="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl"
              @click="toggleSearch"
              aria-label="Close search"
            >
              X
            </button>
            <!-- Search results overlay -->
            <div
              v-show="searchResultsOverlay"
              class="search-results-overlay"
              ref="searchResults"
              aria-live="polite"
              aria-label="Search results"
            >
              <div class="p-5 rounded-lg">
                <div>
                  <div class="flex justify-between items-center text-base">
                    <h3>การค้นหาล่าสุด</h3>
                    <button
                      class=""
                      @click="clearRecentSearches"
                      aria-label="Clear recent searches"
                    >
                      ลบทั้งหมด
                    </button>
                  </div>
                  <ul>
                    <li
                      v-if="
                        searchResults.length === 0 &&
                        searchValue &&
                        recentSearches.length === 0
                      "
                      class="text-center text-gray-500"
                      aria-live="assertive"
                    >
                      ไม่พบผลลัพธ์สำหรับ "{{ searchValue }}"
                    </li>
                    <li
                      v-for="(item, index) in searchResults"
                      :key="index"
                      class="flex justify-between items-center hover:bg-gray-200 p-2 rounded-lg text-base cursor-pointer"
                      @click="handleSearchItemClick(item)"
                      aria-label="Search result: {{ item.name }}"
                    >
                      <div class="flex items-center">
                        <img
                          :src="item.image"
                          class="w-8 h-8 rounded-full mr-3"
                          alt=""
                        />
                        <div>
                          <p>{{ item.name }}</p>
                          <p class="text-gray-500 text-sm">
                            {{ item.details }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      v-for="(item, index) in recentSearches"
                      :key="'recent-' + index"
                      class="flex justify-between items-center hover:bg-gray-200 p-2 rounded-lg text-base cursor-pointer"
                      @click="handleSearchItemClick(item)"
                      aria-label="Recent search: {{ item.name }}"
                    >
                      <div class="flex items-center">
                        <img
                          :src="item.image"
                          class="w-8 h-8 rounded-full mr-3"
                          alt=""
                        />
                        <div>
                          <p>{{ item.name }}</p>
                          <p class="text-gray-500 text-sm">
                            {{ item.details }}
                          </p>
                        </div>
                      </div>
                      <button
                        class="hover:bg-gray-400 w-5 rounded-full"
                        @click="removeSearch(index)"
                        aria-label="Remove recent search"
                      >
                        X
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-bell" aria-label="Notifications"></i>
        <i class="fa-regular fa-user" aria-label="User profile"></i>
      </div>
    </div>

=======
  <div class="px-[6%] py-5 bg-sweet-pink-300 rounded-bl-full h-[200px]">
    <div class="flex justify-between items-center mb-3">
      <div class="flex items-center gap-6">
        <button @click="toggleSidebar"><div class=""><img src="/Group 1.png" alt=""></div></button>
        <div class=""><img class="h-16 w-36" src="/logo.jpg" alt=""></div>
      </div>
      <div class="flex justify-center items-center gap-6">
        <button @click="toggleOverlay"><img class="h-8 w-8" src="/icons bell.png" alt=""></button>
          <div v-if="isOverlayVisible" class="overlay1" @click="toggleOverlay">
            <div class="overlay-content1 bg-pippin-100 border border-sweet-pink-300" @click.stop>
              <button class="flex ml-auto" @click="toggleOverlay"><img src="/X.png" alt=""></button>
              <div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        <h1 class="">กดไลค์บนโพสต์ล่าสุดของคุณ</h1>
                        
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>31 Aug 2567</h1><h1>12:20</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        
                        <h1 class="">คอมเมนท์บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>28 Aug 2567</h1><h1>18:22</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        
                        <h1 class="">ติดตามคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>22 Aug 2567</h1><h1>08:39</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        
                        <h1 class="">กดไลค์บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>11 Aug 2567</h1><h1>10:51</h1></div>
                </div>
                <div class="border border-sweet-pink-300 w-full">
                  <div class="flex gap-4">
                      <h1 class="text-xl font-bold">RTX-4060</h1>
                      <div class="flex  items-center">
                        
                        <h1 class="">กดไลค์บนโพสต์ล่าสุดของคุณ</h1>
                      </div>
                  </div>
                  <div class="flex gap-8"><h1>10 Aug 2567</h1><h1>12:38</h1></div>
                </div>

              </div>
              
            </div>
          </div>
        <input
          type="text"
          placeholder="Search...."
          class="rounded-full p-2 border-none shadow-md w-[250px]"
        />
      </div>
    </div>

    <div class="flex justify-center pt-10">
      <a href="/postcorrect"><img src="/Group 249.png" alt=""></a>
    </div>
  </div>
  <div class="bg-sweet-pink-300">
    <div class="px-[25%] pt-5 font-bold bg-pippin-100 rounded-tr-full">
      แนะนำเพื่อน
      <a href="/profile"><div class="mt-5">
        <friend-recomment
          profile="https://via.placeholder.com/135"
          pet_type="🐶"
          username="John Doe"
        />
    </div></a>
  </div>


>>>>>>> Stashed changes
    <!-- Sidebar -->
    <div
      :class="[
        'fixed top-0 left-0 h-full bg-white transition-transform duration-300 border border-black border-t-0',
        { 'transform -translate-x-full': !sidebarOpen },
      ]"
      style="width: 250px"
      aria-label="Sidebar"
    >
      <div class="flex justify-end py-2 px-3">
        <button
          class="fa-solid fa-xmark text-2xl cursor-pointer"
          @click="toggleSidebarOff"
          aria-label="Close sidebar"
        ></button>
      </div>
      <div class="mx-9">
        <ul class="flex flex-col gap-3">
<<<<<<< Updated upstream
          <a href="/post"><li class="">หน้าหลัก</li></a>
=======
          <a href="/" ><li class="">หน้าหลัก</li></a>
>>>>>>> Stashed changes
          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <a href="/tchatt"><li>แชท</li></a>
          <a href="/setting"><li>ตั้งค่า</li></a>
          <li>ประวัติการรายงาน</li>
          <li>ขอความช่วยเหลือ</li>
          <li>ส่งความคิดเห็น</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      showOverlay: false,
      isOverlayVisible: false,
      searchResultsOverlay: false,
      searchOpen: false,
      searchValue: "",
      selectedOption: "",
      options: ["เฉพาะฉัน", "สาธารณะ", "แชร์กับ", "เพื่อนยกเว้น"],
      searchResults: [],
      recentSearches: [
        {
          name: "deep marcuc",
          details: "7 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "mac kerker",
          details: "4 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "john cena",
          details: "6 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "nat dedo",
          details: "2 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "zero guy",
          details: "3 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "timmy mctominy",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "mac john",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "john doe",
          details: "9+ รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleSidebarOff() {
      this.sidebarOpen = false;
    },
    toggleOverlay() {
      this.isOverlayVisible = !this.isOverlayVisible
    },
    closeOverlay() {
      this.showOverlay = false;
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      this.searchResultsOverlay = this.searchOpen;
      if (this.searchOpen) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      } else {
        this.searchResults = [];
      }
    },
    hideSearchResults() {
      setTimeout(() => {
        if (!this.$refs.searchInput.contains(document.activeElement)) {
          this.searchOpen = false;
          this.searchResultsOverlay = false;
        }
      }, 200);
    },
    clearRecentSearches() {
      this.recentSearches = [];
    },
    removeSearch(index) {
      if (index >= 0 && index < this.recentSearches.length) {
        this.recentSearches.splice(index, 1);
      }
    },
    collectSearchResults(search) {
      const exists = this.recentSearches.some(
        (item) => item.name === search.name
      );

      if (!exists) {
        this.recentSearches.unshift(search);

        if (this.recentSearches.length > 7) {
          this.recentSearches.pop();
        }
      }
    }, 

    handleSearchSubmit() {
      if (this.searchValue) {
        this.fetchSearchResults(this.searchValue).then((results) => {
          this.searchResults = results;
          this.collectSearchResults({
            name: this.searchValue,
            details: "ผลลัพธ์การค้นหา",
            image: "https://via.placeholder.com/40",
          });
        });
      }
    },  

    handleSearchInput(event) {
      const searchValue = event.target.value;
      if (searchValue) {
        this.searchValue = searchValue;
        this.fetchSearchResults(searchValue).then((results) => {
          this.searchResults = results;
        });
      } else {
        this.searchResults = [];
      }
    },  

    async fetchSearchResults(query) {
      return [
        {
          name: `Search result for ${query}`,
          details: "Details about the search result",
          image: "https://via.placeholder.com/40",
        },
        
      ];
    },

    handleSearchItemClick(item) {
      this.collectSearchResults(item);
    } 
  }
}

</script>

<style>
<<<<<<< Updated upstream
/* Add this CSS */
.search-results-overlay {
  position: absolute;
  top: 100%; /* Position it right below the search input */
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
  max-height: max-content; /* Adjust height as needed */
  overflow-y: auto;
}

/* Existing CSS */
.sidebar-transition {
  transition: transform 0.3s ease;
}

.shadow {
  padding: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
}

.dd {
  font-size: 18px;
  font-weight: bold;
}

.hh {
  width: 150px;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.kk {
  width: auto;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.vv {
  font-size: larger;
  font-weight: bold;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.overlay-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
}

select {
  padding: 8px;
  font-size: 16px;
}

.search-container {
  position: relative;
  width: 100%;
}

.dd {
  font-size: 18px;
  font-weight: bold;
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

.hh {
  width: 150px;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.kk {
  width: auto;
  text-align: center;
  border-radius: 10%;
  background-color: blanchedalmond;
}

.vv {
  font-size: larger;
  font-weight: bold;
}

select {
  padding: 8px;
  font-size: 16px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
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
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #65558f;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.content-box {
  padding: 20px;
}

.sw {
  border-radius: 40px;
}
</style>
=======

.overlay1 {
  position: fixed;
  top: -120px;
  left: 160px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content1 {
  
  padding: 20px;
  border-radius: 8px;
}

</style>
>>>>>>> Stashed changes
