<template>
  <div>
    <ComponentB
      a="a"
      b="b"
      c="c"
      @click="handleClick"
      @mousemove="handleMouseMove"
    />
  </div>
</template>

<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
  methods: {
    handleClick() {
      console.log(1);
    },
    handleMouseMove() {
      console.log(2);
    },
  },
};
</script>

<style></style>
