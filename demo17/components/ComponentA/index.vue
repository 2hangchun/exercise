<template>
  <div>
    <ComponentB v-model="isChecked" />
    <!-- <ComponentB :checked="isChecked" @change="isChecked = $event" /> -->
    <span>ComponentA:{{ isChecked }}</span>
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
      isChecked: false,
    };
  },
};
</script>

<style></style>
