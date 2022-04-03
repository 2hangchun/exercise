<template>
  <div>
    <!-- <h3>name:{{ student.name }}</h3>
    <h3>age:{{ student.age }}</h3>
    <h3 v-if="student.hobby">hobby:{{ student.hobby }}</h3>
    <h3 v-if="student.friend">friend:{{ student.friend }}</h3>
    <h3 v-if="student.pie">friend:{{ student.pie }}</h3>
    <button @click="handleClick">add hobby and friend</button> -->
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="changeItem">change first item</button>
  </div>
</template>
<script>
export default {
  name: "ComponentA",
  data() {
    return {
      student: {
        name: "xxx",
        age: 18,
        a: {
          b: "111",
          c: [
            {
              d: "222",
            },
            "e",
          ],
        },
      },
      list: ["a", "b", "c", "d"],
    };
  },
  methods: {
    handleClick() {
      // this.$set(this.student, "hobby", "sing");
      // this.$set(this.student, "friend", "jack");
      // this.student = Object.assign({}, this.student, {
      //   hobby: "eat",
      //   friend: "rose",
      // });
      this.student = Object.assign({}, this.student, { pie: "jerry" });
      console.log(this);
    },
    changeItem() {
      this.$set(this.list, 0, "e");
      console.log(this);
    },
  },
};
</script>

<style></style>
