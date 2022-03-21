<template>
  <div>
    <span>小明每次花100</span>
    <button @click="$emit('update:money', money - 100)">花钱</button>
    <span>还剩{{ money }}元</span>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  props: ["money"],
};
</script>

<style></style>
