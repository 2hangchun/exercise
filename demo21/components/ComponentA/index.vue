<template>
  <div>
    <button @click="isTrue = !isTrue">toggle</button>
    <transition>
      <h3 v-if="isTrue">多云</h3>
      <h3 v-else>小雨</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      isTrue: true,
    };
  },
};
</script>

<style></style>
