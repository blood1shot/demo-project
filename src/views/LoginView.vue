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
      button.btn.btn-danger.w-100(@click="loginUser()") Log in

    .etc-login-form
      p new user?
        router-link(to="/registration") create new account
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      email: "",
      password: "",
    });
    const rules = {
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);

    const loginUser = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        router.push("/");
        state.email = "";
        state.password = "";
      }
    };

    return { loginUser, v$ };
  },
};
</script>

<style scoped lang="scss"></style>
