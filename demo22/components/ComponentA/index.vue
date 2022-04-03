<script>
export default {
  name: "ComponentA",
  render: function (createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
  props: ["level"],
};
</script>

<style></style>
