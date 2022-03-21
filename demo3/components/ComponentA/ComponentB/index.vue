<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
    style="width: 10px; height: 10px; background-color: black"
  ></div>
  <!-- <div
    v-bind="$attrs"
    @click="$emit('click')"
    @mousemove="$emit('mousemove')"
    style="width: 10px; height: 10px; background-color: black"
  ></div> -->
</template>

<script>
export default {
  name: "ComponentB",
  mounted() {
    console.log("$attrs", this.$attrs);
    console.log("$listeners", this.$listeners);
  },
};
</script>

<style></style>
