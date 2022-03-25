<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <slot :todo="item"></slot>
    </li>
    <!-- <li>
      <slot :todo="list[0]"></slot>
    </li>
    <li>
      <slot :todo="list[1]"></slot>
    </li>
    <li>
      <slot :todo="list[2]"></slot>
    </li>
    <li>
      <slot :todo="list[3]"></slot>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "ComponentB",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
