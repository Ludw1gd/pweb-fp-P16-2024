<template>
    <div>
      <h1>Data Petugas</h1>
      <form @submit.prevent="addOperator">
        <input v-model="newOperator.username" placeholder="Nama Petugas" required />
        <input v-model="newOperator.password" placeholder="Password" required type="password" />
        <button type="submit">Tambah Petugas</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="operator in operators" :key="operator.id">
            <td>{{ operator.username }}</td>
            <td>
              <button @click="editOperator(operator.id)">Edit</button>
              <button @click="deleteOperator(operator.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<!-- <script>
export default {
  data() {
    return {
      operators: [],
      newOperator: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    addOperator() {
      // Logic to add operator
    },
    editOperator(id) {
      // Logic to edit operator
    },
    deleteOperator(id) {
      // Logic to delete operator
    },
  },
};
</script> -->