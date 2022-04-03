<template>
  <div>
    <component :is="current">
      <template #qiqi> qiqi </template>
      <template #papa> papa </template>
    </component>
  </div>
</template>
<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
  data() {
    return {
      current: "ComponentB",
    };
  },
};
</script>

<style></style>
