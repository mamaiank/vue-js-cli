<template>
  <div class="demo5">
    <div v-if="type == 'A'">I'm A</div>
    <div v-if="type == 'B'">I'm B</div>
    <div v-if="type == 'C'">I'm C</div>
    <div v-else>No</div>
    <div v-show="isShow">I'm show</div>
    <div v-show="!isShow">I'm not show</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "A",
      isShow: false
    };
  },
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 500);
  }
};
</script>