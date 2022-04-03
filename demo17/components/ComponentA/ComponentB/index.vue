<template>
  <div>
    <label for="a">输入</label>
    <!-- <input :value="msg" @input="$emit('input', $event.target.value)" /> -->
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  // props: ["checked"],
  model: {
    prop: "checked",
    event: "change",
  },
  mounted() {
    console.log(this.$attrs);
  },
};
</script>

<style></style>
