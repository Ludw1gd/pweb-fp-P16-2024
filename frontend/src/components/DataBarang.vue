<template>
    <div>
      <h1>Data Barang</h1>
      <form @submit.prevent="addItem">
        <input v-model="newItem.name" placeholder="Nama Barang" required />
        <input v-model="newItem.amount" type="number" placeholder="Jumlah" required />
        <input v-model="newItem.condition" placeholder="Kondisi" required />
        <input v-model="newItem.created_at" type="date" required />
        <button type="submit">Tambah Barang</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jumlah</th>
            <th>Kondisi</th>
            <th>Tanggal Registrasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.condition }}</td>
            <td>{{ item.created_at }}</td>
            <td>
              <button @click="editItem(item.id)">Edit</button>
              <button @click="deleteItem(item.id)">Delete</button>
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
      items: [],
      newItem: {
        name: '',
        amount: '',
        condition: '',
        created_at: '',
      },
    };
  },
  methods: {
    addItem() {
      // Logic to add item
    },
    editItem(id) {
      // Logic to edit item
    },
    deleteItem(id) {
      // Logic to delete item
    },
  },
};
</script> -->