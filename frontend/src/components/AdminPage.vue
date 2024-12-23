<template>
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
  
      <nav>
        <router-link to="/admin" class="nav-link">Data Barang</router-link>
        <router-link to="/admin/all-operator" class="nav-link">Data Petugas</router-link>
        <router-link to="/admin/summary" class="nav-link">Data Peminjaman</router-link>
      </nav>
  
      <div class="overview">
        <div class="card">
          <h2>Data Barang</h2>
          <p>Jumlah barang saat ini</p>
          <h3>{{ barang.length }}</h3>
          <router-link to="/admin" class="card-link">Lihat Barang</router-link>
        </div>
        <div class="card">
          <h2>Data Petugas</h2>
          <p>Jumlah petugas saat ini</p>
          <h3>{{ petugas.length }}</h3>
          <router-link to="/admin/all-operator" class="card-link">Lihat Petugas</router-link>
        </div>
        <div class="card">
          <h2>Data Peminjaman</h2>
          <p>Data barang yang dipinjam</p>
          <h3>{{ peminjaman.length }}</h3>
          <router-link to="/admin/summary" class="card-link">Lihat Peminjaman</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { nama: 'Proyektor', jumlah: 10, kondisi: 'Baik' },
          { nama: 'Kursi', jumlah: 50, kondisi: 'Buruk' },
        ],
        petugas: [
          { nama: 'Ali', jabatan: 'Supervisor', kontak: '08123456789' },
          { nama: 'Budi', jabatan: 'Staff', kontak: '08234567890' },
        ],
        peminjaman: [
          {
            nama: 'Charlie',
            barang: 'Proyektor',
            tanggalPinjam: '2024-12-20',
            tanggalKembali: '2024-12-25',
          },
          {
            nama: 'Diana',
            barang: 'Kursi',
            tanggalPinjam: '2024-12-21',
            tanggalKembali: '2024-12-26',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  body {
    background-color: #f9f9f9;
    color: #333;
  }
  
  header {
    background-color: #6c5ce7;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  header h1 {
    font-size: 2rem;
  }
  
  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }
  
  .nav-link {
    text-decoration: none;
    color: white;
    background-color: #6c5ce7;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .nav-link:hover {
    background-color: #5a4db8;
  }
  
  .overview {
    display: flex;
    justify-content: space-around;
    margin: 20px;
    gap: 20px;
  }
  
  .card {
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    flex: 1;
    max-width: 300px;
  }
  
  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .card p {
    margin-bottom: 10px;
    color: #666;
  }
  
  .card h3 {
    font-size: 2rem;
    color: #6c5ce7;
  }
  
  .card-link {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #6c5ce7;
    font-weight: bold;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  </style>
  