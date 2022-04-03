<template>
  <div>
    <h3>插槽1</h3>
    <slot value="1">插槽1</slot>
    <h3>插槽2</h3>
    <slot value="2">插槽2</slot>
    <h3>插槽3</h3>
    <slot value="3">插槽3</slot>
    <h3>插槽4</h3>
    <slot value="4">插槽4</slot>
    <h3>插槽5</h3>
    <slot value="5">插槽5</slot>
    <slot name="xxx" value="yyy">手机客户端看就是</slot>
    <slot name="xxx" value="zzz">手机客户端看就是</slot>
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
