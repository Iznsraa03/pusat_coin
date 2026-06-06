# Panduan Deploy Next.js ke VPS (Tanpa Docker)

Panduan ini menjelaskan langkah demi langkah untuk mendeploy aplikasi Next.js (versi 16+ dengan React 19) ke Virtual Private Server (VPS) bersistem operasi **Ubuntu (20.04 / 22.04 / 24.04 LTS)** secara manual tanpa menggunakan Docker.

Kita akan menggunakan:
- **Node.js** (melalui NVM)
- **PM2** (Process Manager untuk menjaga aplikasi tetap berjalan di background)
- **Nginx** (sebagai Reverse Proxy)
- **Certbot / Let's Encrypt** (untuk SSL/HTTPS gratis)

---

## Daftar Isi
1. [Prasyarat](#1-prasyarat)
2. [Persiapan Awal VPS](#2-persiapan-awal-vps)
3. [Instalasi Node.js (via NVM)](#3-instalasi-nodejs-via-nvm)
4. [Clone Project & Setup Environment](#4-clone-project--setup-environment)
5. [Build & Konfigurasi PM2](#5-build--konfigurasi-pm2)
6. [Konfigurasi Nginx Web Server](#6-konfigurasi-nginx-web-server)
7. [Instalasi SSL HTTPS (Certbot)](#7-instalasi-ssl-https-certbot)
8. [Keamanan & Firewall (UFW)](#8-keamanan--firewall-ufw)
9. [Script Otomatisasi Deployment (CI/CD Sederhana)](#9-script-otomatisasi-deployment-cicd-sederhana)

---

## 1. Prasyarat
Sebelum memulai, pastikan Anda telah memiliki:
1. **Akses SSH** ke VPS Ubuntu (dengan user `root` atau user dengan hak akses `sudo`).
2. **Domain** yang sudah diarahkan (DNS A Record) ke IP Publik VPS Anda:
   - `pusatcoin.id` -> `IP_VPS_ANDA`
   - `www.pusatcoin.id` -> `IP_VPS_ANDA`

---

## 2. Persiapan Awal VPS
Hubungkan ke VPS Anda melalui terminal:
```bash
ssh user@IP_VPS_ANDA
```
*Ganti `user` dengan `root` atau username VPS Anda.*

Setelah masuk, lakukan update list package system:
```bash
sudo apt update && sudo apt upgrade -y
```

Install Git dan package pendukung lainnya:
```bash
sudo apt install git curl build-essential -y
```

---

## 3. Instalasi Node.js (via NVM)
Next.js 16 membutuhkan Node.js versi terbaru (direkomendasikan v18.17.0+ atau v20.x ke atas). Menggunakan NVM (Node Version Manager) mempermudah pengelolaan versi Node.js.

1. **Install NVM:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. **Muat ulang konfigurasi terminal:**
   ```bash
   source ~/.bashrc
   ```
   *(Atau `source ~/.zshrc` jika Anda menggunakan zsh).*

3. **Install Node.js LTS (Versi 20):**
   ```bash
   nvm install 20
   nvm use 20
   nvm alias default 20
   ```

4. **Verifikasi instalasi:**
   ```bash
   node -v
   npm -v
   ```

---

## 4. Clone Project & Setup Environment

1. **Tentukan direktori deployment:**
   Kita akan meletakkan project di `/var/www/pusatcoin`.
   ```bash
   sudo mkdir -p /var/www/pusatcoin
   sudo chown -R $USER:$USER /var/www/pusatcoin
   ```

2. **Clone repositori dari GitHub/GitLab:**
   ```bash
   git clone https://github.com/USERNAME/REPO_NAME.git /var/www/pusatcoin
   ```
   *Sesuaikan URL repositori dengan milik Anda. Jika repositori private, Anda bisa menggunakan SSH Key VPS yang didaftarkan di GitHub, atau Personal Access Token.*

3. **Masuk ke folder project dan install dependencies:**
   ```bash
   cd /var/www/pusatcoin
   npm install --legacy-peer-deps
   ```
   *(Gunakan `--legacy-peer-deps` jika ada masalah konflik versi peer dependencies pada React 19).*

4. **Setup Environment Variables:**
   Buat file `.env.local` untuk menyimpan variabel environment sensitif (seperti API Key):
   ```bash
   nano .env.local
   ```
   Tambahkan konfigurasi yang dibutuhkan, contoh:
   ```env
   PORT=3000
   NEXT_PUBLIC_SITE_URL=https://pusatcoin.id
   # Tambahkan key lainnya di sini jika ada
   ```
   Tekan `CTRL + O`, lalu `Enter` untuk menyimpan. Tekan `CTRL + X` untuk keluar dari Nano.

---

## 5. Build & Konfigurasi PM2

1. **Build project Next.js:**
   ```bash
   npm run build
   ```
   Pastikan proses build selesai tanpa error.

2. **Instalasi PM2 secara global:**
   PM2 berfungsi menjaga aplikasi Next.js Anda tetap berjalan di background dan otomatis me-restart aplikasi jika terjadi crash atau server reboot.
   ```bash
   npm install -g pm2
   ```

3. **Jalankan Next.js dengan PM2:**
   Jalankan server produksi Next.js di port default (3000):
   ```bash
   pm2 start npm --name "pusatcoin" -- run start
   ```

4. **Konfigurasi Autostart PM2 saat VPS Reboot:**
   Agar PM2 otomatis berjalan kembali ketika server VPS di-restart:
   ```bash
   pm2 startup
   ```
   Terminal akan menampilkan sebuah perintah yang harus Anda salin dan jalankan (biasanya diawali dengan `sudo env PATH=...`). Jalankan perintah tersebut.

   Setelah itu, simpan daftar proses aktif PM2 saat ini:
   ```bash
   pm2 save
   ```

5. **Perintah PM2 yang berguna:**
   - Melihat daftar aplikasi: `pm2 list`
   - Melihat log aplikasi secara realtime: `pm2 logs pusatcoin`
   - Restart aplikasi: `pm2 restart pusatcoin`
   - Stop aplikasi: `pm2 stop pusatcoin`

---

## 6. Konfigurasi Nginx Web Server
Nginx akan bertindak sebagai Reverse Proxy yang menerima request dari port HTTP (80) / HTTPS (443) luar, lalu meneruskannya ke Next.js yang berjalan di port local (3000).

1. **Install Nginx:**
   ```bash
   sudo apt install nginx -y
   ```

2. **Buat file konfigurasi Server Block Nginx untuk Pusat Coin:**
   ```bash
   sudo nano /etc/nginx/sites-available/pusatcoin
   ```

3. **Masukkan konfigurasi berikut:**
   ```nginx
   server {
       listen 80;
       server_name pusatcoin.id www.pusatcoin.id;

       # Log lokasi (opsional)
       access_log /var/log/nginx/pusatcoin.access.log;
       error_log /var/log/nginx/pusatcoin.error.log;

       # Mengompresi aset untuk meningkatkan kecepatan loading (Gzip)
       gzip on;
       gzip_proxied any;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
       gzip_vary on;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

4. **Aktifkan Server Block tersebut dengan membuat Symlink:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/pusatcoin /etc/nginx/sites-enabled/
   ```

5. **Hapus konfigurasi default Nginx agar tidak bentrok:**
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   ```

6. **Uji konfigurasi Nginx:**
   ```bash
   sudo nginx -t
   ```
   Pastikan hasilnya `syntax is ok` dan `test is successful`.

7. **Reload Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 7. Instalasi SSL HTTPS (Certbot)
Untuk mengamankan transaksi top up dan meningkatkan kredibilitas SEO di mata Google, website wajib menggunakan HTTPS (SSL). Kita akan menggunakan SSL gratis dari Let's Encrypt dengan Certbot.

1. **Install Certbot & plugin Nginx:**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Dapatkan sertifikat SSL:**
   Jalankan perintah ini untuk otomatis mengonfigurasi SSL pada Nginx untuk domain `pusatcoin.id` dan `www.pusatcoin.id`:
   ```bash
   sudo certbot --nginx -d pusatcoin.id -d www.pusatcoin.id
   ```
   - Anda akan diminta memasukkan alamat email untuk notifikasi perpanjangan.
   - Setujui Terms of Service.
   - Certbot akan otomatis memverifikasi domain Anda dan mengubah konfigurasi Nginx untuk me-redirect semua traffic HTTP ke HTTPS secara otomatis.

3. **Verifikasi Auto-Renewal SSL:**
   Sertifikat Let's Encrypt berlaku selama 90 hari. Certbot otomatis membuat cronjob untuk memperbaruinya. Anda bisa menguji proses perpanjangan otomatis dengan:
   ```bash
   sudo certbot renew --dry-run
   ```
   Jika tidak ada error, maka SSL akan diperbarui otomatis secara berkala di background.

---

## 8. Keamanan & Firewall (UFW)
Demi keamanan VPS, aktifkan firewall UFW dan izinkan hanya port yang diperlukan:

1. **Izinkan SSH (Port 22 - PENTING agar koneksi tidak terputus):**
   ```bash
   sudo ufw allow OpenSSH
   ```

2. **Izinkan HTTP dan HTTPS via Nginx:**
   ```bash
   sudo ufw allow 'Nginx Full'
   ```

3. **Aktifkan UFW:**
   ```bash
   sudo ufw enable
   ```
   Tekan `y` ketika ada konfirmasi.

4. **Cek status firewall:**
   ```bash
   sudo ufw status
   ```

---

## 9. Script Otomatisasi Deployment (CI/CD Sederhana)
Untuk mempermudah update website tanpa mengetikkan ulang semua perintah di atas, kita bisa membuat script bash deployment sederhana di server.

1. **Buat file `deploy.sh` di folder project `/var/www/pusatcoin`:**
   ```bash
   nano /var/www/pusatcoin/deploy.sh
   ```

2. **Tempelkan script berikut:**
   ```bash
   #!/bin/bash
   echo "=== MEMULAI PROSES DEPLOYMENT ==="

   # Pindah ke direktori project
   cd /var/www/pusatcoin || exit

   # Tarik perubahan terbaru dari Git
   echo "1. Menarik perubahan terbaru dari Git..."
   git pull origin main

   # Load Node.js environment via NVM
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   nvm use 20

   # Install dependencies
   echo "2. Menginstall dependencies..."
   npm install --legacy-peer-deps

   # Build aplikasi
   echo "3. Melakukan build project Next.js..."
   npm run build

   # Restart proses di PM2
   echo "4. Merestart aplikasi di PM2..."
   pm2 restart pusatcoin

   echo "=== DEPLOYMENT SELESAI DENGAN SUKSES ==="
   ```

3. **Beri izin eksekusi pada script:**
   ```bash
   chmod +x /var/www/pusatcoin/deploy.sh
   ```

4. **Cara menggunakan:**
   Setiap kali Anda selesai melakukan push perubahan ke repositori GitHub, Anda cukup masuk ke VPS via SSH dan menjalankan:
   ```bash
   /var/www/pusatcoin/deploy.sh
   ```
   Proses update web akan berjalan otomatis dalam beberapa detik!
