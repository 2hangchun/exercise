<template>
  <div></div>
</template>

<script>
export default {
  name: "ComponentB",
  beforeCreate() {
    console.log(`B  beforeCreate`);
  },
  created() {
    console.log(`B  created`);
  },
  beforeMount() {
    console.log(`B  beforeMount`);
  },
  mounted() {
    console.log(`B  mounted`);
  },
};
</script>

<style></style>
