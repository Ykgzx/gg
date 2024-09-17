<template>
  <div class="mx-20 mt-3">
    <div class="border border-black p-3 rounded-xl">
      <div class="flex items-center gap-3 pb-2">
        <img v-if="post.profile_picture" :src="post.profile_picture" alt="profile" class="w-8 h-8 rounded-full"/>
        <div class="flex items-end gap-2">
          <div class="text-xs">{{ post.username }}</div>
          <div class="text-xs">{{ formatDate(post.created_at) }}</div>
        </div>
        <div class="ml-auto">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
<<<<<<< Updated upstream
      <p>{{ post.text }}</p>
      <img v-if="post.image" :src="post.image" alt="picture" class="mt-2" />
      <div class="flex items-center">
        <div
          class="border border-black px-1 flex items-center rounded-lg gap-2 w-max"
        >
          <div class="">
            <button class="fa-solid fa-thumbs-up"></button> 10{{
              post.likescount
            }}
          </div>
          <button class="fa-solid fa-thumbs-down p-1 flex items-end"></button>
          <div
            class="border p-1 border-l-1 border-black border-t-0 border-r-0 border-b-0"
          >
            <button class="fa-solid fa-comments"></button> 10
            {{ post.commentscount }}
=======
      <p class="py-8">{{ post.content }}</p>
      
      <!-- Display images -->
      <div v-if="post.images && post.images.length > 0">
        <div v-for="image in post.images" :key="image">
          <img :src="image" alt="Image" class="mt-2 w-[500px] flex justify-center items-center mx-auto" />
        </div>
      </div>

      <!-- Display videos -->
      <div v-if="post.videos && post.videos.length > 0">
        <div v-for="video in post.videos" :key="video" class="mt-2">
          <video controls class="w-[500px] mx-auto">
            <source :src="video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="px-1 flex items-center rounded-lg gap-2 w-max">
          <div class="flex flex-col">
            <button
              @click="toggleLike"
              :class="post.isLiked ? 'fa-solid fa-heart text-sweet-pink-500' : 'fa-regular fa-heart'"
            ></button>
            {{ post.likes }}
          </div>
          <div class="p-1 flex flex-col">
            <button
              class="fa-solid fa-comments"
              @click="toggleComments"
            ></button>
            {{ post.comment_count || 0 }}
>>>>>>> Stashed changes
          </div>
        </div>
        <div class="flex ml-auto border border-black p-1 rounded-lg">
          <button class="fa-solid fa-share" @click="toggleOverlay"></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay -->
  <div
<<<<<<< Updated upstream
    v-if="overlayOpen"
=======
    ref="overlayMore"
    v-if="overlayMore"
    :style="overlayMoreStyle"
    class="fixed inline-block bg-sweet-pink-200 p-5 rounded w-[200px] z-50 border border-black"
  >
    <div class="flex">
      <button
        class="fa-solid fa-xmark text-2xl ml-auto -mt-3 -mr-2"
        @click="toggleMore"
      ></button>
    </div>
    <div>
      <ul class="flex flex-col justify-start gap-2">
        <button @click="toggleOverlay1">
        <li class="flex justify-start items-center ml-1">
          <div class="fa-solid fa-flag pr-3"></div>
          รายงาน
        </li>
        </button>
        <div v-if="isOverlayVisible1" class="overlayrr" @click="toggleOverlay1">
          <div class="overlay-contenttt" @click.stop>
            
            
            <div class="py-[0%] flex justify-center items-center gap-[200px] border-b-[1px] border-black">
              <h1 class="flex ml-[200px] text-xl font-bold mb-[14px]">รายงาน</h1>
              <button class="flex mb-[14px]" @click="toggleOverlay1"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
            <div class="mt-8 flex flex-col justify-center gap-10">
                <h1 class="text-xl font-bold">เหตุใดคุณจึงรายงานโพสต์นี้</h1>

                <button @click="toggleOverlay2">
                <div class="flex items-center justify-between text-gray-500">
                  <h1>การกลั่นแกล้งคุกคามหรือการใช้งานที่ไม่เหมาะสม</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
                </button>
                <div v-if="isOverlayVisible2" class="overlayrs" @click="toggleOverlay2">
                  <div class="overlay-contentts" @click.stop>
                    <div class="py-[2%] flex justify-center items-center gap-[250px] border-b-[1px] border-black">
                        <button @click="toggleOverlay2"><i class="fa-solid fa-arrow-left text-xl"></i></button>
                        <h1 class="flex mr-[250px] text-xl font-bold">รายงาน</h1>
                    </div>
                    <div class="px-12 mt-12 flex flex-col gap-4">
                        <h1 class="text-xl font-bold">คุณกำลังจะส่งรายงาน</h1>
                        <div class="flex items-center justify-between text-gray-500">
                        <h1>เราลบเฉพาะเนื้อหาที่ขัดต่อมาตรฐานชุมชนของเราออกเท่านั้น </h1>
                        </div>
                        <h1 class="text-xl font-bold">รายละเอียดการรายงาน</h1>
                        <div class="bt flex justify-center items-center mt-6 h-[44px] w-[508px] mx-auto">
                            <h1 class="">การกลั่นแกล้งคุกคามหรือการใช้งานที่ไม่เหมาะสม</h1>
                        </div>
                    </div>

                    <button @click="toggleOverlay3">
                    <div class="pl-[486px] flex justify-end">
                        <div class="bts flex justify-center items-center mt-10 h-[44px] w-[68px]">
                            <h1 class="text-xl text-gray-500">ส่ง</h1>
                        </div>
                    </div>
                    </button>
                    <div v-if="isOverlayVisible3" class="overlayrc" @click="toggleOverlay3">
                      <div class="overlay-contenttc" @click.stop>
                        <div class="py-[2%] flex justify-center items-center gap-[250px] border-b-[1px] border-black">
                              <h1 class="flex ml-[250px] text-xl font-bold">รายงาน</h1>
                              <a href="/profile"><i class="fa-solid fa-circle-xmark"></i></a>
                        </div>
                        <a href="/">
                        <div class="px-[200px] flex justify-end mb-6">
                          <div class="bts flex justify-center items-center mt-16 h-[44px] w-[218px]">
                            <h1 class="text-xl text-gray-500">รายงานสำเร็จ</h1>
                          </div>
                        </div>
                      </a>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="flex items-center justify-between text-gray-500">
                <h1>การทารุณหรือทำร้ายร่างกายสัตว์</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="flex items-center justify-between text-gray-500">
                <h1>เนื้อหารุนแรง แสดงความเกลียดชัง หรือรบกวนจิตใจ</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="flex items-center justify-between text-gray-500">
                <h1>เนื้อหาสำหรับผู้ใหญ่</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="flex items-center justify-between text-gray-500">
                <h1>การหลอกลวง การฉ้อโกง หรือข้อมูลเท็จ</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
                <div class="flex items-center justify-between text-gray-500">
                <h1>ฉันไม่ต้องการเห็นสื่งนี้</h1><i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
          </div>
        </div>

        <button @click="toggleOverlay4">
        <li class="flex justify-start items-center">
          <div class="fa-solid fa-user-slash pr-3 "></div>
           บล็อค
        </li>
        </button>
        <div v-if="isOverlayVisible4" class="overlaybl" @click="toggleOverlay4">
          <div class="overlay-contentbl" @click.stop>
            <div class="py-[2%] flex justify-center items-center text-xl font-bold border-b-[1px] border-black">
                บล็อค
            </div>
            <div class="flex flex-col gap-8">
                <h1 class="text-xl font-bold ml-2 mt-6">บล็อค  John Doe  หรือไม่</h1>
                <div class="flex flex-col justify-center items-center px-2">
                    <h1>พวกเขาจะไม่สามารถส่งข้อความให้คุณ ดูโพสต์ของคุณ หรือค้นหาโปรไฟล์ของคุณ</h1>
                    <h1>ซึ่งไม่รวมถึงสถานการณ์อื่นๆเช่น การสนทนาแบบกลุ่มที่คุณทั้งคู่ร่วมกัน</h1>
                    <h1>พวกเขาจะไม่ได้รับการแจ้งเตือนให้ทราบเมื่อคุณบล็อกพวกเขา</h1>
                </div>
            </div>
            <div class="flex justify-center items-center gap-10 mt-12">
                <button @click="toggleOverlay4">
                  <div class="cc h-[44px] w-[210px] flex justify-center items-center">
                      <h1 class="text-xl font-bold">ยกเลิก</h1>
                  </div>
                </button>
                <button @click="toggleOverlay5">
                  <div class="b h-[44px] w-[210px] flex justify-center items-center">
                      <h1 class="text-xl font-bold">บล็อค</h1>
                  </div>
                </button>
                <div v-if="isOverlayVisible5" class="overlayblc" @click="toggleOverlay5">
                  <div class="overlay-contentblc" @click.stop>
                    <div class="py-[2%] flex justify-center items-center gap-[180px] text-xl font-bold border-b-[1px] border-black">
                      <h1 class="pl-[200px] flex mb-4">บล็อค</h1>
                      <a href="/profile"><i class="fa-solid fa-x flex mb-4"></i></a>
                    </div>
                    <div class="flex flex-col gap-10 mb-[110px]">
                      <h1 class="text-xl font-bold mt-8 flex justify-center items-center">คุณบล็อกบัญชีของ John Doe แล้ว</h1>
                      <div class="flex justify-center items-center">
                        <h1>คุณจะไม่สามารถเห็นหรือติดต่อกันได้</h1>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </ul>
    </div>
  </div>

  <!-- Overlay for Share -->
  <div
    v-if="overlayShare"
>>>>>>> Stashed changes
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-5 rounded w-[400px]">
      <div class="flex">
        <p class="ml-[40%] mb-3">ส่งไปยัง</p>

        <button class="ml-auto rounded" @click="toggleOverlay">
          <div class="font-bold text-lg -mt-3"> X </div>
        </button>
      </div>
      <div>
        <ul class="flex gap-10 justify-center">
          <li><div class="flex flex-col"><img src="/Proff.png" alt="" width="40px"> <p> sfsdfgmdgfk{{ share.username }} </p> </div></li>
          <li><div><img src="/Proff.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><img src="/Proff.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><img src="/Proff.png" alt=""> <p> {{ share.username }} </p> </div></li>
          <li><div><i class="fa-solid fa-ellipsis"></i> <div class="text-xs flex justify-center"> เพิ่มเติม </div> </div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({
        profile_picture: '',
        username: '',
        created_at: '',
        content: '',
        images: [],
        videos: [],
        isLiked: false,
        likes: 0,
        comment_count: 0,
      }),
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
<<<<<<< Updated upstream
      post: {
        username: "oat",
        time_upload: "เมื่อ 8 ปีที่แล้ว",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam soluta obcaecati fuga nobis in! Dolorum impedit vitae dignissimos dicta eligendi libero soluta, quibusdam esse? Praesentium sit eaque alias blanditiis veniam.",
        image: "",
      },
      share: {
        profile_picture: "",
      },
      overlayOpen: false,
=======
      overlayMore: false,
      overlayShare: false,
      overlayComments: false,
      isOverlayVisible1: false,
      isOverlayVisible2: false,
      isOverlayVisible3: false,
      isOverlayVisible4: false,
      isOverlayVisible5: false,
      overlayMoreStyle: {},
      newComment: "",
      replyTarget: null,
      share: {
        users: [
          { id: 1, username: "เพื่อน 1", profile_picture: "https://via.placeholder.com/150" },
          { id: 2, username: "เพื่อน 2", profile_picture: "https://via.placeholder.com/150" },
          { id: 3, username: "เพื่อน 3", profile_picture: "https://via.placeholder.com/150" },
          { id: 4, username: "เพื่อน 4", profile_picture: "https://via.placeholder.com/150" },
        ],
      },
>>>>>>> Stashed changes
    };
  },
  // mounted() {
  //   // Assuming you're using a method to fetch data from your backend
  //   this.fetchPost();
  // },
  methods: {
<<<<<<< Updated upstream
    // async fetchPost() {
    //   try {
    //     // Replace with your actual API endpoint
    //     const response = await fetch("https://your-backend-api.com/post");
    //     const data = await response.json();

    //     // Assuming your backend returns a post object with username, time_upload, text, and image fields
    //     this.post = data;
    //   } catch (error) {
    //     console.error("Error fetching post data:", error);
    //   }
    // },
    toggleOverlay() {
      this.overlayOpen = !this.overlayOpen;
=======
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'};
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", options);
    },
    async postComment() {
      if (this.newComment.trim() !== "") {
        const commentObj = {
          username: "Current User",
          time_posted: new Date().toISOString(),
          text: this.newComment,
          likes: 0,
          isLiked: false,
          replies: [],
        };

        try {
          const response = await axios.post('http://localhost:3000/', {
            post_id: this.post.post_id,
            content: this.newComment,
          });

          if (response.status === 201) {
            if (!this.replyTarget) {
              this.comments.push(commentObj);
            } else {
              const { type, index, replyIndex, commentIndex } = this.replyTarget;
              if (type === "comment") {
                this.comments[index].replies.push(commentObj);
                this.comments[index].showReplies = true;
              } else if (type === "reply") {
                this.comments[commentIndex].replies[replyIndex].replies.push(commentObj);
                this.comments[commentIndex].replies[replyIndex].showReplies = true;
              } else if (type === "nestedReply") {
                this.comments[commentIndex].replies[replyIndex].replies.push(commentObj);
                this.comments[commentIndex].replies[replyIndex].showReplies = true;
              }
            }

            this.newComment = "";
            this.replyTarget = null;
          } else {
            console.error('Failed to post the comment:', response);
          }
        } catch (error) {
          console.error('An error occurred while posting the comment:', error);
        }
      }
    },
    toggleOverlay1() { this.isOverlayVisible1 = !this.isOverlayVisible1; },
    toggleOverlay2() { this.isOverlayVisible2 = !this.isOverlayVisible2; },
    toggleOverlay3() { this.isOverlayVisible3 = !this.isOverlayVisible3; },
    toggleOverlay4() { this.isOverlayVisible4 = !this.isOverlayVisible4; },
    toggleOverlay5() { this.isOverlayVisible5 = !this.isOverlayVisible5; },
    toggleLike() {
      this.post.isLiked = !this.post.isLiked;
      this.post.likes += this.post.isLiked ? 1 : -1;
    },
    toggleCommentLike(commentIndex) {
      const comment = this.comments[commentIndex];
      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;
    },
    toggleReplyLike(commentIndex, replyIndex) {
      const reply = this.comments[commentIndex].replies[replyIndex];
      reply.isLiked = !reply.isLiked;
      reply.likes += reply.isLiked ? 1 : -1;
    },
    toggleNestedReplyLike(commentIndex, replyIndex, nestedIndex) {
      const nestedReply = this.comments[commentIndex].replies[replyIndex].replies[nestedIndex];
      nestedReply.isLiked = !nestedReply.isLiked;
      nestedReply.likes += nestedReply.isLiked ? 1 : -1;
    },
    toggleMore() {
      this.overlayMore = !this.overlayMore;
      if (this.overlayMore) {
        const moreButton = this.$refs.moreButton;
        const rect = moreButton.getBoundingClientRect();
        this.overlayMoreStyle = {
          top: `${rect.bottom + window.scrollY}px`,
          left: `${rect.left + window.scrollX - 180}px`,
        };
      }
    },
    toggleShare() {
      this.overlayShare = !this.overlayShare;
    },
    toggleComments() {
      this.overlayComments = !this.overlayComments;
    },
    toggleViewReplies(commentIndex) {
      const comment = this.comments[commentIndex];
      comment.showReplies = !comment.showReplies;
    },
    toggleNestedReplies(commentIndex, replyIndex) {
      const reply = this.comments[commentIndex].replies[replyIndex];
      reply.showReplies = !reply.showReplies;
    },
    setReplyTarget(type, commentIndex, replyIndex, nestedIndex) {
      if (type === "comment") {
        this.replyTarget = {
          type: "comment",
          index: commentIndex,
          username: this.comments[commentIndex].username,
        };
      } else if (type === "reply") {
        this.replyTarget = {
          type: "reply",
          index: replyIndex,
          commentIndex: commentIndex,
          username: this.comments[commentIndex].replies[replyIndex].username,
        };
      } else if (type === "nestedReply") {
        this.replyTarget = {
          type: "nestedReply",
          index: nestedIndex,
          replyIndex: replyIndex,
          commentIndex: commentIndex,
          username: this.comments[commentIndex].replies[replyIndex].replies[nestedIndex].username,
        };
      }
    },
    cancelReply() {
      this.replyTarget = null;
      this.newComment = "";
    },
    countReplies(comment) {
      return comment.replies ? comment.replies.length : 0;
>>>>>>> Stashed changes
    },
  },
};
</script>

<<<<<<< Updated upstream
<style>
/* Add any additional styles if needed */
</style>
=======
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.overlayrr,
.overlayrs,
.overlayrc,
.overlaybl,
.overlayblc {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.overlay-contenttt, 
.overlay-contentts, 
.overlay-contenttc, 
.overlay-contentbl, 
.overlay-contentblc {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.bt, .bts, .cc, .b {
  border-radius: 10px;
}

.bt {
  background-color: #eae6d6;
}

.bts {
  background-color: #dfcda6;
}

.cc {
  background-color: #E0DBC8;
}

.b {
  background-color: #ebddbb;
}
</style>
>>>>>>> Stashed changes
