<template>
  <div>
    <ComponentB @hook:created="handleCreated" />
  </div>
</template>
<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
  beforeCreate() {
    console.log(`A  beforeCreate`);
  },
  created() {
    console.log(`A  created`);
  },
  beforeMount() {
    console.log(`A  beforeMount`);
  },
  mounted() {
    console.log(`A  mounted`);
  },
  methods: {
    handleCreated(a) {
      console.log("子组件create执行   " + a);
    },
  },
};
</script>

<style></style>
