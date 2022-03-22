<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
};
</script>

<style scoped>
.container {
  width: 200px;
  height: 200px;
  border-color: red;
}
</style>
