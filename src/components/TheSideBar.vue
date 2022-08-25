<template lang="pug">
.sidebar
  .sidebar-header
    h2 Netflex
      span.dot .
  .sidebar-menu
    div(v-for="section in sections")
      h6 {{ section.title }}
      ul
        li(v-for="link in section.links", v-bind:key="link.url")
          i(:class="iconClass(link.icon)")
          router-link(
            tag="li",
            :to="{ name: link.url }",
            active-class="active",
            @click="ifLogout(link.url)"
          ) {{ link.title }}
</template>

<script lang="ts" setup>
import routerConstants from "@/utils/routerConstants";
import { useAuthStore } from "@/store/auth";

const AuthStore = useAuthStore();
const iconClass = (iconName: string) => {
  return `fa-solid fa-${iconName}`;
};

const ifLogout = (url: string) => {
  if (url === "Login") {
    AuthStore.logOut();
  }
};

const sections = [
  {
    title: "Menu",
    links: [
      { title: "Browse", url: routerConstants.homePage, icon: "compass" },
      {
        title: "Coming soon",
        url: routerConstants.comingSoonPage,
        icon: "crystall-ball",
      },
    ],
  },
  {
    title: "General",
    links: [
      { title: "Settings", url: routerConstants.settingsPage, icon: "gear" },
      {
        title: "Log out",
        url: routerConstants.loginPage,
        icon: "right-from-bracket",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.sidebar-menu {
  margin-top: 20px;
}

.sidebar {
  height: 100%;
  color: #fff;
  float: left;
  width: 20%;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 25px 15px 10px 40px;
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

.sidebar ul {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.sidebar ul li {
  padding: 15px 0 10px 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all ease-in-out 200ms;
}

.sidebar ul li:hover a {
  color: #dc3545;
}

.sidebar ul li:hover {
  color: #dc3545;
}

.sidebar ul li a {
  text-decoration: none;
}

h6 {
  color: #434b51;
  margin-bottom: 0;
}

svg {
  margin-right: 10px;
}
</style>
