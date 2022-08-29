<template lang="pug">
#snackbar
router-view/
</template>
<script lang="ts" setup>
import { computed, watch } from "vue";
import { useAuthStore } from "@/store/auth";
import messages from "@/utils/messages";

const AuthStore = useAuthStore();
const fbError = computed(() => {
  return AuthStore.error;
});

watch(fbError, (newFbError) => {
  const x = document.getElementById("snackbar");
  x.textContent = messages[newFbError.code];
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
  // console.log(`x is ${newFbError.code}`);
});
</script>
<style lang="scss" scoped>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  top: 5%;
  right: 5%;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 5%;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 5%;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 5%;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 5%;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
