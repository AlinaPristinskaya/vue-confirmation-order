<template>
  <div id="app" class="base">
    <Home />
  </div>
</template>
<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: { Home },
};
</script>
<style lang="scss" scoped>
@import "./assets/scss/_mixin.scss";
@import "./assets/scss/_variables.scss";
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 20px;
  font-weight: 600;
}
.base {
  @include container();
}
</style>
