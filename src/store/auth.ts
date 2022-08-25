/* eslint-disable no-useless-catch */
import { defineStore } from "pinia";
import { payloadInterface } from "@/interfaces/user.interfaces";
import firebase from "firebase/compat/app";

export const useAuthStore = defineStore(
  "auth",
  () => {
    async function loginUser(email: string, password: string) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    }
    async function logOut() {
      await firebase.auth().signOut();
    }
    async function createUser({
      email,
      password,
      surname,
      name,
    }: payloadInterface) {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uid = await getUid();
      await firebase.database().ref(`/users/${uid}/info`).set({
        bill: 10000,
        name,
        surname,
      });
    }
    async function getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    }
    return { loginUser, createUser, logOut, getUid };
  },
  {
    persist: true,
  }
);
