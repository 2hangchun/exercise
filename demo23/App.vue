<template>
  <div id="app">
    <ComponentA :level="3"> 哈哈哈 </ComponentA>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA";
export default {
  name: "App",
  components: {
    ComponentA,
  },
};
</script>

<style></style>
