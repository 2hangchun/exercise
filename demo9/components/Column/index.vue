<template>
  <div class="column">
    <CardList
      v-for="(item, index) in columnList"
      :key="index"
      :column="item"
      @click="handleClick"
    />
  </div>
</template>

<script>
import CardList from "./CardList";
export default {
  name: "Column",
  components: {
    CardList,
  },
  data() {
    return {
      columnList: [
        {
          title: "xxx",
          content: [
            {
              id: "001",
              text: "父组件传值给子组件，子组件使用props进行接收子组件传值给父组件，子组件使用$emit+事件对父组件进行传值",
              url: "1111",
            },
            {
              id: "002",
              text: "组件中可以使用$parent和$children获取到父组件实例和子组件实例，进而获取数据使用$attrs和$listeners，在对一些组件进行二次封装时可以方便传值，例如A->B->C",
              url: "222",
            },
            {
              id: "003",
              text: "使用$refs获取组件实例，进而获取数据使用Vuex进行状态管理",
              url: "333",
            },
            {
              id: "004",
              text: "使用eventBus进行跨组件触发事件，进而传递数据使用provide和inject，官方建议我们不要用这个，我在看ElementUI源码时发现大量使用使用浏览器本地缓存，例如localStorage",
              url: "444",
            },
          ],
        },
        {
          title: "yyy",
          content: [
            {
              id: "001",
              text: "父组件传值给子组件，子组件使用props进行接收子组件传值给父组件，子组件使用$emit+事件对父组件进行传值",
              url: "1111",
            },
            {
              id: "002",
              text: "组件中可以使用$parent和$children获取到父组件实例和子组件实例，进而获取数据使用$attrs和$listeners，在对一些组件进行二次封装时可以方便传值，例如A->B->C",
              url: "222",
            },
            {
              id: "003",
              text: "使用$refs获取组件实例，进而获取数据使用Vuex进行状态管理",
              url: "333",
            },
            {
              id: "004",
              text: "使用eventBus进行跨组件触发事件，进而传递数据使用provide和inject，官方建议我们不要用这个，我在看ElementUI源码时发现大量使用使用浏览器本地缓存，例如localStorage",
              url: "444",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleClick(a) {
      console.log(`${a}!!!!`);
    },
  },
};
</script>

<style>
.column {
  display: flex;
}
</style>
