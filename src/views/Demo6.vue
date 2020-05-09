<template>
  <div class="demo6">
    <ul>
      <li v-for="(item,index) in ['Angular','Vue','React']" :key="index">{{item}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="({title,price},index) in courses" :key="index">{{title}} {{price}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="({title,price},index) in userCourse" :key="index">
        {{title}} {{price}}
        <button @click="removeCourse(index)">x</button>
      </li>
    </ul>
    <hr />
    <label for="title">title</label>
    <input type="text" id="title" name="title" v-model="title" />
    <label for="price">price</label>
    <input type="text" id="price" name="price" v-model="price" />
    <button @click="addCourse">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      price: 0,
      userCourse: [],
      courses: [
        { title: "Angular", price: 1 },
        { title: "Vue", price: 1 },
        { title: "React", price: 1 }
      ]
    };
  },
  methods: {
    addCourse() {
      this.userCourse.push({ title: this.title, price: this.price });
      this.title = "";
      this.price = 0;
    },
    removeCourse(index) {
      this.userCourse.splice(index, 1);
    }
  }
};
</script>