<template>
  <div>
    <!-- <input
      type="checkbox"
      id="checkbox"
      :checked="checked"
      @change="checked = !checked"
    />
    <label for="checkbox">{{ checked }}</label
    ><br />
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label> -->

    <!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span> -->

    <!-- <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div> -->

    <!-- <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option value="我是A">A</option>
        <option value="我是B">B</option>
        <option value="我是C">C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div> -->

    <!-- <div id="example-6">
      <select v-model="selected" multiple style="width: 50px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selected }}</span>
    </div> -->

    <!-- <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" /> -->

    <input type="radio" v-model="pick" value="a" />
    <span>{{ pick }}</span>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      // checked: true,
      // checkedNames: ["Jack"],
      // picked: "",
      // selected: [],
      // toggle: "yes",
      pick: "a",
    };
  },
  methods: {},
};
</script>

<style></style>
