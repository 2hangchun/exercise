<template>
  <div class="container">
    <div class="title">{{ column.title }}</div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: ["column"],
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  width: 400px;
  height: 400px;
  padding: 5px;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
