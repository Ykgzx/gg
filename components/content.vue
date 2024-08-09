<template>
  <div class="mx-[25%] my-4 bg-gray-100">
    <div class="border border-black p-3 rounded-xl">
      <div class="flex items-center gap-3 pb-2">
        <i class="fa-regular fa-user"></i>
        <div class="flex items-end gap-2">
          <div class="text-xs"> {{ post.username }}</div>
          <div class="text-xs"> {{ post.time_upload }}</div>
        </div>
        <div class="ml-auto">
          <button ref="moreButton" class="fa-solid fa-ellipsis" @click="toggleMore"></button>
        </div>
      </div>
      <p>{{ post.text }}</p>
      <img
        v-if="post.image"
        :src="post.image"
        alt="picture"
        class="mt-2 w-[500px] p-3 flex justify-center items-center mx-auto"
      />
      <div class="flex items-center">
        <div class="border border-black px-1 flex items-center rounded-lg gap-2 w-max">
          <div class="">
            <button
              @click="toggleLike"
              :class="post.isLiked ? 'fa-solid fa-thumbs-up text-blue-500' : 'fa-solid fa-thumbs-up'"
            ></button>
            {{ post.likescount }}
          </div>
          <button class="fa-solid fa-thumbs-down p-1 flex items-end"></button>
          <div class="border p-1 border-l-1 border-black border-t-0 border-r-0 border-b-0">
            <button class="fa-solid fa-comments" @click="toggleComments"></button> {{ post.commentscount }}
          </div>
        </div>
        <div class="flex ml-auto border border-black p-1 rounded-lg">
          <button class="fa-solid fa-share" @click="toggleShare"></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay for More -->
  <div
    ref="overlayMore"
    v-if="overlayMore"
    :style="overlayMoreStyle"
    class="fixed bg-white p-5 rounded w-[290px] z-50 border border-black"
  >
    <div class="flex">
      <button
        class="fa-solid fa-xmark text-2xl ml-auto -mt-3 -mr-2"
        @click="toggleMore"
      ></button>
    </div>
    <div>
      <ul class="flex flex-col justify-start gap-2">
        <li><div class="fa-solid fa-thumbtack pr-3"></div>ปักหมุดโพสต์</li>
        <li><div class="fa-solid fa-bookmark pr-3"></div>บันทึกโพสต์</li>
        <li><div class="fa-solid fa-pen pr-3"></div>แก้ไขโพสต์</li>
        <li><div class="fa-solid fa-lock pr-3"></div>แก้ไขความเป็นส่วนตัว</li>
        <li><div class="fa-solid fa-trash pr-3"></div>ย้ายไปถังขยะ</li>
        <li>
          <div class="fa-solid fa-people-group pr-3"></div>ปิดการแจ้งเตือนสำหรับโพสต์นี้
        </li>
        <li><i class="fa-solid fa-copy pr-3"></i>คัดลอกลิงค์</li>
      </ul>
    </div>
  </div>

  <!-- Overlay for Share -->
  <div
    v-if="overlayShare"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="toggleShare"
  >
    <div class="bg-white p-5 rounded-lg w-[400px]">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-center flex-grow">ส่งไปยัง</h3>
        <button class="fa-solid fa-xmark text-2xl" @click="toggleShare"></button>
      </div>

      <div class="grid grid-cols-5 gap-4">
        <div
          class="flex flex-col items-center"
          v-for="user in share.users"
          :key="user.id"
        >
          <img :src="user.profile_picture" alt="" class="w-10 h-10 rounded-full" />
          <p>{{ user.username }}</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-circle-plus text-4xl"></i>
          <p>เพิ่มเติม</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-brands fa-facebook text-4xl"></i>
          <p>Facebook</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-brands fa-instagram text-4xl"></i>
          <p>Instagram</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-brands fa-line text-4xl"></i>
          <p>Line</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-brands fa-twitter text-4xl"></i>
          <p>X</p>
        </div>
        <div class="flex flex-col items-center">
          <i class="fa-solid fa-link text-4xl"></i>
          <p>คัดลอกลิงค์</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Overlay for Comments -->
  <div
    v-if="overlayComments"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
    @click.self="toggleComments"
  >
    <div class="bg-white rounded-t-2xl mx-[25%] w-full">
      <div class="flex items-center justify-between p-4 border-b">
        <h3>แสดงความคิดเห็น</h3>
        <button class="fa-solid fa-xmark text-2xl" @click="toggleComments"></button>
      </div>
      <div class="p-4 max-h-[400px] overflow-y-auto">
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="border-b pb-3 mb-3"
        >
          <div class="flex items-center mb-2">
            <i class="fa-regular fa-user mr-2"></i>
            <div class="text-sm">{{ comment.username }}</div>
            <div class="text-xs ml-2 text-gray-500">{{ comment.time_posted }}</div>
          </div>
          <p class="text-sm">{{ comment.text }}</p>
          <!-- Like and Reply Buttons -->
          <div class="flex items-center mt-2">
            <button
              @click="toggleCommentLike(index)"
              :class="comment.isLiked ? 'fa-solid fa-thumbs-up text-blue-500' : 'fa-solid fa-thumbs-up'"
            ></button>
            <span class="text-xs ml-1">{{ comment.likes }}</span>
            <button
              class="fa-solid fa-reply ml-4"
              @click="toggleReply(index)"
            ></button>
          </div>
          <!-- Replies -->
          <div v-if="comment.showReply" class="ml-4 mt-2">
            <div
              v-for="(reply, replyIndex) in comment.replies"
              :key="replyIndex"
              class="border-b pb-2 mb-2"
            >
              <div class="flex items-center mb-1">
                <i class="fa-regular fa-user mr-2"></i>
                <div class="text-sm">{{ reply.username }}</div>
                <div class="text-xs ml-2 text-gray-500">{{ reply.time_posted }}</div>
              </div>
              <p class="text-sm">{{ reply.text }}</p>
              <!-- Like and Reply to Reply Buttons -->
              <div class="flex items-center mt-2">
                <button
                  @click="toggleReplyLike(index, replyIndex)"
                  :class="reply.isLiked ? 'fa-solid fa-thumbs-up text-blue-500' : 'fa-solid fa-thumbs-up'"
                ></button>
                <span class="text-xs ml-1">{{ reply.likes }}</span>
                <button
                  class="fa-solid fa-reply ml-4"
                  @click="toggleReplyToReply(index, replyIndex)"
                ></button>
              </div>
              <!-- Reply to Reply -->
              <div v-if="reply.showReplyToReply" class="ml-4 mt-2">
                <input
                  v-model="reply.newReplyToReply"
                  placeholder="เขียนตอบกลับ..."
                  class="border p-2 rounded-lg mt-2 w-full"
                />
                <button
                  class="fa-solid fa-paper-plane text-xl text-blue-500 mt-1"
                  @click="submitReplyToReply(index, replyIndex)"
                ></button>
              </div>
            </div>
            <input
              v-model="comment.newReply"
              placeholder="เขียนตอบกลับ..."
              class="border p-2 rounded-lg mt-2 w-full"
            />
            <button
              class="fa-solid fa-paper-plane text-xl text-blue-500 mt-1"
              @click="submitReply(index)"
            ></button>
          </div>
        </div>
      </div>
      <div class="p-4 border-t">
        <input
          v-model="newComment"
          placeholder="เขียนความคิดเห็น..."
          class="border p-2 rounded-lg w-full"
        />
        <button
          class="fa-solid fa-paper-plane text-xl text-blue-500 mt-1"
          @click="submitComment"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        username: "Username",
        time_upload: "2 นาทีที่แล้ว",
        text: "Lorem ipsum dolor sit amet consectetur...",
        image: "/Rectangle 224.png",
        likescount: 10,
        commentscount: 10,
        isLiked: false,
      },
      share: {
        users: [
          { id: 1, username: "User1", profile_picture: "https://via.placeholder.com/40" },
          { id: 2, username: "User2", profile_picture: "https://via.placeholder.com/40" },
          { id: 3, username: "User3", profile_picture: "https://via.placeholder.com/40" },
          { id: 4, username: "User4", profile_picture: "https://via.placeholder.com/40" },
        ],
      },
      comments: [
        {
          username: "Username1",
          text: "ความคิดเห็นเกี่ยวกับโพสต์นี้...",
          time_posted: "7 นาทีที่แล้ว",
          likes: 5,
          isLiked: false,
          showReply: false,
          newReply: "",
          replies: [
            {
              username: "ReplyUser1",
              text: "ความคิดเห็นตอบกลับ...",
              time_posted: "3 นาทีที่แล้ว",
              likes: 2,
              isLiked: false,
              showReplyToReply: false,
              newReplyToReply: "",
            },
          ],
        },
        {
          username: "Username2",
          text: "ความคิดเห็นเกี่ยวกับโพสต์นี้...",
          time_posted: "7 นาทีที่แล้ว",
          likes: 2,
          isLiked: false,
          showReply: false,
          newReply: "",
          replies: [],
        },
        {
          username: "Username3",
          text: "ความคิดเห็นเกี่ยวกับโพสต์นี้...",
          time_posted: "7 นาทีที่แล้ว",
          likes: 0,
          isLiked: false,
          showReply: false,
          newReply: "",
          replies: [],
        },
      ],
      newComment: "",
      overlayShare: false,
      overlayMore: false,
      overlayMoreStyle: {},
      overlayComments: false,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        this.share.users = data.users;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    toggleShare() {
      this.overlayShare = !this.overlayShare;
    },
    toggleMore() {
      this.overlayMore = !this.overlayMore;
      if (this.overlayMore) {
        document.addEventListener("click", this.handleOutsideClick);
        this.$nextTick(() => {
          const button = this.$refs.moreButton;
          const rect = button.getBoundingClientRect();
          const overlay = this.$refs.overlayMore;
          const overlayRect = overlay.getBoundingClientRect();
          this.overlayMoreStyle = {
            top: `${rect.bottom + window.scrollY}px`,
            left: `${rect.left + window.scrollX - (overlayRect.width - 5)}px`,
          };
        });
      } else {
        document.removeEventListener("click", this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      const overlay = this.$refs.overlayMore;
      if (
        overlay &&
        !overlay.contains(event.target) &&
        !this.$refs.moreButton.contains(event.target)
      ) {
        this.toggleMore();
      }
    },
    toggleLike() {
      if (this.post.isLiked) {
        this.post.likescount--;
      } else {
        this.post.likescount++;
      }
      this.post.isLiked = !this.post.isLiked;
    },
    toggleComments() {
      this.overlayComments = !this.overlayComments;
    },
    toggleCommentLike(index) {
      const comment = this.comments[index];
      if (comment.isLiked) {
        comment.likes--;
      } else {
        comment.likes++;
      }
      comment.isLiked = !comment.isLiked;
    },
    toggleReply(index) {
      this.comments[index].showReply = !this.comments[index].showReply;
    },
    toggleReplyLike(commentIndex, replyIndex) {
      const reply = this.comments[commentIndex].replies[replyIndex];
      if (reply.isLiked) {
        reply.likes--;
      } else {
        reply.likes++;
      }
      reply.isLiked = !reply.isLiked;
    },
    toggleReplyToReply(commentIndex, replyIndex) {
      const reply = this.comments[commentIndex].replies[replyIndex];
      reply.showReplyToReply = !reply.showReplyToReply;
    },
    submitReply(index) {
      const comment = this.comments[index];
      if (comment.newReply.trim() !== "") {
        comment.replies.push({
          username: "CurrentUser", // Example: Use the logged-in user's name
          text: comment.newReply,
          time_posted: "เพิ่งโพสต์",
          likes: 0,
          isLiked: false,
          showReplyToReply: false,
          newReplyToReply: "",
        });
        comment.newReply = "";
      }
    },
    submitReplyToReply(commentIndex, replyIndex) {
      const reply = this.comments[commentIndex].replies[replyIndex];
      if (reply.newReplyToReply.trim() !== "") {
        this.comments[commentIndex].replies.push({
          username: "CurrentUser", // Example: Use the logged-in user's name
          text: reply.newReplyToReply,
          time_posted: "เพิ่งโพสต์",
          likes: 0,
          isLiked: false,
          showReplyToReply: false,
          newReplyToReply: "",
        });
        reply.newReplyToReply = "";
      }
    },
    submitComment() {
      if (this.newComment.trim() !== "") {
        this.comments.push({
          username: "Username", // Example: Use the logged-in user's name
          text: this.newComment,
          time_posted: "เพิ่งโพสต์",
          likes: 0,
          isLiked: false,
          showReply: false,
          newReply: "",
          replies: [],
        });
        this.newComment = "";
        this.post.commentscount++;
      }
    },
  },
};
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าจำเป็น */
</style>
