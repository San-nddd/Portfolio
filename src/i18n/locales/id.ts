import type { Locale } from '../types'

export const id: Locale = {
  nav: [
    { id: 'work', label: 'Karya' },
    { id: 'capabilities', label: 'Kemampuan' },
    { id: 'about', label: 'Tentang' },
    { id: 'passion', label: 'Hobi' },
    { id: 'contact', label: 'Kontak' },
  ],
  ui: {
    resume: 'Resume',
    featured: 'Unggulan',
    toggleTheme: 'Ganti tema',
    toggleMenu: 'Buka menu navigasi',
    toggleLang: 'Ganti bahasa',
  },
  preloader: 'AHSAN MAHMUD FAUZI YUSRY',
  hero: {
    headline: [
      ['Halo,', 'saya', 'Ahsan'],
      ['Full', 'Stack', 'Developer', 'fokus', 'pada', 'React', 'dan', 'Laravel'],
    ],
    portraitAlt: 'Potret Ahsan',
    projects: 'Proyek',
    years: 'Tahun',
  },
  work: {
    kicker: 'Karya Pilihan',
    title: 'Yang Sudah Saya Buat',
    desc: 'Pameran hidup nan cembung — geser atau gulir dan berputar tanpa henti. Kartu di tengah menghadap Anda; tepi menjauh seperti silinder.',
    hint: '← Geser untuk menjelajah →',
    aria: 'Korsel karya pilihan',
  },
  capabilities: {
    kicker: 'Peralatan Saya',
    title: 'Kemampuan',
    desc: 'Teknologi yang saya pakai setiap hari untuk mewujudkan ide — arahkan kursor untuk melihat lebih dekat.',
    what: 'Yang Bisa Saya Lakukan',
  },
  about: {
    kicker: 'Tentang Saya',
    title: 'Sedikit tentang siapa saya',
    traitsLabel: '— Sifat yang saya bawa dalam setiap proyek',
    dragHint: '↕ Coba seret badge di sekeliling',
  },
  journey: {
    kicker: 'Perjalanan Saya',
    title: 'Pendidikan',
    titleHighlight: 'linimasa',
    desc: 'Dari bangku sekolah dasar hingga target kuliah — setiap langkah kecil membentuk cara saya berpikir dan berkarya.',
    statusLabels: {
      completed: 'Lulus',
      current: 'Sedang Berjalan',
      plan: 'Rencana',
    },
  },
  passion: {
    kicker: 'Di luar kode',
    title: 'Hobi & Kegemaran',
    desc: 'Saat tidak sedang menulis kode, saya berburu cahaya dan hal-hal yang membuat saya penasaran — geser atau gulir untuk melanjutkan.',
    hint: '← Geser lensa kamera →',
    aria: 'Korsel hobi dan kegemaran',
    photo: 'Fotografi',
    hobby: 'Kegemaran',
  },
  contact: {
    kicker: 'Punya proyek dalam pikiran?',
    line1: 'MARI BEKERJA',
    line2: 'BERSAMA',
    desc: 'Terbuka untuk proyek lepas, kolaborasi, dan kesempatan penuh waktu. Hubungi lewat kanal mana pun di bawah.',
  },
  footer: {
    built: 'Dibangun dengan React, Tailwind & Framer Motion.',
    backToTop: 'Kembali ke atas ↑',
  },
  coffee: 'Sawer aku',
  content: {
    role: 'Full Stack Web App Developer',
    bio: "Saya seorang full-stack web developer yang hidup di persimpangan presisi teknik dan bercerita visual. Saya percaya perangkat lunak hebat terasa tak terhindarkan — setiap transisi, setiap micro-interaksi, setiap piksel ditempatkan dengan niat. Selama bertahun-tahun saya telah membantu startup dan studio menghadirkan produk yang benar-benar disukai orang.",
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Figma', icon: 'figma' },
      { name: 'OpenCode', icon: 'opencode' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'REST API', icon: 'api' },
    ],
    services: [
      {
        num: '01',
        title: 'Rekayasa Produk',
        description:
          'Aplikasi web ujung-ke-ujung yang dibangun dengan kinerja, aksesibilitas, dan keberlanjutan sebagai prioritas utama.',
        skills: ['React', 'Manajemen State', 'Testing & CI/CD'],
      },
      {
        num: '02',
        title: 'Desain UI / Visual',
        description:
          'Antarmuka berkelas editorial dengan tipografi kuat, token desain yang kohesif, dan detail halus.',
        skills: ['Design System', 'Tipografi', 'Prototyping', 'Branding'],
      },
    ],
    traits: [
      { label: 'Pemecah Masalah' },
      { label: 'Detail' },
      { label: 'Terorganisir' },
      { label: 'Berorientasi Produk' },
      { label: 'Kolaboratif' },
      { label: 'Penasaran' },
      { label: 'Tangguh' },
      { label: 'Kreatif' },
    ],
    projects: [
      {
        id: 1,
        title: 'Numogo Math Game',
        category: 'Game Mobile',
        description:
          'Game matematika sederhana namun adiktif yang membantu anak-anak berlatih aritmetika sambil bermain.',
        techStack: ['Flutter', 'Supabase', 'Rest API'],
      },
      {
        id: 2,
        title: 'Nebula E-commerce Platform',
        category: 'Perdagangan',
        description:
          'Storefront headless dengan penemuan produk super cepat dan checkout yang dioptimalkan untuk konversi.',
        techStack: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
      },
      {
        id: 3,
        title: 'Orbit Design System',
        category: 'Design System',
        description:
          'Pustaka komponen berbasis token yang digunakan 9 tim produk dengan 40+ komponen yang mudah diakses.',
        techStack: ['React', 'Storybook', 'Radix UI', 'Figma'],
      },
      {
        id: 4,
        title: 'Pulse Real-time Chat',
        category: 'SaaS',
        description:
          'Chat ruang kerja kolaboratif dengan UI optimistis, indikator kehadiran, dan animasi pesan yang mulus.',
        techStack: ['React', 'Node.js', 'WebSockets', 'Redis'],
      },
      {
        id: 5,
        title: 'Lumen Brand Website',
        category: 'Pemasaran',
        description:
          'Situs pemasaran ternominasi penghargaan dengan penceritaan berbasis gulir dan tipografi editorial.',
        techStack: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
      },
      {
        id: 6,
        title: 'Terra Mobile App',
        category: 'Mobile',
        description:
          'Aplikasi lintas platform untuk hidup berkelanjutan dengan micro-interaksi menyenangkan dan sinkronisasi offline-first.',
        techStack: ['React Native', 'TypeScript', 'Reanimated', 'Supabase'],
      },
    ],
    education: [
      {
        id: 1,
        period: '2015 — 2021',
        school: 'SDN Kamal',
        location: 'Kamal',
        description:
          'Sekolah Dasar — tempat awal saya menumbuhkan rasa ingin tahu dan fondasi belajar.',
      },
      {
        id: 2,
        period: '2021 — 2024',
        school: 'MTSS Darul Hikmah Sukawangi',
        location: 'Sukawangi',
        description:
          'Madrasah Tsanawiyah — memperdalam ilmu agama sekaligus pengetahuan umum.',
      },
      {
        id: 3,
        period: '2024 — Sekarang',
        school: 'SMK Negeri 1 Sumedang',
        location: 'Sumedang',
        description:
          'Jurusan Rekayasa Perangkat Lunak (RPL) — mendalami pemrograman, web development, dan pengembangan perangkat lunak.',
      },
      {
        id: 4,
        period: '2027 — 2030',
        school: 'Universitas Padjadjaran (UNPAD)',
        location: 'Jatinangor',
        description:
          'Target berikutnya — melanjutkan studi di perguruan tinggi untuk mengasah keterampilan dan membangun karier.',
      },
    ],
    passions: [
      {
        id: 1,
        category: 'Photography',
        title: 'Kota Setelah Hujan',
        description: 'Fotografi jalanan — pantulan, neon, dan sudut tenang kota.',
      },
      {
        id: 2,
        category: 'Photography',
        title: 'Bingkai Golden Hour',
        description: 'Mengejar cahaya hangat melalui lanskap dan jalan-jalan panjang.',
      },
      {
        id: 3,
        category: 'Photography',
        title: 'Detail Kecil',
        description: 'Close-up makro tekstur kecil yang jarang diperhatikan orang.',
      },
      {
        id: 4,
        category: 'Hobbies',
        title: 'Ritual Kopi Akhir Pekan',
        description: 'Pagi pour-over dan kegembiraan pelan memutar racikan baru.',
      },
      {
        id: 5,
        category: 'Hobbies',
        title: 'Di Lapangan',
        description: 'Bulu tangkis bersama teman — langkah cepat, tawa lebih cepat.',
      },
      {
        id: 6,
        category: 'Hobbies',
        title: 'Rak Vinyl',
        description: 'Memburu piringan hitam dan menghabiskan sore dengan musik.',
      },
    ],
  },
}
