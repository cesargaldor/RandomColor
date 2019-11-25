<template>
  <div id="app">
    <colors />
  </div>
</template>

<script>
import colors from "./components/colors.vue";

export default {
  name: "app",
  components: {
    colors
  }
};
</script>

<style>
* {
  font-family: "Kulim Park", sans-serif;
  font-weight: 300;
}
</style>
