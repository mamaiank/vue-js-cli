<template>
  <div class="demo1">
    <h1>{{title}}</h1>
    <h2>{{count}}</h2>
    <button @click="count++">Add</button>
    <button @click="onClickAdd">Add</button>
    <h1>Demo1</h1>
    <h1>v-model</h1>
    <input v-model="message" type="text" name id />
    <button @click="message=''">Reset</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "asd",
      title: "vue cli",
      count: 0
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    }
  }
};
</script>