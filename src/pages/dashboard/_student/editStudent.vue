<template>
  <v-container tag="center">
    <v-card class="form-wrapper" :loading="isFetching">
      <v-card-title> Editar cadastro de estudante </v-card-title>
      <v-form v-model="editFormData.isValid" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="editFormData.name"
          label="Nome"
          placeholder="Informe o nome completo"
          type="text"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="editFormData.email"
          label="Email"
          placeholder="Informe apenas um email"
          type="email"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="editFormData.ra"
          label="RA"
          placeholder="Informe o registro acadêmico"
          type="text"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          v-model="editFormData.cpf"
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
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { required } from "../../../utils/validators";
import AppRouter from "../../../routes";
import { TAppState } from "../../../store";

const store = useStore<TAppState>();

type TEditFormData = {
  isValid: boolean;
  ra: string;
  name: string;
  email: string;
  cpf: string;
};

const editFormData = reactive<TEditFormData>({
  isValid: false,
  ra: "",
  name: "",
  email: "",
  cpf: "",
});

const isFetching = ref(false);

onMounted(() => {
  const { ra, name, email, cpf } = store.state.student.studentToEdit;
  editFormData.ra = ra;
  editFormData.name = name;
  editFormData.email = email;
  editFormData.cpf = cpf;
});

const handleBack = () => AppRouter.go(-1);
const handleSubmit = () => {
  if (editFormData.isValid) {
    isFetching.value = true;
    console.log(editFormData);
    setTimeout(() => (isFetching.value = false), 3000);
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
