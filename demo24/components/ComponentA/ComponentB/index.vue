<template>
  <div>
    <slot name="qiqi"></slot>
    <slot name="papa"></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style></style>
