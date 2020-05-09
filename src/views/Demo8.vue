<template>
  <div class="demo8">
    <h1 ref="title">wait for change</h1>
    <input ref="input1" type="text" placeholder="wait focus" />
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$refs["title"].textContent = "change";
    }, 2000);
    setTimeout(() => {
      this.$refs["input1"].focus();
    }, 3000);
  }
};
</script>