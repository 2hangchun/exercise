<template>
  <div>
    <h3>ComponentC:我有{{ money }}元</h3>
    <button @click="lend(77)">借给A77元</button>
  </div>
</template>

<script>
import myMixin from "../../../mixin/myMIxin";

export default {
  name: "ComponentC",
  mixins: [myMixin],
  data() {
    return {
      money: 8888,
    };
  },
};
</script>

<style></style>
