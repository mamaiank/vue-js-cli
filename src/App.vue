<template>
  <div id="app">
    <Header />
    <Content />
    <Footer title="Copyright NK" color="yellow">
      <template v:slot:header>footer header</template>
      @
      <template v:slot:footer>footer footer</template>
    </Footer>
    <Footer title="Copyright NK" color="yellow" />
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import Content from "@/components/layouts/Content.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  name: "Home",

  components: {
    Header,
    Content,
    Footer
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
