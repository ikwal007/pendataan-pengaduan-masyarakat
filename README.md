# Dokumentasi Aplikasi Pendataan Pengaduan Masyarakat

## Deskripsi

Aplikasi Pendataan Pengaduan Masyarakat adalah sebuah platform yang memungkinkan pengguna untuk mengajukan pengaduan atau laporan mengenai masalah atau peristiwa tertentu. Aplikasi ini dibangun menggunakan Laravel sebagai backend untuk mengelola data dan logika bisnis, serta React dengan Inertia.js sebagai frontend untuk memberikan antarmuka pengguna yang responsif dan dinamis.

## Instalasi

### Persyaratan

- PHP (versi 7.4 atau lebih baru)
- Composer
- Node.js (versi 14 atau lebih baru)
- NPM (Node Package Manager)
- MySQL atau database lainnya

### Langkah-langkah Instalasi

1. **Clone Repositori**:
   Clone repositori aplikasi dari GitHub ke direktori lokal Anda:
   git clone https://github.com/ikwal007/pendataan-pengaduan-masyarakat.git

2. **Instal Dependencies**:
   Pindah ke direktori aplikasi dan instal dependency PHP menggunakan Composer:
   cd pendataan-pengaduan-masyarakat
   composer install

3. **Konfigurasi Lingkungan**:
   Salin berkas `.env.example` menjadi `.env` dan atur konfigurasi database serta konfigurasi lain yang diperlukan:
   cp .env.example .env
   Lalu, buat kunci aplikasi:
   php artisan key:generate

4. **Migrasi dan Penyiapan Database**:
   Jalankan migrasi untuk membuat tabel-tabel yang diperlukan di database:
   php artisan migrate --seed

5. **Instal Dependencies Frontend**:
   Instal dependency frontend menggunakan NPM:
   npm install

6. **Jalankan Aplikasi**:
   Jalankan server PHP lokal:
   php artisan serve
   Lalu, jalankan server frontend:
   npm run dev

Aplikasi dapat diakses di `http://localhost:8000`.

Setelah seeder selesai dijalankan, Anda dapat menggunakan akun berikut untuk masuk ke dalam aplikasi:

- **Email**: superadmin@adminsuper.com
- **Kata Sandi**: adminsuper


## Penggunaan

1. **Pendaftaran dan Masuk**:
   Pengguna perlu mendaftar dan masuk ke dalam aplikasi menggunakan akun yang telah didaftarkan.

2. **Lihat Pengaduan**:
   Setelah masuk, pengguna dapat melihat daftar pengaduan yang ada dengan informasi terkait.

3. **Ajukan Pengaduan**:
   Pengguna dapat mengajukan pengaduan baru dengan mengisi formulir yang disediakan, seperti judul, deskripsi, dan lampiran.

4. **Edit Pengaduan**:
   Pengguna dapat mengedit pengaduan yang telah diajukan oleh mereka.

5. **Tindak Lanjut**:
   Administrator sistem dapat melakukan tindak lanjut terhadap pengaduan, menambahkan komentar, dan mengubah status pengaduan.

6. **Notifikasi**:
   Pengguna akan menerima notifikasi melalui Whatsapp atau pemberitahuan dalam aplikasi ketika pengaduan mereka mendapat tindak lanjut.

## Kontribusi

Jika Anda ingin berkontribusi dalam pengembangan aplikasi ini, Anda dapat melakukan fork repositori, melakukan perubahan, dan membuat pull request. Pastikan untuk mengikuti panduan kontribusi yang telah ditetapkan.

## Lisensi

Aplikasi ini dilisensikan di bawah Lisensi MIT. Lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau masukan, Anda dapat menghubungi tim pengembangan melalui email di [alamat_email@example.com](muhammadikwalr@gmail.com).
