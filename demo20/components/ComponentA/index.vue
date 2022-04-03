<template>
  <div>
    <ul>
      <li v-for="(item, index) in 5" :key="index" ref="li">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  mounted() {
    console.log(this.$refs.li);
  },
};
</script>

<style></style>
