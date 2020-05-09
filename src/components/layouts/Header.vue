<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      {{' '}}|
      <router-link to="/about">About</router-link>
      {{' '}}|
      <router-link to="/demo1">Demo1</router-link>
      {{' '}}|
      <router-link to="/demo2">Demo2</router-link>
      {{' '}}|
      <router-link to="/demo3">Demo3</router-link>
      {{' '}}|
      <router-link to="/demo4">Demo4</router-link>
      {{' '}}|
      <router-link to="/demo5">Demo5</router-link>
      {{' '}}|
      <router-link to="/demo6">Demo6</router-link>
      {{' '}}|
      <router-link to="/demo7">Demo7</router-link>
      {{' '}}|
      <router-link to="/demo8">Demo8</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
