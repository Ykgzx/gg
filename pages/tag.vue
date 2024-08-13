<template>
    <div class="flex flex-col gap-14">
        <div class="ng flex justify-center gap-[900px] ">
            <div class="flex gap-6 text-xl">
                <a href="/post"><img src="/arrow.png" alt=""></a>  <h1>แท็กผู้คน</h1>
            </div>
            <div class="text-xl">
                เรียบร้อย
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <div class="flex justify-center h-16">
                <h1></h1>
                <input type="text" v-model="searchQuery" placeholder="ค้นหา" class="search-bar" />
                <ul>
                    <li v-for="item in filteredItems" :key="item">
                        {{  }}
                    </li>
                </ul>
            </div>
            <div>
            <div class="flex flex-col gap-8">
                <div class="font-bold flex ml-16">
                    แนะนำ
                </div>
                
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Proff.png" alt=""> <h1 class="font-bold text-xl">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
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
      searchQuery: '',
      items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Strawberry']
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style>

.ng{
  padding: 8px;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow here */
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

</style>