<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  name: "ComponentB",
  data() {
    return {
      date: "2022.3.23",
    };
  },
  computed: {
    msg() {
      return `hello ${this.date}`;
    },
  },
};
</script>

<style></style>
