<template lang="pug">
transition(name="fade", mode="out-in")
.container
  .bg-custom
    SideBar/
    router-view
</template>

<script lang="ts">
import SideBar from "@/components/SideBar.vue";

export default {
  components: { SideBar },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
