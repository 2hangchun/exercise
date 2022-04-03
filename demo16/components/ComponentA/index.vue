<template>
  <div>
    <ComponentB
      class="abc bcd"
      id="cde"
      data-title="hello world"
      value="111"
      hasaki="yasuo"
    />
  </div>
</template>

<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
};
</script>

<style></style>
