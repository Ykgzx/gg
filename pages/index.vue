<template>
  <div class="min-h-screen bg-pippin-100">
    <navbar />
    <Content :post="post" :comments="comments" />
    <Content :post="post" :comments="comments" />
  </div>
</template>

<!-- 
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
      comments: [],
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const postResponse = await axios.get('http://localhost:3000/post/');
        const commentsResponse = await axios.get('http://localhost:3000/comments'); // Fetch comments

        this.post = postResponse.data;
        this.comments = commentsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script> -->
