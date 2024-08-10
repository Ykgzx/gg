<template>
  <div class="mx-[25%] my-4 bg-gray-100">
    <div class="border border-black p-3 rounded-xl">
      <div class="flex items-center gap-3 pb-2">
        <i class="fa-regular fa-user"></i>
        <div class="flex items-end gap-2">
          <div class="text-xs">{{ post.username }}</div>
          <div class="text-xs">{{ post.time_upload }}</div>
        </div>
        <div class="ml-auto">
          <button
            ref="moreButton"
            class="fa-solid fa-ellipsis"
            @click="toggleMore"
          ></button>
        </div>
      </div>
      <p class="py-2">{{ post.text }}</p>
      <img
        v-if="post.image"
        :src="post.image"
        alt="ภาพ"
        class="mt-2 w-[500px] p-3 flex justify-center items-center mx-auto"
      />
      <div class="flex items-center">
        <div
          class="border border-black px-1 flex items-center rounded-lg gap-2 w-max"
        >
          <div class="">
            <button
              @click="toggleLike"
              :class="
                post.isLiked
                  ? 'fa-solid fa-thumbs-up text-blue-500'
                  : 'fa-solid fa-thumbs-up'
              "
            ></button>
            {{ post.likescount }}
          </div>
          <button class="fa-solid fa-thumbs-down p-1 flex items-end"></button>
          <div
            class="border p-1 border-l-1 border-black border-t-0 border-r-0 border-b-0"
          >
            <button
              class="fa-solid fa-comments"
              @click="toggleComments"
            ></button>
            {{ post.commentscount }}
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
        <li>
          <div class="fa-solid fa-thumbtack pr-3"></div>
          ปักหมุดโพสต์
        </li>
        <li>
          <div class="fa-solid fa-bookmark pr-3"></div>
          บันทึกโพสต์
        </li>
        <li>
          <div class="fa-solid fa-pen pr-3"></div>
          แก้ไขโพสต์
        </li>
        <li>
          <div class="fa-solid fa-lock pr-3"></div>
          แก้ไขความเป็นส่วนตัว
        </li>
        <li>
          <div class="fa-solid fa-trash pr-3"></div>
          ย้ายไปถังขยะ
        </li>
        <li>
          <div class="fa-solid fa-people-group pr-3"></div>
          ปิดการแจ้งเตือนสำหรับโพสต์นี้
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
        <button
          class="fa-solid fa-xmark text-2xl"
          @click="toggleShare"
        ></button>
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div
          class="flex flex-col items-center"
          v-for="user in share.users"
          :key="user.id"
        >
          <img
            :src="user.profile_picture"
            alt=""
            class="w-10 h-10 rounded-full"
          />
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
        <button
          class="fa-solid fa-xmark text-2xl"
          @click="toggleComments"
        ></button>
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
            <div class="text-xs ml-2 text-gray-500">
              {{ comment.time_posted }}
            </div>
          </div>
          <p class="text-sm">{{ comment.text }}</p>
          <div class="flex items-center mt-2 gap-3">
            <button
              @click="toggleCommentLike(index)"
              :class="
                comment.isLiked
                  ? 'fa-solid fa-thumbs-up text-blue-500'
                  : 'fa-solid fa-thumbs-up'
              "
            ></button>
            <span class="text-xs ml-1">{{ comment.likes }}</span>
            <button
              class="fa-solid fa-reply ml-4"
              @click="setReplyTarget('comment', index)"
            ></button>
            <button
              v-if="comment.replies.length"
              @click="toggleViewReplies(index)"
            >
              ดู {{ countReplies(comment) }} การตอบกลับ
            </button>
          </div>

          <!-- Replies Section -->
          <div v-if="comment.showReplies">
            <div
              v-for="(reply, replyIndex) in comment.replies"
              :key="replyIndex"
              class="pl-4 mt-2 border-l"
            >
              <div class="flex items-center mb-2">
                <i class="fa-regular fa-user mr-2"></i>
                <div class="text-sm">{{ reply.username }}</div>
                <div class="text-xs ml-2 text-gray-500">
                  {{ reply.time_posted }}
                </div>
              </div>
              <p class="text-sm">{{ reply.text }}</p>
              <div class="flex items-center mt-2">
                <button
                  @click="toggleReplyLike(index, replyIndex)"
                  :class="
                    reply.isLiked
                      ? 'fa-solid fa-thumbs-up text-blue-500'
                      : 'fa-solid fa-thumbs-up'
                  "
                ></button>
                <span class="text-xs ml-1">{{ reply.likes }}</span>
                <button
                  class="fa-solid fa-reply ml-4"
                  @click="setReplyTarget('reply', replyIndex, index)"
                ></button>
                <button
                  v-if="reply.replies.length"
                  @click="toggleNestedReplies(index, replyIndex)"
                >
                  ดู {{ reply.replies.length }} การตอบกลับ
                </button>
              </div>

              <!-- Nested Replies Section -->
              <div v-if="reply.showReplies" class="pl-4 border-l">
                <div
                  v-for="(nestedReply, nestedIndex) in reply.replies"
                  :key="nestedIndex"
                  class="pl-4 mt-2"
                >
                  <div class="flex items-center mb-2">
                    <i class="fa-regular fa-user mr-2"></i>
                    <div class="text-sm">{{ nestedReply.username }}</div>
                    <div class="text-xs ml-2 text-gray-500">
                      {{ nestedReply.time_posted }}
                    </div>
                  </div>
                  <p class="text-sm">{{ nestedReply.text }}</p>
                  <div class="flex items-center mt-2">
                    <button
                      @click="toggleNestedReplyLike(index, replyIndex, nestedIndex)"
                      :class="
                        nestedReply.isLiked
                          ? 'fa-solid fa-thumbs-up text-blue-500'
                          : 'fa-solid fa-thumbs-up'
                      "
                    ></button>
                    <span class="text-xs ml-1">{{ nestedReply.likes }}</span>
                    <button
                      class="fa-solid fa-reply ml-4"
                      @click="setReplyTarget('nestedReply', index, replyIndex, nestedIndex)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Add New Comment Section -->
        <div class="flex flex-col mt-4">
          <div v-if="replyTarget" class="mb-2 text-sm text-gray-600">
            กำลังตอบกลับ {{ replyTarget.username }}
            <button
              class="text-red-500 ml-2"
              @click="cancelReply"
            >
              ยกเลิก
            </button>
          </div>
          <input
            v-model="newComment"
            class="flex-grow border rounded p-2 text-sm"
            type="text"
            placeholder="เขียนความคิดเห็น..."
          />
          <button
            class="bg-blue-500 text-white rounded ml-2 p-2 mt-2"
            @click="postComment"
          >
            แสดงความคิดเห็น
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlayMore: false,
      overlayShare: false,
      overlayComments: false,
      overlayMoreStyle: {},
      newComment: "",
      replyTarget: null, // ติดตามเป้าหมายการตอบกลับปัจจุบัน
      post: {
        username: "John Doe",
        time_upload: "5 ชั่วโมงที่แล้ว",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/500",
        isLiked: false,
        likescount: 120,
        commentscount: 34,
      },
      share: {
        users: [
          {
            id: 1,
            username: "เพื่อน 1",
            profile_picture: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            username: "เพื่อน 2",
            profile_picture: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            username: "เพื่อน 3",
            profile_picture: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            username: "เพื่อน 4",
            profile_picture: "https://via.placeholder.com/150",
          },
          {
            id: 5,
            username: "เพื่อน 5",
            profile_picture: "https://via.placeholder.com/150",
          },
        ],
      },
      comments: [
        {
          username: "Alice",
          time_posted: "2 ชั่วโมงที่แล้ว",
          text: "นี่คือความคิดเห็น",
          likes: 10,
          isLiked: false,
          replies: [
            {
              username: "Bob",
              time_posted: "1 ชั่วโมงที่แล้ว",
              text: "นี่คือการตอบกลับ",
              likes: 5,
              isLiked: false,
              replies: [
                {
                  username: "Charlie",
                  time_posted: "30 นาทีที่แล้ว",
                  text: "นี่คือการตอบกลับที่ซ้อนกัน",
                  likes: 2,
                  isLiked: false,
                },
              ],
              showReplies: false,
            },
          ],
          showReplies: false,
        },
      ],
    };
  },
  methods: {
    toggleLike() {
      this.post.isLiked = !this.post.isLiked;
      this.post.likescount += this.post.isLiked ? 1 : -1;
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
      const nestedReply =
        this.comments[commentIndex].replies[replyIndex].replies[nestedIndex];
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
          left: `${rect.left + window.scrollX - 270}px`,
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
          username:
            this.comments[commentIndex].replies[replyIndex].replies[
              nestedIndex
            ].username,
        };
      }
    },
    postComment() {
      if (this.newComment.trim() !== "") {
        const commentObj = {
          username: "ผู้ใช้ปัจจุบัน",
          time_posted: new Date().toLocaleTimeString(),
          text: this.newComment,
          likes: 0,
          isLiked: false,
          replies: [],
          showReplies: false,
        };

        if (!this.replyTarget) {
          this.comments.push(commentObj);
        } else {
          const { type, index, replyIndex, commentIndex } = this.replyTarget;
          if (type === "comment") {
            this.comments[index].replies.push(commentObj);
            this.comments[index].showReplies = true; // แสดงการตอบกลับทันที
          } else if (type === "reply") {
            this.comments[commentIndex].replies[replyIndex].replies.push(
              commentObj
            );
            this.comments[commentIndex].replies[replyIndex].showReplies = true; // แสดงการตอบกลับทันที
          } else if (type === "nestedReply") {
            this.comments[commentIndex].replies[replyIndex].replies.push(
              commentObj
            );
            this.comments[commentIndex].replies[replyIndex].showReplies = true; // แสดงการตอบกลับทันที
          }
        }

        // รีเซ็ตช่องกรอกข้อมูลและเป้าหมายการตอบกลับ
        this.newComment = "";
        this.replyTarget = null; // ล้างเป้าหมายการตอบกลับหลังจากโพสต์
      }
    },
    cancelReply() {
      this.replyTarget = null;
      this.newComment = "";
    },
    countReplies(comment) {
      return comment.replies ? comment.replies.length : 0;
    },
  },
};
</script>

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
</style>
