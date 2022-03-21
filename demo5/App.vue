<template>
  <div id="app">
    <div class="center">
      <Carousel :list="list" />
    </div>
  </div>
</template>

<script>
import Carousel from "./components/Carousel";
export default {
  name: "App",
  data() {
    return {
      list: [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner4.jpg",
      ],
    };
  },
  components: {
    Carousel,
  },
};
</script>

<style>
.center {
  width: 730px;
  height: 450px;
}
</style>
