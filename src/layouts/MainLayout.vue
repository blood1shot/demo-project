<template lang="pug">
transition(name="fade", mode="out-in")
.container
  .bg-custom
    SideBar/
    NavBar/
    router-view
</template>

<script lang="ts" setup>
import SideBar from "@/components/TheSideBar.vue";
import NavBar from "@/components/TheNavBar.vue";
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
