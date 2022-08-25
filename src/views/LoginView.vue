<template lang="pug">
.container
  .card
    .d-flex.justify-content-center
      h4 Log in
    .form
      label Email Address
      input.form-control(
        v-model="v$.email.$model",
        :class="{ invalid: v$.email.$error }",
        type="text",
        placeholder="Email"
      )
      span.helper(v-if="v$.email.$error", v-for="error of v$.email.$errors") {{ error.$message }}

    .form
      label.d-flex.justify-content-between.align-items-center
        span Password
      input.form-control(
        v-model="v$.password.$model",
        :class="{ invalid: v$.password.$error }",
        type="text",
        placeholder="Password"
      )
      span.helper(
        v-if="v$.password.$error",
        v-for="error of v$.password.$errors"
      ) {{ error.$message }}

    .login-button
      button.btn.btn-danger.w-100(@click="loginUser") Log in

    .etc-login-form
      p new user?
        router-link(:to="{ name: routerConstants.registrationPage }") create new account
</template>

<script lang="ts" setup>
import routerConstants from "@/utils/routerConstants";
import { useAuthStore } from "@/store/auth";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const AuthStore = useAuthStore();
const router = useRouter();
const loginCredentials = reactive({
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, loginCredentials);

const loginUser = () => {
  console.log(loginCredentials.email);
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      AuthStore.loginUser(
        loginCredentials.email,
        loginCredentials.password
      ).then(() => {
        router.push({ name: routerConstants.homePage });
        loginCredentials.email = "";
        loginCredentials.password = "";
      });
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss"></style>
