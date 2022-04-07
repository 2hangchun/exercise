<template>
  <h1>我是B组件</h1>
</template>

<script>
export default {
  name: "B",
  created() {
    console.log("执行created");
  },
  watch: {
    $route() {
      console.log("$route变化了");
    },
  },
};
</script>

<style></style>
