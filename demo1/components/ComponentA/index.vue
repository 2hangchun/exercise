<template>
  <div>
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <!-- <span>{{ msg }}</span> -->
    <ComponentB :value="msg" @input="msg = $event" />
    <!-- 简化为 -->
    <!-- <ComponentB v-model="msg" /> -->
  </div>
</template>

<script>
import ComponentB from "./ComponentB";
export default {
  name: "ComponentA",
  data() {
    return {
      msg: "",
    };
  },
  components: {
    ComponentB,
  },
};
</script>

<style></style>
