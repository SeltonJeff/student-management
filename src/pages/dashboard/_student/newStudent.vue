<template>
  <v-container tag="center">
    <v-card class="form-wrapper" :loading="isFetching">
      <v-card-title> Cadastro de Estudante </v-card-title>
      <v-form v-model="formData.isValid" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="formData.name"
          label="Nome"
          placeholder="Informe o nome completo"
          type="text"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="formData.email"
          label="Email"
          placeholder="Informe apenas um email"
          type="email"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="formData.ra"
          label="RA"
          placeholder="Informe o registro acadêmico"
          type="text"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="formData.cpf"
          label="CPF"
          placeholder="Informe o CPF"
          type="text"
          v-mask="'###.###.###-##'"
          maxlength="14"
          :rules="[required]"
        ></v-text-field>

        <v-row justify="end" class="action-buttons">
          <v-btn
            :disabled="isFetching"
            color="var(--color-primary-opacity)"
            @click="handleBack"
            >Cancelar</v-btn
          >
          <v-btn
            type="submit"
            :disabled="isFetching"
            color="var(--color-secondary-opacity)"
            >Salvar</v-btn
          >
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { required } from "../../../utils/validators";
import AppRouter from "../../../routes";
import { useStore } from "vuex";
import { TAppState } from "../../../store";

type TEditFormData = {
  isValid: boolean;
  ra: string;
  name: string;
  email: string;
  cpf: string;
};

const formData = reactive<TEditFormData>({
  isValid: false,
  ra: "",
  name: "",
  email: "",
  cpf: "",
});

const store = useStore<TAppState>();

const isFetching = ref(false);

const handleBack = () => AppRouter.go(-1);
const handleSubmit = () => {
  if (formData.isValid) {
    isFetching.value = true;
    console.log(formData);
    setTimeout(() => {
      store.dispatch("alert", {
        type: "success",
        content: "Studante cadastrado com sucesso!",
      });
      handleBack();
      isFetching.value = false;
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.form-wrapper {
  max-width: 800px;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .action-buttons {
    padding: 0 10px;
    display: flex;
    gap: 20px;
  }
}
</style>
