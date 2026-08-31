const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// 1. Tentukan alamat domain utama website Anda
const BASE_URL = 'https://domainanda.com';

// 2. Daftar seluruh route/halaman aktif di aplikasi React Anda
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Tambahkan halaman React Anda yang lain di sini
];

async function generate() {
  const stream = new SitemapStream({ hostname: BASE_URL });
  
  // Masukkan sitemap ke dalam folder public agar terbaca Vercel
  const writeStream = fs.createWriteStream(
    path.join(__dirname, 'public', 'sitemap.xml')
  );

  stream.pipe(writeStream);
  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream);
  console.log('✅ sitemap.xml berhasil dibuat di folder public!');
}

generate().catch(console.error);
