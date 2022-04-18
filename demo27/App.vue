<template>
  <div id="app">
    <h1>hello world</h1>
    <router-link to="/a">to A</router-link><br />
    <router-link to="/b">to B</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
