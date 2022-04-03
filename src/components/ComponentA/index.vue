<template>
  <div ref="box" @click="change">
    {{ value }}
  </div>
</template>
<script>
export default {
  name: "ComponentA",
  components: {},
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    change() {
      this.value++;
    },
  },
  beforeUpdate() {
    const box = this.$refs.box;
    console.log("页面数据", box.innerHTML);
    console.log("data中数据", this.value);
  },
  updated() {
    const box = this.$refs.box;
    console.log("页面数据", box.innerHTML);
    console.log("data中数据", this.value);
  },
};
</script>

<style></style>
