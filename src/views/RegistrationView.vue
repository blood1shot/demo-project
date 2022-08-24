<template lang="pug">
.container
  .card
    .d-flex.justify-content-center
      h4 Sign up
    .form
      label Firstname
      input.form-control(
        v-model="v$.firstname.$model",
        :class="{ invalid: v$.firstname.$error }",
        type="text",
        placeholder="Firstname"
      )
      span.helper(
        v-if="v$.firstname.$error",
        v-for="error of v$.firstname.$errors"
      ) {{ error.$message }}
    .form
      label Lastname
      input.form-control(
        v-model="v$.lastname.$model",
        :class="{ invalid: v$.lastname.$error }",
        type="text",
        placeholder="Lastname"
      )
      span.helper(
        v-if="v$.lastname.$error",
        v-for="error of v$.lastname.$errors"
      ) {{ error.$message }}
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
      button.btn.btn-danger.w-100(@click="createUser()") Create account
    .etc-login-form
      p already have an account?
        router-link(to="/login") log in
</template>

<script lang="ts">
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    const rules = {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);

    function createUser() {
      v$.value.$validate();
      if (!v$.value.$error) {
        console.log("Good job");
        state.email = "";
        state.password = "";
        state.firstname = "";
        state.lastname = "";
      }
    }

    return { createUser, v$ };
  },
};
</script>

<style scoped lang="scss"></style>
