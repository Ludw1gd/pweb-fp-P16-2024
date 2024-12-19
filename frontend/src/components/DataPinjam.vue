<template>
    <div>
      <h1>Data Peminjaman</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah Pinjam</th>
            <th>Tgl. Pinjam</th>
            <th>Tgl. Kembali</th>
            <th>Peminjam</th>
            <th>Petugas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(borrow, index) in borrowItems" :key="borrow.id">
            <td>{{ index + 1 }}</td>
            <td>{{ borrow.item_name }}</td>
            <td>{{ borrow.amount }}</td>
            <td>{{ borrow.borrow_date }}</td>
            <td>{{ borrow.return_date }}</td>
            <td>{{ borrow.borrower_name }}</td>
            <td>{{ borrow.officer_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<!-- <script>
export default {
  data() {
    return {
      borrowItems: [],
    };
  },
};
</script> -->