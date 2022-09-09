<template>
  <v-container fluid class="student">
    <v-row class="student__search">
      <v-col cols="9">
        <v-text-field
          v-model="query"
          density="compact"
          variant="solo"
          label="Buscar"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="handleSearch"
          @keydown="
            (event) => {
              if (query.length >= 3 && event.key === 'Enter') handleSearch();
            }
          "
        />
      </v-col>
      <v-col cols="3">
        <router-link to="/dashboard/student/new">
          <v-btn height="100%" width="100%" color="var(--color-primary)">
            Cadastrar Aluno
          </v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-card class="student__list" :loading="isFetching">
      <v-table>
        <thead>
          <tr>
            <th class="text-center">Registro Acadêmico</th>
            <th class="text-center">Nome</th>
            <th class="text-center">CPF</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in store.state.student.list" :key="student.ra">
            <td class="text-center">{{ student.ra }}</td>
            <td class="text-center">{{ student.name }}</td>
            <td class="text-center">{{ student.cpf }}</td>
            <td class="text-center">
              <v-row justify="center" class="action-buttons">
                <v-btn
                  density="compact"
                  width="30px"
                  color="var(--color-secondary-opacity)"
                  :disabled="isFetching"
                  @click="handleEdit(student)"
                >
                  <v-icon icon="mdi-pencil"></v-icon>
                </v-btn>
                <v-btn
                  density="compact"
                  width="30px"
                  color="var(--color-primary-opacity)"
                  :disabled="isFetching"
                  @click="
                    () => {
                      selectedStudentForDelete = student;
                      showConfirmDeleteStudent = true;
                    }
                  "
                >
                  <v-icon icon="mdi-delete"></v-icon>
                </v-btn>
              </v-row>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <v-dialog v-model="showConfirmDeleteStudent" class="dialog__delete-student">
      <v-card>
        <v-card-text>
          Deseja realmente deletar o estudante
          {{ selectedStudentForDelete.name }}?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="gray darken-1"
            text
            @click="showConfirmDeleteStudent = false"
          >
            Fechar
          </v-btn>
          <v-btn color="red darken-1" text @click="handleDelete">
            Deletar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { TAppState } from "../../../store";
import { TStudent } from "../../../store/student";
import AppRouter from "../../../routes";

const store = useStore<TAppState>();

const query = ref("");
const isFetching = ref(false);
const showConfirmDeleteStudent = ref(false);
const selectedStudentForDelete = ref<TStudent>();

onMounted(() => {
  store.dispatch("setStudents", [
    { ra: 123, name: "teste", email: "teste@gmailcom", cpf: "12345678912" },
  ]);
});

const handleSearch = () => {
  isFetching.value = true;
  console.log(query.value);
  setTimeout(() => (isFetching.value = false), 2000);
};
const handleEdit = (student: TStudent) => {
  store.dispatch("setStudentToEdit", student);
  AppRouter.push("/dashboard/student/edit");
};
const handleDelete = () => {
  isFetching.value = true;
  console.log(selectedStudentForDelete.value);
  showConfirmDeleteStudent.value = false;
  setTimeout(() => {
    store.dispatch("alert", {
      type: "success",
      content: "Studante deletado com sucesso!",
    });
    isFetching.value = false;
  }, 3000);
};
</script>

<style scoped lang="scss">
.student {
  &__search {
    button {
      color: white;
    }
  }

  &__list {
    margin-top: 40px;

    .v-table {
      border-radius: 4px !important;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .action-buttons {
      gap: 10px;
    }
  }
}

:deep(.v-field__input) {
  padding: 8px 15px !important;
}

:deep(.v-field__append-inner) {
  padding-top: 10px;
}
</style>
