<template>
  <div class="demo3">
    <h1>{{title}}</h1>
    <img :src="imageUrl" height="50" />
    <br />
    <a :href="link">Website</a>
    <br />
    <div :class="[error, blue]">Test class</div>
    <div :style="{color, fontSize:font_size}">Test class2</div>
    <div :style="isActive ? styleObj : ''">Test class3</div>
    <button @click="isActive=!isActive">Toggle Active</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Demo3",
      imageUrl:
        "https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg",
      link: "",
      error: "error_class",
      blue: "blue",
      color: "green",
      font_size: "30px",
      isActive: false,
      styleObj: {
        backgroundColor: "yellow",
        color: "green"
      }
    };
  }
};
</script>

<style>
.error_class {
  background-color: red;
  color: white;
}
.blue {
  color: blue;
}
</style>