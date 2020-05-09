<template>
  <div id="clock">
  </div>
</template>

<script>

export default {
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 500);
  }
};
</script>