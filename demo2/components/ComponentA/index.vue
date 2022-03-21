<template>
  <div>
    <h3>不使用sync</h3>
    <ComponentB :money="money" @update:money="money = $event" />
    <h3>使用sync</h3>
    <ComponentB :money.sync="money" />
  </div>
</template>

<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  data() {
    return {
      money: 10000,
    };
  },
  components: {
    ComponentB,
  },
};
</script>

<style></style>
