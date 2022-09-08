<template>
  <div class="form-login">
    <div class="logo">
      <v-img src="/a+_logo.svg" width="120px" :aspect-ratio="16 / 9" />
    </div>
    <v-form @submit.prevent="handleSubmit" v-model="formData.isValid">
      <v-text-field
        v-model="formData.username"
        type="text"
        label="Username"
        :rules="[required]"
      />
      <v-text-field
        v-model="formData.password"
        type="password"
        label="Password"
        :rules="[required]"
      />
      <v-btn type="submit" width="100%" height="45px" color="primary">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { required } from "../../utils/validators";
import router from "../../routes";

type TFormData = {
  isValid: boolean;
  username: string;
  password: string;
};
const formData = ref<TFormData>({
  isValid: false,
  username: "",
  password: "",
});

const handleSubmit = () => {
  function validateUser({ username, password }: TFormData) {
    return !(username !== "admin" && password !== "admin");
  }

  if (formData.value.isValid && validateUser(formData.value)) {
    router.push("/dashboard");
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
  }
}
</style>
