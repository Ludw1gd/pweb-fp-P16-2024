<template>
  <div>
    <div class="container">
      <div class="header">
        <h1 style="font-size:2rem;"><strong>Data Petugas</strong></h1>
      </div>
      <!-- Form untuk menambah operator -->
      <form @submit.prevent="addOperator">
        <input v-model="newOperator.username" placeholder="Nama Petugas" required />
        <input v-model="newOperator.password" placeholder="Password" required type="password" />
        <button type="submit">{{ isEditing ? "Update Petugas" : "Tambah Petugas" }}</button>
      </form>
    
      <!-- Tabel untuk menampilkan daftar petugas -->
      <table>
        <thead>
          <tr>
            <th>No</th>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [
        // { id: 1, username: "Operator 1", password: "password123" },
        // { id: 2, username: "Operator 2", password: "password456" },
      ],
      newOperator: {
        username: '',
        password: '',
      },
      isEditing: false, // Menandakan apakah sedang dalam mode edit
      currentOperatorId: null, // Menyimpan ID operator yang sedang diedit
    };
  },
  methods: {
    // Menambahkan atau memperbarui operator
    addOperator() {
      if (this.isEditing) {
        // Update operator yang sudah ada
        const operatorIndex = this.operators.findIndex(
          (operator) => operator.id === this.currentOperatorId
        );
        if (operatorIndex !== -1) {
          this.operators[operatorIndex] = { ...this.newOperator, id: this.currentOperatorId };
        }
        this.isEditing = false;
        this.currentOperatorId = null;
      } else {
        // Tambahkan operator baru
        const newId = this.operators.length ? this.operators[this.operators.length - 1].id + 1 : 1;
        this.operators.push({ ...this.newOperator, id: newId });
      }
      this.resetForm(); // Reset form setelah simpan
    },
    
    // Mengedit data operator
    editOperator(id) {
      const operator = this.operators.find((operator) => operator.id === id);
      if (operator) {
        this.newOperator = { username: operator.username, password: operator.password };
        this.isEditing = true;
        this.currentOperatorId = id;
      }
    },
    
    // Menghapus operator berdasarkan ID
    deleteOperator(id) {
      const index = this.operators.findIndex((operator) => operator.id === id);
      if (index !== -1) {
        this.operators.splice(index, 1);
      }
    },
    
    // Reset form input setelah submit
    resetForm() {
      this.newOperator = { username: '', password: '' };
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
th:nth-child(1), td:nth-child(1) {
width: 60px; 
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
tr:hover {
  background-color: #f1f1f1;
}

form input {
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
button[type="button"] {
  background-color: #f44336;
  color: white;
}
button[type="button"]:hover {
  background-color: #d32f2f;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.container {
  margin: 20px; /* Menambahkan margin keseluruhan */
}
</style>
