<template>
  <div>
    <h3>ComponentB:我有{{ money }}元</h3>
    <button @click="lend(55)">借给A55元</button>
  </div>
</template>

<script>
import myMixin from "../../../mixin/myMIxin";
export default {
  name: "ComponentB",
  mixins: [myMixin],
  data() {
    return {
      money: 9999,
    };
  },
};
</script>

<style></style>
