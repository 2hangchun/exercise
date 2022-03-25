<template>
  <div id="app">
    <ul>
      <li @click="current = 'ComponentA'">a</li>
      <li @click="current = 'ComponentB'">b</li>
      <li @click="current = 'ComponentC'">c</li>
    </ul>
    <div :is="current" />
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
  },
  data() {
    return {
      current: "ComponentA",
    };
  },
};
</script>

<style></style>
