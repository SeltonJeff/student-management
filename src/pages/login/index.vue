<template>
  <v-container class="form-login">
    <figure class="logo">
      <v-img src="/a+_logo.svg" width="120px" :aspect-ratio="16 / 9" />
    </figure>
    <v-form @submit.prevent="handleSubmit" v-model="formData.isValid">
      <v-text-field
        v-model="formData.email"
        :rules="[required, email]"
        type="text"
        label="Username"
      />
      <v-text-field
        v-model="formData.password"
        :rules="[required]"
        type="password"
        label="Password"
      />
      <v-btn
        :loading="isFetching"
        type="submit"
        width="100%"
        height="45px"
        color="var(--color-primary)"
      >
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { required, email } from "../../utils/validators";
import router from "../../routes";
import { Api } from "../../api";
import AppRouter from "../../routes";
import errorHandler from "../../utils/errorHandler";

type TFormData = {
  isValid: boolean;
  email: string;
  password: string;
};
const formData = ref<TFormData>({
  isValid: false,
  email: "admin@mailinator.com",
  password: "admin",
});
const isFetching = ref(false);

const handleSubmit = async () => {
  if (formData.value.isValid) {
    try {
      isFetching.value = true;
      const { isValid, ...attr } = formData.value;
      const result = await Api.post("/auth/login", { ...attr });
      if (result) {
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("refresh_token", result.data.refresh_token);
        isFetching.value = false;
        await AppRouter.push({ path: "/dashboard" });
      }
    } catch (error) {
      await errorHandler(error);
    } finally {
      isFetching.value = false;
    }
  }
};
</script>

<style lang="scss">
.form-login {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;

  .logo {
    margin-top: 20vh;
    height: 100px;
  }

  form {
    width: 90vw;
    max-width: 400px;

    .v-input__details {
      padding-bottom: 5px;
    }

    button {
      color: white;
    }
  }
}
</style>
