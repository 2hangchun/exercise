<template>
  <ComponentB>
    <div class="container" :a="false" :b="undefined" :c="null" d="1"></div>
  </ComponentB>
</template>

<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
};
</script>

<style scoped>
.container {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>
