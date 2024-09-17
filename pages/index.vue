<template>
<<<<<<< HEAD
  <div class="min-h-screen bg-pippin-100">
    <navbar />
    <content :post="post" :comments="comments" />
    <content :post="post" :comments="comments" />
  </div>
</template>


<script>
import axios from 'axios';
import Content from '~/components/content.vue';

export default {
  components: {
    Content
  },
  data() {
    return {
      post: null,
=======
<<<<<<< Updated upstream
  <div class="">
    <Navbar />
    <Content />
    <Content />
  </div>
</template>
=======
  <div class="min-h-screen bg-pippin-100">
    <navbar />
    <div v-for="post in posts" :key="post.post_id">
      <Content :post="post" :comments="getCommentsForPost(post.post_id)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Content from '/components/Content.vue'; // ตรวจสอบเส้นทางให้ถูกต้อง

export default {
  components: {
    Content,
  },
  data() {
    return {
      posts: [],
>>>>>>> ykg-working-space
      comments: [],
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
<<<<<<< HEAD
        const postResponse = await axios.get('http://localhost:3000/post/');
        const commentsResponse = await axios.get('http://localhost:3000/comments'); // Fetch comments

        this.post = postResponse.data;
=======
        // ดึงโพสต์ทั้งหมดจาก API
        const postResponse = await axios.get('http://localhost:3002/api/posts');
        console.log(postResponse.data);  // ตรวจสอบข้อมูลโพสต์
        this.posts = postResponse.data.map(post => ({
          ...post,
          images: post.images ? post.images.split(',') : [],
          videos: post.videos ? post.videos.split(',') : [],
        }));

        // ดึงคอมเมนต์สำหรับแต่ละโพสต์
        const commentsResponse = await axios.get('http://localhost:3002/api/posts/:post_id/comments');
        console.log(commentsResponse.data);  // ตรวจสอบข้อมูลคอมเมนต์
>>>>>>> ykg-working-space
        this.comments = commentsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
<<<<<<< HEAD
  },
};
</script>
=======
    getCommentsForPost(postId) {
      return this.comments.filter(comment => comment.post_id === postId);
    },
  },
};
</script>
>>>>>>> Stashed changes
>>>>>>> ykg-working-space
