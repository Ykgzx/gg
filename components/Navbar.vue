<template>
  <div class="px-[6%] py-5 bg-sweet-pink-300 rounded-bl-full h-[200px]">
    <div class="flex justify-between items-center mb-3">
      <div class="flex items-center gap-8">
        <button @click="toggleSidebar"><div class=""><img src="/Group 1.png" alt=""></div></button>
        <div class="text-xl font-bold text-white">Logo</div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search...."
          class="rounded-full p-2 border-none shadow-md w-[250px]"
        />
      </div>
    </div>

    <div class="flex justify-center pt-10">
      <input
        type="text"
        placeholder="แชร์ข้อมูลสัตว์เลี้ยงของคุณสิ..."
        class="w-[30%] rounded-full border-none shadow-md px-5 py-2"
      />
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


    <!-- Sidebar -->
    <div
      :class="[
        'fixed top-0 left-0 h-full bg-sweet-pink-200 transition-transform duration-300 border border-black border-t-0',
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
          <a href="/postcorrect" ><li class="">หน้าหลัก</li></a>
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
import friend_recomment from "./friend_recomment.vue";
export default {
  components: { friend_recomment },
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
          name: "นายA",
          details: "7 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "นางB",
          details: "4 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },

        // More items here

        {
          name: "สุดหล่อC",
          details: "6 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "เด็กD",
          details: "2 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "สาวE",
          details: "3 รายการใหม่",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "หนุ่มF",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "คนสวยG",
          details: "",
          image: "https://via.placeholder.com/40",
        },
        {
          name: "น้องใหม่H",
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
