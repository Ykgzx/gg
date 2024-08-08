<template>
    <div>
      <button @click="toggleCommentOverlay">ดูความคิดเห็น</button>
  
      <div v-if="showCommentOverlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-4 rounded-lg w-[60%] max-h-[80%] overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <h3>41 แสดงความคิดเห็น</h3>
            <button @click="toggleCommentOverlay" class="text-2xl">&times;</button>
          </div>
  
          <div v-for="comment in comments" :key="comment.id" class="border-b py-3">
            <div class="flex items-center mb-2">
              <i class="fa-regular fa-user text-2xl"></i>
              <div class="ml-2">
                <p>{{ comment.username }}</p>
                <small>{{ comment.time }}</small>
              </div>
            </div>
            <p>{{ comment.text }}</p>
            <div class="flex justify-between text-sm text-gray-500 mt-2">
              <span @click="replyToComment(comment)">ตอบกลับ</span>
              <span>{{ comment.likes }} ❤️</span>
            </div>
          </div>
  
          <div class="mt-4 border-t pt-4">
            <textarea v-model="newComment" placeholder="เขียนความคิดเห็นของคุณ..." class="w-full p-2 border rounded"></textarea>
            <button @click="postComment" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">ส่งความคิดเห็น</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showCommentOverlay: false,
        comments: [
          { id: 1, username: "Username1", time: "8 ปีที่แล้ว", text: "ความคิดเห็นตัวอย่าง", likes: "2.5k" },
          { id: 2, username: "Username2", time: "8 ปีที่แล้ว", text: "ความคิดเห็นตัวอย่าง", likes: "2.5k" },
          // เพิ่มความคิดเห็นเพิ่มเติมตามต้องการ
        ],
        newComment: ""
      };
    },
    methods: {
      toggleCommentOverlay() {
        this.showCommentOverlay = !this.showCommentOverlay;
      },
      postComment() {
        if (this.newComment.trim() !== "") {
          this.comments.push({
            id: this.comments.length + 1,
            username: "You",
            time: "เมื่อสักครู่",
            text: this.newComment,
            likes: "0",
          });
          this.newComment = "";
        }
      },
      replyToComment(comment) {
        this.newComment = `@${comment.username} `;
        this.$refs.commentInput.focus();
      },
    },
  };
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์เพิ่มเติมถ้าจำเป็น */
  </style>
  