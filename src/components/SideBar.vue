<template lang="pug">
.sidebar
  .sidebar-header
    h2 Netflex
      span.dot .
  ul.sidenav.app-sidenav(v-bind:class="{ open: true }")
    router-link(
      tag="li",
      :to="link.url",
      active-class="active",
      v-for="link in links",
      v-bind:key="link.url"
    )
      a.waves-effect.waves-orange.pointer(href="#") {{ link.title }}
</template>

<script lang="ts">
export default {
  name: "SideBar",
  data() {
    return {
      links: [
        { title: "Счет", url: "/home" },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "/planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "/categories" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  color: #fff;
  float: left;
  // position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 25px 15px 10px 40px;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border-radius: 15px 0 0 15px;
}

.dot {
  font-size: 35px;
  color: #dc3545;
}

.sidebar-header {
  display: flex;
}
</style>
