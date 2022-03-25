<template>
  <div class="container">
    <div class="title">{{ column.title }}</div>
    <div class="body">
      <Card
        v-for="(item, index) in column.content"
        :key="index"
        :info="item"
        @click="handleClick"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardList",
  components: {
    Card,
  },
  props: ["column"],
  methods: {
    handleClick(a) {
      this.$emit("click", a + "@@@");
    },
  },
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
