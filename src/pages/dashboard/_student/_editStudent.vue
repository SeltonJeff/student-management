<template>
  <v-container tag="center">
    <v-card class="form-wrapper" :loading="isFetching">
      <v-card-title> Editar cadastro de estudante </v-card-title>
      <v-form v-model="formData.isValid" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="formData.ra"
          :rules="[required]"
          label="RA"
          placeholder="Informe o registro acadêmico"
          type="text"
          maxlength="6"
          v-mask="'######'"
          disabled
        ></v-text-field>
        <v-text-field
          v-model="formData.name"
          :rules="[required]"
          label="Nome"
          placeholder="Informe o nome completo"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="formData.email"
          :rules="[required, email]"
          label="Email"
          placeholder="Informe apenas um email"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="formData.cpf"
          :rules="[required, cpf]"
          label="CPF"
          placeholder="Informe o CPF"
          type="text"
          v-mask="'###.###.###-##'"
          maxlength="14"
          disabled
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
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { required, cpf, email } from "../../../utils/validators";
import AppRouter from "../../../routes";
import { TAppState } from "../../../store";
import { Api } from "../../../api";
import errorHandler from "../../../utils/errorHandler";

const store = useStore<TAppState>();

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
const isFetching = ref(false);

const handleBack = () => AppRouter.go(-1);
const handleSubmit = async () => {
  const { name, email } = formData;
  const currentId = store.state.student.studentToEdit._id;
  if (formData.isValid) {
    try {
      isFetching.value = true;
      await Api.patch(`/student/${currentId}`, {
        name,
        email,
      });
      await store.dispatch("alert", {
        type: "success",
        content: "Dados cadstrais editados com sucesso!",
      });
    } catch (error) {
      await errorHandler(error);
    } finally {
      isFetching.value = false;
      await AppRouter.push({ path: "/dashboard/student" });
    }
  }
};

onMounted(() => {
  const { ra, name, email, cpf } = store.state.student.studentToEdit;
  formData.ra = ra;
  formData.name = name;
  formData.email = email;
  formData.cpf = cpf;
});
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
