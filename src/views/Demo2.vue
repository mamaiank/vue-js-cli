<template>
  <div class="demo2">
    <h1>{{title}}</h1>
    <button v-on:click="clickMe">Click Me</button>
    <button @click="clickMe2('Hello')">Click Me 2</button>
    <h3>{{getTimeStamp()}}</h3>
    <h3>{{getTimeStamp2}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Demo2"
    };
  },
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      this.title = "New Demo2";
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(msg) {
      alert(msg);
    },
    getTimeStamp() {
      return Date.now();
    }
  },
  computed: {
    getTimeStamp2() {
      return Date.now();
    }
  }
};
</script>