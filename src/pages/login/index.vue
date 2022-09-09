<template>
  <v-container class="form-login">
    <figure class="logo">
      <v-img src="/a+_logo.svg" width="120px" :aspect-ratio="16 / 9" />
    </figure>
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
const isFetching = ref(false);

const handleSubmit = () => {
  function validateUser({ username, password }: TFormData) {
    return !(username !== "admin" && password !== "admin");
  }

  if (formData.value.isValid && validateUser(formData.value)) {
    isFetching.value = true;
    setTimeout(() => router.push("/dashboard"), 2000);
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
