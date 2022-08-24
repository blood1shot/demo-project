<template lang="pug">
component(:is="layout")
  router-view/
</template>
<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || "empty"}-layout`;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #434b51 !important;
}
</style>
