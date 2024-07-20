<template>

  <div class="flex justify-center">
    <div class="bg-pink-300 flex justify-center items-center h-[500px] w-[70]">
      <div v-if="isVisible" class="overlay" @click="closeOverlay">
        <div class="overlay-content" @click.stop>
          <slot></slot>
          <button @click="closeOverlay">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeOverlay() {
      this.$emit('close');
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
