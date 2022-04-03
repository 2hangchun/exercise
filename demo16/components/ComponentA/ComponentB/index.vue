<template>
  <div>
    <div data-hasaki="yasuo" @click="handleClick">1111</div>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  data() {
    return {
      msg: "",
    };
  },
  props: ["data-title", "hasaki"],
  mounted() {
    console.log(this.$attrs);
  },
  methods: {
    handleClick(e) {
      console.log(e.target.dataset);
    },
  },
};
</script>

<style></style>
