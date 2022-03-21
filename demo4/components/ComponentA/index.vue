<template>
  <div>
    <h4>ComponentA:我有{{ money }}元</h4>
    <button @click="borrowFromB(100)">向B借100元</button>
    <br />
    <button @click="borrowFromC(120)">向C借120元</button>
    <br />
    <button @click="borrowAll(150)">向BC借150元</button>
    <br />
    <ComponentB ref="B" />
    <ComponentC ref="C" />
  </div>
</template>

<script>
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
    ComponentC,
  },
  data() {
    return {
      money: 10000,
    };
  },
  methods: {
    borrowFromB(money) {
      this.money += money;
      this.$refs.B.money -= money;
    },
    borrowFromC(money) {
      this.money += money;
      this.$refs.C.money -= money;
    },
    borrowAll(money) {
      this.money += 2 * money;
      this.$children.forEach((item) => {
        item.money -= money;
      });
    },
  },
};
</script>

<style></style>
