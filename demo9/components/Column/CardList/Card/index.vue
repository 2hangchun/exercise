<template>
  <div class="card" @click="$emit('click', info.url)">
    {{ info.text }}
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.card {
  width: 120px;
  height: 150px;
  margin-bottom: 10px;
  overflow: auto;
}
</style>
