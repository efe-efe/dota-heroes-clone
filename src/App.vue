<template>
  <component :is="currentView" />
</template>
<script>
import routes from "./router/routes.ts";

export default {
  name: "App",
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || <div>NOT FOUND</div>;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>
