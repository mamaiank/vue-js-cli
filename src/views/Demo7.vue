<template>
  <div class="demo7">
    <div @click="count++">{{count}}</div>
    <div>{{Math.random()}}</div>
    <div @click="timeStamp=Date.now()">{{timeStamp}}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.timeStamp = 0;
  },
  mounted() {
    setInterval(() => {
        // this.count++;
    //   this.timeStamp = Date.now();
    }, 100);
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>