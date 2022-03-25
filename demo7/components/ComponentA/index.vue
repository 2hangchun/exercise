<template>
  <div>
    <h3>显示list，已完成的为绿色</h3>
    <ComponentB :list="list">
      <template v-slot:default="{ todo }">
        <span :style="{ color: todo.done ? 'green' : 'red' }">
          {{ todo }}
        </span>
      </template>
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
  data() {
    return {
      list: [
        { id: "001", text: "AAA", done: false },
        { id: "002", text: "BBB", done: false },
        { id: "003", text: "CCC", done: true },
        { id: "004", text: "DDD", done: false },
      ],
    };
  },
};
</script>

<style scoped></style>
