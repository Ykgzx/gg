<template>
    <div class="bg-pippin-100">
        <div class="py-7 bg-sweet-pink-300 rounded-bl-full h-[200px]">

            <div class="flex flex-col gap-14">
                <div class=" flex justify-between mx-[3%]">
                    <div class="flex gap-6 text-xl">
                        <a href="/postcorrect"><img src="/arrow.png" alt=""></a>  <h1>แท็กผู้คน</h1>
                    </div>
                    <div class="text-xl text-white border border-white rounded-full w-24 h-9 flex justify-center items-center">
                        <a href="/postcorrect">เรียบร้อย</a>
                    </div>
                </div>

                <div class="flex justify-center h-16">
                    <h1></h1>
                    <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar" />
                    <ul>
                        <li v-for="item in filteredItems" :key="item">
                            {{  }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    <div class="bg-sweet-pink-300">
        <div class="bg-pippin-100 rounded-tr-[100px]">

            <div class="flex">
            <div class="flex flex-col gap-8">
                <div class="font-bold flex ml-16 mt-6">
                    แนะนำ
                </div>
                
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
                </div>
                <input class="h-6 w-6" type="checkbox" v-model="isOn">
                </div>
                <div class="flex gap-[1000px]">
                <div class="flex ml-16 gap-6">
                    <img src="/Pro.png" alt=""> <h1 class="font-bold text-xl text-sweet-pink-300">Username</h1>
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
  width: 316px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 64px;
}

</style>