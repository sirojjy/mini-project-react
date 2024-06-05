Mini Project Frontend - User Web
Deskripsi Proyek
Ini adalah aplikasi web sederhana yang dibangun menggunakan React.js. Aplikasi ini memungkinkan pengguna untuk melakukan pendaftaran (register), login, melihat daftar pengguna, dan melihat detail pengguna. Aplikasi ini memanfaatkan API dari Reqres dan dirancang dengan antarmuka yang menarik menggunakan Tailwind CSS.

Fitur Utama
Pendaftaran Pengguna (Register):

Pengguna dapat mendaftar dengan mengisi email dan kata sandi.
Login Pengguna:

Pengguna dapat login dengan email dan kata sandi yang terdaftar.
Setelah login berhasil, pengguna akan diarahkan ke halaman home.
Daftar Pengguna:

Pengguna dapat melihat daftar semua pengguna yang terdaftar di aplikasi.
Setiap entri daftar pengguna menampilkan nama, email, dan foto pengguna.
Detail Pengguna:

Pengguna dapat melihat detail informasi setiap pengguna.
Pagination:

Pengguna dapat menavigasi melalui daftar pengguna dengan pagination.
Protected Routes:

Halaman home hanya bisa diakses jika pengguna sudah login.
Responsif:

Aplikasi ini dirancang agar responsif dan dapat diakses dengan baik di berbagai ukuran layar.
Daftar Library yang Digunakan
react: Library utama untuk membangun antarmuka pengguna.
react-dom: Library untuk rendering komponen React di DOM.
react-router-dom: Library untuk routing di aplikasi React.
axios: Library untuk melakukan HTTP request.
tailwindcss: Framework CSS untuk mendesain antarmuka pengguna yang responsif dan menarik.
Struktur Direktori
css
Copy code
src/
├── components/
│   └── UserList.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
├── utils/
│   └── api.js
├── App.jsx
├── index.css
└── main.jsx
Cara Menjalankan Aplikasi
Prasyarat
Node.js dan npm sudah terinstall di sistem Anda.
Langkah-Langkah
Clone Repositori

bash
Copy code
git clone <URL_REPOSITORI_ANDA>
cd mini-project-react
Install Dependency

bash
Copy code
npm install
Jalankan Aplikasi

bash
Copy code
npm run dev
Buka Aplikasi di Browser
Buka browser dan navigasi ke http://localhost:5173.

Panduan Penggunaan
Pendaftaran
Buka aplikasi di browser.
Klik tombol "Registrasi" di halaman login.
Isi email dan kata sandi, lalu klik tombol "Register".
Login
Buka aplikasi di browser.
Isi email dan kata sandi yang sudah terdaftar.
Klik tombol "Login".
Jika login berhasil, Anda akan diarahkan ke halaman home.
Melihat Daftar Pengguna
Setelah login, Anda akan berada di halaman home.
Daftar pengguna akan ditampilkan di halaman home.
Gunakan tombol "Previous" dan "Next" untuk navigasi halaman pengguna.
