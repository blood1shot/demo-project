/* eslint-disable no-useless-catch */
import { defineStore } from "pinia";
import { useAuthStore } from "@/store/auth";
import firebase from "firebase/compat/app";
import { computed, ref } from "vue";

const AuthStore = useAuthStore();
export const useUserStore = defineStore(
  "userInfo",
  () => {
    const info = ref();

    async function fetchInfo() {
      const uid = AuthStore.getUid();
      const userInfo = (
        await firebase.database().ref(`/users/${uid}/info`).once("value")
      ).val();
      info.value = userInfo;
    }

    const infoGetter = computed(() => {
      return info.value;
    });
    return { fetchInfo, infoGetter };
  },
  {
    persist: true,
  }
);
