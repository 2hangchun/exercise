<template>
  <div>
    <ComponentB>
      <template v-slot:default="number">{{ number }}</template>
      <template v-slot:xxx="y">{{ y }}</template>
    </ComponentB>
  </div>
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

<style></style>
