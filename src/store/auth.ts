/* eslint-disable no-useless-catch */
import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import { payloadInterface } from "@/interfaces/user.interfaces";
import firebase from "firebase/compat/app";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const error: Ref<Error | null | unknown> = ref(null);
    async function setError(errorInfo: Error | unknown): Promise<void> {
      error.value = errorInfo;
    }
    async function clearError(): Promise<void> {
      error.value = null;
    }
    function getError(): Error | null | unknown {
      return error.value;
    }
    // const getError: Error | null | unknown = computed(() => {
    //   return error.value;
    // });
    async function loginUser(email: string, password: string): Promise<void> {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e: unknown) {
        await setError(e);
        throw e;
      }
    }
    async function logOut(): Promise<void> {
      await firebase.auth().signOut();
    }
    async function createUser({
      email,
      password,
      lastname,
      firstname,
    }: payloadInterface): Promise<void> {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await getUid();
        await firebase.database().ref(`/users/${uid}/info`).set({
          firstname,
          lastname,
        });
      } catch (e) {
        await setError(e);
        throw e;
      }
    }
    async function getUid(): Promise<string | null> {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    }
    return {
      loginUser,
      createUser,
      logOut,
      getUid,
      setError,
      clearError,
      getError,
      error,
    };
  },
  {
    persist: true,
  }
);
