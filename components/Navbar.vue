<template>
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
          <button @click="showOverlay = true">
            <li class="flex justify-start">หน้าหลัก</li>
          </button>
          <!-- //overlay// -->
          <div v-if="showOverlay" class="overlay" @click="closeOverlay">
            <div class="overlay-content h-full" @click.stop>
              <h2></h2>
              <button
                class="vv flex ml-auto"
                @click="closeOverlay"
                aria-label="Close overlay"
              >
                X
              </button>
              <div class="flex flex-col gap-24">
                <div class="flex justify-center gap-[1000px]">
                  <div class="flex justify-start items-center gap-8">
                    <a href="/"></a>
                    <h1 class="text-xl">สร้างโพสต์</h1>
                  </div>
                  <div class="kk border border-black text-xl flex justify-end">
                    โพสต์
                  </div>
                </div>
                <div class="flex gap-8 pl-16">
                  <img class="w-12 h-12" src="/" alt="Group image" />
                  <div class="flex gap-[700px]">
                    <div>
                      <div>
                        <h1 class="dd">Username</h1>
                      </div>
                      <div>
                        <label class="hh border border-black" for="options">
                          ตั้งค่าความเป็นส่วนตัว
                        </label>
                        <select
                          id="options"
                          v-model="selectedOption"
                          aria-label="Privacy settings"
                        >
                          <option
                            v-for="option in options"
                            :key="option"
                            :value="option"
                          >
                            {{ option }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <a
                        class="flex font-bold text-xl gap-4"
                        href=""
                        aria-label="Settings"
                      >
                        <img src="/Group 161.png" alt="Settings icon" /> setting
                      </a>
                      <a href="" aria-label="Another setting">
                        <img src="/" alt="Another setting icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <li>ชุมชน</li>
          <li>เพิ่มชุมชน</li>
          <li>แชท</li>
          <li>ตระกร้า</li>
          <li>ตั้งค่า</li>
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
      searchResultsOverlay: false,
      searchOpen: false,
      searchValue: "",
      selectedOption: "",
      options: ["เฉพาะฉัน", "สาธารณะ", "แชร์กับ", "เพื่อนยกเว้น"],
      searchResults: [],
      recentSearches: [
        {
          name: "กยศ.มหาวิทยาลัยพะเยา",
          details: "7 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "WeLove_ICTUP",
          details: "4 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "คนเบื้องหลัง",
          details: "6 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "Nattapat Vilathorn",
          details: "2 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "Surapong Promlok",
          details: "3 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "วรรณกร จันทบุรี",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "UP Language Centre",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "Freshy UP'65",
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
        // More search results
      ];
    },
    handleSearchItemClick(item) {
      this.collectSearchResults(item);
    },
  }
}
}

</script>

<style>
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

.search-bar {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 90%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 64px;
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
